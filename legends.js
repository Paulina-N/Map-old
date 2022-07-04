//define legends
const links = [
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=Environmental_zoning_for_renewable_energy&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=Mar_Menor_catchment_area&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=SIAM_weather_stations&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=SIOSE_Land_cover&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=SIOSE_Land_uses&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=Selected_areas_for_the_implementation_of_thermo_solar_plants&",
    "https://carto.vielca.com/geoserver/Smartlagoon/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=Surface_water_quality&",
    "https://carto.vielca.com/geoserver/amanda/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=DEM_AMSS&",
    "https://carto.vielca.com/geoserver/mar_menor/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=CHL&",
    "https://carto.vielca.com/geoserver/mar_menor/ows?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=Corine%20Land%20Cover&"
]
var legends = [];
var sizes = [
    [100, 209],
    [20, 20],
    [20, 110],
    [760, 258],
    [300, 330],
    [20, 20],
    [20, 20],
    [20, 20],
    [135, 66],
    [700, 400],
];
var j = 0;

for (let i = 0; i < 10; i++) {
    legends[i] = L.control({position: 'bottomright'});
    legends[i].onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
        legendGraphic = links[i];
    div.innerHTML = (" <img src="+ legendGraphic +" height=" + sizes[i][j] + " width=" + sizes[i][j + 1] + ">");
    return div;
};
}

//add legends to the map depending on the layer
map.on('overlayadd', function (eventLayer) {
if (eventLayer.name == 'Environmental zoning for renewable energy') {
    legends[0].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[0]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'Mar Menor catchment area') {
    legends[1].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[1]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'SIAM weather stations') {
    legends[2].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[2]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'SIOSE Land cover') {
    legends[3].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[3]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'SIOSE Land uses') {
    legends[4].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[4]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'Selected areas for the implementation of thermo solar plants') {
    legends[5].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[5]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'Surface water quality') {
    legends[6].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[6]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'DEM AMSS') {
    legends[7].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[7]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'CHL') {
    legends[8].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[8]) {
            this.removeControl(legends[i]);
        }
    }
}
else if (eventLayer.name == 'Corine Land Cover') {
    legends[9].addTo(this);
    for (let i = 0; i < 10; i++) {
        if (legends[i] != legends[9]) {
            this.removeControl(legends[i]);
        }
    }
}
});

map.on('overlayremove', function (eventLayer) {
    for (let i = 0; i < 10; i++) {
        this.removeControl(legends[i]);
    }
});