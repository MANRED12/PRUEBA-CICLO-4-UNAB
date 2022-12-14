//Creacion de arreglo de publicaciones
let publicaciones = []

export function crearPublicacion(req, res) {
    
    let id = Math.random().toString(36).slice(2)

    let publicacion = {
        "Nueva publicacion": req.body.publicacion,
        id
    }

    res.json(publicacion)

    publicaciones.push(publicacion)
}

export function leerPublicaciones(req, res) {
    res.json(publicaciones)
}

export function leerPublicacion(req, res) {
    
    let id = req.params.id

    for (let i = 0; i < publicaciones.length; i++) {
        var publicacion = publicaciones[i]
        if (publicacion.id == id) {
            break;
        }
    }
    res.json(publicacion)     
}