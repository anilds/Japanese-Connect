$("#prev-3").on("click",  function(e) {


       $.mobile.changePage("introduction-2.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });

$("#next-3").on("click",  function(e) {
	
				$.mobile.changePage("introduction-4.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					