let modal = document.getElementById("modal")
let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let cerrarModal = document.getElementById("cerrarModal")
let cerrarModal3 = document.getElementById("cerrarModal3")
let seccionModal= document.getElementById("seccionModal")
let modalEnlaces = document.getElementById("modalEnlaces")

let interArch = [
    {
        img: "./assets/NinteIcon.png",
        nombre:"Ninites",
        descripcion: "Chrome, Moxilla, 7Zip, VLC",
        descarga:"https://ucceduco-my.sharepoint.com/:u:/g/personal/miguel_francov_ucc_edu_co/IQCDaCXDW-HaTqPAa2GRbatpASGhEZEhAzlrBSlX7ofUDCU?e=m8F0dT?download=1"
    },
    {
        img: "./assets/silverIcon.png",
        nombre:"silverlight",
        descripcion: "Panacea",
        descarga:"https://ucceduco-my.sharepoint.com/:u:/g/personal/miguel_francov_ucc_edu_co/IQBsQi3Pu1baRql7_T3wXpovAVQtzURx-pIXjpBp0g-8HNY?e=r1gAg2?download=1"
    },
    {
        img: "./assets/winLogo.png",
        nombre:"Windows 11",
        descripcion: "Sistema Operativo",
        descarga:"https://ucceduco-my.sharepoint.com/:u:/g/personal/miguel_francov_ucc_edu_co/IQCSZDN21s6lSrdTw9uGmsLHAVPlj9gHN3vBRu6jrxrzGsA?e=aRx56A?download=1"
    },
     {
        img: "./assets/office365Icon.png",
        nombre:"Office 365",
        descripcion: "Excel, word, PowerPoint",
        descarga:"https://ucceduco-my.sharepoint.com/:f:/g/personal/miguel_francov_ucc_edu_co/IgC0wlWGdVnOSbVCLPRn91v_AZ-Uu9Qmt7gaxTnZKjL0SJY?e=RCefUF?download=1"
    },
    {
        img: "./assets/office365Icon.png",
        nombre:"Office 2019",
        descripcion: "Excel, word, PowerPoint",
        descarga:"https://ucceduco-my.sharepoint.com/:f:/g/personal/miguel_francov_ucc_edu_co/IgBMUowNeyxpSZzzuuOiuZ3uAbbJekCwzRvyQmIjIbkTK-o?e=Y7Bzew?download=1"
    },
    {
        img: "./assets/sophosIcon.png",
        nombre:"Sophos",
        descripcion: "AntiVirus",
        descarga:"https://ucceduco-my.sharepoint.com/:u:/g/personal/miguel_francov_ucc_edu_co/IQBMZK9o8mB5QJQsO7v7cnSMAb_KBAmYHdX2pmH-Ptq2e3U?e=GAWIg0?download=1"
    },
    {
        img: "./assets/freshIcon.png",
        nombre:"FreshService",
        descripcion: "Registro Equipos",
        descarga:"https://ucceduco-my.sharepoint.com/:f:/g/personal/miguel_francov_ucc_edu_co/IgDBATRWqbZvQbkaV8sebISBAamq0HNBpW8t8xmgcxpAeRI?e=QuMhMk?download=1"
    },
    {
        img: "./assets/rufus.png",
        nombre:"Rufus",
        descripcion: "Imagen en Memoria",
        descarga:"https://ucceduco-my.sharepoint.com/:f:/g/personal/miguel_francov_ucc_edu_co/IgDBATRWqbZvQbkaV8sebISBAamq0HNBpW8t8xmgcxpAeRI?e=QuMhMk?download=1"
    }
]

card1.addEventListener("click", () =>{
    modal.showModal();
    modal.style.display = "inline"
    seccionModal.innerHTML = "";
    for(let i = 0; i < interArch.length; i++){
        seccionModal.innerHTML += `
        <div id="contDatos"> 
            <img src="${interArch[i].img}">
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

card3.addEventListener("click", () =>{
    modalEnlaces.showModal();
    modalEnlaces.style.display = "inline"
})

cerrarModal3.addEventListener("click", () =>{
    modalEnlaces.close();
    modalEnlaces.style.display = "none"
})