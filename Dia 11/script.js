function getPokemon(){
    pokeID = document.getElementById("pokeID").value;
    url = `https://pokeapi.co/api/v2/pokemon/${charId}/`


    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.detail === "Not found") {
                document.getElementById("characterInfo").innerHTML = "<p class='text-danger'>Character not found.</p>";
            } else {
                getAdditionalInfo(data);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById("characterInfo").innerHTML = "<p class='text-danger'>Failed to fetch character data.</p>";
        });
}

document.getElementById("pokeID").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        // Aquí puedes colocar el código que deseas que se ejecute cuando se presiona "Enter"
        var searchTerm = this.value.trim(); // Obtén el valor del campo de entrada y elimina los espacios en blanco al principio y al final
        console.log("Buscar:", searchTerm);
        // Llama a la función o método que desees para procesar el término de búsqueda
    }
});

