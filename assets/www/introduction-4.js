
$("#prev-4").on("click",  function(e) {


       $.mobile.changePage("introduction-3.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });

$("#next-4").on("click",  function(e) {

				
				$.mobile.changePage("introduction-5.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					