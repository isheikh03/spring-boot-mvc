var modalUrl = "";
var mainContentUrl = "";
var mainContentReqTime  = new Date().getTime();
var isDirty = false;

function InitHandlers(){
	$(".dirty-check:not(.dirty-check-linked)").on("change", function(){
		isDirty = true;
	}).addClass("dirty-check-linked");
	
	//Remove space from after and before of a text and remove double space from text.
	$('input[type="text"], textarea[type="text"]').on("change", function(){
		var str = $(this).val();
	    var result = str.replace(/  +/g, ' ').trim();
	    $(this).val(result);
	});
	
	$("a.ajax:not(.linked), button[data-ajax=true]:not(.linked)").on('click', function (event) {
		event.preventDefault();
		event.stopPropagation();
		event.stopImmediatePropagation();
		console.log('a==============>',event.isPropagationStopped());
		if ($(this).attr('href')) {
			LoadMainContent($(this).attr('href'));
		} else {
			LoadMainContent($(this).data('href'));
		};
		return false;
	}).addClass("linked");

	$(".submenu:not(.linked)").click(function(){
		LoadMainContent($(this).attr('href'));
	}).addClass("linked");
//
//	$("a[data-modal=true]:not(.linked), button[data-modal=true]:not(.linked)").on('click', function (event) {
//		event.preventDefault();
//		if ($(this).attr('href')) {
//			ShowModal($(this).attr('href'));
//		} else {
//			ShowModal($(this).data('href'));
//		}
//		return false;
//	}).addClass("linked");

	$("form.ajax:not(.linked)").on('submit', function (event) {
		event.preventDefault();
		var validator = window[$(this).data("validator")];

		if (validator === undefined || validator()) {
			var enctype = $(this).prop("enctype");
			
			if(!enctype || enctype == "application/x-www-form-urlencoded"){
				$.ajax({
		        	type: $(this).prop('method'),           
		            url: $(this).prop('action'),
		            data: $(this).serialize(), 
		            success: window[$(this).data("handler")]
		        });	
			} else {
				$.ajax({
		        	type: $(this).prop('method'),
		        	encType: enctype,
		        	contentType: false,
		        	processData: false,
		            url: $(this).prop('action'),
		            data: new FormData( $(this)[0]), 
		            dataType: 'json',
		            success: window[$(this).data("handler")]
		        });
			}
		};
		return false;
	}).addClass("linked");

    $(".btn-refresh:not(.refresh-linked)").on("click", function(){
    	LoadMainContent(mainContentUrl);
    }).addClass("refresh-linked");

	$.each($('input.datepicker:not(.datepicker-linked)'), function(i, item){ 
		$(item).datepicker({
			format: 'dd-M-yyyy',
			autoclose: true,
			todayHighlight: true,
	    	startDate: $(this).data("mindate"),
	    	endDate: $(this).data("maxdate")
		}).addClass("datepicker-linked").prop("readonly", "readonly");
	});

	$.each($('input.timepicker:not(.timepicker-linked)'), function(i, item){ 
		$(item).timepicker().addClass("timepicker-linked").prop("readonly", "readonly");
	});

}

function LoadMainContent(url){
	console.log('Url==========>', url);
	mainContentReqTime  = new Date().getTime();
	var navigateAway = function(){
		mainContentUrl = url;
		$.ajax({
	        url: url,
	        success:function( response, status, xhr ) { 
	        	console.log('Res==========>', response);
	        	if(response.indexOf("<!DOCTYPE html>") != -1){
	        		window.location = url;
	        	} else {  				        		
	        		$('.main-content').html(response);
	        	}
	    	}
	    });
		isDirty = false;
	};
	if(	isDirty ){
		swal({
			title: "Discard changes?",
			text: "Are you sure to navigate away?",
			type: "warning",
			showCancelButton: true,
			confirmButtonColor: "#007AFF",
			confirmButtonText: "Yes, discard changes!",
			closeOnConfirm: true
		}, navigateAway);
	} else{
		navigateAway();
	}	
}
