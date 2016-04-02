function initialize() {
    var center = new google.maps.LatLng(33.4419, -118.1419);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var markers = [];
    for (var i = 0; i < data.length; i++) {
        var latLng = new google.maps.LatLng(data[i].latitude,
            data[i].longitude);
        var marker = new google.maps.Marker({
            position: latLng
        });
        markers.push(marker);
    }

    var markerCluster = new MarkerClusterer(map, markers);
}

google.maps.event.addDomListener(window, 'load', initialize);

var uniqVendor = _.uniq(_.pluck(data, 'vendorId'));
console.log(uniqVendor)

var elements = [];
for (var i = 0; i < uniqVendor.length; i++) {
    elements.push($('<label class="checkbox-inline"><input type="checkbox" value="">' + uniqVendor[i] + ' </label>'));
}

$('#vendor').append(elements);

var filter = _.filter(data, function(data){ return data.vendorId !== 2})

console.log('filter', filter)