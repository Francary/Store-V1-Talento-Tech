let cart = []

const getCart = (id) =>{
    cart.push({id})
    alert(`Se Agrego al carrito ${id}`)
    localStorage.setItem("Pedido", JSON.stringify(cart));
}

const deleteItem = (index) => {
    let cart = JSON.parse(localStorage.getItem("Pedido")) || [];      
    cart.splice(index, 1);
    localStorage.setItem("Pedido", JSON.stringify(cart));
    console.log(cart.length);   
    buscarProductos();
    if(cart.length === 0 ){document.getElementById("total-compra").innerHTML = 
        ` <h3>Eliminastes todos los platos del Pedido</h3>
        
        `

    }else{

        sumaCompra()
    }
};

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
            document.getElementById("total-compra").innerHTML = `${cart.length >= 0 ? `<h3>Total Pedido: U$D  ${totalCompra} </h3>` : "Aun no Agregas un Producto al Carrito 5" } `
            console.log(totalCompra);
            
        })
    } catch (error) {
       
    }
   
}
sumaCompra()

window.addEventListener("beforeunload",()=>{
    localStorage.setItem("Pedido",JSON.stringify(cart))
    });