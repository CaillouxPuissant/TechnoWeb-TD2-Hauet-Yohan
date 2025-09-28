// Modifie le lien Wikipedia pour pointer vers le site français
document.querySelector('a[href*="wikipedia.org"]').setAttribute('href', 'https://fr.wikipedia.org');

// Vérifie le texte du premier input lors du clic sur le bouton
document.querySelector('button').addEventListener('click', function(e) {
    const input = document.querySelector('input[type="text"]');
    if (input.value !== "Oui" && input.value !== "Non") {
        input.value = "Il faut mettre Oui ou Non";
    }
});

document.getElementById('choix1').nextElementSibling.textContent = ' HP';
document.getElementById('choix2').nextElementSibling.textContent = ' Casque';
document.getElementById('choix3').nextElementSibling.textContent = ' Bluetooth';

//Modifier le texte "Volume" selon le choix radio
const radios = document.querySelectorAll('input[name="choix"]');
radios.forEach(function(radio) {
    radio.value = radio.id === 'choix1' ? '1' : radio.id === 'choix2' ? '2' : '3'; // Ajoute une value si absente
    radio.addEventListener('change', function() {
        let volumeLabel = this.nextSibling.nextSibling;
        if (this.value === '1') {
            volumeLabel.textContent = ' Volume';
        } else if (this.value === '2') {
            volumeLabel.textContent = ' Volume ';
        } else if (this.value === '3') {
            volumeLabel.textContent = ' Volume ';
        }
    });
});

//Modifier le max du volume à 100 et afficher dans la console
const range = document.querySelector('input[type="range"]');
range.max = 100;
console.log('Valeur max du volume :', range.max);

//Afficher la valeur de la barre juste en dessous lors de la modification
range.addEventListener('input', function() {
    let valueDisplay = range.nextSibling.nextSibling;
    if (!valueDisplay || valueDisplay.nodeType !== 1 || valueDisplay.tagName !== 'DIV') {
        valueDisplay = document.createElement('div');
        range.parentNode.insertBefore(valueDisplay, range.nextSibling.nextSibling);
    }
    valueDisplay.textContent = 'Valeur : ' + this.value;
});

// Modifie "Une case à cocher" en "Mute"
document.querySelector("label[for='case']").textContent = " Mute";

// Désactive ou réactive le volume lors du clic sur la case à cocher
const muteCheckbox = document.getElementById('case');
const volumeRange = document.querySelector('input[type="range"]');
muteCheckbox.addEventListener('change', function() {
    volumeRange.disabled = this.checked;
});

const lienImagesDiv = document.querySelector('.bloc');
const newImg = document.createElement('img');
newImg.src = 'https://upload.wikimedia.org/wikipedia/commons/b/bd/UPHF_logo.svg';
newImg.width = 200;
newImg.alt = 'UPHF logo';
lienImagesDiv.appendChild(newImg);

window.onload = function() {
    // Cacher toutes les parties sauf le menu
    let parties = document.querySelectorAll('.partie');
    for (let i = 0; i < parties.length; i++) {
        parties[i].style.display = "none";
    }

    // Décocher toutes les cases du menu
    let checkboxes = document.querySelectorAll('.menu input[type="checkbox"]');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        // Ajouter l'événement pour afficher/masquer la partie correspondante
        checkboxes[i].onchange = function() {
            let partieId = this.getAttribute('data-partie');
            let partie = document.getElementById(partieId);
            if (this.checked) {
                partie.style.display = "block";
            } else {
                partie.style.display = "none";
            }
        };
    }
};
