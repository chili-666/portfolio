function selectBox(val) {
var projSelecct = document.getElementById('projectSelection');
projSelecct.value = val;
projSelecct.addEventListener('change', function(){
    var selectedProj = projSelecct.value;
    console.log('Selected Project: ' + selectedProj);
});}