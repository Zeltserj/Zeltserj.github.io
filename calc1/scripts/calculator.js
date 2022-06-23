const body = document.body
let b = document.querySelector("button");
let resultText = document.querySelector('p');
let selection = document.querySelector('#falvors');
console.log(selection)

b.onclick = (event) => {
            event.preventDefault();
            // show the selected index
            resultText.innerHTML = "<a href='https://food.walla.co.il/item/3361666'>Here</a> is a link to a "+ selection.value + " recipe"
        };
