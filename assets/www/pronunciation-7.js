$("#prev-7").on("click",  function(e) {
       $.mobile.changePage("pronunciation-6.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
   
   $("#next-7").on("click",  function(e) {
						
	
				$.mobile.changePage("pronunciation-8.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});