$("#form-submit").click(() => {
	if (validateForm() == false) {
    $(".hide").removeClass("hide");
		return false;
	}
  else {
    console.log("Form is valid.  Submitting");
    $(".form-wrapper").html("<h4>Thanks for submitting! We'll reach out to you soon!</h4>")
    return false;
  }
});

function validateForm() {
  var isValid = true;
  $('.form-elem').each(function() {
    if ( $(this).val() === '' ) {
        isValid = false;
        console.log("Form not full");
    }
  });
  return isValid;
}