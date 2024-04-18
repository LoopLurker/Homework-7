const prompt =
  "Welcome to the Quiz Game! Choose a topic:\n1. strings\n2. variables\n3. math";

let question;
let correctAnswer;

let choice = Number(window.prompt(prompt));

switch (choice) {
  case 1:
    question = "რა არის რა არის typeof(5)?";
    correctAnswer = "number";
    break;
  case 2:
    question = "შეიძლება თუ არა let-ის რედეკლალირება";
    correctAnswer = "Yes";
    break;
  case 3:
    question = "რას აბრუნებს console.log(Math.floor(2.1))";
    correctAnswer = "2";
    break;
  default:
    console.log("Invalid choice");
    break;
}

let userAnswer = window.prompt(question);

if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
  console.log("სწორია!");
} else {
  console.log("სამწუხაროდ ვერ გამოიცანით.");
}
