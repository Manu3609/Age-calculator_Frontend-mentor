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
    if (!dayValue) {
        dayLabel.classList.add("error")
        dayInput.classList.add("error")
        dayRequiredText.classList.add("show")
    } else {
        if (dayValue > 0 && dayValue <= 31) {
        // if (0 < dayValue <= 31) {
            console.log('valid day')
            dayLabel.classList.remove("error")
            dayInput.classList.remove("error")
            dayInvalidText.classList.remove("show")
            dayRequiredText.classList.remove("show")
        } else {
            console.log('invalid day')
            dayLabel.classList.add("error")
            dayInput.classList.add("error")
            dayInvalidText.classList.add("show")
            dayRequiredText.classList.remove("show")
            console.log("not valid")
        }
    }
    
    if (!monthValue) {
        monthRequiredText.classList.add("show")
        monthLabel.classList.add("error")
        monthInput.classList.add("error")
    } else {
        if (monthValue > 0 && monthValue <= 12) {
                console.log('valid month')
                monthLabel.classList.remove("error")
                monthInput.classList.remove("error")
                monthInvalidText.classList.remove("show")
                monthRequiredText.classList.remove("show")
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
        if (yearValue < new Date().getFullYear()) {
                console.log('valid year')
                yearLabel.classList.remove("error")
                yearInput.classList.remove("error")
                yearInvalidText.classList.remove("show")
                yearRequiredText.classList.remove("show")
            } else {
                console.log('invalid year')
                yearLabel.classList.add("error")
                yearInput.classList.add("error")
                yearInvalidText.classList.add("show")
                yearRequiredText.classList.remove("show")
            }
    }
    console.log("submited")
    // console.log(new Date().getFullYear())
    console.log("day:"+dayValue+" month:"+monthValue+" year:"+yearValue)
})