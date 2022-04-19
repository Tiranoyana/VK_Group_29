  function yourAge(age_1) {
    if (age_1 != Number(age_1)) {
        console.log("Error, you didn't enter your age in numbers");
    }
    else {
        let age_2 = 18;
        let age_3 = 60;
        if (age_1 < age_2 && age_1 > 0) console.log("You don’t have access cause your age is " + age_1 + " It’s less then");
        else if (age_1 >=  age_2 & age_1 <  age_3) console.log("Welcome  !");
        else if (age_1  > age_3) console.log("Keep calm and look Culture channel");
        else console.log("Technical work");
    }
  }

  yourAge('17');
  yourAge('18');
  yourAge('61');
  yourAge('cvbff');
  yourAge('2a');

  var readline = require('readline');

  var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

 rl.question("Enter your age ", function(answer) {
    yourAge(answer);
    rl.close();
  });