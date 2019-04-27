function getHistory() {
  return document.getElementById("history-value").innerText;
}

function printHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutPut() {
  return document.getElementById("output-value").innerText;
}

function printOutPut(num) {
  if(num=="") {
    document.getElementById("output-value").innerText=num
  }
  else {
    document.getElementById("output-value").innerText=
    getFormattedNumber(num);
  }
}

function getFormattedNumber(num) {
  var n = Number(num);
  var value = n.toLocaleString("en");
  return value;
}

function reverseNumberFormat(num) {
  return Number(num.replace(/,/g, '')); 
}

var operator = document.querySelectorAll(".operator");
operator.forEach(x => x.addEventListener('click', function () {
  if(this.id=="clear") {
    printHistory("");
    printOutPut("");
  }
  else if(this.id=="backspace") {
    var output = reverseNumberFormat(getOutPut()).toString();
    if(output) {
      output = output.substr(0, output.length-1);
      printOutPut(output);
    }
  }
  else {
    var output = getOutPut();
    var history = getHistory();
    if(output==""&&history!="") {
      if(isNaN(history[history.length - 1])) {
        history = history.substr(0, history.length - 1);
      }
    }
    // if(output!=""&&history!="") {
    //   history = output + this.id;
    // }
    if(output!="" || history!="") {
      output = output  == "" ? output : reverseNumberFormat(output);
      history = history + output;
      if(this.id == "=") {
        var result = eval(history);
        printOutPut(result);
        printHistory("");
      }
      else {
        history = history + this.id;
        printHistory(history);
        printOutPut("");
      }
    }
  }
}))

var number = document.querySelectorAll(".number");
number.forEach(x => x.addEventListener('click', function() {
  var output = reverseNumberFormat(getOutPut());
  if(output != NaN) {
    output = output + this.id;
    printOutPut(output);
  }
}));