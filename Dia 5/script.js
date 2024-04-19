function esSeguro(tablero, fila, columna) {
    //fila
    for (let i = 0; i < columna; i++) {
        if (tablero[fila][i] === 'R') {
            return false;
        }
    }

    // diagonal superior izquierda
    for (let i = fila, j = columna; i >= 0 && j >= 0; i--, j--) {
        if (tablero[i][j] === 'R') {
            return false;
        }
    }

    //diagonal inferior izquierda
    for (let i = fila, j = columna; i < tablero.length && j >= 0; i++, j--) {
        if (tablero[i][j] === 'R') {
            return false;
        }
    }

    return true;
}

function ubicarReinas(tablero, columna) {
    if (columna >= 8) {
        return true;
    }

    for (let i = 0; i < 8; i++) {
        if (esSeguro(tablero, i, columna)) {
            tablero[i][columna] = 'R';
            if (ubicarReinas(tablero, columna + 1)) {
                return true;
            }
            tablero[i][columna] = 'O'; // backtrack
        }
    }

    return false;
}

function imprimirTablero(tablero) {
    for (let fila of tablero) {
        console.log(fila.join(' '));
    }
}

function main() {
    let tablero = Array.from({ length: 8 }, () => Array(8).fill('O'));

    const input = prompt("Posición de la primera reina (fila columna): ");
    const [fila, columna] = input.trim().split(' ').map(Number);
    tablero[fila - 1][columna - 1] = 'R';

    if (ubicarReinas(tablero, 0)) { // Iniciar desde la columna 0
        imprimirTablero(tablero);
    } else {
        console.log("No se pudo ubicar las reinas correctamente.");
    }
}

main();