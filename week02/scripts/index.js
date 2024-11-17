const DAYS = 3;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the
// studentReport array and print to the console the
// current array value if it is below 30.
for (const s of studentReport) {
  if (s < 30) {
    console.log(s);
  }
}

// Repeat the previous programming snippet by using a while loop.
console.log("while");
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < 30) {
    console.log(studentReport[i]);
  }
  i++;
}

// Repeat the previous programming snippet by using a forEach loop.
console.log("forEach");
studentReport.forEach((element) => {
  if (element < 30) {
    console.log(element);
  }
});

// Repeat the previous programming snippet by using a for...in loop.
for (const key in studentReport) {
  console.log(key);
}
// Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

i = DAYS;

while (i <= 7) {
    i++;
  let day = "";
  switch (i) {
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
      break;
    case 7:
      day = "Sunday";
      break;
  }
  console.log(day);
}
