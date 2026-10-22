const textBox = document.querySelector("input");
const buttons = document.querySelectorAll(".number, .sign");
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    textBox.value = ""; // reset input
});

for(let button of buttons) {
    button.addEventListener("click", addText);
}

function addText(event) {
    let text = event.target.innerText;
    let string = textBox.value;
    if(text === "=") {  // if user wants to compute
        try {
            let answer = math.evaluate(textBox.value);
            if(answer % 2 === 0) {  //if number is not decimal
                textBox.value = answer;
            }
            else {  // if answer is decimal
                textBox.value = math.round(answer, 2);
            }
        } catch(error) {    // if bad input given : no numbers, one operand, etc.
            textBox.value = "null";
        }
    }
    else {  // process button input
        if(text === "x") {  // change sign x -> * for execution
            textBox.value += "*"
        }
        else {  // add button value to input box
            textBox.value += text;   
        }
    }
}