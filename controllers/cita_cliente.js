
var cita_id =6;

function solicitarCita(){

  try{

    nombre_cliente =  document.getElementById('name').value;
    console.log("nombre_cliente es tipo " +typeof nombre_cliente);
    
    apellido_cliente =  document.getElementById('lastname').value;
    console.log("nombre_cliente es tipo " +typeof apellido_cliente);
    
    cedula_cliente =  document.getElementById('identification').value;
    console.log("nombre_cliente es tipo " +typeof cedula_cliente);
    
    descripcion_solicitud_cliente =  document.getElementById('description').value;
    console.log("nombre_cliente es tipo " +typeof descripcion_solicitud_cliente);
    
    television_afectados_cliente =  document.getElementById('television').value;
    console.log("nombre_cliente es tipo " +typeof television_afectados_cliente);
  
    intenet_afectados_cliente =  document.getElementById('internet').value;
    console.log("nombre_cliente es tipo " +typeof intenet_afectados_cliente);
  
    telefonia_afectados_cliente =  document.getElementById('telHome').value;
    console.log("nombre_cliente es tipo " +typeof telefonia_afectados_cliente);
    
    telefonia_movil_afectados_cliente =  document.getElementById('telMovil').value;
    console.log("nombre_cliente es tipo " +typeof telefonia_movil_afectados_cliente);
    fecha_solicitud_cliente =  document.getElementById('date_cita').value;
    console.log("nombre_cliente es tipo " +typeof fecha_solicitud_cliente);
    hora_solicitud_cliente =  document.getElementById('hour_cita').value;
    console.log("nombre_cliente es tipo " +typeof hora_solicitud_cliente);
    
    var registro = firebase.database();
    
    registro.ref('Solicitudes_citas/' + cedula_cliente).set({


        '001_nombre':nombre_cliente,
        '002_apellido':apellido_cliente,
        '003_cedula':cedula_cliente,
        '004_descripcion':descripcion_solicitud_cliente,
        '005_tvAfectado':television_afectados_cliente,
        '006_internetAfectado':intenet_afectados_cliente,
        '007_telefoniaAfectado':telefonia_afectados_cliente,
        '008_movilAfectado':telefonia_movil_afectados_cliente,
        '009_fecha':fecha_solicitud_cliente,
        '010_hora':hora_solicitud_cliente,
        });

    var msg = "Cita creada exitosamente";
      alert (msg);
  }

   catch(error){
      console.log (error);
   }  
    

}

