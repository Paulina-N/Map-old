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
    //zIndex: 195
});

var Declaration_of_at_risk = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Declaration of at risk of not achieving good quantitative or chemical status',
    format: 'image/png',
    transparent: true,
    //zIndex: 194
});

var Environmental_zoning_for_renewable_energy = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Environmental zoning for renewable energy',
    format: 'image/png',
    transparent: true,
    //zIndex: 193
});

var Fartet_recovery_plan = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Fartet recovery plan',
    format: 'image/png',
    transparent: true,
    //zIndex: 192
});

var Fishing_company_zones = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Fishing company zones',
    format: 'image/png',
    transparent: true,
    //zIndex: 191
});

var Flora_recovery_plan = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flora recovery plan',
    format: 'image/png',
    transparent: true,
    //zIndex: 190
});

var Flow_accumulation = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flow accumulation',
    format: 'image/png',
    transparent: true,
    //zIndex: 189
});

var Flow_direction = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Flow direction',
    format: 'image/png',
    transparent: true,
    //zIndex: 188
});

var Irrigated_crops = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Irrigated crops',
    format: 'image/png',
    transparent: true,
    //zIndex: 187
});

var Macrophytes = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Macrophytes',
    format: 'image/png',
    transparent: true,
    //zIndex: 186
});

var Mar_Menor_catchment_area = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Mar Menor catchment area',
    format: 'image/png',
    transparent: true,
    //zIndex: 185
});

var Marine_habitats_2018 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Marine habitats 2018',
    format: 'image/png',
    transparent: true,
    //zIndex: 184
});

var Marine_habitats = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Marine_habitats',
    format: 'image/png',
    transparent: true,
    //zIndex: 183
});

var Municipalities = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Municipalities',
    format: 'image/png',
    transparent: true,
    //zIndex: 182
});

var National_census_dischrages = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'National_census_dischrages',
    format: 'image/png',
    transparent: true,
    //zIndex: 181
});

var Natura_2000_Network_LIC_ZEC = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natura 2000 Network LIC ZEC',
    format: 'image/png',
    transparent: true,
    //zIndex: 100
});

var Natura_2000_Network_ZEPA = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natura 2000 Network ZEPA',
    format: 'image/png',
    transparent: true,
    //zIndex: 180
});

var Natural_protected_areas = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Natural protected areas',
    format: 'image/png',
    transparent: true,
    //zIndex: 179
});

var RAMSAR = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'RAMSAR',
    format: 'image/png',
    transparent: true,
    //zIndex: 178
});

var Regions = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Regions',
    format: 'image/png',
    transparent: true,
    //zIndex: 177
});

var Relief = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Relief',
    format: 'image/png',
    transparent: true,
    //zIndex: 176
});

var SIAM_weather_stations = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIAM weather stations',
    format: 'image/png',
    transparent: true,
    //zIndex: 175
});

var SIOSE_Land_cover = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIOSE Land cover',
    format: 'image/png',
    transparent: true,
    //zIndex: 174
});

var SIOSE_Land_uses = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'SIOSE Land uses',
    format: 'image/png',
    transparent: true,
    //zIndex: 173
});

var Sailing_speed = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Sailing speed',
    format: 'image/png',
    transparent: true,
    //zIndex: 172
});

var Selected_areas_for_the_implementation_of_thermo_solar_plants = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Selected areas for the implementation of thermo solar plants',
    format: 'image/png',
    transparent: true,
    //zIndex: 100
});

var Soil_regional_layer = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Soil regional layer',
    format: 'image/png',
    transparent: true,
    //zIndex: 171
});

var Surface_water_quality = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Surface water quality',
    format: 'image/png',
    transparent: true,
    //zIndex: 170
});

var Temporary_exclusion_area = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Temporary exclusion area',
    format: 'image/png',
    transparent: true,
    //zIndex: 169
});

var Terrestrial_habitats = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Terrestrial habitats',
    format: 'image/png',
    transparent: true,
    //zIndex: 168
});

var ZEPIM = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'ZEPIM',
    format: 'image/png',
    transparent: true,
    //zIndex: 167
});

var Zone_0 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone 0',
    format: 'image/png',
    transparent: true,
    //zIndex: 166
});

var Zone_A1 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone A1',
    format: 'image/png',
    transparent: true,
    //zIndex: 165
});

var Zone_A2 = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone A2',
    format: 'image/png',
    transparent: true,
    //zIndex: 164
});

var Zone_B = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zone B',
    format: 'image/png',
    transparent: true,
    //zIndex: 163
});

var Zones = L.tileLayer.betterWms(smartlagoonLink, {
    layers: 'Zones',
    format: 'image/png',
    transparent: true,
    //zIndex: 162
});

//amanda:AMANDA HTTP404 !!! error

var DEM_AMSS = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/amanda/wms?', {
    layers: 'DEM AMSS',
    format: 'image/png',
    transparent: true,
    //zIndex: 161
});

var CHL = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'CHL',
    format: 'image/png',
    transparent: true,
    //zIndex: 160
});

var Corine_Land_Cover = L.tileLayer.betterWms('https://carto.vielca.com/geoserver/mar_menor/wms?', {
    layers: 'Corine Land Cover',
    format: 'image/png',
    transparent: true,
    //zIndex: 159
});
