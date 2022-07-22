const productos = [
    {id: 1, nombre: "remera Activa 1", precio: 2800, img:"./img/remera1Activa.png"},
    {id: 2, nombre: "remera Activa 2", precio:3200,img:"./img/remera2Activa.png"},
    {id: 3, nombre:"remera Activa 3", precio: 3500, img:"./img/remera3Activa.png"},
    {id: 4, nombre: "buzo Activa 1", precio: 6800, img: "./img/buzo1Activa.png"},
    {id: 5, nombre:"buzo Activa 2", precio:7500, img:"./img/buzo2Activa.png"},
    {id: 6, nombre: "buzo Activa 3", precio: 9800, img:"./img/buzo3Activa.png"},
    {id: 7, nombre: "perlas Activa", precio: 14700, img:"./img/perlasActiva.png"},
    {id: 8, nombre: "colgante Activa", precio: 10000, img:"./img/colganteActiva.png" },
];


//Despliegue de productos en html dependiente de array de productos  

const cardsContainer = document.getElementById("merchandise__cards__container");

function crearCards(array) {
    let html;
    for (const producto of array) {

        html= `
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
                <button type="button" id="${producto.id}" class="btnComprar" value="Comprar">Comprar</button>
            </div>

        </div>
        </div>`

        cardsContainer.innerHTML += html;
    }
}

crearCards(productos);


//Agregado de productos al carrito de compras








const btnComprar1 = document.getElementById("1"),
btnComprar2 = document.getElementById("2"),
btnComprar3 = document.getElementById("3"),
btnComprar4 = document.getElementById("4"),
btnComprar5 = document.getElementById("5"),
btnComprar6 = document.getElementById("6"),
btnComprar7 = document.getElementById("7"),
btnComprar8 = document.getElementById("8"),
btnComprar9 = document.getElementById("9");

const carritoDeCompra = [];


const detallesDeCompra = carritoDeCompra.map((el) => el.nombre),
totalDeCompra = carritoDeCompra.reduce ((acc,el) => acc + el.precio,0);

btnComprar1.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 1));
    console.log(carritoDeCompra);
    carritoCompleto();

}

btnComprar2.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 2));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar3.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 3));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar4.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 4));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar5.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 5));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar6.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 6));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar7.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 7));
    console.log(carritoDeCompra);
    carritoCompleto();
}

btnComprar8.onclick = () => {
    carritoDeCompra.push(productos.find((el) => el.id === 8));
    console.log(carritoDeCompra);
    carritoCompleto();
    guardarLocal("Carrito de compra",JSON.stringify(carritoDeCompra));

}



//Carrito de compras comlpeto

const contenedor = document.getElementById("contenedor"),
btnCarrito = document.getElementById("btnCarrito");


function carritoCompleto(){
    let html;
    for (const producto of carritoDeCompra) {
        html = `
    <section class="carritoFinal__container">
    <hr>
    <h3>Se añade al carrito:</h3>
    <hr>

    <div class="producto__carritoFinal__container">
    
    <div>
    <img class="imagen__carrito__final" src="${producto.img}">
    <div>
    <div>
    <span class="card-title">${producto.nombre.toUpperCase()}</span>
    </div>
    <div> 
    <p>$${producto.precio}</p>
    <button type="button" id="btnEliminar" value="Eliminar">Eliminar</button>
    </div>

    </div>
    </section>`
}

contenedor.innerHTML += html;
    }


//Buscdor

const btnBuscadorMerchandise = document.getElementById("btn__buscador__merchandise"),
search = document.getElementById("buscador");


function filtrarProductos(filtro){
    let filtrado = productos.filter((el) => {
        return el.nombre.includes(filtro);
    });
    return filtrado;
};


btnBuscadorMerchandise.onclick = (e) => {
    e.preventDefault();
    cardsContainer.innerHTML = "";
    let filtro = filtrarProductos(search.value);
    crearCards(filtro);
};

//Almacenar Carrito De Compras en Local Storage

const guardarLocal = (clave, valor) => {
    localStorage.setItem(clave,valor)
};

