function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    //var sec = date.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    //sec = updateTime(sec);
    document.getElementById("clock").innerHTML = `<strong> ${hour + ':' + min}</strong>`; 
      var t = setTimeout(function(){ currentTime() }, 1000);
  }
  
  function updateTime(k) {
    if (k < 10) {
      return "0" + k;
    }
    else {
      return k;
    }
  }
  
  currentTime(); 


  const input = document.querySelector('input');
  
  input.addEventListener('keypress', searchValue);
  
  function searchValue(e) {

    if(e.key === 'Enter'){
        
    var searchQuery = encodeURI(e.target.value);
    var url = `https://duckduckgo.com/?q=${searchQuery}&t=h_`
    const input = document.querySelector('input');
    input.value = "";
    console.log(`Navigating to ${url}`);
          window.open(url);
       
        } 
    }
  
