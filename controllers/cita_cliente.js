


//crear metodos para obtener datos del DOM 




// se crea el id para la base de datos, crear un método para auto incrementar el valor del id

let cita_id = 1;
// se crea el elemento a agregar en la base de datos
let cita_cliente = {
    'nombre_cliente': 'Manazanito',
    'apellido_cliente':'Velez',
    'correo_cliente':'Velez',
    'cedula_cliente':'Velez',
    'metodo_contacto_cliente':'Velez',
    'motivo_solicitud_cliente':'Velez',
    'descripcion_solicitud_cliente':'Velez',
    'servicios_afectados_cliente':'Velez',
    'fecha_solicitud_cliente':'Velez',
    'hora_solicitud_cliente':'Velez',
}


//crear constructor para solicitar cita 

// método para insertar datos
// firebase.database().ref('articles/' + article_id).set(article);


// método para buscar datos
// 

// método para 

firebase.database().ref('articles/' + article_id).once('value').then(
    function (snapshot) {
        var title = snapshot.val().title;
        console.log(title);
    }
)
