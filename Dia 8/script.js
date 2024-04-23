const api_url = `https://swapi.py4e.com/api/`;

const xhr = new XMLHttpRequest();

function fetchStarWars(){
    let xhr = new XMLHttpRequest();
    let starID = document.getElementById("starID").value;
    let url = `https://swapi.py4e.com/api/`;
    xhr.open('GET',url,true);
    console.log(url)
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displayInfo(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}



