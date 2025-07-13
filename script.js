function abrirWhatsApp() {
 var mensaje = "Voy a asistir";
 var numeroTelefono = "+573137239746"; // Reemplaza con el número al que quieres enviar el mensaje
 var url = "https://wa.me/" + numeroTelefono + "?text=" + encodeURIComponent(mensaje);
 window.open(url, '_blank');
}