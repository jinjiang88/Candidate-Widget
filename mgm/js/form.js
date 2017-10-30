$().ready(function() {
	// upon selecting input/textarea/select the color of each element will be highlighted blue and will be white when no longer selected
	$('input:text').focus(
    function(){
        $(this).css({'background-color' : '#E3F7FE'});
    });

    $('input:text').blur(
    function(){
        $(this).css({'background-color' : '#FFFFFF'});
    });
	$('textarea').focus(
    function(){
        $(this).css({'background-color' : '#E3F7FE'});
    });

    $('textarea').blur(
    function(){
        $(this).css({'background-color' : '#FFFFFF'});
    });
	$('select').focus(
    function(){
        $(this).css({'background-color' : '#E3F7FE'});
    });

    $('select').blur(
    function(){
        $(this).css({'background-color' : '#FFFFFF'});
    });
	//below is the validation
	$("#signupForm").validate({
		errorElement: 'li',  // <- put error inside an 'li' container
		errorPlacement: function (error, element) {
        // insert the error message 'li' after the 'li' containing the input field that was the error messages would follow the element on following line
        error.insertAfter($(element).parent('li')); 
    	},
    	// rules for validation of each input
		rules: {
			name: "required",
			state: "required",
			question: "required",
			purchased: "required",
			phone: {
				required: true,
				phoneUS: true,
			},
		},
		//error messages to be displayed upon validation
		messages: { 
			name: "Full Name is a required field.",
			phone: {
				required: "Mobile number is a required field.",
				phoneUS: "Mobile number must be valid.",
			},
			state: "State is a required field.",
			question: "Description is a required field.",
			purchased: "Let us know if you purchased the item in California."
		},
		//highlights the inputs pink and add warning icon if there are any errors
		highlight: function (element, errorClass, validClass) {
			$(element).addClass(errorClass).removeClass(validClass).css('background','#FFE3DF url(images/warning_icon.png) no-repeat scroll 3px 3px').css('background-position', 'center right');
			var ele = $(element);
			//timer for background color and warning icon to 3 seconds
			setTimeout(function () {
				ele.css('background-color','white').css('background','');
			}, 3000);
		}
	});
	//function below replaces user_input div with reappear div once validation is complete without rendering a new form
	$("form").submit(function(event){
		if ($("#signupForm").valid()) {
			$("#user_input").replaceWith($("#reappear").html());
		}
    return false;
});

})