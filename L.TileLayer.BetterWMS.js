function bubbleSort(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr.length - i - 1; j++){
          if(arr[j + 1] > arr[j]){
              [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
          }
      }
  };
  return arr;
};

L.TileLayer.BetterWMS = L.TileLayer.WMS.extend({

  onAdd: function (map) {
    L.TileLayer.WMS.prototype.onAdd.call(this, map);
    map.on('click', this.getFeatureInfo, this);
  },
  
  onRemove: function (map) {
    L.TileLayer.WMS.prototype.onRemove.call(this, map);
    map.off('click', this.getFeatureInfo, this);
  },
  
  getFeatureInfo: function (evt) {
    var url = this.getFeatureInfoUrl(evt.latlng),
        showResults = L.Util.bind(this.showGetFeatureInfo, this);
    $.ajax({
      url: url,
      success: function (data, status, xhr) {
        var err = typeof data === 'string' ? null : data;
        showResults(err, evt.latlng, data);
      },
      error: function (xhr, status, error) {
        showResults(error);  
      }
    });
  },
  
  getFeatureInfoUrl: function (latlng) {
    var point = this._map.latLngToContainerPoint(latlng, this._map.getZoom()),
        size = this._map.getSize(),
        
        params = {
          request: 'GetFeatureInfo',
          service: 'WMS',
          srs: 'EPSG:4326',
          styles: this.wmsParams.styles,
          transparent: this.wmsParams.transparent,
          version: this.wmsParams.version,      
          format: this.wmsParams.format,
          bbox: this._map.getBounds().toBBoxString(),
          height: size.y,
          width: size.x,
          layers: this.wmsParams.layers,
          query_layers: this.wmsParams.layers,
          info_format: 'text/html',
          feature_count: '10',
        };
    
    params[params.version === '1.3.0' ? 'i' : 'x'] = Math.round(point.x);
    params[params.version === '1.3.0' ? 'j' : 'y'] = Math.round(point.y);
    
    return this._url + L.Util.getParamString(params, this._url, true);
  },
  //(typeof popup == "undefined" || !popup.isOpen()) && 
  showGetFeatureInfo: function (err, latlng, content) {
    if (err) { console.log(err); return; }
    if (content.length != 658 && (typeof popup == "undefined" || !popup.isOpen()) && !rulerControl._choice) {
      popup = L.popup({ maxWidth: 3500 })
      .setLatLng(latlng)
      .setContent(content)
      .openOn(this._map);
    }

    /*let popupPane = document.getElementsByClassName('leaflet-popup-pane')
    let paneToChange = popupPane[0];
    paneToChange.style.zIndex = 3000;
    console.log(paneToChange.style.zIndex);*/
    //console.log()
  }
});

L.tileLayer.betterWms = function (url, options) {
  return new L.TileLayer.BetterWMS(url, options);  
};