


//crear metodos para obtener datos del DOM 
// adaptar para el caso


function ingresarRegistro(){

    
    let documento = document.getElementById('usuario').value;
    let password  = document.getElementById('password').value;
    
    // utilizar el metodo set para subir los datos a la base de datos
    firebase.database().ref('Usuarios/'+documento+0).once('value').then(
        function (result) {
            if(result){
                let title = result?.val()?.password;
                if(password == title){
                    document.getElementById('Ingreso').textContent='BIENVENIDO.';
                }else{
                    alert('Datos erroneos');
                }
            }else{
                alert('Datos erroneos desde la coleccion');
            }
            
        }
        )
    }
    
    
    let nombre_cliente = document.getElementById('').value;
    let apellido_cliente = document.getElementById('').value;
    let correo_cliente = document.getElementById('').value;
    let cedula_cliente = document.getElementById('').value;
    let metodo_contacto_cliente = document.getElementById('').value;
    let motivo_solicitud_cliente = document.getElementById('').value;
    let descripcion_solicitud_cliente = document.getElementById('').value;
    let servicios_afectados_cliente = document.getElementById('').value;
    let fecha_solicitud_cliente = document.getElementById('').value;
    let hora_solicitud_cliente = document.getElementById('').value;
    

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
