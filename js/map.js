function initMap() {
    var uluru = {lat: 52.132009, lng: 4.601994};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}