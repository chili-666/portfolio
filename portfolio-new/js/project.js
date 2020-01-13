
/*function projectTiles(arr) {
    //console.log(arr);
    var projectString ="";
    var i;
    for (i = 0; i < arr.length; i++) {
    projectString = 
            '    <section class="subheader">'+arr[i].name+'</section>'+
            '    <section class="project-pic schatten white"><img src="'+arr[i].pic+'" width="100%"/></section>'+
            '    <section class="short-desc">'+
            '    <section class="challenges">'+
            '    <h3>Aufgabe</h3>'+
            '    <p>'+arr[i].aufgabe +'</p>'+
            '    <h3>Herausforderungen</h3>'+
            '   <p>'+arr[i].herausforderung+'</p></section>'+
            '  <section class="text schatten white" id="aufgabeText">'+arr[i].aufgabeText+'</section>'+
            '    <button id="more"><a href="detail.html?id='+arr[i].ID+'">Mehr...</a></button>'+
            '   </section>'+
            '</section>';
        var tileElement =document.createElement("SECTION");
        var type = arr[i].type;
        var id = arr[i].ID;
        tileElement.classList.add('project-tile', 'x-large', type, 'white');
        tileElement.setAttribute('id', id);
        tileElement.innerHTML = projectString;
document.getElementById("test").appendChild(tileElement);}
}*/

    function read_prop(obj, prop) {
        return obj[prop];
    }
    function projectTemplate(arr) {
        document.getElementById('test').innerHTML ="";
        console.log("Aufruf")
        for (let i = 0; i < arr.length; i++) {
            const templateTile = document.getElementById('tiles');
        const tileInstance = document.importNode(templateTile.content, true);
            console.log('i', i)
        tileInstance.getElementById('subheader').innerHTML = arr[i].name;
        tileInstance.getElementById('aufgabeShort').innerHTML = arr[i].aufgabeText;
        tileInstance.getElementById('herausforderungText').innerHTML =arr[i].herausforderung;
        tileInstance.getElementById('aufgabeText').innerHTML = arr[i].aufgabe;
        tileInstance.getElementById('projectPic').innerHTML = '<img src="'+arr[i].pic+'" />';
        let link = 'detail.html?id='+ arr[i].ID;
        tileInstance.getElementById('moreLink').setAttribute("href", link);
        let typeWord = arr[i].type;
        tileInstance.getElementById('tileContainer').classList.add(typeWord);
        document.getElementById('test').appendChild(tileInstance);
        }
        
           
        

    }