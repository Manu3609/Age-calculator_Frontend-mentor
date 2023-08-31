const form = document.querySelector(".form form")
const dayInput = document.querySelector("input#day")
const monthInput = document.querySelector("input#month")
const yearInput = document.querySelector("input#year")
const dayRequiredText = document.querySelector("span.required#day")
const monthRequiredText = document.querySelector("span.required#month")
const yearRequiredText = document.querySelector("span.required#year")
const dayLabel = document.querySelector("#dayLabel")
const monthLabel = document.querySelector("#monthLabel")
const yearLabel = document.querySelector("#yearLabel")
const dayInvalidText = document.querySelector("span.invalid#day")
const monthInvalidText = document.querySelector("span.invalid#month")
const yearInvalidText = document.querySelector("span.invalid#year")
const invalidDateText = document.querySelector(".invalidDate")
const futureDateText = document.querySelector(".futureDate")
const yearResultText = document.querySelector(".yearsResult")
const monthResultText = document.querySelector(".monthsResult")
const dayResultText = document.querySelector(".daysResult")

let dayValue = ""
let monthValue = ""
let yearValue = ""

dayInput.addEventListener("change", () => {
    dayValue = dayInput.value
})
monthInput.addEventListener("change", () => {
    monthValue = monthInput.value
})
yearInput.addEventListener("change", () => {
    yearValue = yearInput.value
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let validDate = 0
    if (!dayValue) {
        dayLabel.classList.add("error")
        dayInput.classList.add("error")
        dayRequiredText.classList.add("show")
        invalidDateText.classList.remove("show")
        futureDateText.classList.remove("show")
    } else {
        if (dayValue > 0 && dayValue <= 31) {
            console.log('valid day')
            dayLabel.classList.remove("error")
            dayInput.classList.remove("error")
            dayInvalidText.classList.remove("show")
            dayRequiredText.classList.remove("show")
            invalidDateText.classList.remove("show")
            futureDateText.classList.remove("show")
            validDate += 1
        } else {
            console.log('invalid day')
            dayLabel.classList.add("error")
            dayInput.classList.add("error")
            dayInvalidText.classList.add("show")
            dayRequiredText.classList.remove("show")
            invalidDateText.classList.remove("show")
            futureDateText.classList.remove("show")
            console.log("not valid")
        }
    }
    
    if (!monthValue) {
        monthRequiredText.classList.add("show")
        monthLabel.classList.add("error")
        monthInput.classList.add("error")
    } else {
        if (monthValue > 0 && monthValue <= 12) {
            if (monthValue == 2 && dayValue > 29) {
                dayLabel.classList.add("error")
                dayInput.classList.add("error")
                monthLabel.classList.add("error")
                monthInput.classList.add("error")
                invalidDateText.classList.add("show")
                monthInvalidText.classList.remove("show")
                monthRequiredText.classList.remove("show")
            } else {
                console.log('valid month')
                monthLabel.classList.remove("error")
                monthInput.classList.remove("error")
                monthInvalidText.classList.remove("show")
                monthRequiredText.classList.remove("show")
                validDate += 1
            }
            } else {
                console.log('invalid month')
                monthLabel.classList.add("error")
                monthInput.classList.add("error")
                monthInvalidText.classList.add("show")
                monthRequiredText.classList.remove("show")
            }
    }
    if (!yearValue) {
        yearRequiredText.classList.add("show")
        yearLabel.classList.add("error")
        yearInput.classList.add("error")
    } else {
        if (yearValue <= new Date().getFullYear()) {
                console.log('valid year')
                yearLabel.classList.remove("error")
                yearInput.classList.remove("error")
                yearInvalidText.classList.remove("show")
                yearRequiredText.classList.remove("show")
                validDate += 1
            } else {
                console.log('invalid year')
                yearLabel.classList.add("error")
                yearInput.classList.add("error")
                yearInvalidText.classList.add("show")
                yearRequiredText.classList.remove("show")
            }
    }
    if (validDate == 3) {
        console.log("Valid Date")
        let userDate = new Date(yearValue,monthValue-1,dayValue)
        console.log(userDate)
        let dateDiff = Date.parse(new Date()) - Date.parse(userDate)
        function msToDate (ms) {
            const years = Math.floor(ms / (31536007978.608));
            const yearsms = ms % (31536007978.608);
            const months = Math.floor(yearsms / (2628003544.8847289085));
            const monthsms = ms % (2628003544.8847289085);
            const days = Math.floor(monthsms / (86400021.859200000763));
            const daysms = ms % (86400021.859200000763);
            const hours = Math.floor(daysms / (3600000.910800000187));
            const hoursms = ms % (3600000.910800000187);
            const minutes = Math.floor(hoursms / (60000.015180000002147));
            const minutesms = ms % (60000.015180000002147);
            const sec = Math.floor(minutesms / 1000.0002530000000434);
            return years + "years " + months + "months " + days + "days " + hours + "hours " + minutes + "minutes " + sec + "seconds";
        }
        console.log(msToDate(dateDiff))
        // function changeResults (years, months, days) {
        //     yearResultText.innerHTML = years
        //     monthResultText.innerHTML = months
        //     dayResultText.innerHTML = days
        // }
        
        if (dateDiff < 0) {
            futureDateText.classList.add("show")
            dayLabel.classList.add("error")
            monthLabel.classList.add("error")
            yearLabel.classList.add("error")
            dayInput.classList.add("error")
            monthInput.classList.add("error")
            yearInput.classList.add("error")
        } else {
            futureDateText.classList.remove("show")
            dayLabel.classList.remove("error")
            monthLabel.classList.remove("error")
            yearLabel.classList.remove("error")
            dayInput.classList.remove("error")
            monthInput.classList.remove("error")
            yearInput.classList.remove("error")

            if (monthValue <= 7) {
                if (monthValue % 2) {
                    console.log("impair month OK")
                    dayLabel.classList.remove("error")
                    monthLabel.classList.remove("error")
                    dayInput.classList.remove("error")
                    monthInput.classList.remove("error")
                    invalidDateText.classList.remove("show")
                } else {
                    if (dayValue > 30) {
                        console.log("need to be less")
                        dayLabel.classList.add("error")
                        monthLabel.classList.add("error")
                        dayInput.classList.add("error")
                        monthInput.classList.add("error")
                        invalidDateText.classList.add("show")
                    } else {
                        console.log("pair month ok")
                        dayLabel.classList.remove("error")
                        monthLabel.classList.remove("error")
                        dayInput.classList.remove("error")
                        monthInput.classList.remove("error")
                        invalidDateText.classList.remove("show")
                    }
                }
            } else {
                if (monthValue % 2) {
                    if (dayValue > 30) {
                        console.log("need to be less II")
                        dayLabel.classList.add("error")
                        monthLabel.classList.add("error")
                        dayInput.classList.add("error")
                        monthInput.classList.add("error")
                        invalidDateText.classList.add("show")
                    } else {
                        console.log("impair month ok")
                        dayLabel.classList.remove("error")
                        monthLabel.classList.remove("error")
                        dayInput.classList.remove("error")
                        monthInput.classList.remove("error")
                        invalidDateText.classList.remove("show")
                    }
                } else {
                    console.log("pair month ok")
                    dayLabel.classList.remove("error")
                    monthLabel.classList.remove("error")
                    dayInput.classList.remove("error")
                    monthInput.classList.remove("error")
                    invalidDateText.classList.remove("show")
                }
            }
        }
        console.log("Difference: "+dateDiff)
        // console.log(new Date(dateDiff))
    }
    console.log("submited")
    console.log(validDate)
    // console.log(new Date().getFullYear())
    console.log("day:"+dayValue+" month:"+monthValue+" year:"+yearValue)
})