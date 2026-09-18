const map = new ol.Map({
    target: 'map',

    layers: [
        new ol.layer.Tile({
            source: new ol.source.OSM()
        }),

        new ol.layer.Vector({
            source: new ol.source.Vector({
                url: 'map.kml',
                format: new ol.format.KML()
            })
        })
    ],

    view: new ol.View({
        center: ol.proj.fromLonLat([24.695, 59.407]),
        zoom: 14
    })
});


// Funktsioon 1 – lähenda kaart
function zoomIn() {
    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom !== undefined) {
        view.setZoom(zoom + 1);
    }
}


// Funktsioon 2 – kaugenda kaart
function zoomOut() {
    const view = map.getView();
    const zoom = view.getZoom();

    if (zoom !== undefined) {
        view.setZoom(zoom - 1);
    }
}