function fetchStarWars(){
    let xhr = new XMLHttpRequest();
    let starID = document.getElementById('caracterId').value;
    console.log(starID);
    let url = `https://swapi.py4e.com/api/people/${starID}/`
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            DisplayGeneralInfo(response);
            DisplayExtraInfo(response);
            DisplayHomeworldInfo(response);
            DisplayFilmsInfo(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}
function DisplayGeneralInfo(data){
    let generalInfo = document.getElementById("GeneralInf");
    
    if (data.response === "error") {
        generalInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } 
    else {
        generalInfo.innerHTML = `
        <p>Nombre: ${data.name}</p>
        <p>Altura: ${data.height}</p>
        <p>Masa: ${data.mass}</p>
        <p>Color de pelo: ${data.hair_color}</p>
        <p>Color de piel: ${data.skin_color}</p>
        <p>Color de ojos: ${data.eye_color}</p>
        <p>Fecha de nacimiento: ${data.birth_year}</p>
        <p>Genero: ${data.gender}</p>
        `
    };
}
function DisplayHomeworldInfo(data) {   
    let homeworldInfo = document.getElementById("HomeworldInf");

    if (data.response === "error") {
        homeworldInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        fetch(data.homeworld) 
            .then(response => response.json())
            .then(planetData => {

                homeworldInfo.innerHTML = `
                    <p>Name: ${planetData.name}</p>
                    <p>Climate: ${planetData.climate}</p>
                    <p>Population: ${planetData.population}</p>
                `;
            })
    }
}
function DisplayExtraInfo(data) {
    let extraInfo = document.getElementById('ExtraInf');
    if (data.response === "error") {
        extraInfo.innerHTML = `<p>Error: ${data.error}</p>`;
    } 
    else {
        extraInfo.innerHTML = `
        <p>Creado: ${data.created}</p>
        <p>Editado: ${data.edited}</p>
        <p>Url: ${data.url}</p>
        `
    };
}
