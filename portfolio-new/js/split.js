
document.addEventListener('done', function() {
    console.log('Event fired!');
    var parent = document.querySelector('.splitview');
    console.log('Parent: ' + parent);
    var topPanel = parent.querySelector('.top');
    var handle = parent.querySelector('.handle');
   parent.addEventListener('mousemove', function(event) {
         // Move the handle.
         handle.style.left = event.clientX + 'px';
  
         // Adjust the top panel width.
         topPanel.style.width = event.clientX + 'px';
 });
 });
 