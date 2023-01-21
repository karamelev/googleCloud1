import {google} from "../src/component/GoogleApp.js";
import {calculatorSearchRequest, calculatorSearchResult} from "../src/data/testData.js";


describe ('test', async function () {
    before(async function(){
        await google.open();
    });

    it ('test', async function () {
        await google.search(calculatorSearchRequest);
    });
    it ('Compute Engine', async function (){
        await google.searchResults.clickLinkWithText();
        // await google.calculator.selectMenuOption('');
    });

});