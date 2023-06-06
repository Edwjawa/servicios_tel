



//crear metodos para obtener datos del DOM 
// adaptar para el caso

function ingresarLogin(){

    let documento = document.getElementById('usuario').value;
    let password  = document.getElementById('password').value;

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



// se crea el id para la base de datos, crear un método para auto incrementar el valor del id


let cliente_id = 1;
// se crea el elemento a agregar en la base de datos

let cliente_registro = {
    'nombre_registro': 'Manazanito',
    'apellido_registro':'Velez',
    'cedula_registro':'Velez',
    'fecha_Nacimiento_registro':'Velez',
    'correo_registro':'Velez',
    'Usuario_registro':'Velez',
    'Contraseña_registro':'Velez',
   
}

// firebase.database().ref('articles/' + article_id).set(article);

firebase.database().ref('articles/' + article_id).once('value').then(
    function (snapshot) {
        var title = snapshot.val().title;
        console.log(title);
    }
)
