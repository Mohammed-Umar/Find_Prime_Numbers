function findSpecialIntegers(min, max) {
    // check if a & b is betw 1 & 10
    // a = 10 & b = 30
    // get list of numbers betw a & b
    // then match each number and its reverse
    // if mateches add it to an array
    // output the length of the new array
    var rangeList = []
    var spNumList = []

    for (var i = min; i < max; i++) {
        rangeList.push(i)
    }

    spNumList = rangeList.filter(num => isPrime(num))

    console.log('Number of prime numbers in this range are:', spNumList.length)

    return spNumList.length;
}

function isPrime(num) {
    var divisors = []
    if (num > 0) {
        for(var i = 1; i <= num; i++) {
            if(num%i === 0) 
                divisors.push(i)
        }
        // console.log('Divisors:', divisors)
        return divisors.length === 2
    }
    return false    
}

var min = window.prompt('Enter min range')
var max = window.prompt('Enter max range')

findSpecialIntegers(min, max)
