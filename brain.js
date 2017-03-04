      $(document).ready(function(){
        var walkFrame = 0;
        setInterval(function(){ 
          $('#zombie').attr("src", "Graphics/Walk" + walkFrame + ".png");
          $('#grass').css("background-position", "+=5px");
          $('#sky').css("background-position", "+=5px");
          walkFrame++;
          if(walkFrame == 12){
            walkFrame = 0;
          }
        }, 100);
      })