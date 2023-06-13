var db= firebase.database();

var key;

var datosurl =new URLSearchParams(windows.location.search);

function consultarRegistro(){
    var db= firebase.database().ref().child("Solicitudes_citas");
    databse
        .once("value")

        .then(function (snapshot) {
            snapshot.forEach(function (data) {
                const id= datosurl.get("cedula");
                const key = data.key;

                if (id == key){
                    var nombre_cliente = data.val().nombre;
                    var apellido_cliente = data.val().apellido;
                    var cedula_cliente = data.val().cedula;
                    var descripcion_solicitud_cliente = data.val().descripcion;
                    var television_afectados_cliente = data.val().tvAfectado;
                    var intenet_afectados_cliente = data.val().internetAfectado;
                    var telefonia_afectados_cliente = data.val().telefoniaAfectado;
                    var telefonia_movil_afectados_cliente = data.val().movilAfectado;
                    var fecha_solicitud_cliente = data.val().fecha;
                    var hora_solicitud_cliente = data.val().hora;

                    // implementar envio de datos al html
                        ("nombre_cliente").html(nombre_cliente);
                        ("apellido_cliente").html(apellido_cliente);
                        ("cedula_cliente").html(cedula_cliente);
                        ("descripcion_solicitud_cliente").html(descripcion_solicitud_cliente);
                        ("television_afectados_cliente").html(television_afectados_cliente);
                        ("intenet_afectados_cliente").html(intenet_afectados_cliente);
                        ("telefonia_afectados_cliente").html(telefonia_afectados_cliente);
                        ("telefonia_movil_afectados_cliente").html(telefonia_movil_afectados_cliente);
                        ("fecha_solicitud_cliente").html(fecha_solicitud_cliente);
                        ("hora_solicitud_cliente").html(hora_solicitud_cliente);
                    }
                });
            });
    }

    /* 
    let nombre = document.getElementById('name').value;
    let cedula  = document.getElementById('cedula').value;

    db.ref('Registro_Clientes/'+cedula+0).once('value').then(
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

// método para mostrar datos

firebase.database().ref('articles/' + article_id).once('value').then(
    function (snapshot) {
        var title = snapshot.val().title;
        console.log(title);
    }
)
 */