function updateUI(data) {
    document.getElementById('polarity').innerHTML = '<strong>Polarity: </strong>' + data.polarity;
    document.getElementById('polarity_confidence').innerHTML = '<strong>Polarity Confidence: </strong>' + data.polarity_confidence;
    document.getElementById('subjectivity').innerHTML = '<strong>Subjectivity: </strong>' + data.subjectivity;
    document.getElementById('subjectivity_confidence').innerHTML = '<strong>Subjectivity Confidence: </strong>' + data.subjectivity_confidence;
}

export { updateUI }