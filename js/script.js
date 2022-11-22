function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: { lat: 41.8730, lng: -87.6279},
    mapTypeId: 'satellite'
  });



window.initMap = initMap;
