import {MatchReader} from "./MatchReader";
import {Summary} from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();


const summary1 = Summary.winsAnalysisWithHtmlReport('Man United')
summary1.buildAndPrintReport(matchReader.matches)





