var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8741, lng: -87.6285},
    zoom: 17
  });



}

window.initMap = initMap;
