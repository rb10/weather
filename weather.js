$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);
    console.log(JSON.stringify(data));
    
    // Put your code here. Don't change any other code in this file. You will be sad.
    var markup = "The current weather conditions are " + data.currently.summary + " and the temperature is " +data.currently.temperature +" F. " 
    + "Tomorrow's weather conditions will be " + data.daily.data[1].summary  + " The expected high will be " + data.daily.data[1].temperatureMax +" F" + " and the expected low will be " + data.daily.data[1].temperatureMin +" F. " 
    + "Two days from now, the weather conditions will be " + data.daily.data[2].summary  + " The expected high will be " + data.daily.data[2].temperatureMax +" F" + " and the expected low will be " + data.daily.data[2].temperatureMin +" F. "  
    + "In three days, the weather conditions will be " + data.daily.data[3].summary  + " The expected high will be " + data.daily.data[3].temperatureMax +" F" + " and the expected low will be " + data.daily.data[3].temperatureMin +" F. ";







    // End of your code

    $('.weather-report').html(markup);
  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});