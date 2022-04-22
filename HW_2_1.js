
const checkPow = function(poww) {
    
    let sum = 0;
    while (poww > 0) {
        sum += Math.pow(2, poww)
        poww -= 1;
    }
    console.log(sum);
}

const moreSmile = function(num, smile) {

    let i = 0;
    while (i < num){
        i += 1;
        for (let j = 0; j < i; j++) {
            process.stdout.write(smile)
        }
        console.log('');
    }
}

const alphabet = function(word){

    let sumVowels = 0;
    let sumConsonants = 0;
    for (let i = 0; i < word.length; i++) {
        if (/^[a-zA-Z]+$/.test(word[i])) { 
           if (/^[aeiou]$/.test(word[i])) {
               sumVowels += 1;
           }
           else {
               sumConsonants += 1;
           }
        }
    }
    console.log('Слово ' + word + ' состоит из ' + sumVowels + ' гласных и ' + sumConsonants + ' согласных букв');
}

const isPalindrom = function(word) {

    let answer = 'Yes';
    if (word.length % 2 == 0) {
        if (/^[a-zA-Z]+$/.test(word)) { 
            word = word.toLowerCase();
            for (let i = 0, j = word.length - 1; i <= j; i++, j--) {
                if (word[i] == word[j]) {
                    continue;
                }
                else {
                    answer = 'No';
                }
            }
        }
        else {
            answer = 'No';
        }
    }
    else {
        answer = 'No';
    }    
    console.log(answer);
}

checkPow(10);
moreSmile(3, ':3');
alphabet('case');
alphabet('Case');
alphabet('Check-list');
isPalindrom('Abba');
isPalindrom('Abba');
isPalindrom('1--1');