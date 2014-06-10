$(document).ready(function () {
	$('#pinningSurveyForm').validate({
		rules: {
			'entry.1887913310'	: "required",
			'entry.51283877' : "required",
			'entry.1891048796' : "required",
			'entry.1688622171' : "required",
			'entry.1886795284' : "required",
			'entry.830646567' : "required"
		},
    
    errorPlacement: function (error, element) {
      error.appendTo(element.parents('.form-group'));
    },

		submitHandler: function (form) {
			var $form = $(form);
			var form_json = $.parseJSON(JSON.stringify($form.serializeArray()));
			var $target = $('#pinningSurvey');
			submitted = true;
      form.submit();
			$form.find('button').attr('disabled', true).text('Submitting...');
			
			setTimeout(function() {
				$target.html("<p>Your feedback has been recorded! Thank you for taking the time to help us out.</p>");
			}, 1200);
		}
	});
});