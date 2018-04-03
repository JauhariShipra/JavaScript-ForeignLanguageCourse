// Set Course duration in select dropbox
function setDuration(){
	var duration = document.getElementById('selectDuration');
	var durationArr = ["4 weeks","8 weeks","12 weeks","16 weeks","20 weeks","24 weeks","6 months","9 months","12 months"];
	for(var i =0, lnth = durationArr.length; i < lnth; i++){
		var dur = durationArr[i];
		var optDuration = document.createElement('option');
		optDuration.innerHTML = dur;
		duration.appendChild(optDuration);
		optDuration.value = optDuration.index;
	}
}
setDuration();

// Set Course Type in select dropbox
function courseType(){
	var course = document.getElementById('selectCourse');
	var courseArr = ["Intensive Course", "General Course", "Basic Course", "Exam Preparation", "Not sure"];
	for (var i = 0, lnth = courseArr.length; i < lnth; i++) {
		var crsType = courseArr[i];
		var optCourse = document.createElement('option');
		optCourse.innerHTML = crsType;
		optCourse.value = crsType.split(' ').join('');
		course.appendChild(optCourse);
		// console.log(crsType);
	}
}
courseType();

// Validation Start

// PriceQuote Form validation

var error=false;

function validateForm(){
	var fname = document.getElementById('frstName');
	var lanme = document.getElementById('lstName');
	var emailAdrs = document.getElementById('email');
	var language = document.getElementById('selectLanguage');
	var duration = document.getElementById('selectDuration');
	// console.log(duration.value == "");
	// console.log(language.value == "");
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
	if (!emailAdrs.validity.valid) {
		emailAdrs.className += ' errorMsg';
	}else{
		emailAdrs.className += ' noError';
	};
	if(duration.value == ""){
		duration.className += ' errorMsg';
		error=true;
	}else{
		duration.className += ' noError';
		error=false;
	}
	if(language.value == ""){
		language.className += ' errorMsg';
		error=true;
		return false;
	}else{
		language.className += ' noError';
		error=false;
	}

}

function showHide() {
   var div = document.getElementById('thanksNote');
   if (div.style.display == 'none') {
     div.style.display = 'block';
   }
   else {
     div.style.display = 'none';
   }
 }































