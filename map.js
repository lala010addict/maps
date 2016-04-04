function initialize() {
    var center = new google.maps.LatLng(33.9019, -118.2419);

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var markers = [];
    for (var i = 0; i < checkedVendors.length; i++) {
        var latLng = new google.maps.LatLng(checkedVendors[i].latitude,
            checkedVendors[i].longitude);
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
    elements.push($('<input class="numbers" type="checkbox" checked ><label class="checkbox-inline" >' + uniqVendor[i] + '</label>'));
}
// console.log('elements', elements[1][0].innerText)


$('#vendor').append(elements)


var removeVendor = [];
var checkedVendors = data

$(":checkbox").on("change", function() {
    var mytext = $(this).next('label').text();

    console.log($(this)[0].checked, mytext)

    if ($(this)[0].checked === false)

    { removeVendor.push(mytext) }

    if ($(this)[0].checked === true && removeVendor.indexOf(mytext) !== -1) {
        removeVendor.splice(removeVendor.indexOf(mytext), 1);
    }

    console.log(removeVendor, 'removeVendor');


    checkedVendors = _.reject(data, function(item) {
        return removeVendor.indexOf(item['vendorId']) != -1
    })

    initialize();

});



console.log(checkedVendors, 'checkedVendors')
