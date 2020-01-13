function english(arr) {
    projectTemplate(projectListEN);
    console.log('Englisch Button', arr);
    var key = Object.keys(arr);
    var value;
    var i;
    for (i = 0; i < key.length; i++) {
       
       document.getElementById(key[i]).innerHTML = arr[key[i]]; 
       
    };
    document.getElementById('EN').classList.toggle('noshow');
    document.getElementById('DE').classList.toggle('noshow');
    var links = document.querySelectorAll('.moreLink');
   
    for (var x = 0; x < links.length; x++) {
      console.log('Link', links[x]);
      let ref =  links[x].getAttribute('href');
      console.log('ref', ref);
      ref = ref +'&lang=en';
      links[x].setAttribute("href", ref);
    
    }
}
    
    