let i = 0;
const notas = [];

function salva_nota() {
    const btn = document.querySelector("#btn");
    btn.addEventListener("click", () => {
        const div_lista = document.createElement("div");
        const texto = document.querySelector(".nota_text");
        const lista_numeros = document.querySelector(".lista");
        if (texto.value >= 0 && texto.value <= 10) {
            // console.log(texto.value);
            div_lista.innerText = `A Nota ${i + 1}: foi ${texto.value} \n`;
            notas[i] = texto.value
            lista_numeros.appendChild(div_lista);
            console.log(notas)
            i += 1;
        }
        else {
                alert("Digite uma nota valida!!!!")
            }

        

    });
}

function calcular_media() {
    const media = 0;
    let soma = 0;

    notas.forEach(nota => {
        soma += nota;
    })

    media = soma / notas.length


    console.log(media)
}

salva_nota();


