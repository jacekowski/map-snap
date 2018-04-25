$(document).ready(() => {
  const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoiYXJlbGVuZ2xpc2giLCJhIjoiY2l6ZzNrNHZ3MDB1cDMzb3dqdmh3emhjbSJ9.1WoDWsWNnIg-Wq8LPf1j-A';
  const MAPBOX_STYLE_ID = 'cj68kq87a1gqk2srsnul2iwee';
  const MAPBOX_USERNAME = 'arelenglish';
  const defaultMap = `https://api.mapbox.com/styles/v1/${MAPBOX_USERNAME}/${MAPBOX_STYLE_ID}/tiles/256/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

  const viewer = new Cesium.Viewer('cesiumContainer', {
    timeline: false,
    animation: false,
    geocoder: false,
    baseLayerPicker: false,
    vrButton: true,
    selectionIndicator: false,
    imageryProvider: new Cesium.UrlTemplateImageryProvider({
      url: defaultMap,
    }),
  });

  viewer.terrainProvider = Cesium.createWorldTerrain();
  // viewer.scene.globe.depthTestAgainstTerrain = true;

  const airportIcon = '/images/airport.png';
  const waypointIcon = '/images/waypoint.png';
  const billboards = new Cesium.BillboardCollection();
  function renderMap(data) {
    const top_airport_visit_count = data.max_count;
    Cesium.GeoJsonDataSource.load(data, {
      stroke: Cesium.Color.fromBytes(0, 230, 240, 40),
      markerColor: Cesium.Color.fromHsl(0, 0, 0, 0.01),
    }).then((dataSource) => {
      viewer.dataSources.add(dataSource);
      viewer.zoomTo(dataSource);
      const entities = dataSource.entities.values;
      for (const i = 0; i < entities.length; i++) {
        const entity = entities[i];
        const feature_type = entity.properties.feature_type._value;
        if (feature_type === 'airport') {
          setAirportIcon(entity, top_airport_visit_count);
          entity.description = `\
          <p>Number of visits: ${entity.properties.count._value}</p>\
          <p>Identifier: ${entity.properties.identifier._value}</p>`;
        } else if (feature_type === 'waypoint') {
          setWaypointIcon(entity, top_airport_visit_count);
          entity.name = entity.properties.identifier._value;
          entity.description = `<p>Number of visits: ${entity.properties.count._value}</p>`;
        } else if (feature_type === 'line') {
          if (entity.name === undefined) {
            entity.name = 'Flight';
          }
          entity.description = '';
        }
      }
    });
    viewer.scene.primitives.add(billboards);
  }

  function setAirportIcon(entity, top_airport_visit_count) {
    billboards.add({
      position: entity.position.getValue(viewer.clock.currentTime),
      image: airportIcon,
      color: new Cesium.Color.fromHsl(0, 0, 1, setOpacity(top_airport_visit_count, entity)),
    });
  }

  function setWaypointIcon(entity, top_airport_visit_count) {
    billboards.add({
      position: entity.position.getValue(viewer.clock.currentTime),
      image: waypointIcon,
      color: new Cesium.Color.fromHsl(0, 0, 1, setOpacity(top_airport_visit_count, entity)),
    });
  }

  function setOpacity(top_airport_visit_count, entity) {
    const opacity = Math.max((entity.properties.count / top_airport_visit_count) * 12, 0.3);
    if (opacity > 1) {
      opacity = 1;
    }
    return opacity;
  }

  renderMap(data);
});
