var i = 0;
var notas = [];

function salva_nota() {
    var btn = document.querySelector("#btn");
    var text_box = document.getElementById("#box");
    btn.addEventListener("click", () => {
        notas[i] = document.getElementById("nota_text").value;
        document.getElementById("#line_box").innerHTML = notas[i];
        console.log(notas[i]);
        
        i += 1;
        console.log(notas);
        

        

    });
}

salva_nota();


