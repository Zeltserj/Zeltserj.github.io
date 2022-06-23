const body = document.body
let b = document.querySelector("button");
let resultText = document.querySelector('p');
let selection = document.querySelector('#falvors');
var link = "link";
console.log(selection);

b.onclick = (event) => {
            event.preventDefault();
            switch(selection.value){
              case "savory":
                link = "https://www.kal-lehachana.co.il/%D7%A4%D7%99%D7%A6%D7%94-%D7%A2%D7%9C-%D7%A4%D7%99%D7%AA%D7%94/";
                break;
              case "fresh":
                link = "https://food.walla.co.il/recipe/649570";
                break;
              case "comforting":
                link = "https://nikib.co.il/main-course/casserole/38167/"
                break;
            }
            resultText.innerHTML = "<a href='"+link+"' target='_blank'>Here</a> is a link to a "+ selection.value + " recipe"
        };
