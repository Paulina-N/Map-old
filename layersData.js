//Base maps
var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {});
var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});

var smartlagoonLink = 'https://carto.vielca.com/geoserver/Smartlagoon/wms?';

var allLayers = new Array(
    "Anchoring",
    "Bathymetry",
    "DEM",
    "Declaracion_Riesgo_Cuantitativo",
    "Declaracion_Riesgo_Quimico",
    "Declaration_of_Urgent_Measures",
    "Declaration_of_at_risk",
    "Environmental_zoning_for_renewable_energy",
    "Fartet_recovery_plan",
    "Fishing_company_zones",
    "Flora_recovery_plan",
    "Flow_accumulation",
    "Flow_direction",
    "Irrigated_crops",
    "Macrophytes",
    "Mar_Menor_catchment_area",
    "Marine_habitats_2018",
    "Marine_habitats",
    "Municipalities",
    "National_census_dischrages",
    "Natura_2000_Network_LIC_ZEC",
    "Natura_2000_Network_ZEPA",
    "Natural_protected_areas",
    "RAMSAR",
    "Regions",
    "Relief",
    "SIAM_weather_stations",
    "SIOSE_Land_cover",
    "SIOSE_Land_uses",
    "Sailing_speed",
    "Selected_areas_for_the_implementation_of_thermo_solar_plants",
    "Soil_regional_layer",
    "Surface_water_quality",
    "Temporary_exclusion_area",
    "Terrestrial_habitats",
    "ZEPIM",
    "Zone_0",
    "Zone_A1",
    "Zone_A2",
    "Zone_B",
    "Zones",
    "CHL",
    "Corine_Land_Cover"
);

for(var i = 0; i < allLayers.length; i++) {
    window[allLayers[i]] = L.tileLayer.betterWms(smartlagoonLink, {
        layers: allLayers[i],
        format: 'image/png',
        transparent: true,
        pane: allLayers[i],
    });
}
