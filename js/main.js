
var ip = "193.254.217.74";
   jQuery.ajax ({
      type: "GET",
      url: "http://ipgeobase.ru:7020/geo/?ip=" + ip,
      dataType: "xml",
      success: function(xml) {
      var region = jQuery(xml).find('city').text();
      jQuery(".geocity").text(region);
      },
      error: function() {
      jQuery(".geocity").text("Не определен");
      }
   });
   var modal = document.getElementById('myModal');
   var close = document.getElementsByClassName("close")[0];
   var back = document.getElementById('myBack');
   
   close.onclick = function () {
      back.style.display = "none";
      modal.style.display = "none";
   };
   back.onclick = function () {
      back.style.display = "none";
      modal.style.display = "none";
   };
   $(document).ready(function(){
			
      $('#button').click( function(e) {
          
          e.preventDefault(); // stops link from making page jump to the top
          e.stopPropagation(); // when you click the button, it stops the page from seeing it as clicking the body too
          $('#content').toggle();
          
      });
      
      $('#content').click( function(e) {
          
          e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
          
      });
      
      $('body').click( function() {
         
          $('#content').hide();
          
      });
      
      });