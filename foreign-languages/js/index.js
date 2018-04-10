// Set menu item in navigation
function setNav(){
	var nav = ["Home","About",'book class','contact us'];
	var navCls = document.getElementsByClassName('menuList')[0];
	nav.forEach(function(elem){
		var setElem = document.createElement('a');
		setElem.className += 'navbar-brand navList';
		setElem.href = './' + elem.split(' ').join('') + '.html';
		setElem.innerHTML = elem;
		// console.log(elem);
		navCls.appendChild(setElem);
	})
}
setNav();

// Open Price qutation form page
function getPrice(){
	var price = document.getElementsByClassName('priceQuote');
	window.open("priceQuote.html", name="_self");
}

// Open form to Schedule a tour
function schdulTour(){
	var tour = document.getElementsByClassName('schedleTour');
	window.open("ScheduleTour.html", name="_self");
}

// Open request form for Brochure
function odrBrochr(){
	var brochure = document.getElementsByClassName('orderBrochr');
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










