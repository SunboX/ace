/**
 * Ajax.org Code Editor (ACE)
 *
 * @copyright 2010, Ajax.org Services B.V.
 * @license LGPLv3 <http://www.gnu.org/licenses/lgpl-3.0.txt>
 * @author Fabian Jakobs <fabian AT ajax DOT org>
 */
require.def("ace/conf/keybindings/default_mac", function() {

return {
    "selectall": "Meta-A",
    "removeline": "Meta-D",
    "gotoline": "Meta-L",
    "togglecomment": "Meta-7",
    "findnext": "Meta-K",
    "findprevious": "Meta-Shift-K",
    "find": "Meta-F",
    "undo": "Meta-Z",
    "redo": "Meta-Shift-Z|Meta-Y",
    "overwrite": "Insert",
    "copylinesup": "Meta-Alt-Up",
    "movelinesup": "Alt-Up",
    "selecttostart": "Meta-Shift-Up",
    "gotostart": "Meta-Home|Meta-Up",
    "selectup": "Shift-Up",
    "golineup": "Up",
    "copylinesdown": "Meta-Alt-Down",
    "movelinsedown": "Alt-Down",
    "selecttoend": "Meta-Shift-Down",
    "gotoend": "Meta-End|Meta-Down",
    "selectdown": "Shift-Down",
    "godown": "Down",
    "selectwordleft": "Alt-Shift-Left",
    "gotowordleft": "Alt-Left",
    "selecttolinestart": "Meta-Shift-Left",
    "gotolinestart": "Meta-Left|Home",
    "selectleft": "Shift-Left",
    "gotoleft": "Left",
    "selectwordright": "Alt-Shift-Right",
    "gotowordright": "Alt-Right",
    "selecttolineend": "Meta-Shift-Right",
    "gotolineend": "Meta-Right|End",
    "selectright": "Shift-Right",
    "gotoright": "Right",
    "selectpagedown": "Shift-PageDown",
    "pagedown": "PageDown",
    "selectpageup": "Shift-PageUp",
    "pageup": "PageUp",
    "selectlinestart": "Shift-Home",
    "selectlineend": "Shift-End",
    "del": "Delete",
    "backspace": "Backspace",
    "outdent": "Shift-Tab",
    "indent": "Tab"
};

});