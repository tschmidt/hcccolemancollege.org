$(document).ready(function () {
	$('#erlForm').validate({
		rules: {
			'entry.806151579'	: "required", // Full Name
			'entry.590280394' : "required"  // Program or Department
		},

		submitHandler: function (form) {
			var $form = $(form);
			var form_json = $.parseJSON(JSON.stringify($form.serializeArray()));
			var $target = $('section > div');
			submitted = true;
			form.submit();
			$form.find('button').attr('disabled', true).text('Submitting...');
			
			setTimeout(function() {
				$target.html("<h1>Your seat has been reserved!</h1>");
			}, 1200);
		}
	});
});