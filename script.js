
function Criptografar() {
    const dicionario = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    resultado = "";
    texto = document.getElementById("texto").value;

    for (i = 0; i < texto.length; i++) {
        letra = texto[i];

        if (dicionario[letra] !== undefined)
            resultado += dicionario[letra];
        else
            resultado += letra

    }
    Mostrar(resultado);
}

function Descriptografar() {
    const dicionario = {
        'ai': 'a',
        'enter': 'e',
        'imes': 'i',
        'ober': 'o',
        'ufat': 'u'
    };
    texto = document.getElementById("texto").value;

    for (let padrao in dicionario) {
        if (dicionario.hasOwnProperty(padrao)) {
            let regex = new RegExp(padrao, 'gi');
            texto = texto.replace(regex, dicionario[padrao]);
        }
    }
    Mostrar(texto);
}

function Mostrar(texto) {
    document.getElementById("textoFormatado").value = texto
}

function Copiar() {
    let campo = document.getElementById("textoFormatado");
    campo.select();
    document.execCommand("copy");
}