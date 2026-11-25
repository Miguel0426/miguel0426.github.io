function initMap() {
  const center = { lat: 28.4743, lng: -81.4623 };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: center,
  });

  // Feature 1: Location marker
  const marker = new google.maps.Marker({
    position: center,
    map: map,
    title: "Universal Orlando Resort"
  });

  // Feature 2: Information window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h3>Universal Orlando Resort</h3><p>My favorite vacation destination.</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  // Feature 3: Circle overlay
  const circle = new google.maps.Circle({
    map: map,
    center: center,
    radius: 500,
    strokeColor: "#234a75",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#234a75",
    fillOpacity: 0.2
  });
}

// Questions button event listener
const questionsButton = document.getElementById("questions");

if (questionsButton) {
  questionsButton.addEventListener("click", function () {
    alert("If you have questions, contact me at:\nmyanez@hawk.illinoistech.edu");
  });
}