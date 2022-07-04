var map = L.map('map', {
    center: [37.75, -1],
    zoom: 10,
    minZoom: 2,
    layers: [OpenStreetMap, Satellite, Esri_WorldGrayCanvas]
});

L.control.ruler().addTo(map);

var baseMaps = {
    "Open Street Map": OpenStreetMap,
    "Gray": Esri_WorldGrayCanvas,
    "Satellite": Satellite,
};

var overlayMaps = {
    "Environmental zoning for renewable energy": Environmental_zoning_for_renewable_energy,
    "Mar Menor catchment area": Mar_Menor_catchment_area,
    "SIAM weather stations": SIAM_weather_stations,
    "SIOSE Land cover": SIOSE_Land_cover,
    "SIOSE Land uses": SIOSE_Land_uses,
    "Selected areas for the implementation of thermo solar plants": Selected_areas_for_the_implementation_of_thermo_solar_plants,
    "Surface water quality": Surface_water_quality,
    "DEM AMSS": DEM_AMSS, //BLANK MAP ???
    "CHL": CHL, // LOOKS BAD
    "Corine Land Cover": Corine_Land_Cover,
};

/*var layerControl = L.control.layers(baseMaps, overlayMaps,{
  collapsed: false,
}).addTo(map);*/

/*var htmlObject = layerControl.getContainer();
  var a = document.getElementById('layers')
  function setParent(el, newParent){
    newParent.appendChild(el);
  }
  setParent(htmlObject, a);
*/
var controls = L.control.orderlayers(
  baseMaps, overlayMaps, 
  {
    collapsed: false,
    title: 'Order Layers'
  }
);
controls.addTo(map);


/* http://elesdoar.github.io/leaflet-control-orderlayers/ */