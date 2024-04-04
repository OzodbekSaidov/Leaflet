
var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    var cities = L.layerGroup([littleton, denver, aurora, golden]);

    var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

var map = L.map('map', {
    center: [39.73, -104.99],
    zoom: 10,
    layers: [osm, cities]
});

var baseMaps = {
  "OpenStreetMap": osm,
  "OpenStreetMap.HOT": osmHOT
};

var overlayMaps = {
  "Cities": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

var baseMaps = {
  "OpenStreetMap": osm,
  "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([crownHill, rubyHill]);
var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Parks");

var greek = L.marker([39.737,-104.989]).bindPopup('This is Greek museum'),
    denver = L.marker([39.730, -105.109]).bindPopup('This is Denver museum');

var museums = L.layerGroup([greek, denver]);

var OpenTopoMap = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: &copy;'
})

layerControl.addBaseLayer(OpenTopoMap, "Opentopmap1")
layerControl.addOverlay(museums, "Museums");

// const tilelink = "http://{s}.tile3.opencyclemap.org/landscape/{z}/{x}/{y}.png"


// var map = L.map('map').setView([41.272, 69.232], 12);

// L.tileLayer(tilelink, {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

// const yapona = L.icon({iconUrl: "./img/yapona.jpg", iconSize: 30})

// const markery = L.marker([41.291,69.18], {icon: yapona}).addTo(map);

// const markery2 = L.marker([41.274, 69.241], {icon: yapona}).addTo(map);

// const markery3 = L.marker([41.29, 69.227], {icon: yapona}).addTo(map);

// const markery4 = L.marker([41.300, 69.250], {icon: yapona}).addTo(map);

// const markery5 = L.marker([41.304, 69.268], {icon: yapona}).addTo(map);

// const markery6 = L.marker([41.304, 69.286], {icon: yapona}).addTo(map);

// const markery7 = L.marker([41.299, 69.278], {icon: yapona}).addTo(map);

// const marker = L.marker([41.272, 69.232]).addTo(map);
// marker.bindPopup("Biz shu yerdamiz")

// const marker1 = L.marker([41.257666,69.159993]).addTo(map);
// marker1.bindPopup("Uy").addTo(map);
// const circle = L.circle([41.272, 69.232], {
//     color: "red",
//     radius: 50,
// }).addTo(map);

// const polygon = L.polygon(
// [
//     [41.35, 69.25],  //Координаты для фигцры
//     [41.35, 69.26],
//     [41.36, 69.26],
//     [41.36, 69.25],
//     [41.35, 69.25]    
// ]
// )

// let lat = prompt("Enter lat")

// let lon = prompt("Enter lon")

// function latlon()
// {
//     map.flyTo([lat, lon])
// }

// latlon()

// L.Routing.control({
//   waypoints: [L.latLng(41.272, 69.232), L.latLng(41.257666,69.159993),],
//   lineOptions: {
//     styles: [
//       {
//         color: "green",
//         opacity: 5,
//         weight: 5
//       }
//     ]
//   }
// }).addTo(map);




