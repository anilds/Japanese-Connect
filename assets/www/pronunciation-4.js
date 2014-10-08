$("#prev-4").on("click",  function(e) {
       $.mobile.changePage("pronunciation-3.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
   
   $("#next-4").on("click",  function(e) {
						
	
				$.mobile.changePage("pronunciation-5.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});