var error=false;

function validateForm(){
	var fname = document.getElementById('brochrFrstName');
	var lanme = document.getElementById('brochrLstName');
	var emailAdrs = document.getElementById('brochrEmail');
	var state = document.getElementById('selectState');
	var addrs = document.getElementById('brochrAddress');
	var apt = document.getElementById('brochrApt');
	var city = document.getElementById('brochrCity');
	
	if (!fname.validity.valid){
		fname.className += ' errorMsg';
	}else{
		fname.className += ' noError';
	};
	if (!lanme.validity.valid) {
		lanme.className += ' errorMsg';
	}else{
		lanme.className += ' noError';
	};
	
	if(!addrs.validity.valid){
		addrs.className += ' errorMsg';
		error=true;
	}else{
		addrs.className += ' noError';
		error=false;
	}
	if(!apt.validity.valid){
		apt.className += ' errorMsg';
		error=true;
	}else{
		apt.className += ' noError';
		error=false;
	}
	if(!city.validity.valid){
		city.className += ' errorMsg';
		error=true;
	}else{
		city.className += ' noError';
		error=false;
	}

	if(state.value == ""){
		state.className += ' errorMsg';
		error=true;
	}else{
		state.className += ' noError';
		error=false;
	}
	if (!emailAdrs.validity.valid) {
		emailAdrs.className += ' errorMsg';
	}else{
		emailAdrs.className += ' noError';
	};
}