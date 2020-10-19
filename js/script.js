// some scripts

// jquery ready start
$(document).ready(function() {
	// jQuery code



    
    /* ///////////////////////////////////////

    THESE FOLLOWING SCRIPTS ONLY FOR BASIC USAGE, 
    For sliders, interactions and other

    */ ///////////////////////////////////////
    

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });


    

	//////////////////////// Bootstrap tooltip
	if($('[data-toggle="tooltip"]').length>0) {  // check if element exists
		$('[data-toggle="tooltip"]').tooltip()
	} // end if


// $(document).ready(function(){
//   $("#slider").owlCarousel();
// });

$(".slider-items-owl").owlCarousel({
    items: 4,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500
    });
    
}); 
// jquery end

