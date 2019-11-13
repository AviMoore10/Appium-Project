const { remote } = require('webdriverio');
async function plusAndMultiplyExercise(firstNum, secondNum, thirdNum, screenShotFileName) {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                deviceName: 'emulator-5554',
                platformName: "android",
                platformVersion: "10",
                automationName: "UiAutomator2",
                appPackage: "com.google.android.calculator",
                appActivity: "com.android.calculator2.Calculator"
            }
        })
        let firstNumIndex = await gettingCorrectNumber(firstNum)
        let firstDiggit = await browser.$(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.slidingpanelayout.widget.SlidingPaneLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[${firstNumIndex}]`)
        await firstDiggit.click()
        let plusBtn = await browser.$("~plus");
        await plusBtn.click()
        let secondNumIndex = await gettingCorrectNumber(secondNum)
        let secondDiggit = await browser.$(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.slidingpanelayout.widget.SlidingPaneLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[${secondNumIndex}]`)
        await secondDiggit.click()
        let multiplyBtn = await browser.$("~multiply");
        await multiplyBtn.click()
        let thirdNumIndex = await gettingCorrectNumber(thirdNum)
        let thirdDiggit = await browser.$(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.slidingpanelayout.widget.SlidingPaneLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[${thirdNumIndex}]`)
        await thirdDiggit.click()
        let result = await browser.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.TextView");
        console.log(`The result is: ` + await result.getText())
        await browser.saveScreenshot(`./${screenShotFileName}.png`)
        await browser.deleteSession()
    } catch (error) {
        console.error(error)
    }
}

async function divideExercise(divideNum, divisibleNum, screenShotFileName) {
    try {
        const browser = await remote({
            logLevel: 'trace',
            capabilities: {
                deviceName: 'emulator-5554',
                platformName: "android",
                platformVersion: "10",
                automationName: "UiAutomator2",
                appPackage: "com.google.android.calculator",
                appActivity: "com.android.calculator2.Calculator"
            }
        })
        divisibleNum /= 10
        const strDivide = divideNum.toString()
        for (let i = 0; i < strDivide.length; i++) {
            let numFromNumber = await gettingCorrectNumber(parseInt(strDivide.charAt(i)))
            let tapOnDiggitIndex = await browser.$(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.slidingpanelayout.widget.SlidingPaneLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[${numFromNumber}]`)
            tapOnDiggitIndex.click()
        }
        const divideBtn = await browser.$('~divide')
        await divideBtn.click()
        const strDivisible = divisibleNum.toString()
        for (let i = 0; i < strDivisible.length; i++) {
            let numFromNumber = await gettingCorrectNumber(parseInt(strDivisible.charAt(i)))
            let tapOnDiggitIndex = await browser.$(`/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/androidx.slidingpanelayout.widget.SlidingPaneLayout/android.widget.LinearLayout/android.view.ViewGroup[1]/android.widget.Button[${numFromNumber}]`)
            tapOnDiggitIndex.click()
        }
        let result = await browser.$("/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.TextView");
        console.log(`The result is: ` + await result.getText())
        await browser.saveScreenshot(`../folderForScreenShots/${screenShotFileName}.png`)
    } catch (error) {
        console.error(error)
    }
}


async function gettingCorrectNumber(number) {
    if (number == 1) {
        return number = 7
    }
    if (number == 2) {
        return number = 8
    }
    if (number == 3) {
        return number = 9
    }
    if (number == 7) {
        return number = 1
    }
    if (number == 8) {
        return number = 2
    }
    if (number == 9) {
        return number = 3
    }
    if (number == 0) {
        return number = 10
    }
    else {
        return number
    }
}


// plusAndMultiplyExercise(3, 4, 5, "sShot")
divideExercise(150, 30, "screenshot")