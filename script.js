let number = document.getElementById(`number`)
let convertButton = document.getElementById(`convertButton`)
let romanParagraph = document.getElementById(`romanParagraph`)

let romanNumerals = [`I`, `V`, `X`, `L`, `C`, `D`, `M`]

convertButton.addEventListener(`click`, showRomanNumerals)

number.addEventListener(`keydown`, keyPressed)
number.focus()

function showRomanNumerals() {
  let numberValue = number.value.trim()

  if (numberValue < 1 || numberValue > 3999) {
    romanParagraph.innerHTML = `Number must be between 1 and 3,999.`
  } else if (numberValue != Math.floor(numberValue)) {
    romanParagraph.innerHTML = `Number must be an integer.`
  } else {
    let decimal = Number(numberValue)
    let romanNumerals = ``

    while (decimal > 0) {
      let nextNumerals = getNextNumerals(decimal)
      romanNumerals += nextNumerals.numerals
      decimal -= nextNumerals.value
    }

    romanParagraph.innerHTML = `${numberValue} = ${romanNumerals}`
  }

  number.value = ``
  number.focus()
}

function getNextNumerals(decimal) {
  decimal = String(decimal)

  let firstDigit = decimal[0]
  let index = (decimal.length - 1) * 2
  let multiplier = Math.pow(10, decimal.length - 1)

  if (firstDigit <= 3) {
    return {
      numerals: romanNumerals[index],
      value: 1 * multiplier,
    }
  } else if (firstDigit == 4) {
    return {
      numerals: romanNumerals[index] + romanNumerals[index + 1],
      value: 4 * multiplier,
    }
  } else if (firstDigit <= 8) {
    return {
      numerals: romanNumerals[index + 1],
      value: 5 * multiplier,
    }
  } else if (firstDigit == 9) {
    return {
      numerals: romanNumerals[index] + romanNumerals[index + 2],
      value: 9 * multiplier,
    }
  }
}

function keyPressed(event) {
  if (event.keyCode == 13) {
    showRomanNumerals()
  }
}
