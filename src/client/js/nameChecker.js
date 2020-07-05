async function checkForName(formText) {
    console.log("formText in nameChecker: " +formText);
    if (typeof(formText) != null || undefined) {
        const postData = await fetch('/userInput', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header 
            body: JSON.stringify({
                string: formText
            })
        });
        console.log("I AM HERE");
        const data = await postData.json();
        console.log("data in nameChecker: " +data);
        Client.updateUI(data);
    }
}

export { checkForName } 
