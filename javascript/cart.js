let cart = []

const getCart = (id) =>{
    cart.push({id})
    alert(`Se Agrego al carrito ${id}`)
}

window.addEventListener("beforeunload",()=>{
    localStorage.setItem("Pedido",JSON.stringify(cart))
    });
    