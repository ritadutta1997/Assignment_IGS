const { Given,When,Then } = require('cucumber');
const { browser, element } = require('protractor');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
const CommonFunction = require('./common_functionalities');
let commonFunction = new CommonFunction();

Given('user launches the borrowing calculator homepage',{timeout: 60 *1000},async function(){
    browser.waitForAngularEnabled(false);
    await commonFunction.getUrl("https://www.anz.com.au/personal/home-loans/calculators-tools/much-borrow/");
});

When('user provides all the required details in {string} section',async function(desired_section){
    if(desired_section=="Your details"){
        await commonFunction.fillYourDetails();
    }
    else if(desired_section=="Your earnings"){
        await commonFunction.fillYourEarnings();
    }
    else if(desired_section=="Your expenses"){
        await commonFunction.fillYourExpenses();
    }
});

Then('user clicks the "Work out how much I could borrow" button',async function(){
    const button = await element(by.id("btnBorrowCalculater"));
    await button.click();
});

Then('user gets the estimated borrow {string}',async function(value){
    await browser.sleep(2000);
    const borrowing_estimate_element = await element(by.xpath("//h3[contains(text(),'We estimate you could borrow')]//following-sibling::span[1]"));
    if(await borrowing_estimate_element.isPresent()){
        let borrowing_estimate = await borrowing_estimate_element.getText();
        expect(borrowing_estimate).to.be.equal(value);
    }
});

Then('user clicks on "Start over"',async function(){
    const start_over_btn = await element(by.css("div.borrow__result__action button.start-over"));
    await start_over_btn.click();
});

Then('the borrowing estimation form gets clear',async function(){
    const annual_income = await element(by.xpath("//input[@aria-labelledby='q2q1']"));
    const other_income = await element(by.xpath("//input[@aria-labelledby='q2q2']"));
    const monthly_living = await element(by.xpath("//input[@aria-labelledby='q3q1']"));
    const current_home_loan = await element(by.xpath("//input[@aria-labelledby='q3q2']"));
    const other_loan = await element(by.xpath("//input[@aria-labelledby='q3q3']"));
    const other_monthly = await element(by.xpath("//input[@aria-labelledby='q3q4']"));
    const total_credit = await element(by.xpath("//input[@aria-labelledby='q3q5']"));
    const application_type_single = await element(by.id("application_type_single"));
    const home_property = await element(by.id("borrow_type_home"));
    expect(await application_type_single.getAttribute('value')).to.be.equal("S");
    expect(await home_property.getAttribute('value')).to.be.equal("H");
    expect(await annual_income.getAttribute('value')).to.be.equal("0");
    expect(await other_income.getAttribute('value')).to.be.equal("0");
    expect(await monthly_living.getAttribute('value')).to.be.equal("0");
    expect(await current_home_loan.getAttribute('value')).to.be.equal("0");
    expect(await other_loan.getAttribute('value')).to.be.equal("0");
    expect(await other_monthly.getAttribute('value')).to.be.equal("0");
    expect(await total_credit.getAttribute('value')).to.be.equal("0");
});

When('user only sends monthly living expenses value as {string}',async function(value){
    const monthly_living = await element(by.xpath("//input[@aria-labelledby='q3q1']"));
    await monthly_living.sendKeys(value);
});

Then('user gets the error message {string}',async function(err_msg){
    const error_text_element = await element(by.css(".borrow__error__text"));
    const error_text = await error_text_element.getText();
    expect(error_text).to.be.equal(err_msg);
});