import { Locator,Page } from "@playwright/test";

export default class BasePage{

    protected readonly page:Page;
    constructor(page:Page){
        this.page=page;
    }
protected async ClickOnElement(Element:Locator){
    await Element.click();
}

protected async EnterText(Element:Locator,Text:string){
    await Element.fill(Text);
}
public async takeScreenshot(filepath: string){
    await this.page.screenshot({path:filepath});
}
}