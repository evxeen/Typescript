"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
var summary1 = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary1.buildAndPrintReport(matchReader.matches);
