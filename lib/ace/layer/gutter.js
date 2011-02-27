<<<<<<< HEAD
/* ***** BEGIN LICENSE BLOCK ***** 
=======
/* vim:ts=4:sts=4:sw=4:
 * ***** BEGIN LICENSE BLOCK *****
>>>>>>> 90fe0a4256c26de936a89cf4dd45194b1436e935
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Ajax.org Code Editor (ACE).
 *
 * The Initial Developer of the Original Code is
 * Ajax.org B.V.
 * Portions created by the Initial Developer are Copyright (C) 2010
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *      Fabian Jakobs <fabian AT ajax DOT org>
 *      Julian Viereck <julian.viereck@gmail.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

define(function(require, exports, module) {

var dom = require("pilot/dom");

var Gutter = function(parentEl) {
    this.element = dom.createElement("div");
    this.element.className = "ace_layer ace_gutter-layer";
    parentEl.appendChild(this.element);

    this.$breakpoints = [];
    this.$annotations = [];
    this.$decorations = [];
    this.$codeFoldingLines = [];
};

(function() {
<<<<<<< HEAD
    
    //{ add gutter decoration
=======

    this.setSession = function(session) {
        this.session = session;
    };

>>>>>>> 90fe0a4256c26de936a89cf4dd45194b1436e935
    this.addGutterDecoration = function(row, className){
        if (!this.$decorations[row])
            this.$decorations[row] = "";
        this.$decorations[row] += " ace_" + className;
    }
<<<<<<< HEAD
    //}
    
    this.removeGutterDecoration = function(row, className){
        this.$decorations[row] = 
            this.$decorations[row].replace(" ace_" + className, "");
    }
    
=======

    this.removeGutterDecoration = function(row, className){
        this.$decorations[row] = this.$decorations[row].replace(" ace_" + className, "");
    };

>>>>>>> 90fe0a4256c26de936a89cf4dd45194b1436e935
    this.setBreakpoints = function(rows) {
        this.$breakpoints = rows.concat();
    };
    
    this.setCodeFoldingAreas = function(areas) {
        this.$codeFoldingLines = [];
        for(var i = 0; i < areas.length; i++){
            if(typeof areas[i] != 'undefined'){
                if(areas[i].open){
                    this.$codeFoldingLines[areas[i].start] = 'ace_folding-open';
                    for(var j = areas[i].start + 1; j < areas[i].end; j++){
                          this.$codeFoldingLines[j] = 'ace_folding-vertical-line';
                    }
                    this.$codeFoldingLines[areas[i].end] = 'ace_folding-end';
                } else {
                    this.$codeFoldingLines[areas[i].start] = 'ace_folding-closed';
                    for(var j = areas[i].start + 1; j <= areas[i].end; j++){
                          this.$codeFoldingLines[j] = 'hidden';
                    }
                }
            }
        }
    };

    this.setAnnotations = function(annotations) {
        // iterate over sparse array
        this.$annotations = [];        
        for (var row in annotations) if (annotations.hasOwnProperty(row)) {
            var rowAnnotations = annotations[row];
            if (!rowAnnotations)
                continue;
                
            var rowInfo = this.$annotations[row] = {
                text: []
            };
            for (var i=0; i<rowAnnotations.length; i++) {
                var annotation = rowAnnotations[i];
                rowInfo.text.push(annotation.text.replace(/"/g, "&quot;").replace(/'/g, "&#8217;").replace(/</, "&lt;"));
                var type = annotation.type;
                if (type == "error")
                    rowInfo.className = "ace_error";
                else if (type == "warning" && rowInfo.className != "ace_error")
                    rowInfo.className = "ace_warning";
                else if (type == "info" && (!rowInfo.className))
                    rowInfo.className = "ace_info";
            }
        }
    };

    this.update = function(config) {
        this.$config = config;
        
        var hasCodeFolding = this.$codeFoldingLines.length > 0;
        var html = [];
        for ( var i = config.firstRow; i <= config.lastRow; i++) {
<<<<<<< HEAD
            if(!hasCodeFolding || typeof this.$codeFoldingLines[i] == 'undefined' || this.$codeFoldingLines[i] != 'hidden'){
                html.push("<div class='ace_gutter-cell",
                    this.$decorations[i] || "",
                    this.$breakpoints[i] ? " ace_breakpoint" : "",
                    "' style='height:", config.lineHeight, "px;'>");
                
                if(hasCodeFolding){
                    var cls = 'ace_folding-empty';
                    if(typeof this.$codeFoldingLines[i] != 'undefined')
                        cls = this.$codeFoldingLines[i];
                    html.push("<span class='ace_gutter-folding ", cls, "'>", (i+1), "</span>");
                } else
                    html.push(i+1);
                
                html.push("</div>");
                html.push("</div>");
            }
=======
            var annotation = this.$annotations[i] || {
                className: "",
                text: []
            };
            html.push("<div class='ace_gutter-cell",
                this.$decorations[i] || "",
                this.$breakpoints[i] ? " ace_breakpoint " : " ",
                annotation.className,
                "' title='", annotation.text.join("\n"),
                "' style='height:", this.session.getRowHeight(config, i), "px;'>", (i+1), "</div>");
>>>>>>> 90fe0a4256c26de936a89cf4dd45194b1436e935
        }
		this.element = dom.setInnerHtml(this.element, html.join(""));
        this.element.style.height = config.minHeight + "px";
    };

}).call(Gutter.prototype);

exports.Gutter = Gutter;

});
