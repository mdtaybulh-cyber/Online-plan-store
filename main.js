

// ---Plant Matchmaker Quiz---


function recommendPlant() {

    let sun = document.getElementById("sun").value;
    let care = document.getElementById("care").value;
    let pet = document.getElementById("pet").value;

    let result = "";

    if (pet === "Yes") {

        result = " Recommendation: Calathea (Pet Friendly)";

    }
    else if (sun === "Bright" && care === "Easy") {

        result = " Recommendation: Snake Plant";

    }
    else if (sun === "Low") {

        result = "🪴 Recommendation: ZZ Plant";

    }
    else if (care === "Expert") {

        result = " Recommendation: Monstera Deliciosa";

    }
    else {

        result = " Recommendation: Pothos";

    }

    document.getElementById("result").innerHTML = result;

}



// ---Add To Cart---


function addCart() {

    alert(" Plant added to cart successfully!");

}



// ---Contact Form Popup---


let form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("✅ Thank you! Your message has been submitted successfully.");

        form.reset();

    });

}



// ---Live Chat---


function sendMessage() {

    let input = document.getElementById("chatInput");
    let chat = document.getElementById("chatBox");

    if (input.value.trim() == "") {

        return;

    }

    chat.innerHTML +=
        "<p><b>You:</b> " + input.value + "</p>";

    chat.innerHTML +=
        "<p><b>Plant Specialist:</b> Thanks! Water your plant only when the top soil is dry. 🌱</p>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;

}



// ---Welcome Message---


window.onload = function () {

    console.log("Welcome to Blooming Oasis!");

}
// date-time 
function showdatetime(){
    let showtime = new Date();
    document.getElementById("date-time").innerHTML=showtime.toLocaleDateString();
    return true;

}
showdatetime()