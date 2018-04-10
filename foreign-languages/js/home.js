var dropDownArr = [
		{"language":"French", "country":[{"France":[{1: "Paris",2: "St Raphel"}]}]},
		{"language":"German", "country":[{"Germany":[{1: "Berlin", 2: "Munich"}]}]},
		{"language":"Italian", "country":[{"Italy":[{1:"Rome", 2: "Venice", 3:"Milan"}]}]},
		{"language":"Spanish", "country":[{"Mexico":[{1:"Mexico City", 2:"Puebla"}]}]},
		{"language":"Japanese", "country":[{"Japan":[{1:"Tokyo",2:"Kyoto"}]}]},
		{"language":"Chinese", "country":[{"China":[{1:"Shanghai"}]}]},
		{"language":"Russian","country":[{"Russia":[{1:"Moscow",2:"St.Petersburg"}]}]},
		{"language":"Irish","country":[{"Ireland":[{1:"Dublin",2:"Galway"}]}]},
		{"language" : "Swedish", "country":[{"Sweden":[{1:"Stockton", 2:"Gothenburg"}]}]}
];
var getLanguage = document.getElementById('language');
var getCountry = document.getElementById('country');
// Set language and contry name on home page dropdown
function setDropdown(){
	for(var i = 0, lngth = dropDownArr.length; i < lngth; i++){
		var dropdownObj = Object.values(dropDownArr[i]);
		var languageVal = dropdownObj[0];
		var countryVal = dropdownObj[1];
		// Set language in dropdown
		function setLanguage(){
			var createLangElem = document.createElement('option');
			createLangElem.innerHTML = languageVal;
			getLanguage.appendChild(createLangElem);
			createLangElem.value= languageVal;
		}
		setLanguage();

		var cntryName = Object.keys(countryVal[0]);//fetch country names
		var countryNewObj = Object.values(countryVal[0]); // get city names array
		var obj = countryNewObj[0];

		var optCountry = document.createElement("optgroup");//creating element to display Country
		cntryName.forEach(function(val){
			optCountry.setAttribute("label", val);
			optCountry.className += 'dropdownCountry';
			optCountry.innerHTML = val;
		})
		country.appendChild(optCountry); 

		var cityName = Object.values(obj[0]);
		//Creating element to add city as child under country. 
		cityName.forEach(function(elm){
			var optCity = document.createElement('option');
			optCity.innerHTML = elm;
			optCity.className += 'dropdownCity';
			country.appendChild(optCity);
		});
	}
}
setDropdown();

// Change Destination according to language selection
getLanguage.onchange=function(){
	var _val = this.options[this.selectedIndex].value;
	for(var i = 0, lngth = dropDownArr.length; i < lngth; i++){
		var dropdownObj = Object.values(dropDownArr[i]);
		var languageVal = dropdownObj[0];
		if(languageVal==_val){
			var countryVal = dropdownObj[1];
		    while (country.hasChildNodes()){
		      country.removeChild(country.childNodes[0]);
		    }
		var cntryName = Object.keys(countryVal[0]);//fetch country names
		var countryNewObj = Object.values(countryVal[0]); // get city names array
		var obj = countryNewObj[0];
		var cityName = Object.values(obj[0]);
			cityName.forEach(function(elm){
				var optCity = document.createElement('option');
				optCity.innerHTML = elm;
				optCity.className += 'dropdownCity';
				country.appendChild(optCity);
			});
		}
	}		
}

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
}

// Open country page as per selected language
function slctCntryLang(){
	var cntryLang = [
		{"country":"Japan","language":"Japanese"},
		{"country":"France","language":"French"},
		{"country":"Germany","language":"German"},
		{"country":"Italy","language":"Italian"},
		{"country":"Mexico","language":"Spanish"},
		{"country":"Russia","language":"Russian"}
	];
	var cntryLnk = document.getElementById('cntryLink');
	var langLnk = document.getElementById('langLink');
	for (var i = 0, l = cntryLang.length; i < l; i++) {
		var objVal = Object.values(cntryLang[i])
		if(cntryLnk.id == 'cntryLink'){
			var lnk = document.createElement('a');
			lnk.className += 'contryNames';
			lnk.href= objVal[1].split(' ').join('') +'.html';
			lnk.innerHTML = objVal[0];
			cntryLnk.appendChild(lnk);
		}
		if(langLnk.id == 'langLink'){
			var lnk = document.createElement('a');
			lnk.className += 'langNames';
			lnk.href = objVal[1].split(' ').join('') +'.html';
			lnk.innerHTML = objVal[1];
			langLnk.appendChild(lnk);
		}
	}
}
slctCntryLang();





