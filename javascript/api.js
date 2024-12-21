const buscarProductos = async () => {   
    try {
        const APIKEY = "6pt3k8glLgKKFcfTjanvTvZaORINjNpC3SEn76dlnIEe0D4YbLCRTXFo"

        // Buscar fotos por una palabra
        
        // Params
        const query = "bandera" // Palabra clave para buscar
        const page = 1 // Numero de Pagina a Consultar Default 1
        const per_page = 20 // Numero de vistas por Pagina Default 15 maximo 80

        // URL
        // const URL = `https://api.pexels.com/v1/search/?page=${page}&per_page=${per_page}&query=${query}`
      
        // Buscar foto por el ID
        const arryFotos = [1640777,70497,262959,769969,361184,1126359,376464,2418486]

        for (const id of arryFotos) {
        const URL = `https://api.pexels.com/v1/photos/${id}`
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": APIKEY
            }
        })
        
        const data = await res.json();      
        console.log("Respuesta de Consulta:", data);  

        // Funcion de para calcular un precio segun el id del Producto
       
        let precio =  Math.round( data.id /  ( 1 + '0'.repeat( Number( data.id.toString().length - 2) ) ))

        let cardProducto =
        `        
            <div class="card-productos">
                <img class="producto" src="${data.src.tiny}" alt="${data.alt}">
                <p> U$D ${precio}</p>
                <button class="btn btn-primary">Pedir</button>
            </div>
        `

        document.getElementById("container-productos").insertAdjacentHTML("beforeend", cardProducto)  
    }
    } catch (error) {
        
    }
    
}

buscarProductos()