document.addEventListener('DOMContentLoaded', function() {
    const collapsible = document.querySelector(".collapsible");
    const content = document.querySelector(".content");

    collapsible.addEventListener("click", function() {
        this.classList.toggle("active");
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


function verificarParidade() {
    const input = document.getElementById("numeroInput").value;
    const resultado = document.getElementById("resultado");
    

    const numero = parseInt(input);
    const paridade = (numero % 2 === 0) ? "Par" : "Ímpar";
    resultado.textContent = `O número ${numero} é ${paridade}.`;
}
