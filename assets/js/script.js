const btnList = document.querySelectorAll(`.roundBtn`);

btnList.forEach((btnEl) => {
    btnEl.addEventListener("click", () => {
        document.querySelector(".plus")?.classList.remove("plus");
        btnEl.classList.add("plus");
    });
});

const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
    try {
        thankYou(document.querySelector(".plus").innerText);
    } catch (err) {
        console.error(err);
        alert("Please select a number");
    }
});

function thankYou(id) {
    const container = document.querySelector(".container");
    removeAllChildNodes(container);
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.flexWrap = "wrap";
    const imagen = document.createElement("img");
    imagen.setAttribute("src", "./images/illustration-thank-you.svg");
    imagen.classList.add("gracias");
    container.appendChild(imagen);
    const boton = document.createElement("button");
    boton.classList.add("seleccion");
    boton.innerText = `You selected ${id} out of 5`;
    container.appendChild(boton);
    const titulo = document.createElement("h1");
    titulo.innerText = `Thank You!`;
    container.appendChild(titulo);
    const apreciacion = document.createElement("p");
    apreciacion.innerText = `Thank you! We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
    container.appendChild(apreciacion);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
