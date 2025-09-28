// Taux de conversion
const tauxUSD = 1.01;
const tauxAUD = 1.47;

function convertir() {
    // Récupérer la valeur en euros
    const eurosInput = document.getElementById('euros');
    if (!eurosInput) return;

    const euros = parseFloat(eurosInput.value);

    // Si la valeur n'est pas valide, afficher vide
    if (isNaN(euros)) {
        document.getElementById('usd').textContent = '';
        document.getElementById('aud').textContent = '';
        return;
    }

    const usd = euros * tauxUSD;
    const aud = euros * tauxAUD;

    // Afficher les résultats
    document.getElementById('usd').textContent = usd.toFixed(2);
    document.getElementById('aud').textContent = aud.toFixed(2);
}

// Met à jour la conversion à chaque changement de valeur
document.addEventListener('DOMContentLoaded', () => {
    convertir();
    const eurosInput = document.getElementById('euros');
    if (eurosInput) {
        eurosInput.addEventListener('input', convertir);
    }
});