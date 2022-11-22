var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.87321799627811, lng: -87.62801527359747},
    zoom: 17
  });

  const jones = new google.maps.Marker({
    position: {lat: 41.87321799627811, lng: -87.62801527359747},
    map: map,
  });

  const potbelley = new google.maps.Marker({
    position: {lat: 41.87515516090486, lng: -87.62951731727257},
    map: map,
  });

  const harrison = new google.maps.Marker({
    position: {lat: 41.87433712200045, lng: -87.62768714750437},
    map: map,
    title: "JCP",
  });


  const jonesWindow = new google.maps.InfoWindow({
    content: "This is Jones College Prep, which is where I go to school.",
    ariaLabel: "Jones College Prep",
  });


  jones.addListener("click", () => {
    infowindow.open({
      anchor: jones,
      map: map,
    });
  });

}

window.initMap = initMap;
