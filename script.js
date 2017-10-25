var url = 'http://api.open-notify.org/iss-now.json';
// API from http://open-notify.org/Open-Notify-API/ISS-Location-Now/

fetch(url)

    .then(function(response) {
    
        return response.json();
    
    })

    .then(function(response) {
    
        console.log(response.timestamp);
    
        var currentLatitude = response.iss_position.latitude;
        var currentLatitudeHundred = currentLatitude * 1000;
        var currentLatitudeHundredRounded = Math.round(currentLatitudeHundred);
        var currentLatitudeRounded = currentLatitudeHundredRounded / 1000;
        console.log(currentLatitudeRounded);
        var currentLognitude = response.iss_position.longitude;
        var currentLognitudeHundred = currentLognitude * 1000;
        var currentLognitudeHundredRounded = Math.round(currentLognitudeHundred);
        var currentLognitudeRounded = currentLognitudeHundredRounded / 1000;
        console.log(currentLognitudeRounded);
        var currentLocation = currentLatitudeRounded + ', ' + currentLognitudeRounded;

        console.log(currentLocation); 
        // container.innerHTML = '<div class="coordinates">' + currentLocation + '</div>';
    
        initMap(parseFloat(currentLatitudeRounded), parseFloat(currentLognitudeRounded));
    
        }) 

    function initMap(num1, num2) {        

        var uluru = {lat: num1, lng: num2};

        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: uluru,
            streetViewControl: false,
            mapTypeControl: false,
            styles: [
              {
                "elementType": "geometry",
                "stylers": [
                              {
                    "color": "#212121"
                  }
                ]
              },
              {
                "elementType": "labels",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#212121"
                  }
                ]
              },
              {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#757575"
                  },
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#9e9e9e"
                  }
                ]
              },
              {
                "featureType": "administrative.land_parcel",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#bdbdbd"
                  }
                ]
              },
              {
                "featureType": "administrative.neighborhood",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#181818"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                  {
                    "color": "#1b1b1b"
                  }
                ]
              },
              {
                "featureType": "road",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                  {
                    "color": "#2c2c2c"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#8a8a8a"
                  }
                ]
              },
              {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#373737"
                  }
                ]
              },
              {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#3c3c3c"
                  }
                ]
              },
              {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#4e4e4e"
                  }
                ]
              },
              {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#616161"
                  }
                ]
              },
              {
                "featureType": "transit",
                "stylers": [
                  {
                    "visibility": "off"
                  }
                ]
              },
              {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#757575"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                  {
                    "color": "#000000"
                  }
                ]
              },
              {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                  {
                    "color": "#3d3d3d"
                  }
                ]
              }
            ]
        });
        
        var image = 'Rocket_Emoji_grande_smallest.png';
        var marker = new google.maps.Marker({
            position: uluru,
            map: map,
            icon: image
        });

      }