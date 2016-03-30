  function initialize() {
      var center = new google.maps.LatLng(37.4419, -122.1419);

      var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 3,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var markers = [];
      for (var i = 0; i < data.length; i++) {
          var latLng = new google.maps.LatLng(data[i].latitude,
              data[i].longitude);
          console.log(data.latitude);
          var marker = new google.maps.Marker({
              position: latLng
          });
          markers.push(marker);
      }

      var markerCluster = new MarkerClusterer(map, markers);
  }
  google.maps.event.addDomListener(window, 'load', initialize);
