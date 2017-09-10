"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datefns = require("date-fns");
const weekdayArray = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function parseDate(dateString) {
    const dateRegExp = /(\d{4})-(\d{1,2})-(\d{1,2})/;
    const dateResult = dateRegExp.exec(dateString);
    let year, month, day;
    if (dateResult) {
        year = parseInt(dateResult[1]);
        month = parseInt(dateResult[2]);
        day = parseInt(dateResult[3]);
    }
    const weekdayRegExp = /[A-Za-z]{3}/;
    const weekdayResult = weekdayRegExp.exec(dateString);
    let weekday;
    if (weekdayResult) {
        weekday = weekdayResult[0];
    }
    return { year, month, day, weekday };
}
exports.parseDate = parseDate;
;
function isValidSimpleDate(datetime) {
    return Boolean(datetime.year) && Boolean(datetime.month) && Boolean(datetime.day);
}
exports.isValidSimpleDate = isValidSimpleDate;
function buildDateString(datetime) {
    const { year, month, day, weekday } = datetime;
    let dateString = `${year}-${month}-${day}`;
    if (weekday) {
        dateString = `${dateString} ${weekday}`;
    }
    return `[${dateString}]`;
}
exports.buildDateString = buildDateString;
;
function padVal(str) {
    return str.length === 1 ? `0${str}` : str;
}
function dateToSimpleDate(dateObject) {
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Why, Javascript, why!?
    const day = dateObject.getDate();
    const weekday = weekdayArray[dateObject.getDay()];
    return {
        year,
        month,
        day,
        weekday
    };
}
exports.dateToSimpleDate = dateToSimpleDate;
function currentDatetime() {
    const currentDate = new Date();
    return dateToSimpleDate(new Date());
}
exports.currentDatetime = currentDatetime;
function modifyDate(dateString, action) {
    const oldDate = parseDate(dateString);
    let dateObject = datefns.parse(`${oldDate.year}-${oldDate.month}-${oldDate.day}`);
    if (action === "UP") {
        dateObject = datefns.addDays(dateObject, 1);
    }
    else {
        dateObject = datefns.addDays(dateObject, -1);
    }
    const newDate = dateToSimpleDate(dateObject);
    if (!oldDate.weekday) {
        newDate.weekday = undefined;
    }
    return buildDateString(newDate);
}
exports.modifyDate = modifyDate;
//# sourceMappingURL=simple-datetime.js.map