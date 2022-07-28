//USUARIOS
const usuarios = [];

class NuevoUsuario{
    constructor(nombre,email,edad,sexo,barrio){
        this.nombre = nombre;
        this.email = email;
        this.edad = parseInt(edad);
        this.sexo = sexo;
        this.barrio = barrio;
    }
}

function crearUsuario(nombre,email,edad,sexo,barrio){
    const usuario = new NuevoUsuario (nombre,email,edad,sexo,barrio);
    return usuario;
}

function cargarUsuario(usuario){
    usuarios.push(usuario);
}



(async () => {

    const { value: formValues } = await Swal.fire({  
    title: 'Suscribite!',
    background:'white ',   
    html:
        '<input id="swal-input1" class="swal-input" placeholder="Ingresa tu nombre">' +
        '<input id="swal-input2" class="swal-input" placeholder="Ingresa tu email">' +
        '<input id="swal-input3" class="swal-input" placeholder="Ingresa tu edad">' +
        '<input id="swal-input4" class="swal-input" placeholder="Ingresa tu sexo">' +
        '<input id="swal-input5" class="swal-input" placeholder="Ingresa tu barrio">',
    showCancelButton: true,
    confirmButtonText: 'Registrarme',
    cancelButtonText: 'Salir!',
    focusConfirm: false,
    preConfirm: () => {
        return [
        nombre = document.getElementById('swal-input1').value,
        email = document.getElementById('swal-input2').value,
        edad = document.getElementById('swal-input3').value,
        sexo = document.getElementById('swal-input4').value,
        barrio = document.getElementById('swal-input5').value,
        ]
    }
    })
    
    if (formValues) {
        cargarUsuario(crearUsuario(nombre,email,edad,sexo,barrio));
        guardarLocal("Suscriptores", JSON.stringify(usuarios));
        console.log(usuarios);
    }
    
    })()



/*


informacionCompra = document.getElementById("informacionDeCompra__container")




const hombres = usuarios.filter((el) => el.sexo.includes("Masculino"));
console.log(hombres);

const mujeres = usuarios.filter((el) => el.sexo.includes("Femenino"));
console.log(mujeres);

const emails = usuarios.map((el) => el.email);
console.log(emails);

const adolescentes = usuarios.filter((el) => (el.edad < 21));
console.log(adolescentes);

const jovenes = usuarios.filter((el) => (el.edad < 27));
console.log(jovenes);


const buscado = usuarios.find((el) => el.barrio === "Microcentro");
console.log(buscado);*/









//CARRITO DE COMPRAS






const productos = [
    {id: 1, nombre: "REMERA ACTIVA 1", precio: 2800, img:"./img/remera1Activa.png"},
    {id: 2, nombre: "REMERA ACTIVA 2", precio:3200,img:"./img/remera2Activa.png"},
    {id: 3, nombre:"REMERA ACTIVA 3", precio: 3500, img:"./img/remera3Activa.png"},
    {id: 4, nombre: "BUZO ACTIVA 1", precio: 6800, img: "./img/buzo1Activa.png"},
    {id: 5, nombre:"BUZO ACTIVA 2", precio:7500, img:"./img/buzo2Activa.png"},
    {id: 6, nombre: "BUZO ACTIVA 3", precio: 9800, img:"./img/buzo3Activa.png"},
    {id: 7, nombre: "PERLAS ACTIVA", precio: 14700, img:"./img/perlasActiva.png"},
    {id: 8, nombre: "COLGANTE ACTIVA", precio: 10000, img:"./img/colganteActiva.png" },
];

//Contador en el carrito de compras

const carrito = []

const cardsContainer = document.getElementById("merchandise__cards__container")

const iconCart = document.querySelector("#iconCart")
let cartNumber = document.createElement("span")
cartNumber.innerText = 0
iconCart.appendChild(cartNumber)

function addToCart (id) {
    carrito.push ( productos.find ( r => r.id == id ))
    cartNumber.innerText = carrito.length;
    guardarLocal("Carrito de compra",JSON.stringify(carrito));
    console.log(carrito);
    
    Toastify({

        text: "Se agrego al carrito exitosamente",        
        duration: 16000,
        close: true,
        gravity: "bottom",
        position: "right", 
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "greenyellow",
        
        }}).showToast();
    
}



//Despliegue de productos en html dependiente de array de productos  

let html = productos.map ( (producto) => {
    return (
        `
        <div class="">
            <div class="card">
                <div class="card-image">

                    <img src="${producto.img}">
                
                </div>
        
                <div class="card-content">
        
                    <span class="card-title">${producto.nombre.toUpperCase()}</span>
                    <p>$${producto.precio}</p>
        
                </div>
            
                <div class="card-action">
                    <button type="button"   onClick="addToCart(${producto.id})" class="btnComprar" value="Comprar">Comprar</button>
                </div>

            </div>
        </div>`
    )
})

cardsContainer.innerHTML = html





//Almacenar Carrito De Compras en Local Storage

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave,valor)
};


//Buscdor

const search = document.getElementById("buscador");


function filtrarProductos(filtro){
    let filtrado = productos.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
};


search.addEventListener("keyup" , (e) => {
    e.preventDefault();
    cardsContainer.innerHTML = "";
    let filtro = filtrarProductos(search.value.toUpperCase());
    let html = filtro.map ( (producto) => {
        return (
            `
            <div class="">
                <div class="card">
                    <div class="card-image">
    
                        <img src="${producto.img}">
                    
                    </div>
            
                    <div class="card-content">
            
                        <span class="card-title">${producto.nombre.toUpperCase()}</span>
                        <p>$${producto.precio}</p>
            
                    </div>
                
                    <div class="card-action">
                        <button type="button"   onClick="addToCart(${producto.id})" class="btnComprar" value="Comprar">Comprar</button>
                    </div>
    
                </div>
            </div>`
        )
    })
    
    cardsContainer.innerHTML = html
    
})

