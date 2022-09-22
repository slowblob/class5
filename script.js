let btn=document.getElementById('btn');
let btntwo=document.getElementById('btnTwo');
function getInputValue(){
  
    let inputVal = document.getElementById('myInput').value;
    let weather = inputVal;
    
    if (weather === 'cloudy' || weather == 'Cloudy') {
    document.getElementById('outputTxt').textContent = "Today is cloudy";  
    document.getElementById('outputImg').innerHTML =  `<img src= "https://www.wkbn.com/wp-content/uploads/sites/48/2022/04/overcast-skies-clouds-cloudy-spring-summer-weather-generic-4.jpg">`
    
    }else if(weather === 'sunny' || weather=='Sunny'){
      document.getElementById('outputTxt').textContent="Today is sunny";
            document.getElementById('outputImg').innerHTML=`<img src="https://crawfordcountynow.sagacom.com/files/2021/05/Sunny-Skies-1200x768.jpg"/>`     
             } 
    
      else if(weather === 'windy' || weather == 'Windy'){
    document.getElementById('outputTxt').textContent = "Today is windy";
    document.getElementById('outputImg').innerHTML = `<img src="https://dnmkr7tf85gze.cloudfront.net/CACHE/images/media/image/hurricane_winds/606bb70afbd5e92cf0df6368889e0ffa.jpg"/>`      
             } 
      
    else if(weather === 'foggy' || weather == 'Foggy'){
    document.getElementById('outputImg').innerHTML = `<img src="https://imageryandmusic.com/wpWP2019/wp-content/uploads/2012/10/foggy-road-682x1024-1024x585.jpg"/>`;
    document.getElementById('outputTxt').textContent = "Today is foggy";    
             } 
    else {
      document.getElementById('outputTxt').textContent ="Invalid weather"
      console.log('Invalid weather.');
    }
    }
    function clear(){
        document.getElementById('myInput').value="";
        
    }
    btn.addEventListener('click',getInputValue);
    btntwo.addEventListener('click', clear);


