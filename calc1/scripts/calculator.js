const body = document.body
let buttonList = document.querySelectorAll("button");
let resultText = document.querySelector('p')

console.log(buttonList)

let result = 0;
for (const b of buttonList){
  b.onclick = function() {
  let first = 0;
  let second = 0;
  if (b.id !== "clear"){
  first = Number(prompt('Please first number'));
  second = Number(prompt('Please second number'));
  console.log(first, second)
  }
  switch (b.id){
    case "add":
      result = first + second;
      break;
    case "subtract":
      result = first - second;
      break;
    case "divide":
      result = first / second;
      break;
    case "multiply":
      result = first * second;
      break;
    case "clear":
      result = 0;
      break;
  }
  console.log(result);
  resultText.textContent = "Result= " + result;
}

}
