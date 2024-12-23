const buscarProductosCart = async () => {
    try {
        const APIKEY = "6pt3k8glLgKKFcfTjanvTvZaORINjNpC3SEn76dlnIEe0D4YbLCRTXFo"

        // Recuperar el carrito del localStorage
        let cart = JSON.parse(localStorage.getItem("Pedido")) || [];
        document.getElementById("container-productos").innerHTML = '';
        // let totalCompra = 0
               
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
                    
            // Funcion de para calcular un precio segun el id del Producto

            let precio = Math.round(data.id / (1 + '0'.repeat(Number(data.id.toString().length - 2))))
            
        //   totalCompra += precio

            
            let cardProducto =
            `    
            <div class="card-productos">
                <img class="producto" src="${data.src.tiny}" alt="${data.alt}">
                <p> U$D ${precio}</p>
                <button onclick="deleteItem(${index})" class="btn btn-danger">Eliminar</button>
            </div>
            `
            
            document.getElementById("container-productos").insertAdjacentHTML("beforeend", cardProducto)
            // document.getElementById("total-compra").innerHTML = `${cart.length >= 0 ? `<h3>Total Pedido: U$D  ${totalCompra} </h3>` : "Aun no Agregas un Producto al Carrito" } `
           
            const contadorCart= () =>{
            
    let contador = cart.length
    if(cart.length>0){

        document.getElementById("contador").textContent = contador  
        document.getElementById("contador").classList.add("contador")
    }else{
        document.getElementById("contador").textContent = ""
        document.getElementById("contador").classList.remove("contador")
    }
            }
            contadorCart()
        })
    } catch (error) {

    }

}


buscarProductosCart()