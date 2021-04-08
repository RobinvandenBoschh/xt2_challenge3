mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iaW52YW5kZW5ib3NjaCIsImEiOiJja24zNDJjaGEwNWFpMm9vMHF4dW0xeDl0In0.Xmp5IyyS4AXd6QKfqyFP-g';

/*var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    center: [-96, 28.8],
    zoom: 3
});

map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
);
 
map.on('load', function () {
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            map.addSource('points', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            // feature for Mapbox DC
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-80.54444444444444, 28.4858333]
                            },
                            'properties': {
                                'title': 'Landing zones 1 & 2'
                            }
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-120.613, 34.633]
                            },
                            'properties': {
                                'title': 'Landing zone 4'
                            }
                        }
                    ]
                }
            });
 
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'points',
                'layout': {
                    'icon-image': 'custom-marker',
                    'text-field': ['get', 'title'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top'
                }
            });
        }
    );
});*/

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    //center: [-96, 28.8],
    center: [-120.613, 34.633],
    zoom: 3
    });
     
    map.on('load', function () {
    map.setPaintProperty('building', 'fill-color', [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        15,
        '#9c4427',
        22,
        '#b44f2d'
    ]);
     
    map.setPaintProperty('building', 'fill-opacity', [
        'interpolate',
        ['exponential', 0.5],
        ['zoom'],
        15,
        0,
        22,
        1
    ]);
    });
     
    document.getElementById('zoom').addEventListener('click', function () {
    map.zoomTo(19, { duration: 9000 });
});

if(screen.width >= 1025) {
    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
    );
}


map.on('load', function () {
    map.loadImage(
        'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            map.addSource('points', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            // feature for Mapbox DC
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-80.54444444444444, 28.4858333]
                            },
                            'properties': {
                                'title': 'Landing zones 1 & 2'
                            }
                        },
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-120.613, 34.633]
                            },
                            'properties': {
                                'title': 'Landing zone 4'
                            }
                        }
                    ]
                }
            });
 
            map.addLayer({
                'id': 'points',
                'type': 'symbol',
                'source': 'points',
                'layout': {
                    'icon-image': 'custom-marker',
                    'text-field': ['get', 'title'],
                    'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                    'text-offset': [0, 1.25],
                    'text-anchor': 'top'
                }
            });
        }
    );
});