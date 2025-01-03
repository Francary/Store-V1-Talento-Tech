let cart = JSON.parse(localStorage.getItem("Pedido")) || []
//Agregar un Producto al Cart
const getCart = (id) =>{
    cart.push({id})
    alert(`Se Agrego al carrito ${id}`)
    localStorage.setItem("Pedido", JSON.stringify(cart));
    contador()
}

const deleteItem = (index) => {
    let cart = JSON.parse(localStorage.getItem("Pedido")) || [];      
    cart.splice(index, 1);
    localStorage.setItem("Pedido", JSON.stringify(cart));
    buscarProductosCart();
    if(cart.length === 0 || !cart ){document.getElementById("total-compra").innerHTML = 
        `
            <h3>Eliminastes todos los platos del Pedido</h3>
            <a href="productos.html">
                <button class="btn btn-primary"> Ir A Comprar</button>
            <a>
        `
        contador()
    }else{
        sumaCompra()
    }
};

const finalizarPedido =() =>{
    localStorage.removeItem("Pedido")
    alert("Pago Procesado Correctamente")
    contador()
    buscarProductosCart()
    let cart = JSON.parse(localStorage.getItem("Pedido")) || []
    if(cart.length === 0 || !cart ){document.getElementById("total-compra").innerHTML = 
        ` 
            <h3>Pago procesado Correctamente !</h3>
            <a href="productos.html">
                <button class="btn btn-primary"> Volver a Comprar</button>
            <a>
        
        `
    }else{

        sumaCompra()
    }
}

const eliminarPedido =() =>{
    localStorage.removeItem("Pedido")
    alert("Pedido Eliminado")
    contador()
    buscarProductosCart()
    let cart = JSON.parse(localStorage.getItem("Pedido")) || []
    if(cart.length === 0 || !cart){document.getElementById("total-compra").innerHTML = 
        ` 
            <h3>Pedido Eliminado Correctamente!</h3>
            <a href="productos.html">
                <button class="btn btn-primary"> Ir A Comprar</button>
            <a>
        
        `
    }else{

        sumaCompra()
    }
}

const sumaCompra = () =>{
    try {
        const APIKEY = "6pt3k8glLgKKFcfTjanvTvZaORINjNpC3SEn76dlnIEe0D4YbLCRTXFo"
        let cart = JSON.parse(localStorage.getItem("Pedido")) || [];
        let totalCompra = 0
              
        cart.forEach(async (item, index) => {
            const id = item.id 
            const URL = `https://api.pexels.com/v1/photos/${id}`
            const res = await fetch(URL, {
                method: "GET",
                headers: {
                    "Authorization": APIKEY
                }
            })
            const data = await res.json();
            let precio = Math.round(data.id / (1 + '0'.repeat(Number(data.id.toString().length - 2))))
            
          totalCompra += precio
            document.getElementById("total-compra").innerHTML = `${cart.length >= 0 ? 
                `
                    <h3>Total Pedido: U$D  ${totalCompra} </h3>
                    <button onclick="finalizarPedido()" class="btn btn-success "> Pagar  </button>
                    <button onclick="eliminarPedido()" class="btn btn-danger "> Eliminar </button>
                ` 
                :
                    "Aun no Agregas un Producto al Carrito 5" } `
            // console.log(totalCompra);
            
        })
    } catch (error) {
       
    }
   
}
sumaCompra()

const contador = () =>{
    let cart = JSON.parse(localStorage.getItem("Pedido")) || []
    let contador = cart.length
    
    if(cart.length>0){

        document.getElementById("contador").textContent = contador  
        document.getElementById("contador").classList.add("contador")
    }else{
        document.getElementById("contador").textContent = ""
        document.getElementById("contador").classList.remove("contador")
    }
}
contador()

// window.addEventListener("beforeunload",()=>{
//     localStorage.setItem("Pedido",JSON.stringify(cart))
//     });
// Actualiza Fain Icon en Navidad
const fainIcon = () =>{
    if( new Date().getMonth() === 11 ){
        document.getElementById("fain-icon").href="/img/logoNavidad.ico"    
        document.getElementById("logo").src="/img/logoNavidad.png"    
    }else{
        document.getElementById("fain-icon").href="/img/logo.ico"
        document.getElementById("logo").src="/img/logo.png"
    }
}
fainIcon()