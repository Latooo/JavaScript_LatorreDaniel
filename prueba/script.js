function searchCharacter() {
    const characterId = document.getElementById('characterId').value.trim().toLowerCase();
    const apiUrl = `https://swapi.py4e.com/api/people/${characterId}/`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayCharacterData(data);
        })
        .catch(error => {
            console.error('Error fetching character data:', error);
        });
}

function displayCharacterData(character) {
    const tableBody = document.getElementById('characterData');
    tableBody.innerHTML = '';

    const homeworldPromise = character.homeworld ? fetchHomeworld(character.homeworld) : Promise.resolve('Unknown');
    const filmsPromise = character.films ? fetchFilms(character.films) : Promise.resolve('Unknown');

    Promise.all([homeworldPromise, filmsPromise])
        .then(([homeworld, films]) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${character.name}</td>
                <td>${character.height}</td>
                <td>${character.mass}</td>
                <td>${character.hair_color}</td>
                <td>${character.skin_color}</td>
                <td>${character.eye_color}</td>
                <td>${character.birth_year}</td>
                <td>${character.gender}</td>
                <td>${homeworld}</td>
                <td>${films}</td>
            `;
            tableBody.appendChild(row);
        })
        .catch(error => {
            console.error('Error displaying character data:', error);
        });
}

async function fetchHomeworld(homeworldUrl) {
    try {
        const response = await fetch(homeworldUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.name;
    } catch (error) {
        console.error('Error fetching homeworld data:', error);
        return 'Unknown';
    }
}

async function fetchFilms(filmsUrls) {
    try {
        const promises = filmsUrls.map(async filmUrl => {
            const response = await fetch(filmUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            return data.title;
        });
        const titles = await Promise.all(promises);
        return titles.join(', ');
    } catch (error) {
        console.error('Error fetching film data:', error);
        return 'Unknown';
    }
}
