//Base maps
var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {});
var Esri_WorldGrayCanvas = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {});
var Satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {});

var smartlagoonLink = 'https://carto.vielca.com/geoserver/Smartlagoon/wms?';


//Overlay maps
var Anchoring = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Anchoring',
    format: 'image/png',
    transparent: true,
    pane: 'Anchoring',
});

var Bathymetry = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Bathymetry',
    format: 'image/png',
    transparent: true,
    pane: 'Bathymetry'
});

var DEM = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'DEM',
    format: 'image/png',
    transparent: true,
    pane: 'DEM'
});

var Declaracion_Riesgo_Cuantitativo = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Declaracion Riesgo Cuantitativo',
    format: 'image/png',
    transparent: true,
    pane: 'Declaracion_Riesgo_Cuantitativo'
});

var Declaracion_Riesgo_Quimico = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Declaracion Riesgo Quimico',
    format: 'image/png',
    transparent: true,
    pane: 'Declaracion_Riesgo_Quimico'
});

var Declaration_of_Urgent_Measures = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Declaration of Urgent Measures',
    format: 'image/png',
    transparent: true,
    pane: 'Declaration_of_Urgent _Measures'
});

var Declaration_of_at_risk = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Declaration of at risk of not achieving good quantitative or chemical status',
    format: 'image/png',
    transparent: true,
    pane: 'Declaration_of_at_risk'
});

var Environmental_zoning_for_renewable_energy = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Environmental zoning for renewable energy',
    format: 'image/png',
    transparent: true,
    pane: 'Environmental_zoning_for_renewable_energy'
});

var Fartet_recovery_plan = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Fartet recovery plan',
    format: 'image/png',
    transparent: true,
    pane: 'Fartet_recovery_plan'
});

var Fishing_company_zones = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Fishing company zones',
    format: 'image/png',
    transparent: true,
    pane: 'Fishing_company_zones'
});

var Flora_recovery_plan = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flora recovery plan',
    format: 'image/png',
    transparent: true,
    pane: 'Flora_recovery_plan'
});

var Flow_accumulation = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flow accumulation',
    format: 'image/png',
    transparent: true,
    pane: 'Flow_accumulation'
});

var Flow_direction = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flow direction',
    format: 'image/png',
    transparent: true,
    pane: 'Flow_direction'
});

var Irrigated_crops = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Irrigated crops',
    format: 'image/png',
    transparent: true,
    pane: 'Irrigated_crops'
});

var Macrophytes = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Macrophytes',
    format: 'image/png',
    transparent: true,
    pane: 'Macrophytes'
});

var Mar_Menor_catchment_area = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Mar Menor catchment area',
    format: 'image/png',
    transparent: true,
    pane: 'Mar_Menor_catchment_area'
});

var Marine_habitats_2018 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Marine habitats 2018',
    format: 'image/png',
    transparent: true,
    pane: 'Marine_habitats_2018'
});

var Marine_habitats = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Marine_habitats',
    format: 'image/png',
    transparent: true,
    pane: 'Marine_habitats'
});

var Municipalities = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Municipalities',
    format: 'image/png',
    transparent: true,
    pane: 'Municipalities'
});

var National_census_dischrages = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'National_census_dischrages',
    format: 'image/png',
    transparent: true,
    pane: 'National_census_dischrages'
});

var Natura_2000_Network_LIC_ZEC = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natura 2000 Network LIC ZEC',
    format: 'image/png',
    transparent: true,
    pane: 'Natura_2000_Network_LIC_ZEC'
});

var Natura_2000_Network_ZEPA = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natura 2000 Network ZEPA',
    format: 'image/png',
    transparent: true,
    pane: 'Natura_2000_Network_ZEPA'
});

var Natural_protected_areas = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natural protected areas',
    format: 'image/png',
    transparent: true,
    pane: 'Natural_protected_areas'
});

var RAMSAR = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'RAMSAR',
    format: 'image/png',
    transparent: true,
    pane: 'RAMSAR'
});

var Regions = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Regions',
    format: 'image/png',
    transparent: true,
    pane: 'Regions'
});

var Relief = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Relief',
    format: 'image/png',
    transparent: true,
    pane: 'Relief'
});

var SIAM_weather_stations = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIAM weather stations',
    format: 'image/png',
    transparent: true,
    pane: 'SIAM_weather_stations'
});

var SIOSE_Land_cover = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIOSE Land cover',
    format: 'image/png',
    transparent: true,
    pane: 'SIOSE_Land_cover'
});

var SIOSE_Land_uses = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIOSE Land uses',
    format: 'image/png',
    transparent: true,
    pane: 'SIOSE_Land_uses'
});

var Sailing_speed = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Sailing speed',
    format: 'image/png',
    transparent: true,
    pane: 'Sailing_speed'
});

var Selected_areas_for_the_implementation_of_thermo_solar_plants = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Selected areas for the implementation of thermo solar plants',
    format: 'image/png',
    transparent: true,
    pane: 'Selected_areas_for_the_implementation_of_thermo_solar_plants'
});

var Soil_regional_layer = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Soil regional layer',
    format: 'image/png',
    transparent: true,
    pane: 'Soil_regional_layer'
});

var Surface_water_quality = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Surface water quality',
    format: 'image/png',
    transparent: true,
    pane: 'Surface_water_quality'
});

var Temporary_exclusion_area = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Temporary exclusion area',
    format: 'image/png',
    transparent: true,
    pane: 'Temporary_exclusion_area'
});

var Terrestrial_habitats = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Terrestrial habitats',
    format: 'image/png',
    transparent: true,
    pane: 'Terrestrial_habitats'
});

var ZEPIM = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'ZEPIM',
    format: 'image/png',
    transparent: true,
    pane: 'ZEPIM'
});

var Zone_0 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone 0',
    format: 'image/png',
    transparent: true,
    pane: 'Zone_0'
});

var Zone_A1 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone A1',
    format: 'image/png',
    transparent: true,
    pane: 'Zone_A1'
});

var Zone_A2 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone A2',
    format: 'image/png',
    transparent: true,
    pane: 'Zone_A2'
});

var Zone_B = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone B',
    format: 'image/png',
    transparent: true,
    pane: 'Zone_B'
});

var Zones = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zones',
    format: 'image/png',
    transparent: true,
    pane: 'Zones'
});

//amanda:AMANDA HTTP404 !!! error

var DEM_AMSS = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/amanda/wms?', {
    layers: 'DEM AMSS',
    format: 'image/png',
    transparent: true,
    pane: 'DEM_AMSS'
});

var CHL = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'CHL',
    format: 'image/png',
    transparent: true,
    pane: 'CHL'
});

var Corine_Land_Cover = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'Corine Land Cover',
    format: 'image/png',
    transparent: true,
    pane: 'Corine_Land_Cover'
});
