import{test,expect} from 'playwright/test'
test ('Frames',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    let framescount =page.frames().length;
    console.log(`the frame count is ${framescount}`);

let BttomFrame = page.frameLocator('[src="/frame_bottom"]')
.locator('//body[contains(text(),"BOTTOM")]')
        await expect(BttomFrame).toHaveText('BOTTOM')

        let topframe =page.frame('frame_top');

        let topframechailds = topframe?.childFrames();

        // let middleframe = topframechailds[1];
        // await expect(middleframe.locator('[id="content"]')).toHaveText('MIDDLE');


   
});