'use strict';
const { browser, element } = require('protractor');
const { protractor } = require('protractor/built/ptor');
const EC = protractor.ExpectedConditions;
class CommonFunction {
    constructor(){

    }
    async getUrl(url){
        await browser.get(url);
        await browser.sleep(2000);
        await element(by.css(".header--wrapper")).isDisplayed();
    }

    async fillYourDetails(){
        const your_details_section = await element(by.xpath("//*[contains(text(),'Your details')]//parent::div"));
        const application_type_single = await element(by.id("application_type_single"));
        const dependants_dropdown = await element(by.xpath("//select[@title='Number of dependants']"));
        const no_of_dependants = await element(by.xpath("//option[text()='0']"));
        const property = await element(by.id("borrow_type_home"));
        if(await your_details_section.isPresent()){
            await browser.sleep(1000);
            await application_type_single.click();
            await browser.actions().mouseMove(element(by.xpath("//input[@aria-labelledby='q3q5']"))).perform();
            await dependants_dropdown.click();
            await no_of_dependants.click();
            await browser.sleep(1000);
            await property.click();

        }
        else{
            throw new Error("Your Details section is not present");
        }
    }

    async fillYourEarnings(){
        const your_earning_section = await element(by.xpath("//*[contains(text(),'Your earnings')]//parent::div"));
        const annual_income = await element(by.xpath("//input[@aria-labelledby='q2q1']"));
        const other_income = await element(by.xpath("//input[@aria-labelledby='q2q2']"));
        if(await your_earning_section.isPresent()){
            await annual_income.sendKeys("80,000");
            await other_income.sendKeys("10,000");
        }
        else{
            throw new Error("Your Earnings section is not present");
        }
    }

    async fillYourExpenses(){
        const your_expenses_section = await element(by.xpath("//*[contains(text(),'Your expenses')]//parent::div"));
        const monthly_living = await element(by.xpath("//input[@aria-labelledby='q3q1']"));
        const current_home_loan = await element(by.xpath("//input[@aria-labelledby='q3q2']"));
        const other_loan = await element(by.xpath("//input[@aria-labelledby='q3q3']"));
        const other_monthly = await element(by.xpath("//input[@aria-labelledby='q3q4']"));
        const total_credit = await element(by.xpath("//input[@aria-labelledby='q3q5']"));
        if(await your_expenses_section.isPresent()){
            await monthly_living.sendKeys("500");
            await current_home_loan.sendKeys("0");
            await other_loan.sendKeys("100");
            await other_monthly.sendKeys("0")
            await total_credit.sendKeys("10,000");
        }
        else{
            throw new Error("Your Expenses section is not present");
        }
    }
}

module.exports=CommonFunction;