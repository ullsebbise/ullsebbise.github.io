function initMap() {
  var lokal = {lat: 59.463671, lng: 17.919190};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: lokal
  });
  var marker = new google.maps.Marker({
    position: lokal,
    map: map,
    title: 'Torstens namngivningsceremoni'
  });
}
