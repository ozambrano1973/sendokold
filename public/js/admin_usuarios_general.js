const carpeta = window.location.pathname;
if (carpeta.includes("desarrollo")) {
	var url_prev = location.origin + "/desarrollo/public/";
} else {
	var url_prev = location.origin + "/public/";
}
$(document).ready(function(){
  if($("#regval").val() == 0)
  {

  }
  else
  {
    $("#region").val($("#regval").val());
    getComunasRegion();
    
  }
});

$("#a_templates").click(function () {
  $("#div_nuevos_usuarios").hide();
  $("#div_mi_empresa").show();
  document.getElementById("a_mi_empresa").classList.remove('btn-primary');
  document.getElementById("a_usuarios").classList.remove('btn-primary');
  
  document.getElementById("a_mi_empresa").classList.remove('btn-light');
  document.getElementById("a_usuarios").classList.remove('btn-light');
  
  //document.getElementById("a_mi_empresa").classList.add('btn-light');
  document.getElementById("a_usuarios").classList.add('btn-light');
  
  document.getElementById("a_mi_empresa").classList.remove('active');
  document.getElementById("a_usuarios").classList.remove('active');

  document.getElementById("a_mi_empresa").classList.add('btn-primary');
document.getElementById("a_mi_empresa").classList.add('active');


  
  
});

$("#a_mi_empresa").click(function () {
    $("#div_nuevos_usuarios").hide();
    $("#div_mi_empresa").show();
    $("#div_templates").hide();
    document.getElementById("a_mi_empresa").classList.remove('btn-primary');
    document.getElementById("a_usuarios").classList.remove('btn-primary');
    document.getElementById("a_templates").classList.remove('btn-primary');
    
    document.getElementById("a_mi_empresa").classList.remove('btn-light');
    document.getElementById("a_usuarios").classList.remove('btn-light');
    document.getElementById("a_templates").classList.remove('btn-light');
    
    //document.getElementById("a_mi_empresa").classList.add('btn-light');
    document.getElementById("a_usuarios").classList.add('btn-light');
    document.getElementById("a_templates").classList.add('btn-light');
    
    document.getElementById("a_mi_empresa").classList.remove('active');
    document.getElementById("a_usuarios").classList.remove('active');
    document.getElementById("a_templates").classList.remove('active');

    document.getElementById("a_mi_empresa").classList.add('btn-primary');
	document.getElementById("a_mi_empresa").classList.add('active');


    
	  
});


$("#a_usuarios").click(function () {
      $("#div_mi_empresa").hide();
      $("#div_templates").hide();
      $("#div_nuevos_usuarios").show();
      document.getElementById("a_mi_empresa").classList.remove('btn-primary');
      document.getElementById("a_usuarios").classList.remove('btn-primary');
      document.getElementById("a_templates").classList.remove('btn-primary');
      
      document.getElementById("a_mi_empresa").classList.remove('btn-light');
      document.getElementById("a_usuarios").classList.remove('btn-light');
      document.getElementById("a_templates").classList.remove('btn-light');
      
      document.getElementById("a_mi_empresa").classList.add('btn-light');
      document.getElementById("a_templates").classList.add('btn-light');
      //document.getElementById("a_usuarios").classList.add('btn-light');
      
      document.getElementById("a_mi_empresa").classList.remove('active');
      document.getElementById("a_usuarios").classList.remove('active');
      document.getElementById("a_templates").classList.remove('active');

      document.getElementById("a_usuarios").classList.add('btn-primary');
      document.getElementById("a_usuarios").classList.add('active');
      infotable();
});
$("#a_templates").click(function () {
  $("#div_mi_empresa").hide();
  $("#div_nuevos_usuarios").hide();
  $("#div_templates").show();
  
  document.getElementById("a_mi_empresa").classList.remove('btn-primary');
  document.getElementById("a_usuarios").classList.remove('btn-primary');
  document.getElementById("a_templates").classList.remove('btn-primary');
  
  document.getElementById("a_mi_empresa").classList.remove('btn-light');
  document.getElementById("a_usuarios").classList.remove('btn-light');
  document.getElementById("a_templates").classList.remove('btn-light');
  
  document.getElementById("a_mi_empresa").classList.add('btn-light');
  //document.getElementById("a_templates").classList.add('btn-light');
  document.getElementById("a_usuarios").classList.add('btn-light');
  
  document.getElementById("a_mi_empresa").classList.remove('active');
  document.getElementById("a_usuarios").classList.remove('active');
  document.getElementById("a_templates").classList.remove('active');

  document.getElementById("a_templates").classList.add('btn-primary');
  document.getElementById("a_templates").classList.add('active');
});


$("#form_mi_empresa").on("submit", function (e) {
	//do your form submission logic here
    e.preventDefault();
    var error = "";
    if ($.trim($("#nombre_empresa").val()) == "" ){
      if(error == "")
      {
        error = ".- Ingrese el Nombre de la Empresa.";
      }
      else
      {
        error = error + "<br>.- Ingrese el Nombre de la Empresa.";
      }
    }
    if ($.trim($("#rut_empresa").val()) == "" ){
      if(error == "")
      {
        error = ".- Ingrese el Rut de la Empresa.";
      }
      else
      {
        error = error + "<br>.- Ingrese el Rut de la Empresa.";
      }
    }
    if (!Fn.validaRut( $("#rut_empresa").val() )){
      if(error == "")
      {
        error = ".- El Rut de la Empresa no es válido.";
      }
      else
      {
        error = error + "<br>.- El Rut de la Empresa no es válido.";
      }
    }
    if ($("#region").val() == "" ){
      if(error == "")
      {
        error = ".- Ingrese la Región.";
      }
      else
      {
        error = error + "<br>.- Ingrese la Región.";
      }
    }
    if ($("#comuna").val() == "" ){
      if(error == "")
      {
        error = ".- Ingrese la Comuna.";
      }
      else
      {
        error = error + "<br>.- Ingrese la Comuna.";
      }
    }
    if ($.trim($("#direccion_empresa").val()) == "" || $.trim($("#direccion_empresa").val()).length == 0 ){
      if(error == "")
      {
        error = ".- Ingrese la dirección de la Empresa.";
      }
      else
      {
        error = error + "<br>.- Ingrese la dirección de la Empresa.";
      }
    }
    if ($.trim($("#fono_empresa").val()) == "" || $.trim($("#fono_empresa").val()).length < 9 ){
      if(error == "")
      {
        error = ".- Ingrese un número telefónico correcto.";
      }
      else
      {
        error = error + "<br>.- Ingrese un número telefónico correcto.";
      }
    }
    if(error != "")
    {
      $("#exampleModalLabel").html("Presentamos errores en su Formulario");
      $("#modalbody").html(error);
      $("#modalfooter").html('<button type="button" class="btn btn-danger" data-dismiss="modal">Aceptar</button>');
      $("#modalExitosa").modal("show");
      return false;
    }
    else
    {
      
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token]').attr('content')
        }
      });
      $.ajax({
        type: "POST",
        url: url_prev + 'agregarempresa',
        data: {"nombreemp": $("#nombre_empresa").val(), "rutemp":$("#rut_empresa").val(), "region":$("#region").val(), "comuna":$("#comuna").val(), "diremp":$("#direccion_empresa").val(), "fonoemp":$("#fono_empresa").val(),_token: $('input[name="_token"]').val()
        }, //esto es necesario, por la validacion de seguridad de laravel
        datatype: "json",
      }).done(function(msg) {
        var json = JSON.parse(msg);
        if(json.status == "ok")
        {
          $("#exampleModalLabel").html("Actualización Exitosa");
          $("#modalbody").html("La información ingresada a sido actualizada correctamente");
          $("#modalfooter").html('<button type="button" class="btn btn-danger" data-dismiss="modal">Aceptar</button>');
          $("#modalExitosa").modal("show");
        }
        else
        {
          $("#exampleModalLabel").html("Presentamos errores en su Formulario");
          $("#modalbody").html("No fue posible actualizar su información. Inténtelo nuevamente.");
          $("#modalfooter").html('<button type="button" class="btn btn-danger" data-dismiss="modal">Aceptar</button>');
          $("#modalExitosa").modal("show");
        }
      });
    }
});
  
$("#form_nuevos_usuarios").on("submit", function (e) {
	//do your form submission logic here
    e.preventDefault();
    alert("Funcionalidad en desarrollo...");
});



function cargarRegiones() {
    $.ajax({
      type: "GET",
      url: '/obtenerRegiones',
      data: {}
    }).done(function(msg) {});
  }

$('region').on('change', function() {
    limpiarSeleccion();
  });
  
  function limpiarSeleccion() {
    var opcion = "<option id='0'> Elija Una </option>";
    $('#comuna').find('option').remove().end().append(opcion);
  }
  
  
  function getComunasRegion() {
    
    var idRegion = parseInt($("#region").val());
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token]').attr('content')
      }
    });
    $.ajax({
      type: "POST",
      url: url_prev + 'obtenerComunas',
      data: {
        id: idRegion,
        _token: $('input[name="_token"]').val()
      } //esto es necesario, por la validacion de seguridad de laravel
    }).done(function(msg) {
      // se incorporan las opciones en la comuna
      var json = JSON.parse(msg);
      var opciones = "<option value=''>Seleccione una Comuna </option>";
      for (var i = 0; i < json.length; i++) {
        opciones = opciones + "<option value='" + json[i].id + "'>" + json[i].comuna + "</option>";
      }
      
      if($("#comval").val() > 0)
      {
        $('#comuna').find('option').remove().end().append(opciones).val($("#comval").val());
      }
      else
      {
        $('#comuna').find('option').remove().end().append(opciones);
      }
      
    }).fail(function(){
      console.log('Error en getComunasRegion()');
  });
  }
  /////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////Completa tabla usuarios///////////////////////////////
  function infotable()
  {
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token]').attr('content')
      }
    });
    $.ajax({
      type: "POST",
      url: url_prev + 'obtenerUsuariosEmpresa',
      data: {
        _token: $('input[name="_token"]').val()
      } //esto es necesario, por la validacion de seguridad de laravel
    }).done(function(msg) {
      // se incorporan las opciones en la comuna
      var json = JSON.parse(msg);
      var html;
      
      for (let [key, value] of Object.entries(json.datos)) {
        if(json.datos[key].id != json.id)
        {
          html += "<tr><td>"+json.datos[key].nombre+"</td><td>"+json.datos[key].email+"</td><td>"+json.datos[key].fono+"</td><td>"+json.datos[key].cargo+"</td><td>"+json.datos[key].empresa+"</td><td><button class='btn btn-warning editarfin ml-1' id='editarinfo"+json.datos[key].id+"' onclick='confirmarEliminacion("+json.datos[key].id+")' disabled><i class='fas fa-edit' aria-hidden='true'></i></button><button class='btn btn-info ml-1' id='cancelar"+json.datos[key].id+"' onclick='cancelaredit("+json.datos[key].id+")' disabled><i class='fas fa-window-close' aria-hidden='true'></i></button></td></tr>";
        }

        
        $("#bodytabla").html("");
        $("#bodytabla").html(html);
        
          var table = $('#tabla_usuarios').DataTable( {
                retrieve        : true,				  	
                paging			: true,
                pageLength		: 10,
                order 			: [],
                fixedHeader     : true,
                responsive      : true,
                autoWidth       : true,
                scrollX         : 'true',
                //scrollY       : '850px',
                scrollCollapse: true,
          } );
          $('[data-toggle="tooltip"]').tooltip();
        console.log(`${key}: ${json.datos[key].id}`);
      }
      
    }).fail(function(){
        console.log('Error en infotable()');
    });
  }
  function editarinputs(id)
  {
    $("#input1"+id+"").prop("disabled", false);
    $("#input2"+id+"").prop("disabled", false);
    $("#input3"+id+"").prop("disabled", false);
    $("#input4"+id+"").prop("disabled", false);
    $("#cancelar"+id+"").prop("disabled", false);
    $(".editarini").prop("disabled", true);
    $(".eliminar").prop("disabled", true);
    $(".editarfin").prop("disabled", true);
    $("#editarinfo"+id+"").prop("disabled", false);
    
  }
  function cancelaredit(id)
  {
    $("#input1"+id+"").prop("disabled", true);
    $("#input2"+id+"").prop("disabled", true);
    $("#input3"+id+"").prop("disabled", true);
    $("#input4"+id+"").prop("disabled", true);
    $("#cancelar"+id+"").prop("disabled", true);
    $(".editarini").prop("disabled", false);
    $(".eliminar").prop("disabled", false);
    $(".editarfin").prop("disabled", true);
  }
  
  function valideKey(evt){
			
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    if(code == 8) { // backspace.
      return true;
    }
    if(code == 45) { // -.
      return true;
    }
    else if(code == 107 || code == 75) { // kK.
      return true;
    } 
    else if(code >= 48 && code <= 57) { // solo números.
      return true;
    } else{ // other keys.
      return false;
    }
  }
  var Fn = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut : function (rutCompleto) {
      rutCompleto = rutCompleto.replace("‐","-");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test( rutCompleto ))
        return false;
      var tmp   = rutCompleto.split('-');
      var digv  = tmp[1]; 
      var rut   = tmp[0];
      if ( digv == 'K' ) digv = 'k' ;
      
      return (Fn.dv(rut) == digv );
    },
    dv : function(T){
      var M=0,S=1;
      for(;T;T=Math.floor(T/10))
        S=(S+T%10*(9-M++%6))%11;
      return S?S-1:'k';
    }
  }
  
