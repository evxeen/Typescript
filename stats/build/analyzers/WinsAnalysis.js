"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === this.team && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === this.team && match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "\u041A\u043E\u043C\u0430\u043D\u0434\u0430 " + this.team + " \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0430 " + wins + " \u0440\u0430\u0437! \u00F0";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
