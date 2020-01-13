
function getUrlVars() {
    var urlVars = {};
    var urlparts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        urlVars[key] = value;
           
    });
    console.log('Vars: '+urlVars);
   
    
}



function showDetail() {
    const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);
}

function read_prop(obj, prop) {
    return obj[prop];
}

function appendDetail(arr) {
    const detailPage = document.getElementById('detailContent');
    const template = document.getElementById('complete');
    const instance = document.importNode(template.content, true);
    const split = instance.getElementById('split');
    const splitInstance = document.importNode(split.content, true);
    const single = instance.getElementById('singlepic');
    const singleInstance = document.importNode(single.content, true);
    const gallery = instance.getElementById('gallery');
    const galleryInstance = document.importNode(gallery.content, true);
    //Variablen aus URL holen
    const vars =  {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
        return vars
    });
    /*Testing urlVars*/
     /*for (var prop in vars) {
        console.log('Filter: '+prop + " = " +vars.[prop]);
        };*/

        

    //onsole.log("Vars1: " +vars.color);
    
    //Liste nach URL-Vars filtern
        let detail = arr.filter(obj => {
        return obj.ID === vars[0]
    });
    let param = vars.id;
    console.log('Param: '+param);
    /*var filter = buttonProjectList.filter(function(el) {
        console.log('elID: ' + el.ID + 'Prama: '+ param);
        return el.ID == param;
    });*/
    var filter =[];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].ID == param) {
            filter.push(arr[i]);
        } else {
            document.getElementById('detailContent').innerHTML  ="Get Fucked!";

        }
    };
    //Testing filter function
   /* for (var prop in filter[0]) {
    console.log('Filter: '+prop + " = " +filter[0][prop]);
    };*/
    //Keys aus Array of Objects ziehen
    var keys =[];
    Object.keys(filter[0]).forEach(function(key) {
        //console.log(filter[key]);
        keys.push(key)
    });
    //let keys = Object.getOwnPropertyNames(filter);
    console.log('Schluessel: ' +keys);
    //Template für komplette Seite holen
   
    console.log("Split: "+splitInstance);
    var vorher = read_prop(filter[0], 'before');
    var nachher = read_prop(filter[0], 'after');
    var pic = read_prop(filter[0], 'pic');
    var view = read_prop(filter[0], 'view');
    var galleryPics = read_prop(filter[0], 'gallery');
    console.log('Gallery: ' +galleryPics);
    //If-Abfrage Vorher/Nachher
    if (view === "before"){
        console.log('Template: Split');
        splitInstance.getElementById('before').innerHTML = vorher;
        splitInstance.getElementById('after').innerHTML = nachher;
    /*splitInstance.querySelector("#before").innerHTML = vorher;
    splitInstance.querySelector('#after').innerHTML = nachher;
    splitInstance.querySelector('#mob-before').innerHTML = vorher;
    splitInstance.querySelector('#mob-after').innerHTML = nachher;*/
       } else {
           /*splitInstance.getElementById('handle').classList.toggle('noshow');*/
       }

    

    //If-Abfrage  für SingleView 
    var singleNode  
    if (view === "single") {
        console.log('Single View');
        singleNode = document.createElement('section');
        singleNode.setAttribute('class', 'full-pic');
        singleNode.setAttribute('id', 'full-pic');
        singleNode.innerHTML = '<img src="'+ pic +'">';
        singleInstance.appendChild(singleNode);
        instance.getElementById('splitplace').style.order = "2";
        instance.getElementById('longTextOut').style.order= "1";
    }
    //for-Schleife für die Gallerie
    var imgNode;
    var imgSRC;
    if (view === "gallery") {
        imgNode = document.createElement('section');
        imgNode.setAttribute("class", "galleryPics");
        imgNode.setAttribute("id", "galleryPics");
        console.log('GalleryView');
        galleryPics.forEach(function (element) {
            imgSRC = document.createElement("img");
            console.log('Node: '+ imgNode);
            imgSRC.setAttribute("src",  element);
            imgSRC.setAttribute("class", "galleryPic schatten");
            
            imgNode.appendChild(imgSRC);
        });
        galleryInstance.appendChild(imgNode);
    }

    //For-Schleife um den restlichen Content einzufügen
    for  (var i = 7; i > 0; i--) {
    let select = "."+keys[i];
    let key = keys[i];
    let content = read_prop(filter[0], key);
   
    //console.log('Content: '+content);
    console.log('Keys: ' + select + ' |Content: '+content);
   instance.querySelector(select).innerHTML = content;
        };
        if (view === "before") {
            console.log('Ist view before');
        instance.getElementById('splitplace').appendChild(splitInstance);}
        instance.getElementById('splitplace').appendChild(galleryInstance);
        instance.getElementById('splitplace').appendChild(singleInstance);
        document.getElementById('detailContent').appendChild(instance);
        var event = new Event ('done');
         document.dispatchEvent(event);
         var hero =document.getElementById("hero-pic");
         hero.innerHTML = '<img src="'+filter[0].pic+'" class="hero-pic pic" id="hero-pic" />';
         if (vars.color === 'dark') {
            console.log('darkmode detectd');
            darkMode('.white', 'dark');
        }
        
        var backlinkURL = "index.html";
        for (var prop in vars) {
            if (prop === 'id'){
        backlinkURL = backlinkURL +'?' + prop + '=' +vars[prop];
            } else {
                backlinkURL = backlinkURL +'&' + prop + '=' + vars[prop];
            }
        console.log('Backlink', backlinkURL);
        document.getElementById('backlink').setAttribute('href', backlinkURL);
        }

        if (vars.theme === "dark") {
           darkMode('.white', 'dark')
           document.getElementById('#light').classList.add('noshow') 
        }



        

    
} 

window.onload=function(){
    var urlVars = {};
    var urlparts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        urlVars[key] = value;
           
    });
    console.log('URL-LAng', urlVars.lang)
    if (urlVars.lang === "en") { 
        console.log('ENGLISCH GEHT!!!!')
        appendDetail(projectListEN);
    }   else {
        console.log('NIX WARS!')
    appendDetail(buttonProjectList); 
    }
     
    }

function selectBox(urlVars)     {
document.addEventListener('done', function() {
    console.log('Event gehört');
    var projSelecct = document.getElementById('projectSelection');
projSelecct.value = urlVars;
projSelecct.addEventListener('change', function(){
    var selectedProj = projSelecct.value;
    console.log('Selected Project: ' + selectedProj);
});
});
};

function vorherNachher(turnOn, turnOff) {
    var onElement = document.getElementById(turnOn);
    var offElement = document.getElementById(turnOff);
    console.log(turnOn, turnOff);
    onElement.classList.remove("noshow");
    offElement.classList.add("noshow");

}