
function sum(num1, num2){
  return num1 - num2
}

function calc(number1, number2, callback){
  return callback(number1, number2)
}

function date(callback){
  console.log(new Date)

  setTimeout(function(){
    let date = new Date
    callback(date)
  }, 5000)
}

function printDate(date){
  console.log(date)
}

date(printDate)

console.log(calc(6,3,sum))