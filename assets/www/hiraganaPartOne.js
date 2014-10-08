

$("#prev").on("click",  function(e) {
       $.mobile.changePage("index.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
  
  


$("#next").on("click",  function(e) {
						
	
				$.mobile.changePage("hiraganaPartOne-1.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slideup",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					