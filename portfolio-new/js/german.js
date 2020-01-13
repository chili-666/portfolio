function german(arr) {
    console.log('german called', arr)
    var key = Object.keys(arr);
    var value;
    var i;
    for (i = 0; i < key.length; i++) {
       
       document.getElementById(key[i]).innerHTML = arr[key[i]]; 
       
    };
    document.getElementById('EN').classList.toggle('noshow');
    document.getElementById('DE').classList.toggle('noshow');
    projectTemplate(buttonProjectList);
    
}
    
    
    
    
    
    

    
        
        