document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById('frmDataHero');
    
    const displayElement = document.getElementById('displayInfo');

    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const characterName = document.getElementById('characterName').value;
        const actorName = document.getElementById('actorName').value;
        const age = document.getElementById('age').value;
        const cityName = document.getElementById('cityName').value;
        const poster = document.getElementById('poster').value;
        const dateAppears = document.getElementById('dateAppears').value;
        const producer = document.getElementById('producer').value;

        const info = `
            <p><strong>Nombre del personaje:</strong> ${characterName}</p>
            <p><strong>Nombre del actor:</strong> ${actorName}</p>
            <p><strong>Edad del actor:</strong> ${age}</p>
            <p><strong>Ubicación:</strong> ${cityName}</p>
            <p><strong>Poster:</strong> ${poster}</p>
            <p><strong>Fecha de aparición:</strong> ${dateAppears}</p>
            <p><strong>Productora:</strong> ${producer}</p>
        `;

        
        displayElement.innerHTML = info;
    });
});