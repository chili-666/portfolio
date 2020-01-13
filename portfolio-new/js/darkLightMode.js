  
  function darkMode(type, size) {
    document.getElementById('dark').classList.toggle('noshow');
    document.getElementById('light').classList.toggle('noshow');
    var links = document.querySelectorAll('.moreLink');
    
    for (var x = 0; x < links.length; x++) {
      console.log('Link', links[x]);
      let ref =  links[x].getAttribute('href');
      console.log('ref', ref);
      ref = ref +'&theme=dark';
      links[x].setAttribute("href", ref);
    } 
      var items = document.querySelectorAll(type);  
      for (var i = 0; i < items.length; i++) {
      //items[i].classList.toggle('white')  
      items[i].classList.toggle('dark');
    }
   
    }
  
  function lightMode(type, size) {
    document.getElementById('light').classList.toggle('noshow');
    document.getElementById('dark').classList.toggle('noshow');
    var items = document.querySelectorAll(type);  
      for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('white')  
      items[i].classList.toggle('dark');
    }
}