function getCharacter() {
    var charId = document.getElementById("charId").value;
    var url = `https://swapi.py4e.com/api/people/${charId}/`;

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

function getAdditionalInfo(character) {
    var promises = [];

    promises.push(fetch(character.homeworld).then(response => response.json()).then(data => {
        character.homeworld = data;
    }));

    promises.push(Promise.all(character.films.map(filmUrl => fetch(filmUrl).then(response => response.json()))).then(films => {
        character.films = films;
    }));

    promises.push(Promise.all(character.species.map(speciesUrl => fetch(speciesUrl).then(response => response.json()))).then(species => {
        character.species = species;
    }));

    promises.push(Promise.all(character.vehicles.map(vehicleUrl => fetch(vehicleUrl).then(response => response.json()))).then(vehicles => {
        character.vehicles = vehicles;
    }));

    promises.push(Promise.all(character.starships.map(starshipUrl => fetch(starshipUrl).then(response => response.json()))).then(starships => {
        character.starships = starships;
    }));

    Promise.all(promises).then(() => {
        displayCharacter(character);
    }).catch(error => {
        console.error('Error:', error);
        document.getElementById("characterInfo").innerHTML = "<p class='text-danger'>Failed to fetch additional character data.</p>";
    });
}

function displayCharacter(character) {
    var html = "<h3>Character Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    html += "<tr><th>Name</th><td>" + character.name + "</td></tr>";
    html += "<tr><th>Height</th><td>" + character.height + "</td></tr>";
    html += "<tr><th>Mass</th><td>" + character.mass + "</td></tr>";
    html += "<tr><th>Hair Color</th><td>" + character.hair_color + "</td></tr>";
    html += "<tr><th>Skin Color</th><td>" + character.skin_color + "</td></tr>";
    html += "<tr><th>Eye Color</th><td>" + character.eye_color + "</td></tr>";
    html += "<tr><th>Birth Year</th><td>" + character.birth_year + "</td></tr>";
    html += "<tr><th>Gender</th><td>" + character.gender + "</td></tr>";
    html += "</table>";
    html += "</div>";

    
    html += "<h3>Homeworld Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    html += "<tr><th>Name</th><td>" + character.homeworld.name + "</td></tr>";
    html += "<tr><th>Rotation Period</th><td>" + character.homeworld.rotation_period + "</td></tr>";
    html += "<tr><th>Orbital Period</th><td>" + character.homeworld.orbital_period + "</td></tr>";
    html += "<tr><th>Diameter</th><td>" + character.homeworld.diameter + "</td></tr>";
    html += "<tr><th>Climate</th><td>" + character.homeworld.climate + "</td></tr>";
    html += "<tr><th>Gravity</th><td>" + character.homeworld.gravity + "</td></tr>";
    html += "<tr><th>Terrain</th><td>" + character.homeworld.terrain + "</td></tr>";
    html += "<tr><th>Surface Water</th><td>" + character.homeworld.surface_water + "</td></tr>";
    html += "<tr><th>Population</th><td>" + character.homeworld.population + "</td></tr>";
    html += "</table>";
    html += "</div>";

    
    html += "<h3>Films Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    character.films.forEach(film => {
        html += "<tr><td>Title</td><td>" + film.title + "</td></tr>";
        html += "<tr><td>Episode ID</td><td>" + film.episode_id + "</td></tr>";
        html += "<tr><td>Director</td><td>" + film.director + "</td></tr>";
        html += "<tr><td>Producer</td><td>" + film.producer + "</td></tr>";
        html += "<tr><td>Release Date</td><td>" + film.release_date + "</td></tr>";
        html += "<tr><td>Opening Crawl</td><td>" + film.opening_crawl + "</td></tr>";
    });
    html += "</table>";
    html += "</div>";

    
    html += "<h3>Species Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    character.species.forEach(species => {
        html += "<tr><th>Name</th><td>" + species.name + "</td></tr>";
        html += "<tr><th>Classification</th><td>" + species.classification + "</td></tr>";
        html += "<tr><th>Designation</th><td>" + species.designation + "</td></tr>";
        html += "<tr><th>Average Height</th><td>" + species.average_height + "</td></tr>";
        html += "<tr><th>Skin Colors</th><td>" + species.skin_colors + "</td></tr>";
        html += "<tr><th>Hair Colors</th><td>" + species.hair_colors + "</td></tr>";
        html += "<tr><th>Eye Colors</th><td>" + species.eye_colors + "</td></tr>";
        html += "<tr><th>Average Lifespan</th><td>" + species.average_lifespan + "</td></tr>";
        html += "<tr><th>Homeworld</th><td>" + species.homeworld + "</td></tr>";
        html += "<tr><th>Language</th><td>" + species.language + "</td></tr>";
    });
    html += "</table>";
    html += "</div>";

    
    html += "<h3>Vehicles Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    character.vehicles.forEach(vehicle => {
        html += "<tr><th>Name</th><td>" + vehicle.name + "</td></tr>";
        html += "<tr><th>Model</th><td>" + vehicle.model + "</td></tr>";
        html += "<tr><th>Manufacturer</th><td>" + vehicle.manufacturer + "</td></tr>";
        html += "<tr><th>Cost in Credits</th><td>" + vehicle.cost_in_credits + "</td></tr>";
        html += "<tr><th>Length</th><td>" + vehicle.length + "</td></tr>";
        html += "<tr><th>Max Atmosphering Speed</th><td>" + vehicle.max_atmosphering_speed + "</td></tr>";
        html += "<tr><th>Crew</th><td>" + vehicle.crew + "</td></tr>";
        html += "<tr><th>Passengers</th><td>" + vehicle.passengers + "</td></tr>";
        html += "<tr><th>Cargo Capacity</th><td>" + vehicle.cargo_capacity + "</td></tr>";
        html += "<tr><th>Consumables</th><td>" + vehicle.consumables + "</td></tr>";
        html += "<tr><th>Vehicle Class</th><td>" + vehicle.vehicle_class + "</td></tr>";
    });
    html += "</table>";
    html += "</div>";

    
    html += "<h3>Starships Information</h3>";
    html += "<div class='table-responsive'>";
    html += "<table class='table table-bordered'>";
    character.starships.forEach(starship => {
        html += "<tr><th>Name</th><td>" + starship.name + "</td></tr>";
        html += "<tr><th>Model</th><td>" + starship.model + "</td></tr>";
        html += "<tr><th>Manufacturer</th><td>" + starship.manufacturer + "</td></tr>";
        html += "<tr><th>Cost in Credits</th><td>" + starship.cost_in_credits + "</td></tr>";
        html += "<tr><th>Length</th><td>" + starship.length + "</td></tr>";
        html += "<tr><th>Max Atmosphering Speed</th><td>" + starship.max_atmosphering_speed + "</td></tr>";
        html += "<tr><th>Crew</th><td>" + starship.crew + "</td></tr>";
        html += "<tr><th>Passengers</th><td>" + starship.passengers + "</td></tr>";
        html += "<tr><th>Cargo Capacity</th><td>" + starship.cargo_capacity + "</td></tr>";
        html += "<tr><th>Consumables</th><td>" + starship.consumables + "</td></tr>";
        html += "<tr><th>Hyperdrive Rating</th><td>" + starship.hyperdrive_rating + "</td></tr>";
        html += "<tr><th>MGLT</th><td>" + starship.MGLT + "</td></tr>";
        html += "<tr><th>Starship Class</th><td>" + starship.starship_class + "</td></tr>";
    });
    html += "</table>";
    html += "</div>";

    document.getElementById("characterInfo").innerHTML = html;
}
