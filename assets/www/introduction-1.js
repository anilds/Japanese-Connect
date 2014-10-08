
$("#prev-1").on("click",  function(e) {

       $.mobile.changePage("introduction.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });


$("#next-1").on("click",  function(e) {
						
					
			
				
				$.mobile.changePage("introduction-2.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					