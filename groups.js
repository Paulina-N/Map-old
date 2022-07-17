layerString = [
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
  ]

var group1 = {
    Anchoring: "Anchoring",
    Bathymetry: "Bathymetry",
    DEM: "DEM",
    Declaracion_Riesgo_Cuantitativo: "Declaracion Riesgo Cuantitativo",
    Declaracion_Riesgo_Quimico: "Declaracion Riesgo Quimico",
};

var group2 = {
    Declaration_of_Urgent_Measures: "Declaration of Urgent Measures",
    Declaration_of_at_risk: "Declaration of at risk of not achieving good quantitative or chemical status",
    Environmental_zoning_for_renewable_energy: "Environmental zoning for renewable energy",
    Fartet_recovery_plan: "Fartet recovery plan",
    Fishing_company_zones: "Fishing company zones",
};

var group3 = {
    Flora_recovery_plan: "Flora recovery plan",
    Flow_accumulation: "Flow accumulation",
    Flow_direction: "Flow direction",
    Irrigated_crops: "Irrigated crops",
    Macrophytes: "Macrophytes",
};

var group4 = {
    Mar_Menor_catchment_area: "Mar Menor catchment area",
    Marine_habitats_2018: "Marine habitats 2018",
    Marine_habitats: "Marine habitats",
    Municipalities: "Municipalities",
    National_census_dischrages: "National census dischrages",
};

var group5 = {
    Natura_2000_Network_LIC_ZEC: "Natura 2000 Network LIC ZEC",
    Natura_2000_Network_ZEPA: "Natura 2000 Network ZEPA",
    Natural_protected_areas: "Natural protected areas",
    RAMSAR:"RAMSAR",
    Regions: "Regions",
};

var group6 = {
    Relief: "Relief",
    SIAM_weather_stations: "SIAM weather stations",
    SIOSE_Land_cover: "SIOSE Land cover",
    SIOSE_Land_uses: "SIOSE Land uses",
    Sailing_speed: "Sailing speed",
};

var group7 = {
    Selected_areas_for_the_implementation_of_thermo_solar_plants: "Selected areas for the implementation of thermo solar plants",
    Soil_regional_layer: "Soil regional layer",
    Surface_water_quality: "Surface water quality",
    Temporary_exclusion_area: "Temporary exclusion area",
    Terrestrial_habitats: "Terrestrial habitats",
};

var group8 = {
    ZEPIM: "ZEPIM",
    Zone_0: "Zone 0",
    Zone_A1: "Zone A1",
    Zone_A2: "Zone A2",
    Zone_B: "Zone B",
    Zones: "Zones",
    //"DEM AMSS": DEM_AMSS, //BLANK MAP ???
    CHL: "CHL",
    Corine_Land_Cover: "Corine Land Cover",
};

var groupid = [
    "group1",
    "group2",
    "group3",
    "group4",
    "group5",
    "group6",
    "group7",
    "group8",
]

var groupval = [
    group1,
    group2,
    group3,
    group4,
    group5,
    group6,
    group7,
    group8,
]

var a = {
    "Anchoring": 0,
    "Bathymetry": 1,
    "DEM": 2,
    "Declaracion_Riesgo_Cuantitativo": 3,
    "Declaracion_Riesgo_Quimico": 4,
};

var map = L.map('map', {
    center: [37.75, -1],
    zoom: 10,
    minZoom: 2,
    layers: [Satellite]
});

var j = 300;
for (let i = 0; i < layerString.length; i++) {
    map.createPane(layerString[i]);
    map.getPane(layerString[i]).style.zIndex = j;
    j--;
}

/*map.eachLayer(function(layer){
    document.write((layer.getSource().getParams().LAYERS));
});*/

for (let i = 0; i < groupval.length; i++) {
    var wrapper = document.getElementById(groupid[i]);
    var HTML1 = '';

    for (const [key, value] of Object.entries(groupval[i])) {
        HTML1 += '<li><label><input type="checkbox" name=' + key + ' id=' + key + '>' + value + '</label></li>';
    }
    var sortable = Sortable.create(wrapper, {animation: 150,
        onEnd: function (evt) {
            evt.newIndex;
            for (const [key, value] of Object.entries(a)) {
                if (evt.oldIndex == value) {
                    if (evt.newIndex > evt.oldIndex) {
                        map.getPane(key).style.zIndex = map.getPane(key).style.zIndex - (evt.newIndex - evt.oldIndex);
                    }
                    if (evt.newIndex < evt.oldIndex) {
                        var old = key;
                        var oldZin = map.getPane(key).style.zIndex;
                        map.getPane(key).style.zIndex = map.getPane(key).style.zIndex + (evt.oldIndex - evt.newIndex);
                        for (j = evt.oldIndex - evt.newIndex; j > 0; j--) {
                            for (const [key2, value2] of Object.entries(a)) {
                                //var b = j + parseInt(oldZin);
                                //document.write(b + " " + map.getPane(key2).style.zIndex + " " + key2 + " " + old);
                                if ((j + parseInt(oldZin) == map.getPane(key2).style.zIndex) && (key2 != old)) {
                                    map.getPane(key2).style.zIndex--;
                                    old = key2;
                                }
                            }
                        }
                    }
                }
            }
        }});
    wrapper.innerHTML = HTML1;
    var groupSort = document.getElementById("pageSubmenu");
    var sortable = Sortable.create(groupSort, {
        group: "grname",
        animation: 150,
        onEnd: function (evtg) {
            evtg.newIndex;
        }
    });
}
