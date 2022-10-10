function inputCheck() {
	var firstname = document.form.firstname.value;
	var lastname = document.form.lastname.value;
	var address = document.form.address.value;
	var phone = document.form.phone.value;
	var email = document.form.email.value;
	var mailformat = /^[a-zA-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	
	if (firstname === "") {
		alert("Please enter first name!");
		return false;
	} else if (lastname === "") {
		alert("Please enter last name!");
		return false;
	} else if (address === "") {
		alert("Please enter an address!");
		return false;
	} else if (phone === "") {
		alert("Please enter phone number!");
	} else if (email === "") {
		alert("Please enter valid email address!")
	} else {
		alert('Thank you for submitting!');
		return true; 
	}
}