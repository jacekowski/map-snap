const express = require('express');
const router = express.Router();

/* GET screenshot */
router.get('/', function(req, res, next) {
  const mapData = {
    "type": "FeatureCollection",
    "max_count": 4,
    "features": [
        {
            "type": "Feature",
            "properties": {
                "count": 2,
                "feature_type": "airport",
                "name": "Westchester County Airport",
                "identifier": "KHPN"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.70760345458984,
                    41.06700134277344
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 4,
                "feature_type": "airport",
                "name": "Detroit Metropolitan Wayne County Airport",
                "identifier": "KDTW"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -83.35340118408203,
                    42.212398529052734
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Carmel",
                "identifier": "CMK"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -73.5813980102539,
                    41.28010177612305
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Slate Run",
                "identifier": "SLT"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.97010040283203,
                    41.51279830932617
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 0,
                "name": "KHPN to: KDTW",
                "feature_type": "line",
                "geodesic": true,
                "geodesic_steps": 50,
                "geodesic_wrap": true
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -73.70760345458984,
                        41.06700134277344
                    ],
                    [
                        -73.5813980102539,
                        41.28010177612305
                    ],
                    [
                        -77.97010040283203,
                        41.51279830932617
                    ],
                    [
                        -83.35340118408203,
                        42.212398529052734
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "airport",
                "name": "Kansas City International Airport",
                "identifier": "KMCI"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -94.713898,
                    39.2976
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Roberts",
                "identifier": "RBS"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -88.16429901123047,
                    40.58169937133789
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Jacksonville",
                "identifier": "IJX"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -90.23870086669922,
                    39.77640151977539
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 0,
                "name": "KDTW to: KMCI",
                "feature_type": "line",
                "geodesic": true,
                "geodesic_steps": 50,
                "geodesic_wrap": true
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -83.35340118408203,
                        42.212398529052734
                    ],
                    [
                        -88.16429901123047,
                        40.58169937133789
                    ],
                    [
                        -90.23870086669922,
                        39.77640151977539
                    ],
                    [
                        -94.713898,
                        39.2976
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "airport",
                "name": "Wawa Airport",
                "identifier": "CYXZ"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.78669738769531,
                    47.96670150756836
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Grayling",
                "identifier": "CGG"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.72889709472656,
                    44.68159866333008
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 0,
                "name": "CYXZ to: KDTW",
                "feature_type": "line",
                "geodesic": true,
                "geodesic_steps": 50,
                "geodesic_wrap": true
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -84.78669738769531,
                        47.96670150756836
                    ],
                    [
                        -84.72889709472656,
                        44.68159866333008
                    ],
                    [
                        -83.35340118408203,
                        42.212398529052734
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 1,
                "feature_type": "waypoint",
                "name": "Keating",
                "identifier": "ETG"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -78.1427993774414,
                    41.21500015258789
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "count": 0,
                "name": "KDTW to: KHPN",
                "feature_type": "line",
                "geodesic": true,
                "geodesic_steps": 50,
                "geodesic_wrap": true
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -83.35340118408203,
                        42.212398529052734
                    ],
                    [
                        -78.1427993774414,
                        41.21500015258789
                    ],
                    [
                        -73.70760345458984,
                        41.06700134277344
                    ]
                ]
            }
        }
    ]
}
  res.render('index', {params: mapData});
});

router.post('/', function(req, res) {
  const mapData = req.body;
  render('index', {params: mapData})
  // Use mapData to generate map
  // take screenshot
  const takeScreenshot = require('../models/screenshot');

   res.send(
     {
       response: {
         success: true,
         image_url: "https://www.map_image.amazon.com"
       }
     }
   );
});

module.exports = router;
