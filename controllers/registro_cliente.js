var cita_id =1;

function ingresarRegistro(){

  try{

    nombre_cliente =  document.getElementById('name').value;
    console.log("nombre_cliente es tipo " +typeof nombre_cliente);
    
    apellido_cliente =  document.getElementById('apellido').value;
    console.log("nombre_cliente es tipo " +typeof apellido_cliente);
    
    cedula_cliente =  document.getElementById('cedula').value;
    console.log("nombre_cliente es tipo " +typeof cedula_cliente);
    
    correo_cliente =  document.getElementById('email').value;
    console.log("nombre_cliente es tipo " +typeof descripcion_solicitud_cliente);
    
    // correo_cliente =  document.getElementById('emailc').value;
    // console.log("nombre_cliente es tipo " +typeof descripcion_solicitud_cliente);
    
    usuario_cliente =  document.getElementById('user').value;
    console.log("nombre_cliente es tipo " +typeof television_afectados_cliente);
  
    password_cliente =  document.getElementById('password').value;
    console.log("nombre_cliente es tipo " +typeof intenet_afectados_cliente);
  
    // password_cliente =  document.getElementById('passwordc').value;
    // console.log("nombre_cliente es tipo " +typeof intenet_afectados_cliente);
  
    f_nacimiento =  document.getElementById('fecha').value;
    console.log("nombre_cliente es tipo " +typeof fecha_solicitud_cliente);
    
    var registro = firebase.database();
    
    registro.ref('Registro_Clientes/' + cedula_cliente).set({


        '001_nombre':nombre_cliente,
        '002_apellido':apellido_cliente,
        '003_cedula':cedula_cliente,
        '004_correo':correo_cliente,
        '005_usuario':usuario_cliente,
        '006_password':password_cliente,
        '007_Nacimiento':f_nacimiento,
        });

    var msg = "Registro exitoso";
      alert (msg);
  }

   catch(error){
      console.log (error);
   }  
    

}

