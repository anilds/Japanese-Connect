

$("#prev-1").on("click",  function(e) {
       $.mobile.changePage("TheWritingSystem.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
  
  


$("#next-1").on("click",  function(e) {
						
	
				$.mobile.changePage("TheWritingSystem-2.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					