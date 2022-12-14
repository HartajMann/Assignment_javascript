// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
var contact_page=document.getElementById("contact-page");
var submit_btn=document.getElementById("submit-button");
submit_btn.addEventListener("click",newpage);
function newpage(){
    contact_page.innerHTML="<p>Thank you for your message!</p>";
    contact_page.style.fontSize="24px";
}
