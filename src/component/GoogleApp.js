import {baseUrl} from "../data/testData.js";
import {Calculator} from "./Calculator.js";
import {Result} from "./Result.js";



class GoogleApp{
    searchInput = '[name="q"]';
    computeEngine = 'md-tabs-wrapper div[title="Compute Engine"]'
    calculator = new Calculator();
    searchResults = new Result();
    async open(url = baseUrl) {
        await browser.url(url);
    }
    async search(value){
        await $(this.searchInput).click();
        await $(this.searchInput).setValue(value);
        await browser.keys('Enter');
        await browser.pause(10000);//todo

    }


}
export const google = new GoogleApp();