function removeView(thing) {
  
    var tiles = document.querySelectorAll(thing);  
     for (var i = 0; i < tiles.length; i++) {
          tiles[i].classList.remove('small', 'large', 'x-large');
    }
   
  }
  
  function newView(type, size) {
      var items = document.querySelectorAll(type);  
      for (var i = 0; i < items.length; i++) {
        console.log('Items', items[i]) 
      items[i].classList.add(size);}
         }
  
  function showAll(thing) {
     var tiles = document.querySelectorAll(thing);  
     for (var i = 0; i < tiles.length; i++) {
          tiles[i].classList.remove('noshow');
    }
  }
  
  function setView(type, size) {
    removeView('.tileContainer');
    newView(type, size);
  }
  
  function setFilter(type, toggle) {
    showAll('.tileContainer');
    newView(type, toggle);
  }

   
  //projectTiles(buttonProjectList); 
 projectTemplate(buttonProjectList);
  
  function moreView(project) {
    var proj = document.getElementById(project);
    proj.classList.toggle('modal');
    document.getElementById('more' + project).classList.toggle('noshow');
     document.getElementById('less' + project).classList.toggle('noshow');
    var mode = document.getElementsByClassName('dark')[0].className;
    if (mode === 'dark') {
      document.getElementById(project).classList.toggle('dark');
    }
  }
  
  /*window.onload=function(){
    document.getElementById("more").addEventListener("click", function() {moreButton(1,buttonProjectList) 
         });
    } */

    window.onload=function(){
      var urlVars = {};
      var urlparts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
          urlVars[key] = value;
             
      });
      //console.log('URL-LAng', urlVars.lang)
      if (urlVars.lang === "en") { 
          console.log('ENGLISCH GEHT!!!!')
          projectTemplate(projectListEN);
          english(englisch);
      }   else {
          console.log('NIX WARS!')
          projectTemplate(buttonProjectList);
          german(deutsch); 
      }
      if (urlVars.theme === "dark") {
        darkMode('.white','dark');
      }
       
      }

