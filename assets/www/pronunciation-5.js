$("#prev-5").on("click",  function(e) {
       $.mobile.changePage("pronunciation-4.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
   
   $("#next-5").on("click",  function(e) {
						
	
				$.mobile.changePage("pronunciation-6.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});