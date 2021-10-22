"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var parseDate = dateString.split('/').map(function (item) {
        return parseInt(item);
    });
    return new Date(parseDate[2], parseDate[1] - 1, parseDate[0]);
};
exports.dateStringToDate = dateStringToDate;
