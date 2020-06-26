var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 4
     }
     );
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
   attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
   }).addTo(mymap);


var DataLoca = $('.list-group-item');

DataLoca.each(
    function() {
        var DataLong = $(this).data('long');
        var DataLat = $(this).data('lat');
        var cityname = $(this).data('cityname')
        L.marker([DataLong, DataLat]).addTo(mymap).bindPopup(cityname);
    }
)
