//Base maps
var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {});
var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});

//Overlay maps
var Environmental_zoning_for_renewable_energy = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'Environmental_zoning_for_renewable_energy',
    format: 'image/png',
    transparent: true
});

var Mar_Menor_catchment_area = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'Mar_Menor_catchment_area',
    format: 'image/png',
    transparent: true
});

var SIAM_weather_stations = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'SIAM_weather_stations',
    format: 'image/png',
    transparent: true
});

var SIOSE_Land_cover = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'SIOSE_Land_cover',
    format: 'image/png',
    transparent: true
});

var SIOSE_Land_uses = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'SIOSE_Land_uses',
    format: 'image/png',
    transparent: true
});

var Selected_areas_for_the_implementation_of_thermo_solar_plants = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'Selected_areas_for_the_implementation_of_thermo_solar_plants',
    format: 'image/png',
    transparent: true
});

var Surface_water_quality = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/Smartlagoon/wms?', {
    layers: 'Surface_water_quality',
    format: 'image/png',
    transparent: true
});

//amanda:AMANDA HTTP404 !!! error

var DEM_AMSS = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/amanda/wms?', {
    layers: 'DEM_AMSS',
    format: 'image/png',
    transparent: true
});

var CHL = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'CHL',
    format: 'image/png',
    transparent: true
});

var Corine_Land_Cover = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'Corine Land Cover',
    format: 'image/png',
    transparent: true
});