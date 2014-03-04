$(document).ready(function () {
	$('#aceForm').validate({
		rules: {
			'entry.12281964'	: "required", // Nominee's First Name
			'entry.1773125362': "required", // Nominee's Last Name
			'entry.1083607361': "required", // Nominee's type
			'entry.1144610534': 'required', // Nominee's program/department
			'entry.592716203' : {						// Nominee's ACE explanation
				required: true,
				minlength: 500
			},
			'entry.611344407'	: 'required', // Nominator's First Name
			'entry.1828262443': 'required', // Nominator's Last Name
			'entry.160748257' : 'required', // Nominator's classification
			'entry.577903352' : 'required', // Nominator's program/department
			'entry.1986910403': {						// Nominator's email
				required: true,
				email: true
			}
		},

		messages: {
			'entry.592716203': {
				required: 'You must provide this information.',
				minlength: 'This must be at least 500 characters.'
			}
		},

		submitHandler: function (form) {
			var $form = $(form);
			var form_json = $.parseJSON(JSON.stringify($form.serializeArray()));
			var $target = $('section > div');
			$.post(form.action, $form.serialize())
				.done(function (data) {
					if (data.indexOf("Your response has been recorded") != -1) {
						$target.html("<h1>Your entry has been recorded!</h1>");
						$.each(form_json, function (index, obj) {
							var str = '';
							var sub_name;
							switch(obj.name) {
								case 'entry.12281964':
									sub_name = "Nominee's First Name is ";
									break;
								case 'entry.1773125362':
									sub_name = "Nominee's Last Name is ";
									break;
								case 'entry.1083607361':
									sub_name = "Nominee is a ";
									break;
								case 'entry.1144610534':
									sub_name = "Nominee's program/department is ";
									break;
								case 'entry.592716203':
									sub_name = "The reason I am nominating this person is:<br>";
									break;
								case 'entry.611344407':
									sub_name = "My first name is ";
									break;
								case 'entry.1828262443':
									sub_name = "My last name is ";
									break;
								case 'entry.160748257':
									sub_name = "I am a ";
									break;
								case 'entry.577903352':
									sub_name = 'My program/department is ';
									break;
								case 'entry.1986910403':
									sub_name = "My email is "
									break;
							}
							$target.append("<p>" + sub_name + obj.value + "<p>")
						})
					} else {
						console.log('form failed to submit');
					}
				})
				.fail(function () {
					console.log("$.post failed");
				})
		}
	});
});