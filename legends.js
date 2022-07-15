var legendBase = "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=";
var legendBaseAmanda = "https://carto.vielca.com/geoserver/amanda/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=";
var legendBaseMarMenor = "https://carto.vielca.com/geoserver/mar_menor/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=";

var legends = [];
var title = [
    "Anchoring",
    "Bathymetry",
    "DEM",
    "Declaracion%20Riesgo%20Cuantitativo",
    "Declaracion%20Riesgo%20Quimico",
    "Declaration%20of%20Urgent%20Measures",
    "Declaration%20of%20at%20risk%20of%20not%20achieving%20good%20quantitative%20or%20chemical%20status",
    "Environmental%20zoning%20for%20renewable%20energy",
    "Fartet%20recovery%20plan",
    "Fishing%20company%20zones",
    "Flora%20recovery%20plan",
    "Flow%20accumulation",
    "Flow%20direction",
    "Irrigated%20crops",
    "Macrophytes",
    "Mar%20Menor%20catchment%20area",
    "Marine%20habitats%202018",
    "Marine_habitats",
    "Municipalities",
    "National_census_dischrages",
    "Natura%202000%20Network%20LIC%20ZEC",
    "Natura%202000%20Network%20ZEPA",
    "Natural%20protected%20areas",
    "RAMSAR",
    "Regions",
    "Relief",
    "SIAM%20weather%20stations",
    "SIOSE%20Land%20cover",
    "SIOSE%20Land%20uses",
    "Sailing%20speed",
    "Selected%20areas%20for%20the%20implementation%20of%20thermo%20solar%20plants",
    "Soil%20regional%20layer",
    "Surface%20water%20quality",
    "Temporary%20exclusion%20area",
    "Terrestrial%20habitats",
    "ZEPIM",
    "Zone%200",
    "Zone%20A1",
    "Zone%20A2",
    "Zone%20B",
    "Zones",
    //"DEM%20AMSS", blank overlay
    "CHL",
    "Corine%20Land%20Cover",
];

for (let i = 0; i < title.length; i++) {
    legends[i] = L.control({position: 'bottomright'});
    legends[i].onAdd = function (map) {
    if (title[i] == "CHL" || title[i] == "Corine%20Land%20Cover") {
        var div = L.DomUtil.create('div', 'info legend'),
        legendGraphic = legendBaseMarMenor + title[i] + "&";
    }
    else {
        var div = L.DomUtil.create('div', 'info legend'),
        legendGraphic = legendBase + title[i] + "&";
    }
    if (title[i] == "SIOSE%20Land%20cover") 
        div.innerHTML = (" <img src="+ legendGraphic + " style='height: 600px; width: 203px;'>");
    else if (title[i] == "Corine%20Land%20Cover") 
    div.innerHTML = (" <img src="+ legendGraphic + " style='height: 600px; width: 400px;'>");
    else
        div.innerHTML = (" <img src="+ legendGraphic + ">");
    return div;
};
}