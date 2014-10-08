$("#prev-5").on("click",  function(e) {
       $.mobile.changePage("TheWritingSystem-4.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });