const apiKey = 'cf075700c3bf010e579059f833e882cc';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
var btn = document.getElementById("btn")
btn.addEventListener("click",function(){
  var input = document.getElementById("int")
  var int = input.value;
  console.log(int)
  input.value = ""; 
  if(int !== ''){
      const url = `${apiUrl}?q=${int}&appid=${apiKey}&units=metric`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          // Update UI with weather data
          console.log(data)
          var season = (data.weather[0].main);
          var temp = (data.main.temp)
          var name = data.name
          var humidity = data.main.humidity;
          var pressure = data.main.pressure;
          var wind = data.wind.speed;
          var cloud = data.clouds.all;
          var time = data.sys.sunrise;
          const t = new Date(time)
          const st = t.toLocaleTimeString('en-US',{
            hour12:true,
            hour:"2-digit",
            minute:"2-digit"
          });
          console.log(st)
          var emo = document.getElementById("emo");
          var back = document.getElementById("back");
          if(season=='Clear')
          {
            emo.src = 'sunny-emo.png';
              back.classList.add("sunny")
              back.classList.remove("winter")
              back.classList.remove("haze")
              back.classList.remove("rain")
              back.classList.remove("cloud")
          }
          else if(season=='Haze')
          {
            emo.src = 'haze-emo.png'
              back.classList.add("haze");
              back.classList.remove("winter")
              back.classList.remove("sunny")
              back.classList.remove("rain")
              back.classList.remove("cloud")
          }
          else if(season=='Rain' && temp>1)
          {
            emo.src = 'rain-emo.png';
                back.classList.add("rain")
                back.classList.remove("winter")
                back.classList.remove("sunny")
                back.classList.remove("haze")
                back.classList.remove("cloud")
          }
          else if(season=='Rain' && temp<1)
          {
            emo.src = 'rain-emo.png';
            back.classList.remove("rain")
            back.classList.add("winter")
            back.classList.remove("sunny")
            back.classList.remove("haze")
            back.classList.remove("cloud")
          }
          else if(season=='Clouds' && temp>=1)
          {
            emo.src = 'cloud.png'
                back.classList.add("cloud")
                back.classList.remove("sunny")
                back.classList.remove("haze")
                back.classList.remove("rain")
                back.classList.remove("winter")
          }
          else if(season=='Clouds' && temp<1)
          {
            emo.src = 'snow-emo.png'
                back.classList.remove("cloud")
                back.classList.remove("sunny")
                back.classList.remove("haze")
                back.classList.remove("rain")
                back.classList.add("winter")
          }
          else if(season=='Snow' && temp<1)
          {
            emo.src = 'snow-emo.png';
                  back.classList.add("winter")
                  back.classList.remove("sunny")
                  back.classList.remove("haze")
                  back.classList.remove("rain")
                  back.classList.remove("cloud")
                // back.classList.remove("winter")
          }
          document.getElementById("temp").innerHTML = temp;
          document.getElementById("name").innerHTML = name;
          document.getElementById("season").innerHTML = season;
          document.getElementById("humi").innerHTML = humidity;
          document.getElementById("press").innerHTML = pressure;
          document.getElementById("wind").innerHTML = wind;
          document.getElementById("cloud").innerHTML = cloud;
          console.log(season)
        })
        .catch(error => {
          console.error('Error fetching weather:', error);
        });
        
    } 
  else{
    alert("Enter the location")
  }
})  