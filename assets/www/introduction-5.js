$("#prev-5").on("click",  function(e) {


       $.mobile.changePage("introduction-4.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });

