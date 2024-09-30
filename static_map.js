let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 21.814237222301667, lng: -102.76977000494668 },
    zoom: 15,
  });
  new google.maps.Marker({
    position: map.getCenter(),
    map,
  });
}
initMap();