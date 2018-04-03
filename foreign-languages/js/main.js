function setNav(){
	var nav = ["Home","about",'book class','contact us'];
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

function createFooter(){
	var elem = document.createElement('h6');
	var ftr = document.getElementsByClassName('footerTxt')[0];
	elem.innerHTML = "© 2017 All rights reserved";
	ftr.appendChild(elem);
}
createFooter();

function setCntryLang(){
	var cntry = [
		{"country":"Bolivia","language":"Spanish"},
		{"country":"Chile","language":"Spanish"},
		{"country":"China","language":"Chinese"},
		{"country":"England","language":"English"},
		{"country":"France","language":"French"},
		{"country":"Germany","language":"German"},
		{"country":"Greece","language":"Greek"},
		{"country":"Hong Kong","language":"Spanish"},
		{"country":"Ireland","language":"Irish"},
		{"country":"Italy","language":"Italian"},
		{"country":"Japan","language":"Japanese"},
		{"country":"Mexico","language":"Spanish"},
		{"country":"Panama","language":"Spanish"},
		{"country":"Russia","language":"Russian"},
		{"country":"Spain","language":"Spanish"},
		{"country":"Sweden","language":"‎Swedish"},
		{"country":"United States","language":"American English"},
		{"country":"Venezuela","language":"Spanish"}
	]
	// console.log(cntry);
	var cntryOpt = document.getElementById('cntyName');
	var langOpt = document.getElementById('language');
	var langLnk = document.getElementById('langLink');
	// console.log(cntryOpt);
	// console.log(langOpt);
	// for (var i = 0, cntryLenth = cntry.length; i < cntryLenth; i++) {
	// 	// console.log(cntryLenth);
	// 	var objVal = Object.values(cntry[i]);
	// 	if(cntryOpt.id == 'cntyName'){
	// 		var opt = document.createElement('option');
	// 		opt.value = objVal[0];
	// 		opt.innerHTML = objVal[0];
	// 		cntryOpt.appendChild(opt);
	// 	}
		// if(langOpt.id == 'language'){
		// 	var opt = document.createElement('option');
		// 	opt.value = objVal[1];
		// 	opt.innerHTML = objVal[1];
		// 	langOpt.appendChild(opt);
		// }
	// }
}
setCntryLang();

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
			lnk.href= objVal[0].split(' ').join('') +'.html';
			lnk.innerHTML = objVal[0];
			cntryLnk.appendChild(lnk);
		}
		if(langLnk.id == 'langLink'){
			var lnk = document.createElement('a');
			lnk.className += 'langNames';
			lnk.href = objVal[0] +'.html';
			lnk.innerHTML = objVal[1];
			langLnk.appendChild(lnk);
		}
	}

}
slctCntryLang();

// var lang = ["French","German","Italian","Spanish","Japanese","Chinese","Korean","Russian","‎Swedish","Irish"];
// console.log(lang);
function sample(){
	var smpl = [
		{"language":"French", "country":{"France":{1: "Paris",2: "St Raphel"}}},
		{"language":"German", "country":{"Germany":{1: "Berlin", 2: "Munich"}}},
		{"language":"Spanish", "country":{"Spain":{1:"Malaga", 2:"Madrid"},"Mexico":{1:"Mexico City", 2:"Puebla"}}}
	]
	var cntryOpt = document.getElementById('cntyName');
	var langOpt = document.getElementById('language');
// console.log(smpl);
	for (var i = 0, l = smpl.length; i < l; i++) {
		var o = Object.keys(smpl[i]);
		// console.log(o);
		// var p = Object.getOwnPropertyNames(smpl[i]);
		// console.log(p);
		var obj = Object.values(smpl[i]);
		// console.log(obj);
		var objL = obj[0];
		var objV = obj[1];
		var optLang = document.createElement('option');
			optLang.innerHTML = objL;
			langOpt.appendChild(optLang);

		for (var j = 0, objLngth = obj.length; j < objLngth; j++) {
			var newObj = obj[j];
			// console.log(newObj);
			// console.log(typeof newObj);
		}
		for(var prop in newObj){
			// console.log(newObj[prop]);
			var np = Object.values(newObj[prop]);
			console.log(np);
			var p = newObj[prop];
			np.forEach(function(val){
				var optcty = document.createElement('option');
				optcty.innerHTML = val;
				cntryOpt.appendChild(optcty);
			});

			// var optcty = document.createElement('option');
			// optcty.innerHTML = np;
			// cntryOpt.appendChild(optcty);
		}
		// }
	}
}
// sample();

function selection(){
	var dropDown = [
		{"language":"French", "country":[{"France":[{1: "Paris",2: "St Raphel"}]}]},
		{"language":"German", "country":[{"Germany":[{1: "Berlin", 2: "Munich"}]}]},
		{"language":"Italian", "country":[{"Italy":[{1:"Rome", 2: "Venice", 3:"Milan"}]}]},
		{"language":"Spanish", "country":[{"Spain":[{1:"Malaga", 2:"Madrid"}],"Mexico":[{1:"Mexico City", 2:"Puebla"}]}]},
		{"language":"Japanese", "country":[{"Japan":[{1:"Tokyo",2:"Kyoto"}]}]},
		{"language":"Chinese", "country":[{"China":[{1:"Shanghai"}]}]},
		{"language":"Korean", "country":[{"Korea":[{1:"Seoul"}]}]},
		{"language":"Russian","country":[{"Russia":[{1:"Moscow",2:"Kazan"}],"Belarus":[{1:"Gomel"}]}]},
		{"language":"‎Swedish","country":[{"sweden":[{1:"Stockholm",2:"Gothenburg"}],"Finland":[{1:"Helsinki", 2:"Oulu"}]}]},
		{"language":"Irish","country":[{"Ireland":[{1:"Dublin",2:"Galway"}]}]}
	];

	var cntryOpt = document.getElementById('cntyName');
	var langOpt = document.getElementById('language');
	// console.log(cntryOpt);

	for (var i = 0, lngth = dropDown.length; i < lngth; i++) {
		// console.log(dropDown.length);
		
		var obj = Object.values(dropDown[i]);
		var objL = obj[0];
		var objV = obj[1];
		var optLang = document.createElement('option');
			optLang.innerHTML = objL;
			langOpt.appendChild(optLang);

		for (var j = 0, objLngth = objV.length; j < objLngth; j++) {
			// console.log(obj.length);
			var nObj = objV[j];
			// console.log(obj[j]);
			// console.log(nObj); 
			// console.log(Object.keys(nObj));
			var cntryName = Object.keys(nObj);
			// cntryName.forEach(function(val){
			// 	var optCntry = document.createElement('option');
			// 	optCntry.innerHTML = val;
			// 	cntryOpt.appendChild(optCntry);
			// });
		}
		var n = Object.values(nObj);
		// console.log(n);
		for (var k = 0, ln = n.length; k < ln; k++) {
			var newO = n[k];
			// console.log(newO);
		}	
		for(var prop in newO){
			// console.log(newO[prop]);
			cntryName.forEach(function(val){
				var optCntry = document.createElement('option');
				optCntry.className += 'dropdown-group';
				optCntry.innerHTML = val;
				cntryOpt.appendChild(optCntry);
			});

			var objVal = Object.values(newO[prop]);
			objVal.forEach(function(elm){
				var buttontranslate = document.createElement('option');
				buttontranslate.innerHTML = elm;
				cntryOpt.appendChild(buttontranslate);

				console.log(elm);
			})
			// console.log(objVal);

		}

	}
};
selection();

// Add selected class to language options
function optSelection(){
	var checkLang = document.getElementById('language');
	checkLang.onchange = function(){
		var selecteStr = checkLang.options[checkLang.selectedIndex];
		var checkClass = document.getElementsByClassName('selected')[0];
		var hasClass = selecteStr.classList.contains('selected');

		// console.log(checkLang.options[checkLang.options.selectedIndex].selected = true);
		// if (hasClass === true) {
		// 	selecteStr.remove('selected');
		// }else{
		// 	selecteStr.className += 'selected';
		// }
		if(document.querySelector('.selected') !== null){
			('selected').remove;
		}else{
			selecteStr.className += 'selected';
		}
		console.log(selecteStr);
	}
}
optSelection();


// function selectCntry(){
// 	var selectCountry = document.getElementById('select-country');
// 	var selectLang = document.getElementById('select-language');
// 	for (var i = 0, cntryLenth = cntry.length; i < cntryLenth; i++) {
// 		var objVal = Object.values(cntry[i]);
// 		var opt = document.createElement('option');
// 		opt.value= objVal[0];
// 		opt.innerHTML = objVal[0];
// 		selectCountry.appendChild(opt);
// 		var optLang = document.createElement('option');



// 		optLang.value= objVal[1];
// 		optLang.innerHTML = objVal[1];
// 		selectLang.appendChild(optLang);
// 	}
// }
// selectCntry();



// function course(){
// 	var corseName = ["Study Abroad","Volunteer Abroad","Teach Abroad","Intern Abroad","High School Abroad","Tours & Trips"];
// 	var corse = document.getElementById('courseType');
// 	for (var i = 0, l = corseName.length;  i < l; i++) {
// 		// corseName[i];
// 		// console.log(corseName[i]);
// 		var corseOpt = document.createElement('option');
// 		corseOpt.value = corseName[i].split(" ").join("");
// 		// console.log(typeof a);
// 		corseOpt.innerHTML = corseName[i];
// 		corse.appendChild(corseOpt);
// 	};
// };
// course();

// function selectCountry(){
// 	var cntryName = ["Australia","Bolivia","Canada","Chile","China","England","France","Germany","Greece","Hong Kong","Ireland","Italy","Japan","Mexico","Morocco","New Zealand","Panama","Russia","Spain","Sweden","United States","Venezuela"];
// 	var stdyCntry = document.getElementById('studyCountry');
// 	var volntrCntry = document.getElementById('volunteerCountry');
// 	var teachCntry = document.getElementById('teachCountry');
// 	var intrnCntry = document.getElementById('internCountry');

// 	cntryName.forEach(function(element){
// 		if(stdyCntry.id == 'studyCountry'){
// 			var cuntryOpt = document.createElement('option');
// 			cuntryOpt.value= element;
// 			cuntryOpt.innerHTML= element;
// 			stdyCntry.appendChild(cuntryOpt);
// 		}
// 		if(volntrCntry.id == 'volunteerCountry'){
// 			var cuntryOpt = document.createElement('option');
// 			cuntryOpt.value= element;
// 			cuntryOpt.innerHTML= element;
// 			volntrCntry.appendChild(cuntryOpt);
// 		}
// 		if(teachCntry.id == 'teachCountry'){
// 			var cuntryOpt = document.createElement('option');
// 			cuntryOpt.value= element;
// 			cuntryOpt.innerHTML= element;
// 			teachCntry.appendChild(cuntryOpt);
// 		}
// 		if(intrnCntry.id == 'internCountry'){
// 			var cuntryOpt = document.createElement('option');
// 			cuntryOpt.value= element;
// 			cuntryOpt.innerHTML= element;
// 			intrnCntry.appendChild(cuntryOpt);
// 		}
// 	})
// }
// selectCountry();

// function selectProgram(){
// 	var program = ["Agriculture", "Arts", "Building", "Computer", "Professional Development", "Refugee Relief", "Seniors", "Social Services", "Social Work", "Veterinary Service", "Women's Rights"]
// 	var stdyProgrm = document.getElementById('studyProgram');
// 	var volntrProgrm = document.getElementById('volunteerProgram');
// 	var teachProgrm = document.getElementById('teachProgram');
// 	var intrnProgrm = document.getElementById('internProgram');
// 	program.forEach(function(elem){
// 		if(stdyProgrm.id == 'studyProgram'){
// 			var progrmOpt = document.createElement('option');
// 			progrmOpt.value = elem;
// 			progrmOpt.innerHTML = elem;
// 			stdyProgrm.appendChild(progrmOpt);
// 		}
// 		if(volntrProgrm.id == 'volunteerProgram'){
// 			var progrmOpt = document.createElement('option');
// 			progrmOpt.value = elem;
// 			progrmOpt.innerHTML = elem;
// 			volntrProgrm.appendChild(progrmOpt);
// 		}
// 		if(teachProgrm.id == 'teachProgram'){
// 			var progrmOpt = document.createElement('option');
// 			progrmOpt.value = elem;
// 			progrmOpt.innerHTML = elem;
// 			teachProgrm.appendChild(progrmOpt);
// 		}
// 		if(intrnProgrm.id == 'internProgram'){
// 			var progrmOpt = document.createElement('option');
// 			progrmOpt.value = elem;
// 			progrmOpt.innerHTML = elem;
// 			intrnProgrm.appendChild(progrmOpt);
// 		}
		
// 	})
// }
// selectProgram();



// JavaScript for/in Statement loops through the properties of an object 
	// var x;
	// for(x in cntry){
	// 	console.log(cntry[x]);
	// }
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Object.values(student).forEach(function(value) {
console.log(value);
});





















