$(function(){
	$('#ss-form').validate({
	  rules: {
	    'entry.1.single': {
	      required : true,
	      email : true
	    }
	  }
	});
	
	$('#ss-form').find('#entry_3').change(function () {
	  
	  var $this = $(this);
	  var that = this;
	  
	  if ($this.val() == 'Patient') {
	    $.get('_patient_times.html').success(function (data) {
	      $('#entry_4').html(data);
	    });
	  } else {
	    $.get('_standard_times.html').success(function (data) {
	      $('#entry_4').html(data);
	    });
	  }
	  
	});
});
