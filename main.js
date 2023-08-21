var body = document.body;
//alerta de web en desarrollo 
function load() {
  //alert("Esta web aun esta en fase BETA (desarrollo) por lo que sus funciones aun no estan completas. not responsive")
}
//da atras a un elemento
function menos() {
  window.history.back();
}
//opcion desactivada
function disabled() {
  //alert("Está opción aun esta en desarrollo, no disponible por el momento");
}
//temporal
function car() {
  for (var i = 1; i < 97; i++) {
    document.write('&nbsp;&nbsp;&lt;img id="" src="/books/Minecraft/manual-combate/Minecraft - Manual de Combate_Page_'+i+'.jpg" alt="img-'+i+'"&gt;<br><br>');
  }
}