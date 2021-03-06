@extends('layouts.menu_lateral')
@section('headers')
<!DOCTYPE html>
<html lang="en">
   <head>
      <link rel="icon" href="{{ asset('img/favicon.jpg') }}">
      <meta name="csrg-token" content="{{ csrf_token() }}" />
      <meta charset="utf-8">
      <meta http-equiv="Expires" content="0">
      <meta http-equiv="Last-Modified" content="0">
      <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
      <meta http-equiv="Pragma" content="no-cache">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <title>Sendok</title>
      <link rel="stylesheet" href=" {{ asset('/assets/vendors/iconfonts/mdi/css/materialdesignicons.min.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/vendors/iconfonts/ionicons/css/ionicons.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/vendors/iconfonts/typicons/src/font/typicons.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/vendors/iconfonts/flag-icon-css/css/flag-icon.min.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/vendors/css/vendor.bundle.base.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/vendors/css/vendor.bundle.addons.css') }}">
      <link href="{{ asset('/css/select_buscador.css') }}" rel="stylesheet" />
      <link rel="stylesheet" href="{{ asset('/assets/css/shared/style.css') }}">
      <link rel="stylesheet" href="{{ asset('/assets/css/demo_1/style.css') }}">
      <link rel="application/javascript" href="{{ asset('/js/dataTables.min.js') }}">
      <script src="https://kit.fontawesome.com/4a145961cd.js" crossorigin="anonymous"></script>
   </head>
   @endsection
   @section('body1')
   <body>
      <div class="container-scroller">
         <!-- partial:partials/_navbar.html -->
         @endsection
         @section('body2')
         <!-- partial -->
         <div class="main-panel">
            <div class="content-wrapper" style="background: white;">
               <!-- Page Title Header Starts-->
               <div class="row page-title-header">
                  <div class="col-12">
                     <div class="page-header">
                        <h4 class="page-title" id="titulo_usuario">
                        <?php 
                            $titulock = json_decode(json_encode($titulo), true);
                            echo $titulock;
                        ?>
                        </h4>
                     </div>
                  </div>
               </div>
               <!-- Page Title Header Ends-->
               <div class="row">
                  <div class="col-md-12 grid-margin">
                     <div class="col-md-12 grid-margin stretch-card">
                        <div class="container">
                        <textarea name="editor1" id="editor1" rows="10" cols="80">
                           This is my textarea to be replaced with CKEditor 4.
                        </textarea>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- content-wrapper ends -->
               <!-- partial:partials/_footer.html -->
               <!-- partial -->
            </div>
            <!-- main-panel ends -->
         </div>
         <!-- page-body-wrapper ends -->
      </div>
      <!-- seccion modales-->
      <div class="modal fade" id="modalExitosa" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Operaci??n exitosa</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  Se ha realizado la operaci??n de forma exitosa.
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="window.location.reload();">OK</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="modalCreacionExitosaPlantilla" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Creaci??n exitosa</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  Se ha realizado la operaci??n de forma exitosa.
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal" onclick="dirigirListadoPlantila();">OK</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="modalVerPlantilla" tabindex="-1" role="dialog"  aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="modal_ver_nombre"></h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <div class="col-md-12" id="datos_ver_editar_plantilla">
                     <input type="hidden" style="display:none" id="modal_ver_cuerpo_id"/>
                     <div class="row form-group">
                        <label style="margin-top: 3px;" class="col-md-3">Nombre Plantilla</label>
                        <div class="col-md-9">
                           <input disabled="true" class="form-control" id="modal_ver_cuerpo_nombre"></input>
                        </div>
                     </div>
                     <div class="row form-group">
                        <label style="margin-top: 3px;" class="col-md-3">Asunto correo</label>
                        <div class="col-md-9">
                           <input disabled="true" class="form-control" id="modal_ver_cuerpo_asunto"></input>
                        </div>
                     </div>
                     <div class="row form-group">
                        <label style="margin-top: 3px;" class="col-md-3">Cuerpo correo</label>
                        <div class="col-md-9">
                           <textarea disabled="true" class="form-control" id="modal_ver_cuerpo_contenido"></textarea>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="modal-footer">
                  <button style="display:none" id="btn_editar_guardar_plantilla" type="button" class="btn btn-success" onclick="guardarEdicionPlantilla()">Guardar</button>
                  <button  id="btn_editar_ver_plantilla" type="button" class="btn btn-primary" onclick="editarPlantilla()">Editar</button>
                  <button id="btn_cerrar_ver_plantilla" type="button" class="btn btn-danger" data-dismiss="modal">Cerrar</button>
               </div>
            </div>
         </div>
      </div>
      <div class="modal fade" id="modal_crear_plantilla" tabindex="-1" role="dialog" aria-labelledby="nueva_plantilla" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="nueva_plantilla">Crear nueva plantilla</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <div class="text-center content-justify-center">
                     <div id="div_crear_plantilla" class="col-md-12">
                        <input type="hidden" id="token" name="_token" value="{{ csrf_token() }}">
                        <form id="form_datos_plantilla" class="forms-sample">
                           <div class="row form-group">
                              <label> Nombre plantilla</label>                                          
                              <input required class="form-control" type="text" id="nombre_plantilla" placeholder="Nombre de plantilla a crear"></input>                                          
                           </div>
                           <div class="row form-group">
                              <label> Asunto correo</label>                                          
                              <input required class="form-control" type="text" id="asunto_plantilla" placeholder="Asunto correo"></input>                                          
                           </div>
                           <div class="row form-group">
                              <label> Cuerpo correo</label>                                          
                              <textarea required id="cuerpo_plantilla" placeholder="Ingrese cuerpo de correo" class="form-control" type="text"></textarea>
                           </div>
                           <br>
                           <button type="button" class="btn btn-danger float-right"  data-dismiss="modal">Cerrar</button>
                           <button id="boton_guardar_plantilla" type="submit" class="btn btn-success float-right" style="margin-right: 15px">Guardar</button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!--contenido modal crear nueva plantilla-->
      <!-- fin contenido modal crear nueva plantilla-->
      <div class="modal fade" id="modal_eliminar" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div class="modal-dialog" role="document">
            <div class="modal-content">
               <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Confirmaci??n</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <div class="text-center content-justify-center">
                     <input type="hidden" id="modal_id_eliminar" style="display:none;"/>
                     <h4>??Est?? seguro de eliminar el elemento? : </h4>
                     <h4 id="modal_eliminar_nombre"></h4>
                  </div>
               </div>
               <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">NO</button>
                  <button type="button" class="btn btn-primary" id="eliminar_plantilla" onclick="eliminarPlantilla();">Si, eliminar</button>
               </div>
            </div>
         </div>
      </div>
      <!-- Modal -->
      <!-- fin seccion modales-->
      <script src="{{ asset('/assets/vendors/js/vendor.bundle.base.js') }}"></script>
      <script src="{{ asset('/assets/vendors/js/vendor.bundle.addons.js') }}"></script>
      <script src="{{ asset('/assets/js/shared/off-canvas.js') }}"></script>
      <script src="{{ asset('/assets/js/shared/misc.js') }}"></script>
      <script src="{{ asset('/assets/js/demo_1/dashboard.js') }}"></script>
      <script src="{{ asset('/js/admin_usuario.js') }}"></script>
      <script src="{{ asset('/js/dataTables.js')}}"></script>
      <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
      <script src="{{ asset('/ckeditor/ckeditor.js')}}"></script>  
      <!-- End custom js for this page-->
      <script>
         $(document).ready(function() {  
            CKEDITOR.replace( 'editor1' );      
            //var tipo_encriptacion = $("#tipo_encriptacion").val();
            //document.getElementById('encriptacion_smtp').value=tipo_encriptacion;
         
            //$("#tabla_plantillas").DataTable({
            //});
            //editor de html para firma
            //CKEDITOR.addCss('.cke_editable p { margin: 0 !important; }');
            //CKEDITOR.replace( 'summernote' ,{
               ////width: '100%',
               //placeholder : "Dise??e o copie y pegue su firma de correo electr??nico",
               //extraPlugins: 'colorbutton'
            //});                        
         });
         
      </script>
   </body>
</html>
@endsection