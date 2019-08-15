$(function () {
    $.getJSON('https://ipapi.co/json/', function(data) {
        console.log(JSON.stringify(data, null, 2));
        $("#ip").text(data.ip);
        $("#city").text(data.city);
        $("#region").text(data.region);
        $("#country").text(data.country);
        $("#country_name").text(data.country_name);
        $("#postal").text(data.postal);
        $("#latitude").text(data.latitude);
        $("#longitude").text(data.longitude);
        $("#timezone").text(data.timezone);
    });
});
