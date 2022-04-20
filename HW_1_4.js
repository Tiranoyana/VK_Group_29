
age = prompt('Enter your age', );
age = age.replace(/'/g, '');
alert(yourAge(age));

function yourAge(age) {
    
    let age_1 = Number(age);

    if (age_1 != Number(age_1)) {
        alert("Error, you didn't enter your age in numbers");
    } else {
      let age_2 = 18;
      let age_3 = 60;
      if (age_1 < age_2 && age_1 > 0) {
        alert("You don’t have access cause your age is " + age_1 + " It’s less then");
    } else if (age_1 >=  age_2 & age_1 <  age_3) {
        alert("Welcome  !");
    } else if (age_1  > age_3) {
        alert("Keep calm and look Culture channel");
    } else {
        alert("Technical work")
    }
    }
  }