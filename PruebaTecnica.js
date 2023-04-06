// Number of Likes

// Write a function called `likes` that receives a number and returns a
//string using the format K for thousands and M for millions.

// If the number is less than 1000 return the same number as a string.

//     likes(983); // "983"
//     likes(1900); // "1K"
//     likes(54000); // "54K"
//     likes(120800); // "120K"
//     likes(25222444); // "25M"

function likes(num) {
  number2 = num.toString();
  if (num < 1000) {
    return num;
  } else if (num > 1000 && num < 999999) {
    return number2[0] + number2[1] + "K";
  } else {
    return number2[0] + number2[1] + "M";
  }
}

console.log(likes(988));
console.log(likes(1050));
console.log(likes(10000000));
