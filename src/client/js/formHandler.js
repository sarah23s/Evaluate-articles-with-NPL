function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('enteredURL').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
}

export { handleSubmit }