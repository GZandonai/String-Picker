function wordCount(string) {
    tinyCount =  0
    capitalCount = 0

    for (i = 0; i < string.length; i++) {

        if(string[i] === 'a'){
            tinyCount++
        }
        if (string[i] === 'A'){
            capitalCount++
        }
    }

    if (tinyCount > 0 || capitalCount > 0 ) {
        console.log(`The letter "a" was found ${tinyCount} times and the letter "A" was found ${capitalCount} times.`)
    } else {
        console.log(`Was not found "a" or "A" in this phrase.`)
    }
}

let phrase = "Little girls just want have fun! "
console.log(phrase)
wordCount(phrase)

let phrase2 = "LITTLE GIRLS JUST WANT HAVE FUN! "
console.log(phrase2)
wordCount(phrase2)

let phrase3 = "Dont be silly"
console.log(phrase3)
wordCount(phrase3)
