$(document).ready(function() {

$.ajax({
		   	type: 'GET',
			url :  'japanese.json',
			dataType: "json",
			
			success: function (categoryData) {
		
				
				var insertCategoryData = "";
			//	var autocompletedata="";
				
				$.each(categoryData, function(key, val){
					insertCategoryData += '<li><a href="#" id="' + val.chapter + '" class="info-go">' + val.chapter + '</a></li>';
					
				});
				//item clicked will the related data 
				console.log(insertCategoryData);
				
				$("#chapterListview").empty();
				$("#chapterListview").append(insertCategoryData).promise().done(function() {
					//wait for append to finish - thats why you use a promise()
					//done() will run after append is done
					//add the click event for the redirection to happen to #details-page
					$(this).on("click", ".info-go", function(e) {
						//PR: Storing the selectedId.
						window.localStorage.setItem("selectedID", $(this).attr('id'));
						var value = window.localStorage.getItem("selectedID");
						//alert(value);
						var selected_index = $(this).parents('li').eq(0).index();
						alert("selected index : "+selected_index)
						
						if(selected_index==0){
					
						//$.mobile.changePage("introduction.html");
						
						$.mobile.changePage("introduction.html",
						window.location.href,
						{
						allowSamePageTransition : true,
						transition              : "slideup",
						showLoadMsg             : true,
						reloadPage              : true
						});
						
						}
						else if(selected_index==1){
						
						$.mobile.changePage("pronunciation.html");
						}else if(selected_index==2){
						
						$.mobile.changePage("TheWritingSystem.html");
						}
						
						else if(selected_index==3){
						
						$.mobile.changePage("hiraganaPartOne.html");
						}
						
					 
					 //var selectedEntry = this.id;
					// alert(selectedEntry);
        
					//	localStorage.setItem("selectedEntry", selectedEntry);
        
						//store the information in the next page's data
						
						//change the page # to second page.
						//Now the URL in the address bar will read index.html#details-page
						//where #details-page is the "id" of the second page
						//we're gonna redirect to that now using changePage() method
					});
					//refresh list to enhance its styling.
					$(this).listview("refresh");
					//$(this).listview("refresh").trigger('create');
				});
						
			},
			error: function (e) {
			
				console.log("fail to list images..........");
			
			}
			
		});	
						
});