// Set language and contry name on home page dropdown
function setDropdown(){
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

	for(var i = 0, lngth = dropDownArr.length; i < lngth; i++){
		var dropdownObj = Object.values(dropDownArr[i]);
		var languageVal = dropdownObj[0];
		var countryVal = dropdownObj[1];
		function setLanguage(){
			var createLangElem = document.createElement('option');
			createLangElem.innerHTML = languageVal;
			getLanguage.appendChild(createLangElem);
			createLangElem.value= languageVal;
		}
		for (var j = 0, objLength = countryVal.length; j < objLength; j++) {
			var countryObj = countryVal[j];
			var cntryName = Object.keys(countryObj);
			// console.log(cntryName);
		}
		var countryNewObj = Object.values(countryObj);
		// console.log(countryNewObj);
		for (var k = 0, cntryLngth = countryNewObj.length; k < cntryLngth; k++) {
			var obj = countryNewObj[k];
			// console.log(countryNewObj[k]);
		}
		for(var prop in obj){
			var optCountry = document.createElement("optgroup");
			cntryName.forEach(function(val){
				optCountry.setAttribute("label", val);
				// console.log(optCountry);
				optCountry.className += 'dropdownCountry';
				optCountry.innerHTML = val;
			})
			country.appendChild(optCountry);
		}

		var cityName = Object.values(obj[prop]);
		// console.log(cityName);
		cityName.forEach(function(elm){
			var optCity = document.createElement('option');
			optCity.innerHTML = elm;
			optCity.className += 'dropdownCity';
			country.appendChild(optCity);
		});
		setLanguage();
	}
}

setDropdown();

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
		// console.log(cntryLang[i]);
		var objVal = Object.values(cntryLang[i])
		// var lnk = document.createElement('a');
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



