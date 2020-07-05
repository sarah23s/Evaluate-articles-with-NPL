function updateUI(data) {
    console.log(data);
    document.getElementById('title').innerHTML = '<strong>Title: </strong>' + data.date;//TODO edit this
    document.getElementById('author').innerHTML = '<strong>Author: </strong>' + data.date;//TODO edit this
    document.getElementById('polarity').innerHTML = '<strong>Polarity: </strong>' + data.polarity;
    document.getElementById('polarity_confidence').innerHTML = '<strong>Polarity Confidence: </strong>' + data.polarity_confidence;
    document.getElementById('subjectivity').innerHTML = '<strong>Subjectivity Confidence: </strong>' + data.subjectivity;
    document.getElementById('subjectivity_confidence').innerHTML = '<strong>Subjectivity Confidence: </strong>' + data.Subjectivity_confidence;
}

export { updateUI }