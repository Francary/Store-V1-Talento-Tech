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

        const arryFotos = [70497, 262959 ,769969]
        const URL = `https://api.pexels.com/v1/photos/${arryFotos[2]}`
     
        const res = await fetch(URL, {
            method: "GET",
            headers: {
                "Authorization": APIKEY
            }
        })

        const data = await res.json();
        console.log("Respuesta de Consulta:", data);  

        
        
    } catch (error) {
        
    }
    
}

buscarProductos()