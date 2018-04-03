// Set menu item in navigation
function setNav(){
	var nav = ["Home","About",'book class','contact us'];
	var navCls = document.getElementsByClassName('menuList')[0];
	nav.forEach(function(elem){
		console.log(elem)
		var setElem = document.createElement('a');
		setElem.className += 'navbar-brand navList';
		setElem.href = './' + elem.split(' ').join('') + '.html';
		setElem.innerHTML = elem;
		// console.log(elem);
		navCls.appendChild(setElem);
	})
}
setNav();

// Open country page as per language selection
function exploreCountry(){
	var lang = document.getElementById('language');
	var modal = document.getElementById('myModal');
	var span = document.getElementsByClassName("close")[0];
	var getLanguage = document.getElementById('language');
	
	if(getLanguage.value == ""){
		console.log("Inside if");
		getLanguage.className += ' errorMsg';
	}else{
		getLanguage.className += ' noError';
		window.open(lang.value.split(' ').join('') +'.html', name="_self");
	}
	// if(lang.value == "Select Language"){
	// 	modal.style.display = "block";
	// }else{
		
		console.log(lang.value);
	// }
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		console.log("Inside span.onclick");
    	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	    	console.log("Inside window.onclick");
	        modal.style.display = "none";
	    }
	}	
}

// Open Price qutation form page
function getPrice(){
	var price = document.getElementsByClassName('priceQuote');
	// console.log("getPrice clicked");
	window.open("priceQuote.html", name="_self");
}

// Open form to Schedule a tour
function schdulTour(){
	var tour = document.getElementsByClassName('schedleTour');
	console.log("schdulTour clicked");
	window.open("ScheduleTour.html", name="_self");
}

// Open request form for Brochure
function odrBrochr(){
	var brochure = document.getElementsByClassName('orderBrochr');
	console.log("orderBrochr clicked");
	window.open("OrderBrochure.html", name="_self");
}

// Creating Footer
function createFooter(){
	var elem = document.createElement('h6');
	var ftr = document.getElementsByClassName('footerTxt')[0];
	elem.innerHTML = "© 2017 All rights reserved";
	ftr.appendChild(elem);
}
createFooter();










