let i = 0;
const notas = [];

function salva_nota() {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        const div_lista = document.createElement("div");
        const texto = document.querySelector(".nota_text");
        const lista_numeros = document.querySelector(".lista");
        if (texto.value >= 0 && texto.value <= 10) {
            div_lista.innerText = `A Nota ${i + 1}: foi ${texto.value} \n`;
            notas[i] = texto.value
            lista_numeros.appendChild(div_lista);
            i += 1;
        }
        else {
            alert("Digite uma nota valida!!!!")
        }


        return notas;
    });
}

function calcular_media() {
    let media = 0;
    let soma = 0;
    const media_final = document.querySelector("#media");
    const btn_calcular = document.querySelector("#calcular")
    btn_calcular.addEventListener("click", () => {
        for(let nota of notas){
            nota = parseFloat(nota);
            soma = soma + nota;
        }
        media = soma / notas.length
        media = media.toFixed(2)
        console.log(media)
        media_final.innerText = media;
    soma = 0;
    media = 0;
    })







}

salva_nota();
calcular_media();

