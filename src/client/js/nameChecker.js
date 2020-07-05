async function checkForName(formText) {
    console.log("formText in nameChecker: " + formText);
    if (typeof(formText) != null || undefined) {
        try{
        const postData = await fetch('/userInput', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            // Body data type must match "Content-Type" header 
            body: JSON.stringify({
                string: formText
            })
        });
        const data = await postData.json();
        Client.updateUI(data);
    }catch(error){
        console.log("HELLOOOOO THIS IS AN ERROR");
    }
    }
}

export { checkForName } 
