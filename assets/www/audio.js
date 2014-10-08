/*$("#play").on("click",  function(e) {

			 var audioElement = document.createElement('audio');
			
				audioElement.setAttribute('src', 'External audio/1.mp3')

                audioElement.play();
	
	});*/

$("#play").on("click",  function(e) {
   // window.alert("READY!");
    document.addEventListener("deviceready", onDeviceReady, true);

    function onDeviceReady(){
       // window.alert("OK@!");
        var snd = new Media("/android_asset/www/External audio/1.mp3");
        snd.play();
    }
});