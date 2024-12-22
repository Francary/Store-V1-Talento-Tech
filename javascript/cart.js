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
    buscarProductos();
};

window.addEventListener("beforeunload",()=>{
    localStorage.setItem("Pedido",JSON.stringify(cart))
    });