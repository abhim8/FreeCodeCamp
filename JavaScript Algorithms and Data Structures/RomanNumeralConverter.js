/* Author: Abhilash Movva */

function convertToRoman(num) {
    var digits = String(+num).split("")
    
    const key = [
            "","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
            "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
            "","I","II","III","IV","V","VI","VII","VIII","IX"
    ]
    var roman = ""
    let i = 3
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman
    
    return Array(+digits.join("") + 1).join("M") + roman
}

console.log(convertToRoman(36))