
function criptografar() {
    const texto = document.getElementById('inputText').value;
    const deslocamento = parseInt(document.getElementById('deslocamento').value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + deslocamento) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + deslocamento) % 26) + 97);
        }
        else {
            resultado += texto.charAt(i);
        }
    }

    document.getElementById('outputText').value = resultado;
}

function descriptografar() {
    const texto = document.getElementById('inputText').value;
    const deslocamento = parseInt(document.getElementById('deslocamento').value);
    let resultado = '';
    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 - deslocamento + 26) % 26) + 65);
        }
        else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 - deslocamento + 26) % 26) + 97);
        }
        else {
            resultado += texto.charAt(i);
        }
    }

    document.getElementById('outputText').value = resultado;
}

function limpar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function atualizarDeslocamento() {
    const deslocamento = document.getElementById('deslocamento').value;
    document.getElementById('valorDeslocamento').textContent = deslocamento;
}

window.onload = atualizarDeslocamento;
