var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.87321799627811, lng: -87.62801527359747},
    zoom: 17
  });

  var jones = new google.maps.Marker({
    position: {lat: 41.87321799627811, lng: -87.62801527359747},
    map: map,
  });

  var potbelley = new google.maps.Marker({
    position: {lat: 41.87515516090486, lng: -87.62951731727257},
    map: map,
  });

  var harrison = new google.maps.Marker({
    position: {lat: 41.87433712200045, lng: -87.62768714750437},
    map: map,
    title: "JCP",
  });



  const trainRouteCoordinates = [
      {lat: 41.87321799627811, lng: -87.62801527359747 },
      {lat:41.87324338039512, lng: -87.62768969082532},
      { lat: 41.87433712200045, lng: -87.62768714750437 },

    ];
    const trainRoute = new google.maps.Polyline({
      path: trainRouteCoordinates,
      geodesic: true,
      strokeColor: "blue",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });

    trainRoute.setMap(map);

    var coords = [
    { lat: 41.87321799627811, lng: -87.62801527359747 },
    { lat: 41.87433712200045, lng: -87.62768714750437 },
    { lat: 41.87515516090486, lng: -87.62951731727257 },
    { lat: 41.87321799627811, lng: -87.62801527359747 },
  ];

  var connectr = new google.maps.Polygon({
    paths: coords,
    strokeColor: "#blue",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    fillColor: "#blue",
    fillOpacity: 0.5,
    map: map
  });


}

window.initMap = initMap;
