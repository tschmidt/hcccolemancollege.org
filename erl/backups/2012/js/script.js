$(function(){
	$('#ss-form').validate({
	  rules: {
	    'entry.1.single': {
	      required : true,
	      email : true
	    }
	  }
	});
});
