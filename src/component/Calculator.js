export class Calculator {
    computeEngine = 'md-tabs-wrapper div[title="Compute Engine"]'
    async selectMenuOption(option){
        await $(this.computeEngine).click();
    };

}