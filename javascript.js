document.addEventListener("DOMContentLoaded", function() {
    const productos = document.querySelectorAll(".producto");
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const closeModal = document.getElementById("close");

    productos.forEach(producto => {
        producto.addEventListener("click", function() {
            const imgSrc = this.getAttribute("data-img");
            const title = this.getAttribute("data-name");
            const desc = this.getAttribute("data-desc");

            modalImg.src = imgSrc;
            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
