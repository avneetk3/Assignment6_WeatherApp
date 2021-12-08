//alert("In JS");
var input = document.getElementById('input');
var dateItem = document.getElementById('date');
var city  = document.getElementById('cityName');
var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var weather = document.getElementById("weather"); 
var windSpeed = document.getElementById('windSpeed');
var uvi = document.getElementById('uvi');
var button = document.querySelector(".search");

btn = document.getElementById("btn");
//btn.classList.add('hide');
btn.classList.add('hide');
btns = document.getElementsByClassName(".btn");
var ul = document.createElement("ul");// for displaying result
var li = document.createElement("li"); // for displaying result

const cityButtonsElement = document.getElementById('city-btn');

var buttons = document.querySelectorAll('#city-btn button')

var cities = [];
var count =0;


document.addEventListener("DOMContentLoaded", function() {
  console.log("in first function")
 
  callAPI("Toronto");
  cities.push("Toronto")
  localStorage.setItem("citiesArray", JSON.stringify(cities));

  console.log(cities);

});


/*btn.classList.add('hide');
   while(cityButtonsElement.firstChild)
    {
      cityButtonsElement.removeChild
        (cityButtonsElement.firstChild);
    }*/

button.addEventListener('click',callAPI);
function callAPI(mycity){
  //var mycity = "Toronto"
  var requestUrl= "https://api.openweathermap.org/data/2.5/weather?q="+((input.value  && input.value.length >0) ? input.value : mycity)+"&APPID=c2d6ccf48c2c6c33cd0d7c6be503d255";
  fetch(requestUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    var dateValue = moment.unix(data['dt']).format("MM/DD/YYYY");
    var tempValue = data['main']['temp'];
    var cityValue = data.name;
    var weatherValue = data['weather'][0]['main'];
    var humidityValue = data['main']['humidity'];
    var windspeed = data['wind']['speed'];
    var weatherImg = document.getElementById("wicon");
    var weatherImg1= data['weather'][0]['icon'];
  
    var iconurl = "https://openweathermap.org/img/w/" + weatherImg1 + ".png";
    weatherImg.setAttribute("src", iconurl);
  
    var long = data['coord']['lon'];
    var latt = data.coord.lat;
    console.log("Longitude", long)
    console.log("Lattitude", latt);
    var uvUrl= 'https://api.openweathermap.org/data/2.5/onecall?lat='+latt+'&lon='+long+'&appid=c2d6ccf48c2c6c33cd0d7c6be503d255'
  
  
    var br = document.createElement("br");
    var element = document.body;
    element.appendChild(br);
  
    console.log('tempValue-',tempValue);
    console.log('cityValue-',cityValue);
    console.log('weatherValue-',weatherValue);
    console.log('humidityValue-',humidityValue);
    console.log('DateValue-',dateValue);
    console.log('Wind Speed', windspeed);
  
    //Create Buttnos for list 
    /*btn.classList.remove('hide');
    for (let i = 0; i <= li.length; i++) 
          {
              console.log(buttons.length);
              ul.li.classList.remove('hide');
              if(localStorage.getItem('button'))
              {
                  li.value(localStorage.getItem('li.value')) ;
                  ul.appendChild(li);
                  cityButtonsElement.appendChild(ul)
              }
              
           }*/
     /*var button1= document.createElement('button') // for displaying result
     button1.innerText = cityValue;
     button1.classList.add('btn');*/
     //let va1l = button1.text;
     var storedCities = (JSON.stringify(localStorage.getItem("citiesArray")));
     
     if(count ==0 && cityValue == "Toronto")
     { createButton(cityValue);
      count++;}
      if((storedCities.includes(cityValue)) == false )
       createButton(cityValue);

       
      
    city.innerHTML = ""+ cityValue;
    city.innerHTML = city.innerHTML + " " + moment.unix(data['dt']).format("MM/DD/YYYY");
    city.appendChild(weatherImg);
    weather.innerHTML = "weather: "+ weatherValue;
    element.appendChild(br);
    temperature.innerHTML = "temperature: "+ tempValue + "F";
    element.appendChild(br);
    humidity.innerHTML = "humidity: "+ humidityValue;
    element.appendChild(br);
    windSpeed.innerHTML= "Wind Speed"+ windspeed;
    fetch(uvUrl)
      .then(response => response.json())
      .then(data1 => {
        console.log(data1);
        var uviData = data1.current.uvi;
        uvi.style.backgroundColor = "darkgreen"
        uvi.innerHTML = "UVI = " +  uviData;     
         
        var box1 = document.getElementById("mini-box1");
        var box2 = document.getElementById("mini-box2");
        var box3 = document.getElementById("mini-box3");
        var box4 = document.getElementById("mini-box4");
        var box5 = document.getElementById("mini-box5");
  
        
        box1.append(document.createElement("p"));
        box2.append(document.createElement("p"));
        box3.append(document.createElement("p"));
        box4.append(document.createElement("p"));
        box5.append(document.createElement("p"));
  
        for(let i=1; i<=5; i++)
        {
          $(".weekly").addClass("col");
          $(".weekly").addClass("row");
         
          var weatherImg2 = document.createElement("img")
          var weatherImg3= data1['daily'][i]['weather'][0]['icon'];
  
          var iconurl2 = "http://openweathermap.org/img/w/" + weatherImg3 + ".png";
          weatherImg2.setAttribute("src", iconurl2);
  
          var dates = data1.daily[i].dt;
          var temperature = data1['daily'][i]['temp']['max'];
          var wind_speed = data1['daily'][i]['wind_speed'];
          console.log("WindSpeed in box",wind_speed);
    //var weatherImage= data.weather[0].icon;   //try to box create wtih documrnt.onready
         var humidity = data1['daily'][i]['humidity']
         if(i==1)
         {
          box1.appendChild(weatherImg2);
          box1.innerHTML =box1.innerHTML+moment.unix(dates).format("MM/DD/YYYY");// dates; 
          box1.appendChild(br);
          box1.innerHTML = box1.innerHTML+"Temperature:" + temperature;
          box1.appendChild(br);
          box1.innerHTML =box1.innerHTML+ "Wind Speed:" + wind_speed
          box1.appendChild(br);
          box1.innerHTML = box1.innerHTML+ "humidity:" + humidity;
  
         }
         else if(i==2)
         {
          box2.appendChild(weatherImg2);
          box2.innerHTML =box2.innerHTML+ moment.unix(dates).format("MM/DD/YYYY"); 
          box2.appendChild(br);
          box2.innerHTML =box2.innerHTML+ "Temperature:" + temperature;
          box2.appendChild(br);
          box2.innerHTML =box2.innerHTML+ "Wind Speed:" + wind_speed
          box2.appendChild(br);
          box2.innerHTML = box2.innerHTML+ "humidity:" + humidity;
         }
         else if(i==3)
         {
          box3.appendChild(weatherImg2);
          box3.innerHTML =box3.innerHTML+ moment.unix(dates).format("MM/DD/YYYY"); 
          //box3.innerHTML = dates;
          box3.appendChild(br);
          box3.innerHTML =box3.innerHTML + "Temperature:" + temperature;
          box3.appendChild(br);
          box3.innerHTML =box3.innerHTML+ "Wind Speed:" + wind_speed
          box3.appendChild(br);
          box3.innerHTML = box3.innerHTML+ "humidity:" + humidity;
         }
         else if (i==4)
         {
          box4.appendChild(weatherImg2);
          box4.innerHTML =box4.innerHTML+ moment.unix(dates).format("MM/DD/YYYY");
          //box4.innerHTML = dates;
          box4.appendChild(br);
          box4.innerHTML =box4.innerHTML+ "Temperature:" + temperature;
          box4.appendChild(br);
          box4.innerHTML =box4.innerHTML+ "Wind Speed:" + wind_speed
          box4.appendChild(br);
          box4.innerHTML = box4.innerHTML+ "humidity:" + humidity;
         }
         else {
          box5.appendChild(weatherImg2);
          box5.innerHTML =box5.innerHTML+ moment.unix(dates).format("MM/DD/YYYY");
          //box5.innerHTML = dates;
          box5.appendChild(br);
          box5.innerHTML = box5.innerHTML+"Temperature:" + temperature;
          box5.appendChild(br);
          box5.innerHTML =box5.innerHTML+ "Wind Speed:" + wind_speed
          box5.appendChild(br);
          box5.innerHTML = box5.innerHTML+ "humidity:" + humidity;
         }
        }
      });

  function createButton(myCity)
  {
    if((storedCities.includes(myCity)) == false )//|| storedCities.includes("Toronto")== true)
    // {
       console.log(storedCities.includes(cityValue));
     // for (let i = 0; i <= buttons.length; i++) 
     // {
        var button1= document.createElement('button') // for displaying result
        button1.innerText = myCity;
        button1.classList.add('btn');
   
         //ul.li.classList.remove('hide');
        /* if(localStorage.getItem('button'))
         {
            // console.log(li.value);
             btn.text(localStorage.getItem('button.text')) ;
             //ul.appendChild(li);
            // if(cityValue != btn.text)
            // localStorage.setItem("button", JSON.stringify(val));
            

             cityButtonsElement.appendChild(btn[i])
         }*/
         
      //}
         cities.push(myCity);
        // citiesArray.push(cityValue);
         localStorage.setItem("citiesArray", JSON.stringify(cities));
         //localStorage.setItem("citiesArray", JSON.stringify(cityValue));
        cityButtonsElement.appendChild(button1);
        cityButtonsElement.append(br);
   // }

  }
  
    }) //end of fetch1
    
    
  .catch(err => console.log(err));
  }


