$(document).ready(function(){
var map;
            var myLatlng = new google.maps.LatLng(50.4490969,30.5417927);
            var centerMap = new google.maps.LatLng(50.4510969,30.5417927);
            var stylez = [
                {
                  featureType: "all",
                  elementType: "all",
                  stylers: [
                    { saturation: -100 }
                  ]
                }
            ];
            var mapOptions = {
                zoom: 16,
                streetViewControl: false,
                scrolltouch: false,
                scrollwheel: false,
                center: centerMap,
                mapTypeControlOptions: {
                     mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'tehgrayz']
                }
            };
            map = new google.maps.Map(document.getElementById("contacts"), mapOptions);
            var mapType = new google.maps.StyledMapType(stylez, { name:"Grayscale" });    
            map.mapTypes.set('tehgrayz', mapType);
            map.setMapTypeId('tehgrayz');
             
             var image = "img/marker.png";
             var marker = new google.maps.Marker({
                      position: new google.maps.LatLng(50.4490969,30.5417927),
                      map: map,
                      icon: image,
                      title: ''
                });
              function attachMessage(marker) {
              var message='<div id="marker-info"><h2>контакти</h2><hr noshade><h4>ІТ-Форум </h4>Київ, Паркова дорога 16а<br><a href="mailto:box@uwcua.com">box@uwcua.com</a></div>';

              var infowindow = new google.maps.InfoWindow(
              { content: message,
                size: new google.maps.Size(340,210)
              });
              infowindow.open(map,marker);
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map,marker);
              });
              }

              attachMessage(marker);
});