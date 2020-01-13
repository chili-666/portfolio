
/*function getUrlVars() {
    const vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    console.log('Vars: '+vars);
    return vars; 
}*/



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
    });
    //for (var prop in vars) {

   
    //console.log('Varsforeach: ' + vars[prop]);

//};
    //Liste nach URL-Vars filtern
        let detail = buttonProjectList.filter(obj => {
        return obj.ID === vars[0]
    });
    let param = vars.id;
    console.log('Param: '+param);
    /*var filter = buttonProjectList.filter(function(el) {
        console.log('elID: ' + el.ID + 'Prama: '+ param);
        return el.ID == param;
    });*/
    var filter =[];
    for (let i = 0; i < buttonProjectList.length; i++) {
        if (buttonProjectList[i].ID == param) {
            filter.push(buttonProjectList[i]);
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
    splitInstance.querySelector(".before").innerHTML = vorher;
    splitInstance.querySelector('#after').innerHTML = nachher;
       } else {
           splitInstance.getElementById('handle').classList.toggle('noshow');
       }

    //If-Abfrage  für SingleView   
    if (view === "single") {
        console.log('Single View');
        singleInstance.getElementById('fullpic').innerHTML = '<img src="'+ pic +'">';
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
    
} 

window.onload=function(){
    //getUrlVars(); 
    appendDetail(buttonProjectList);               
    }
