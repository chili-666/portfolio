window.onload=function(){
    document.getElementById("url").addEventListener("click", function() {moreButton(1,buttonProjectList) 
         });
    }

function moreButton(pos, arr) {
    let article = buttonProjectList.filter(obj => {
        return obj.ID === 1
    })
    var i;
    for (i = 0; i< article.length; i++) {
        console.log(article[i]);
    }
}