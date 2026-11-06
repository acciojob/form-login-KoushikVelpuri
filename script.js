function getFormvalue(event) {
    //Write your code here
	event.preventDefault()
	const firstName = document.getElementById('fname').value
	const lastName = document.getElementById('lname').value
	firstName = firstName.trim()
	lastName = lastName.trim()
	let fullName = firstName + lastName
	if(firstName=='' || lastName==''){
		alert('Enter both names')
	}else{
		alert(fullName)
	}
}
