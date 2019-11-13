const { remote } = require('webdriverio');
async function search(pagename, page) {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                browserName: 'chrome',
                deviceName: 'emulator-5554',
                platformName: "android",
                platformVersion: "10",
                chromedriverExecutable: 'C:\\Users\\Avi\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.Exe'
            }
        })
        await browser.url(pagename)
        const searchIconBtn = await browser.$('#searchIcon')
        await searchIconBtn.click()
        const searchInput = await browser.$('#searchInput')
        await searchInput.addValue(page)
        const searchButton = await browser.$('#searchIconButton')
        await searchButton.click()
        console.log(`Reached to ${page} page`)
        await browser.closeApp()
        await browser.deleteSession()
    } catch (error) {
        console.error(error)
    }
}

async function advancedSearch(pagename, date, sortWard, sortPhrase) {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                browserName: 'chrome',
                deviceName: 'emulator-5554',
                platformName: "android",
                platformVersion: "10",
                chromedriverExecutable: 'C:\\Users\\Avi\\AppData\\Roaming\\npm\\node_modules\\appium\\node_modules\\appium-chromedriver\\chromedriver\\win\\chromedriver.Exe'
            }
        })
        await browser.url(pagename)
        const advancedSearchIcon = await browser.$('#advancedSearchIcon')
        await advancedSearchIcon.click()
        const chcocolateCake = await browser.$$('.cakeTypes')
        await chcocolateCake[0].click()
        const ratingFour = await browser.$$('.cakeRates')
        await ratingFour[1].click()
        const inputDate = await browser.$('.inputDate')
        await inputDate.addValue(date)
        const allThisWards = await browser.$('#input1')
        await allThisWards.addValue(sortWard)
        const exactWarding = await browser.$('#input2')
        await exactWarding.addValue(sortPhrase)
        await browser.hideKeyboard()
        const searchBtn = await browser.$('#btnForm')
        await searchBtn.click()
        console.log("Advanced search complete")
        await browser.closeApp()
        await browser.deleteSession()
    } catch (error) {
        console.error(error)
    }
}

// search("https://cakes-automation-course-mobile.herokuapp.com/index.html#", "Products")
advancedSearch("https://cakes-automation-course-mobile.herokuapp.com/index.html#", '01202018', 'chocolate', 'chocolate')