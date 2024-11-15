// Function to generate a random password with special characters, emojis, and numbers
function generatePassword() {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const emojis = '😀😃😄😁😆😆😅😂🤣😭😉😗😙😚😘🥰😍🤩🥳🫠🙃🙂🥲🥹😊☺️😌🙂‍↕️🙂‍↔️😏🤤😋😛😝😜🤪🥴😔🥺😬😑😐😶😶‍🌫️🫥🤐🫡🤔🤫🫢🤭🥱🤗🫣😱🤨🧐😒🙄😮‍💨😤😠😡🤬😞😓😟😥☹️🙁🫤😕😰😨😧😦😮😯😲😳🤯😖😣😩😫😵😵‍💫🫨🥶🥵🤢🤮😴😪🤧🤒🤕😷🤥😇🤠🤑🤓😎🥸🤡😈👿👻💀☠️👹👺🎃👽😺😸😹😻😼😽🙀😿😾';
    const kaomojis = '(╯°□°）╯︵ ┻━┻ (ノ°Д°)ノ︵ ┻━┻ (¬_¬) (⌒‿⌒)';
    const allCharacters = lowercase + uppercase + numbers + emojis + kaomojis;
    let password = '';
    const length = 16; // Password length
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

// Save password to localStorage
function savePassword(password) {
    let savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    savedPasswords.push(password);
    localStorage.setItem('savedPasswords', JSON.stringify(savedPasswords));
    displaySavedPasswords();
}

// Display saved passwords from localStorage
function displaySavedPasswords() {
    const savedPasswords = JSON.parse(localStorage.getItem('savedPasswords')) || [];
    const savedPasswordsList = document.getElementById('savedPasswordsList');
    savedPasswordsList.innerHTML = '';

    savedPasswords.forEach(password => {
        const listItem = document.createElement('li');
        listItem.textContent = password;
        savedPasswordsList.appendChild(listItem);
    });
}

// Copy password to clipboard
function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
}

// Event listeners
document.getElementById('generate').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('password').value = password;
});

document.getElementById('copy').addEventListener('click', () => {
    copyPassword();
});

document.getElementById('save').addEventListener('click', () => {
    const password = document.getElementById('password').value;
    if (password) {
        savePassword(password);
    } else {
        alert('Please generate a password first!');
    }
});

// Display saved passwords on page load
window.onload = displaySavedPasswords;
