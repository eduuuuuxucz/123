function abrirCaja() {
    const box = document.getElementById("box");
    const bouquet = document.getElementById("bouquet");

    box.classList.add("open");

    setTimeout(() => {
        bouquet.style.display = "block";
    }, 800);
}