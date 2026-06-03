let modal = document.getElementById("modal")
let card1 = document.getElementById("card1")
let cerrarModal = document.getElementById("cerrarModal")
let seccionModal= document.getElementById("seccionModal")

let interArch = [
    {
        img: "",
        nombre:"Ninites",
        descripcion: "Chrome, Moxilla, 7Zip, VLC",
        descarga:""
    },
    {
        img: "",
        nombre:"silverlight",
        descripcion: "Panacea",
        descarga:""
    },
    {
        img: "",
        nombre:"Windows 11",
        descripcion: "Sistema Operativo",
        descarga:""
    },
     {
        img: "",
        nombre:"Office 365",
        descripcion: "Excel, word, PowerPoint",
        descarga:""
    },
    {
        img: "",
        nombre:"Office 2019",
        descripcion: "Excel, word, PowerPoint",
        descarga:""
    },
    {
        img: "",
        nombre:"ExamBrowser",
        descripcion: "Herramienta para Examenes",
        descarga:""
    }
]

card1.addEventListener("click", () =>{
    modal.showModal();
    modal.style.display = "inline"
    seccionModal.innerHTML = "";
    for(let i = 0; i < interArch.length; i++){
        seccionModal.innerHTML += `
        <div id="contDatos"> 
            <img src"${interArch[i].img}">
            <p>${interArch[i].nombre}</p>
            <p>${interArch[i].descripcion}</p>
            <button><a href="${interArch[i].descarga}">Descargar</a></button>
        </div>
        `
    }
})

cerrarModal.addEventListener("click", () =>{
    modal.close();
    modal.style.display = "none"
})