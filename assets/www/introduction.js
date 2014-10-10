

$("#prev").on("click",  function(e) {
       $.mobile.changePage("index.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slide",
				showLoadMsg             : true,
				reloadPage              : true
				});
   });
  
  // Previous page
/*$("#prev-1").on('click',  function (e) {

alert("Work prev");
 var prev = '#' + $.mobile.activePage.prev('[data-role=footer]')[0].id;
 alert(prev);
 $.mobile.changePage(prev, {
    transition: 'slide',
    reverse: true
 });
});*/


$("#next").on("click",  function(e) {
						
	
				$.mobile.changePage("introduction-1.html",
				window.location.href,
				{
				allowSamePageTransition : true,
				transition              : "slide",
				showLoadMsg             : true,
				reloadPage              : true
				});
					
				});

		

 
					