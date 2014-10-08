
$("#prev-2").on("click",  function(e) {


       $.mobile.changePage("introduction-1.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });

$("#next-2").on("click",  function(e) {

				$.mobile.changePage("introduction-3.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					