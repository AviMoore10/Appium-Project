const { remote } = require('webdriverio');
(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome',
            deviceName: 'emulator-5554',
            platformName: "android",
            platformVersion: "10",
            chromedriverExecutable: 'C:\\Users\\Avi\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.Exe',
        }
    })
   await browser.url("https://duckduckgo.Com")
   let inputField = await browser.$("#search_form_input_homepage")
   await inputField.addValue("webdriverio")
   let duckBtn = await browser.$("#search_button_homepage")
   await duckBtn.click()
   let firstSite = await browser.$$('.result__a')
   let firstSiteText = await firstSite[0].getText()
   console.log(firstSiteText)
   await browser.deleteSession()
})().catch((e) => console.error(e))