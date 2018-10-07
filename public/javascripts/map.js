$(document).ready(() => {
  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXJlbGVuZ2xpc2giLCJhIjoiY2ptemJjdnp0MHU5ZzNrcjJqNjdncndzMSJ9.pmanP95PfBo_4GgDmcN_9Q';
  const MAPBOX_STYLE_ID = 'cj68kq87a1gqk2srsnul2iwee';
  const MAPBOX_USERNAME = 'arelenglish';
  const defaultMap = `https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

  const viewer = new Cesium.Viewer('cesiumContainer', {
    timeline: false,
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    sceneModePicker: false,
    homeButton: false,
    animation: false,
    geocoder: false,
    baseLayerPicker: false,
    selectionIndicator: false,
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: defaultMap,
    }),
  });

  viewer.terrainProvider = Cesium.createWorldTerrain();

  var billboards = new Cesium.BillboardCollection();
  function renderMap(data) {
    const top_airport_visit_count = data.max_count;
    Cesium.GeoJsonDataSource.load(data, {
      stroke: Cesium.Color.fromBytes(0, 230, 240, 40),
      markerColor: Cesium.Color.fromHsl(0, 0, 0, 0.01),
    }).then((dataSource) => {
      viewer.dataSources.add(dataSource);
      viewer.zoomTo(dataSource);
      var entities = dataSource.entities.values;
      for (var i = 0; i < entities.length; i++) {
        var entity = entities[i];
        var feature_type = entity.properties.feature_type._value;
        if (feature_type === 'airport') {
          setAirportIcon(entity, top_airport_visit_count);
        } else if (feature_type === 'waypoint') {
          setWaypointIcon(entity, top_airport_visit_count);
        }
      }
    });
    viewer.scene.primitives.add(billboards);
  }

  function setAirportIcon(entity, top_airport_visit_count) {
    billboards.add({
      position: entity.position.getValue(viewer.clock.currentTime),
      image: '/images/airport.png',
      color: new Cesium.Color.fromHsl(0, 0, 1, setOpacity(top_airport_visit_count, entity)),
    });
  }

  function setWaypointIcon(entity, top_airport_visit_count) {
    billboards.add({
      position: entity.position.getValue(viewer.clock.currentTime),
      image: '/images/waypoint.png',
      color: new Cesium.Color.fromHsl(0, 0, 1, setOpacity(top_airport_visit_count, entity)),
    });
  }

  function setOpacity(top_airport_visit_count, entity) {
    var opacity = Math.max((entity.properties.count / top_airport_visit_count) * 12, 0.3);
    if (opacity > 1) {
      opacity = 1;
    }
    return opacity;
  }

  $.ajax({
    url: 'http://localhost:3000/api/v1/stories/' + storyID + '/flights',
    type: 'GET',
    data: {
      format: 'json'
    },
    success: (response) => {
      renderMap(response);
    }
  });

});
