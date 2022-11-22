var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.87321799627811, lng: -87.62801527359747},
    zoom: 18
  });



}

window.initMap = initMap;
