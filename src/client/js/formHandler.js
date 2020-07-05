// const fetch = require("node-fetch");
global.fetch = require("node-fetch");

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('enteredURL').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
}

async function sentiment_analysis_TEST(input_text) {
    var response = await fetch("http://localhost:3051/sentiment_text");
    console.log("response: ", response);
}


export { 
    handleSubmit,
    sentiment_analysis_TEST
 }