const textArea = document.querySelector(".texto_principal");
const mensaje = document.querySelector(".output");
const imagen = document.getElementById("reloj");
const texto = document.querySelector(".encriptar_textos");
const copiar = document.getElementById("Copiar");
const encriptacion = document.querySelector(".encriptar");
const boton1= document.querySelector(".boton1");
const boton2= document.querySelector(".boton2");

const ancho = encriptacion.offsetWidth;
function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    imagen.style.display = 'none';
    texto.style.display = 'none';
    copiar.style.display = 'block';
    if(ancho <=300){
        encriptacion.style.height = "390px";
    }else if(ancho <=400){

    }else if(ancho <=700){
        encriptacion.style.height = "690px";
    }
}

function encriptar(stringEncriptar){
    let matrices = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]
                    ];

    stringEncriptar = stringEncriptar.toLowerCase()

    for(let i=0; i<matrices.length; ++i){
        if(stringEncriptar.includes(matrices[i][0])){
            stringEncriptar = stringEncriptar.replaceAll(matrices[i][0], matrices[i][1])
        }
    }
    return stringEncriptar
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = " ";
    imagen.style.display = 'none';
    texto.style.display = 'none';
}

function desencriptar(stringDesencriptar){
    let matrices = [["e", "enter"],
                    ["i", "imes"],
                    ["a", "ai"],
                    ["o", "ober"],
                    ["u", "ufat"]
                    ];

    stringDesencriptar = stringDesencriptar.toLowerCase()

    for(let i=0; i<matrices.length; ++i){
        if(stringDesencriptar.includes(matrices[i][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(matrices[i][1], matrices[i][0])
        }
    }
    return stringDesencriptar
}

function copiarTexto() {
    const copiar = document.getElementById("Copiar_texto");
    copiar.select();
    document.execCommand('copy');

}
