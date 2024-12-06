// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

let submitBtn = document.getElementById("submit-button");
// let main = document.getElementsByTagName("main");


function Submitting(){
    let mainText = document.getElementById("contact-page")
    // alert(mainText.innerHTML)
    // mainText.style.visibility = "hidden";
    let thankYou = document.createElement("p");
    thankYou.innerHTML = "Thank you for your message!";
    thankYou.style.fontSize = 24;
    // alert(thankYou.innerHTML)
    // document.body.append(thankYou)
    mainText.innerHTML = thankYou.innerHTML;
    mainText.style.textAlign = "center"
    mainText.style.alignContent = "flex-start"
}

submitBtn.addEventListener("click", Submitting);
