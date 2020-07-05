import './styles/styles.scss';

import { checkForName } from './js/nameChecker'
import { handleSubmit } from './js/formHandler'
import { updateUI } from './js/updateUI'

export {
    checkForName,
    handleSubmit,
    updateUI
}

async function performAction() {
    const generateBtn = document.getElementById('generate');

    generateBtn.textContent = 'Generating...';
    generateBtn.disabled = true; 

    await handleSubmit(event);
    
    generateBtn.textContent = 'Generate';
    generateBtn.disabled = false; 
}

document.getElementById('generate').addEventListener('click', performAction);
