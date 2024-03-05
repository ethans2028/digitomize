const {Builder, Browser, By, Key, until} = require('selenium-webdriver');
const assert = require('assert');



describe('CanNavigateToLogin', function() {
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  

  it('run the login navigation test', async function() {
    await driver.manage().setTimeouts({ implicit: 6000 });
    await driver.get('https://digitomize.com/home');
    await driver.manage().window().maximize();
    
    await driver.findElement(By.xpath("//a[text()='Login']")).click();
    const url =  await driver.getCurrentUrl();
    const expectedUrl = "https://digitomize.com/login";
    await driver.getCurrentUrl(expectedUrl);
    assert.strictEqual(url, expectedUrl, 'Current URL did not match expected');
  });

  after(async () => {
    await driver.quit();
  });

});


describe('PreviewUserInputtedProfile', function() {
  
  let driver;

  before(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });

  

  it('run the preview test', async function() {
    await driver.manage().setTimeouts({ implicit: 10000 });
    await driver.get('https://digitomize.com/home');
    await driver.manage().window().maximize();

    // new Promise(resolve => setTimeout(resolve, 3000));
    const username =  "Ethan";
    const phone = "1112223333";
    const usernameField = await driver.findElement(By.xpath("//input[@name='name']"));
    // await new Promise(resolve => setTimeout(resolve, 6000));
    usernameField.clear();
    usernameField.sendKeys(username);

    // new Promise(resolve => setTimeout(resolve, 6000));
    const phoneField = await driver.findElement(By.xpath("//input[@name='phoneNumber']"));
    phoneField.clear();
    phoneField.sendKeys(phone);

    // await new Promise(resolve => setTimeout(resolve, 5000));
    
    const previewUsername = await driver.findElement(By.xpath("p[text()='Ethan']"));
    expect(previewUsername).toBe(username);

    // await new Promise(resolve => setTimeout(resolve, 5000));
  });

  after(async () => {
    await driver.quit();
  });

});

