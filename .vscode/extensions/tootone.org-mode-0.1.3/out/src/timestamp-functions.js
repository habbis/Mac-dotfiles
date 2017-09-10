"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils = require("./utils");
const Datetime = require("./simple-datetime");
function insertTimestamp(textEditor, edit) {
    const document = Utils.getActiveTextEditorEdit();
    const cursorPos = Utils.getCursorPosition();
    const dateObject = Datetime.currentDatetime();
    const dateString = Datetime.buildDateString(dateObject);
    edit.insert(cursorPos, dateString);
}
exports.insertTimestamp = insertTimestamp;
//# sourceMappingURL=timestamp-functions.js.map