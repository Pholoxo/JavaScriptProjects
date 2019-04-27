function check() {
  var question1 = document.quiz.question1.value;
  var question2 = document.quiz.question2.value;
  var question3 = document.quiz.question3.value;
  var count = 0;

  var pics = ["https://res.cloudinary.com/dw7eufzto/image/upload/v1555796708/dobetter.jpg",
              "https://res.cloudinary.com/dw7eufzto/image/upload/v1555796522/tenor.gif",
              "https://res.cloudinary.com/dw7eufzto/image/upload/v1555796748/winning.jpg"];

  //For the questions
  if (question1 == "D.C") {
    count++;
  }
  if (question2 == "Hartford") {
    count++;
  }
  if (question3 == "Albany") {
    count++;
  }
  var messages = ["You can do better", "That's okay", "You won!"];
  var range;
  (count < 1 )? range = 0 : (count > 0 && count < 3) ? range = 1 : range = 2;


  //For the visibility
  document.getElementById("after_submit").style.visibility = "visible";

  //For the messages and pics
  document.getElementById("message").innerHTML = messages[range];
  document.getElementById("number_correct").innerHTML = "You got " + count + " correct."
  document.getElementById("pic").src = pics[range];
}