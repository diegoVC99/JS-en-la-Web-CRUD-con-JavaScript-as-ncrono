//Abrir http(metodo, url)

// CRUD  - Metodos HTTP
// CREATE - POST
// READ - GET
// UPDATE - PUT/PATCH
// DELETE - DELETE

//fetch API


const listaClientes = () => fetch("http://localhost:3000/perfil").then( respuesta => respuesta.json() );

const crearCliente = (nombre, email) => {
    return fetch("http://localhost:3000/perfil", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre,email, id: uuid.v4()}),
    })
}

const eliminarCliente = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
    })
}

const detalleCliente = (id) => {
    return fetch(`http://localhost:3000/perfil/${id}`).then( (resuesta) => 
    resuesta.json()
    );
};


const actualizarCliente = (nombre,email,id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
    method:"PUT" ,
    headers: {
        "Content-Type":"application/json",
    },
    body: JSON.stringify({ nombre, email}),
    }) 
    .then( (respuesta) => respuesta)
    .catch((err) => console.log(err));   
};

export const clientServices = {
    listaClientes,
    crearCliente,
    eliminarCliente,
    detalleCliente,
    actualizarCliente,
};


/*
data.forEach( (perfil) => {
    const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email);
    table.appendChild(nuevaLinea);      
});
*/
