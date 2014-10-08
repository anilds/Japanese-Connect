$("#prev-6").on("click",  function(e) {
       $.mobile.changePage("pronunciation-5.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
   
   $("#next-6").on("click",  function(e) {
						
	
				$.mobile.changePage("pronunciation-7.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});