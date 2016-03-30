/**
 * It checks if all inputs are correct
 *
 * @return {Boolean}
 */
function check(){
	var values = getValues();
	
	var checks = {
		'world' : [
			totalPeriod(values['totalPeriod']), 
			dayPeriod(values['dayPeriod']), 
			nightPeriod(values['nightPeriod']), 
			dimensions(values['sizeX'], values['sizeY']), 
			changeWeather(values['changeWeather'], values['totalPeriod'])
		],
		'element' : [
			amountElements(values['carrot'], values['tree'], values['lair'], values['rabbit'], values['wolf'], values['sizeX'], values['sizeY']), 
			moreCarrot(values['eachCarrot'], values['amountCarrot'], values['totalPeriod']),

		],
		'restriction' : [
			maxEat(values['eatRabbit'], values['eatWolf']),
			maxSleep(values['sleepRabbit'], values['sleepWolf']),
			placeToSleepRabbit(),
			breed(values['breedRabbitEach'], values['breedRabbitAmount'], values['breedWolfEach'], values['breedWolfAmount'])
		],
		'period' : [
			turnEat(values['turnEatRabbit'], values['turnEatWolf'], values['dayPeriod']),
			turnSleep(values['turnSleepRabbit'], values['turnSleepWolf'], values['nightPeriod']),
			noNeedToEat(values['noNeedToEatRabbit'], values['noNeedToEatWolf'], values['eatRabbit'], values['eatWolf'])
		],
		'action' : [
			maxUse(values['maxUseRabbit'], values['maxUseWolf']),
			useAct(values['smellRabbitUse'], values['smellWolfUse'], values['hearRabbitUse'], values['hearWolfUse'], 
				values['seeRabbitUse'], values['seeWolfUse'], values['moveRabbitUse'], values['moveWolfUse'], 
				values['sleepRabbitUse'], values['sleepWolfUse'], values['breedRabbitUse'], values['breedWolfUse'])
		],
		'range' : [
			rangeAct(values['seeRabbit'], values['seeWolf'], values['smellRabbit'], values['smellWolf'], values['hearRabbit'], values['hearWolf']),
			comfort(values['eatComfortRabbit'], values['eatComfortWolf'], values['sleepComfortRabbit'], values['sleepComfortWolf'])
		]
	};

	for(var key in checks){
		for(var i = 0; i < checks[key].length; i++){
			if(checks[key][i] == false){
				switch(key){
					case 'world':
						world();
						break;
					case 'element':
						element();
						break;
					case 'restriction':
						restriction();
						break;
					case 'period':
						period();
						break;
					case 'action':
						action();
						break;
					case 'range':
						range();
						break;
				}

				return false;
			}
		}
	}

	return true;
}

/**
 * It gets the values of the inputs, store them in a hashmap and return it
 *
 * @return {Object}
 */
function getValues(){
	var totalPeriod = document.getElementById('totalPeriod').value;
	var dayPeriod = document.getElementById('dayPeriod').value;
	var nightPeriod = document.getElementById('nightPeriod').value;
	var sizeX = document.getElementById('sizeX').value;
	var sizeY = document.getElementById('sizeY').value;
	var changeWeather = document.getElementById('changeWeather').value;
	var carrot = document.getElementById('carrot').value;
	var tree = document.getElementById('tree').value;
	var lair = document.getElementById('lair').value;
	var rabbit = document.getElementById('rabbit').value;
	var wolf = document.getElementById('wolf').value;
	var eachCarrot = document.getElementById('timeMoreCarrot').value;
	var amountCarrot = document.getElementById('amountMoreCarrot').value;
	var eatRabbit = document.getElementById('maxEatRabbit').value;
	var eatWolf = document.getElementById('maxEatWolf').value;
	var sleepRabbit = document.getElementById('maxSleepRabbit').value;
	var sleepWolf = document.getElementById('maxSleepWolf').value;
	var noNeedToEatRabbit = document.getElementById('noNeedToEatRabbit').value;
	var noNeedToEatWolf = document.getElementById('noNeedToEatWolf').value;
	var breedRabbitEach = document.getElementById('breedRabbitEach').value;
	var breedWolfEach = document.getElementById('breedWolfEach').value;
	var breedRabbitAmount = document.getElementById('breedRabbitAmount').value;
	var breedWolfAmount = document.getElementById('breedWolfAmount').value;
	var turnEatRabbit = document.getElementById('turnEatRabbit').value;
	var turnEatWolf = document.getElementById('turnEatWolf').value;
	var turnSleepRabbit = document.getElementById('turnSleepRabbit').value;
	var turnSleepWolf = document.getElementById('turnSleepWolf').value;
	var maxUseRabbit = document.getElementById('maxUseRabbit').value;
	var maxUseWolf = document.getElementById('maxUseWolf').value;
	var smellRabbitUse = document.getElementById('smellRabbitUse').value;
	var smellWolfUse = document.getElementById('smellWolfUse').value;
	var hearRabbitUse = document.getElementById('hearRabbitUse').value;
	var hearWolfUse = document.getElementById('hearWolfUse').value;
	var seeRabbitUse = document.getElementById('seeRabbitUse').value;
	var seeWolfUse = document.getElementById('seeWolfUse').value;
	var moveRabbitUse = document.getElementById('moveRabbitUse').value;
	var moveWolfUse = document.getElementById('moveWolfUse').value;
	var sleepRabbitUse = document.getElementById('sleepRabbitUse').value;
	var sleepWolfUse = document.getElementById('sleepWolfUse').value;
	var breedRabbitUse = document.getElementById('breedRabbitUse').value;
	var breedWolfUse = document.getElementById('breedWolfUse').value;
	var seeRabbit = document.getElementById('seeRabbit').value;
	var seeWolf = document.getElementById('seeWolf').value;
	var smellRabbit = document.getElementById('smellRabbit').value;
	var smellWolf = document.getElementById('smellWolf').value;
	var hearRabbit = document.getElementById('hearRabbit').value;
	var hearWolf = document.getElementById('hearWolf').value;
	var eatComfortRabbit = document.getElementById('eatComfortRabbit').value;
	var eatComfortWolf = document.getElementById('eatComfortWolf').value;
	var sleepComfortRabbit = document.getElementById('sleepComfortRabbit').value;
	var sleepComfortWolf = document.getElementById('sleepComfortWolf').value;

	return {
		'totalPeriod' : totalPeriod,
		'dayPeriod' : dayPeriod,
		'nightPeriod' : nightPeriod,
		'sizeX' : sizeX,
		'sizeY' : sizeY,
		'changeWeather' : changeWeather,
		'carrot' : carrot,
		'tree' : tree,
		'lair' : lair,
		'rabbit' : rabbit,
		'wolf' : wolf,
		'eachCarrot' : eachCarrot,
		'amountCarrot' : amountCarrot,
		'eatRabbit' : eatRabbit,
		'eatWolf' : eatWolf,
		'sleepRabbit' : sleepRabbit,
		'sleepWolf' : sleepWolf,
		'noNeedToEatRabbit' : noNeedToEatRabbit,
		'noNeedToEatWolf' : noNeedToEatWolf,
		'breedRabbitEach' : breedRabbitEach,
		'breedWolfEach' : breedWolfEach,
		'breedRabbitAmount' : breedRabbitAmount,
		'breedWolfAmount' : breedWolfAmount,
		'turnEatRabbit' : turnEatRabbit,
		'turnEatWolf' : turnEatWolf,
		'turnSleepRabbit' : turnSleepRabbit,
		'turnSleepWolf' : turnSleepWolf,
		'maxUseRabbit' : maxUseRabbit,
		'maxUseWolf' : maxUseWolf,
		'smellRabbitUse' : smellRabbitUse,
		'smellWolfUse' : smellWolfUse,
		'hearRabbitUse' : hearRabbitUse,
		'hearWolfUse' : hearWolfUse,
		'seeRabbitUse' : seeRabbitUse,
		'seeWolfUse' : seeWolfUse,
		'moveRabbitUse' : moveRabbitUse,
		'moveWolfUse' : moveWolfUse,
		'sleepRabbitUse' : sleepRabbitUse,
		'sleepWolfUse' : sleepWolfUse,
		'breedRabbitUse' : breedRabbitUse,
		'breedWolfUse' : breedWolfUse,
		'seeRabbit' : seeRabbit,
		'seeWolf' : seeWolf,
		'smellRabbit' : smellRabbit,
		'smellWolf' : smellWolf,
		'hearRabbit' : hearRabbit,
		'hearWolf' : hearWolf,
		'eatComfortRabbit' : eatComfortRabbit,
		'eatComfortWolf' : eatComfortWolf,
		'sleepComfortRabbit' : sleepComfortRabbit,
		'sleepComfortWolf' : sleepComfortWolf
	};
}

/**
 * It checks if the input 'length' has the correct format, changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function totalPeriod(totalPeriod){
	if(!(/^([0-9])*$/.test(totalPeriod))){
		document.getElementById('totalPeriod').style.borderColor = '#a94442';
		document.getElementById('totalPeriod').style.borderWidth = '2px';
		document.getElementById('alert1').className = 'alert alert-danger show';
		document.getElementById('error1').innerHTML = 'Duración total - Formato incorrecto';

		return false;
	}else{
		var totalPeriod = parseInt(totalPeriod);

		if(totalPeriod < 2){
			document.getElementById('totalPeriod').style.borderColor = '#a94442';
			document.getElementById('totalPeriod').style.borderWidth = '2px';
			document.getElementById('alert1').className = 'alert alert-danger show';
			document.getElementById('error1').innerHTML = 'Duración total - Tiene que ser igual o mayor que 2';

			return false;
		}else{
			document.getElementById('totalPeriod').style.borderColor = '#3c763d';
			document.getElementById('totalPeriod').style.borderWidth = '2px';
			document.getElementById('alert1').className = 'hide';

			return true;
		}
	}
}

/**
 * It checks if the input 'daylight' has the correct format, changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function dayPeriod(dayPeriod){
	if(!(/^([0-9])*$/.test(dayPeriod))){
		document.getElementById('dayPeriod').style.borderColor = '#a94442';
		document.getElementById('dayPeriod').style.borderWidth = '2px';
		document.getElementById('alert2').className = 'alert alert-danger show';
		document.getElementById('error2').innerHTML = 'Duración del día - Formato incorrecto';

		return false;
	}else{
		var dayPeriod = parseInt(dayPeriod);

		if(dayPeriod < 1){
			document.getElementById('dayPeriod').style.borderColor = '#a94442';
			document.getElementById('dayPeriod').style.borderWidth = '2px';
			document.getElementById('alert2').className = 'alert alert-danger show';
			document.getElementById('error2').innerHTML = 'Duración del día - Tiene que ser mayor o igual que 1';

			return false;
		}else{
			document.getElementById('dayPeriod').style.borderColor = '#3c763d';
			document.getElementById('dayPeriod').style.borderWidth = '2px';
			document.getElementById('alert2').className = 'hide';

			return true;
		}
	}
}

/**
 * It checks if the input 'night' has the correct format, changes the colour of the input
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function nightPeriod(nightPeriod){
	if(!(/^([0-9])*$/.test(nightPeriod))){
		document.getElementById('nightPeriod').style.borderColor = '#a94442';
		document.getElementById('nightPeriod').style.borderWidth = '2px';
		document.getElementById('alert3').className = 'alert alert-danger show';
		document.getElementById('error3').innerHTML = 'Duración de la noche - Formato incorrecto';

		return false;
	}else{
		var nightPeriod = parseInt(nightPeriod);

		if(nightPeriod < 1){
			document.getElementById('nightPeriod').style.borderColor = '#a94442';
			document.getElementById('nightPeriod').style.borderWidth = '2px';
			document.getElementById('alert3').className = 'alert alert-danger show';
			document.getElementById('error3').innerHTML = 'Duración de la noche - Tiene que ser mayor o igual que 1';
			
			return false;
		}else{
			document.getElementById('nightPeriod').style.borderColor = '#3c763d';
			document.getElementById('nightPeriod').style.borderWidth = '2px';
			document.getElementById('alert3').className = 'hide';

			return true;
		}
	}
}

/**
 * It checks if the input 'width' and 'height' have the correct format, changes the colour of the input
 * (green if it is correct or red if not) and throw a new message if they have an error
 *
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function dimensions(sizeX, sizeY){
	if(!(/^([0-9])*$/.test(sizeX)) || !(/^([0-9])*$/.test(sizeY))){
		if(!(/^([0-9])*$/.test(sizeX))){
			document.getElementById('sizeX').style.borderColor = '#a94442';
			document.getElementById('sizeX').style.borderWidth = '2px';
			document.getElementById('alert4').className = 'alert alert-danger show';
			document.getElementById('error4').innerHTML = 'Dimensión (largo) del mundo - Formato incorrecto';
		}else{
			sizeX = parseInt(sizeX);

			if(sizeX < 1){
				document.getElementById('sizeX').style.borderColor = '#a94442';
				document.getElementById('sizeX').style.borderWidth = '2px';
				document.getElementById('alert4').className = 'alert alert-danger show';
				document.getElementById('error4').innerHTML = 'Dimensión (largo) del mundo - Tiene que ser mayor que 1';
			}else{
				document.getElementById('sizeX').style.borderColor = '#3c763d';
				document.getElementById('sizeX').style.borderWidth = '2px';
				document.getElementById('alert4').className = 'hide';
			}
		}

		if(!(/^([0-9])*$/.test(sizeY))){
			document.getElementById('sizeY').style.borderColor = '#a94442';
			document.getElementById('sizeY').style.borderWidth = '2px';
			document.getElementById('alert5').className = 'alert alert-danger show';
			document.getElementById('error5').innerHTML = 'Dimensión (ancho) del mundo - Formato incorrecto';
		}else{
			sizeY = parseInt(sizeY);

			if(sizeY < 1){
				document.getElementById('sizeY').style.borderColor = '#a94442';
				document.getElementById('sizeY').style.borderWidth = '2px';
				document.getElementById('alert5').className = 'alert alert-danger show';
				document.getElementById('error5').innerHTML = 'Dimensión (ancho) del mundo - Tiene que ser mayor que 1';
			}else{
				document.getElementById('sizeY').style.borderColor = '#3c763d';
				document.getElementById('sizeY').style.borderWidth = '2px';
				document.getElementById('alert5').className = 'hide';
			}
		}

		return false;
	}else{
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);

		if(sizeX < 1 || sizeY < 1){
			if(sizeX < 1){
				document.getElementById('sizeX').style.borderColor = '#a94442';
				document.getElementById('sizeX').style.borderWidth = '2px';
				document.getElementById('alert4').className = 'alert alert-danger show';
				document.getElementById('error4').innerHTML = 'Dimensión (largo) del mundo - Tiene que ser mayor que 1';
			}else{
				document.getElementById('sizeX').style.borderColor = '#3c763d';
				document.getElementById('sizeX').style.borderWidth = '2px';
				document.getElementById('alert4').className = 'hide';
			}

			if(sizeY < 1){
				document.getElementById('sizeY').style.borderColor = '#a94442';
				document.getElementById('sizeY').style.borderWidth = '2px';
				document.getElementById('alert5').className = 'alert alert-danger show';
				document.getElementById('error5').innerHTML = 'Dimensión (ancho) del mundo - Tiene que ser mayor que 1';
			}else{
				document.getElementById('sizeY').style.borderColor = '#3c763d';
				document.getElementById('sizeY').style.borderWidth = '2px';
				document.getElementById('alert5').className = 'hide';
			}

			return false;
		}else{
			document.getElementById('sizeX').style.borderColor = '#3c763d';
			document.getElementById('sizeX').style.borderWidth = '2px';
			document.getElementById('sizeY').style.borderColor = '#3c763d';
			document.getElementById('sizeY').style.borderWidth = '2px';
			document.getElementById('alert4').className = 'hide';
			document.getElementById('alert5').className = 'hide';
			
			return true;
		}
	}
}

/**
 * It checks if the input 'change weather' has the correct format, changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function changeWeather(change, totalPeriod){
	document.getElementById('weather').style.borderColor = '#3c763d';
	document.getElementById('weather').style.borderWidth = '2px';

	if(!(/^([0-9])*$/.test(change))){
		document.getElementById('changeWeather').style.borderColor = '#a94442';
		document.getElementById('changeWeather').style.borderWidth = '2px';
		document.getElementById('alert6').className = 'alert alert-danger show';
		document.getElementById('error6').innerHTML = 'Cambiar tiempo cada (ciclos) - Formato incorrecto';

		return false;
	}else{
		totalPeriod = parseInt(totalPeriod);
		change = parseInt(change);

		if(change > totalPeriod){
			document.getElementById('changeWeather').style.borderColor = '#a94442';
			document.getElementById('changeWeather').style.borderWidth = '2px';
			document.getElementById('alert6').className = 'alert alert-danger show';
			document.getElementById('error6').innerHTML = 'Cambiar tiempo cada (ciclos) - Tiene que ser menor o igual al número de ciclos de ejecución';

			return false;
		}else{
			document.getElementById('changeWeather').style.borderColor = '#3c763d';
			document.getElementById('changeWeather').style.borderWidth = '2px';
			document.getElementById('alert6').className = 'hide';

			return true;
		}
	}
}

/**
 * It checks if the amount of elements to create isn't more big than the size of the world
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number}
 * @param {Number}
 *
 * @return {Boolean}
 */
function checkAmountElements(carrot, tree, lair, rabbit, wolf, sizeX, sizeY){
	carrot = parseInt(carrot);
	tree = parseInt(tree);
	lair = parseInt(lair);
	rabbit = parseInt(rabbit);
	wolf = parseInt(wolf);
	sizeX = parseInt(sizeX);
	sizeY = parseInt(sizeY);

	if(carrot + tree + lair + rabbit + wolf > sizeX * sizeY){
		return false;
	}else{
		return true;
	}
}

/**
 * It checks if the inputs 'amount of carrots', 'amount of trees', 'amount of lairs', 'amount of rabbits' and 'amount of wolfs'
 * have the correct format and changes the colour of the input (green if it is correct or red if not)
 * and throw a new message if they have an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number}
 * @param {Number}
 *
 * @return {Boolean}
 */
function amountElements(carrot, tree, lair, rabbit, wolf, sizeX, sizeY){
	if(!(/^([0-9])*$/.test(carrot)) || !(/^([0-9])*$/.test(tree)) || !(/^([0-9])*$/.test(lair)) || !(/^([0-9])*$/.test(rabbit)) || !(/^([0-9])*$/.test(wolf))){
		if(!(/^([0-9])*$/.test(carrot))){
			document.getElementById('carrot').style.borderColor = '#a94442';
			document.getElementById('carrot').style.borderWidth = '2px';
			document.getElementById('alert7').className = 'alert alert-danger show';
			document.getElementById('error7').innerHTML = 'Cantidad de zanahorias - Formato incorrecto';
			document.getElementById('alert12').className = 'alert alert-danger hide';
		}else{
			document.getElementById('carrot').style.borderColor = '#3c763d';
			document.getElementById('carrot').style.borderWidth = '2px';
			document.getElementById('alert7').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(tree))){
			document.getElementById('tree').style.borderColor = '#a94442';
			document.getElementById('tree').style.borderWidth = '2px';
			document.getElementById('alert8').className = 'alert alert-danger show';
			document.getElementById('error8').innerHTML = 'Cantidad de árboles - Formato incorrecto';
			document.getElementById('alert12').className = 'alert alert-danger hide';
		}else{
			document.getElementById('tree').style.borderColor = '#3c763d';
			document.getElementById('tree').style.borderWidth = '2px';
			document.getElementById('alert8').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(lair))){
			document.getElementById('lair').style.borderColor = '#a94442';
			document.getElementById('lair').style.borderWidth = '2px';
			document.getElementById('alert9').className = 'alert alert-danger show';
			document.getElementById('error9').innerHTML = 'Cantidad de madrigueras - Formato incorrecto';
			document.getElementById('alert12').className = 'alert alert-danger hide';
		}else{
			document.getElementById('lair').style.borderColor = '#3c763d';
			document.getElementById('lair').style.borderWidth = '2px';
			document.getElementById('alert9').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(rabbit))){
			document.getElementById('rabbit').style.borderColor = '#a94442';
			document.getElementById('rabbit').style.borderWidth = '2px';
			document.getElementById('alert10').className = 'alert alert-danger show';
			document.getElementById('error10').innerHTML = 'Cantidad de conejos - Formato incorrecto';
			document.getElementById('alert12').className = 'alert alert-danger hide';
		}else{
			document.getElementById('rabbit').style.borderColor = '#3c763d';
			document.getElementById('rabbit').style.borderWidth = '2px';
			document.getElementById('alert10').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(wolf))){
			document.getElementById('wolf').style.borderColor = '#a94442';
			document.getElementById('wolf').style.borderWidth = '2px';
			document.getElementById('alert11').className = 'alert alert-danger show';
			document.getElementById('error11').innerHTML = 'Cantidad de lobos - Formato incorrecto';
			document.getElementById('alert12').className = 'alert alert-danger hide';
		}else{
			document.getElementById('wolf').style.borderColor = '#3c763d';
			document.getElementById('wolf').style.borderWidth = '2px';
			document.getElementById('alert11').className = 'alert alert-danger hide';
		}

		return false;
	}else if(!checkAmountElements(carrot, tree, lair, rabbit, wolf, sizeX, sizeY)){
		document.getElementById('carrot').style.borderColor = '#a94442';
		document.getElementById('carrot').style.borderWidth = '2px';
		document.getElementById('tree').style.borderColor = '#a94442';
		document.getElementById('tree').style.borderWidth = '2px';
		document.getElementById('lair').style.borderColor = '#a94442';
		document.getElementById('lair').style.borderWidth = '2px';
		document.getElementById('rabbit').style.borderColor = '#a94442';
		document.getElementById('rabbit').style.borderWidth = '2px';
		document.getElementById('wolf').style.borderColor = '#a94442';
		document.getElementById('wolf').style.borderWidth = '2px';

		document.getElementById('alert7').className = 'alert alert-danger hide';
		document.getElementById('alert8').className = 'alert alert-danger hide';
		document.getElementById('alert9').className = 'alert alert-danger hide';
		document.getElementById('alert10').className = 'alert alert-danger hide';
		document.getElementById('alert11').className = 'alert alert-danger hide';
		
		document.getElementById('alert12').className = 'alert alert-danger show';
		document.getElementById('error12').innerHTML = 'Cantidad inicial de elementos - Tiene que ser menor o igual que la dimensión del mundo';

		return false;
	}else{
		document.getElementById('carrot').style.borderColor = '#3c763d';
		document.getElementById('carrot').style.borderWidth = '2px';
		document.getElementById('tree').style.borderColor = '#3c763d';
		document.getElementById('tree').style.borderWidth = '2px';
		document.getElementById('lair').style.borderColor = '#3c763d';
		document.getElementById('lair').style.borderWidth = '2px';
		document.getElementById('rabbit').style.borderColor = '#3c763d';
		document.getElementById('rabbit').style.borderWidth = '2px';
		document.getElementById('wolf').style.borderColor = '#3c763d';
		document.getElementById('wolf').style.borderWidth = '2px';
		document.getElementById('alert7').className = 'hide';
		document.getElementById('alert8').className = 'hide';
		document.getElementById('alert9').className = 'hide';
		document.getElementById('alert10').className = 'hide';
		document.getElementById('alert11').className = 'hide';
		document.getElementById('alert12').className = 'hide';

		return true;
	}
}

/**
 * It checks if the inputs 'regeneration of carrots' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number}
 *
 * @return {Boolean}
 */
function moreCarrot(each, amount, totalPeriod){
	totalPeriod = parseInt(totalPeriod);

	if(!(/^([0-9])*$/.test(each)) || !(/^([0-9])*$/.test(amount))){
		if(!(/^([0-9])*$/.test(each))){
			document.getElementById('timeMoreCarrot').style.borderColor = '#a94442';
			document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert13').className = 'alert alert-danger show';
			document.getElementById('error13').innerHTML = 'Regenara zanahorias cada - Formato incorrecto';
		}else{
			each = parseInt(each);

			if(each > totalPeriod){
				document.getElementById('timeMoreCarrot').style.borderColor = '#a94442';
				document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
				document.getElementById('alert13').className = 'alert alert-danger show';
				document.getElementById('error13').innerHTML = 'Regenara zanahorias cada - El número de ciclos no puede ser mayor que el número de ciclos de ejecución';
			}else if(each < 1){
				document.getElementById('timeMoreCarrot').style.borderColor = '#a94442';
				document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
				document.getElementById('alert13').className = 'alert alert-danger show';
				document.getElementById('error13').innerHTML = 'Regenara zanahorias cada - El número de ciclos tiene que ser mayor que 0';
			}else{
				document.getElementById('timeMoreCarrot').style.borderColor = '#3c763d';
				document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
				document.getElementById('alert13').className = 'alert alert-danger hide';
			}
		}

		if(!(/^([0-9])*$/.test(amount))){
			document.getElementById('amountMoreCarrot').style.borderColor = '#a94442';
			document.getElementById('amountMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert14').className = 'alert alert-danger show';
			document.getElementById('error14').innerHTML = 'Regenara zanahorias (cantidad) - Formato incorrecto';
		}else{
			document.getElementById('amountMoreCarrot').style.borderColor = '#3c763d';
			document.getElementById('amountMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert14').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		each = parseInt(each);

		if(each > totalPeriod){
			document.getElementById('timeMoreCarrot').style.borderColor = '#a94442';
			document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert13').className = 'alert alert-danger show';
			document.getElementById('error13').innerHTML = 'Regenara zanahorias cada - El número de ciclos no puede ser mayor que el número de ciclos de ejecución';
			document.getElementById('amountMoreCarrot').style.borderColor = '#3c763d';
			document.getElementById('amountMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert14').className = 'alert alert-danger hide';

			return false;
		}else if(each < 1){
			document.getElementById('timeMoreCarrot').style.borderColor = '#a94442';
			document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert13').className = 'alert alert-danger show';
			document.getElementById('error13').innerHTML = 'Regenara zanahorias cada - El número de ciclos tiene que ser mayor que 0';
			document.getElementById('amountMoreCarrot').style.borderColor = '#3c763d';
			document.getElementById('amountMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert14').className = 'alert alert-danger hide';

			return false;
		}else{
			document.getElementById('timeMoreCarrot').style.borderColor = '#3c763d';
			document.getElementById('timeMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert13').className = 'alert alert-danger hide';
			document.getElementById('amountMoreCarrot').style.borderColor = '#3c763d';
			document.getElementById('amountMoreCarrot').style.borderWidth = '2px';
			document.getElementById('alert14').className = 'alert alert-danger hide';

			return true;
		}
	}
}

/**
 * It checks if the inputs 'period without eat' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function maxEat(eatRabbit, eatWolf){
	if(!(/^([0-9])*$/.test(eatRabbit)) || !(/^([0-9])*$/.test(eatWolf))){
		if(!(/^([0-9])*$/.test(eatRabbit))){
			document.getElementById('maxEatRabbit').style.borderColor = '#a94442';
			document.getElementById('maxEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert15').className = 'alert alert-danger show';
			document.getElementById('error15').innerHTML = 'Ciclos sin comer (conejos) - Formato incorrecto';
		}else{
			document.getElementById('maxEatRabbit').style.borderColor = '#3c763d';
			document.getElementById('maxEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert15').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(eatWolf))){
			document.getElementById('maxEatWolf').style.borderColor = '#a94442';
			document.getElementById('maxEatWolf').style.borderWidth = '2px';
			document.getElementById('alert16').className = 'alert alert-danger show';
			document.getElementById('error16').innerHTML = 'Ciclos sin comer (lobos) - Formato incorrecto';
		}else{
			document.getElementById('maxEatWolf').style.borderColor = '#3c763d';
			document.getElementById('maxEatWolf').style.borderWidth = '2px';
			document.getElementById('alert16').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('maxEatRabbit').style.borderColor = '#3c763d';
		document.getElementById('maxEatRabbit').style.borderWidth = '2px';
		document.getElementById('alert15').className = 'alert alert-danger hide';
		document.getElementById('maxEatWolf').style.borderColor = '#3c763d';
		document.getElementById('maxEatWolf').style.borderWidth = '2px';
		document.getElementById('alert16').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the inputs 'period without sleep' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function maxSleep(sleepRabbit, sleepWolf){
	if(!(/^([0-9])*$/.test(sleepRabbit)) || !(/^([0-9])*$/.test(sleepWolf))){
		if(!(/^([0-9])*$/.test(sleepRabbit))){
			document.getElementById('maxSleepRabbit').style.borderColor = '#a94442';
			document.getElementById('maxSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert17').className = 'alert alert-danger show';
			document.getElementById('error17').innerHTML = 'Ciclos sin dormir (conejos) - Formato incorrecto';
		}else{
			document.getElementById('maxSleepRabbit').style.borderColor = '#3c763d';
			document.getElementById('maxSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert17').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(sleepWolf))){
			document.getElementById('maxSleepWolf').style.borderColor = '#a94442';
			document.getElementById('maxSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert18').className = 'alert alert-danger show';
			document.getElementById('error18').innerHTML = 'Ciclos sin dormir (lobos) - Formato incorrecto';
		}else{
			document.getElementById('maxSleepWolf').style.borderColor = '#3c763d';
			document.getElementById('maxSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert18').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('maxSleepRabbit').style.borderColor = '#3c763d';
		document.getElementById('maxSleepRabbit').style.borderWidth = '2px';
		document.getElementById('alert17').className = 'alert alert-danger hide';
		document.getElementById('maxSleepWolf').style.borderColor = '#3c763d';
		document.getElementById('maxSleepWolf').style.borderWidth = '2px';
		document.getElementById('alert18').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the input 'place to sleep for rabbits' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @return {Boolean}
 */
function placeToSleepRabbit(){
	document.getElementById('placeToSleepRabbit').style.borderColor = '#3c763d';
	document.getElementById('placeToSleepRabbit').style.borderWidth = '2px';

	return true;
}

/**
 * It checks if the inputs 'breed for rabbits and wolfs' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function breed(breedRabbitEach, breedRabbitAmount, breedWolfEach, breedWolfAmount){
	if(!(/^([0-9])*$/.test(breedRabbitEach)) || !(/^([0-9])*$/.test(breedRabbitAmount)) || !(/^([0-9])*$/.test(breedWolfEach)) || !(/^([0-9])*$/.test(breedWolfAmount))){
		if(!(/^([0-9])*$/.test(breedRabbitEach))){
			document.getElementById('breedRabbitEach').style.borderColor = '#a94442';
			document.getElementById('breedRabbitEach').style.borderWidth = '2px';
			document.getElementById('alert19').className = 'alert alert-danger show';
			document.getElementById('error19').innerHTML = 'Conejos - Límite cada (ciclos) - Formato incorrecto';
		}else{
			document.getElementById('breedRabbitEach').style.borderColor = '#3c763d';
			document.getElementById('breedRabbitEach').style.borderWidth = '2px';
			document.getElementById('alert19').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(breedRabbitAmount))){
			document.getElementById('breedRabbitAmount').style.borderColor = '#a94442';
			document.getElementById('breedRabbitAmount').style.borderWidth = '2px';
			document.getElementById('alert20').className = 'alert alert-danger show';
			document.getElementById('error20').innerHTML = 'Conejos - Cantidad máxima - Formato incorrecto';
		}else{
			document.getElementById('breedRabbitAmount').style.borderColor = '#3c763d';
			document.getElementById('breedRabbitAmount').style.borderWidth = '2px';
			document.getElementById('alert20').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(breedWolfEach))){
			document.getElementById('breedWolfEach').style.borderColor = '#a94442';
			document.getElementById('breedWolfEach').style.borderWidth = '2px';
			document.getElementById('alert21').className = 'alert alert-danger show';
			document.getElementById('error21').innerHTML = 'Lobos - Límite cada (ciclos) - Formato incorrecto';
		}else{
			document.getElementById('breedWolfEach').style.borderColor = '#3c763d';
			document.getElementById('breedWolfEach').style.borderWidth = '2px';
			document.getElementById('alert21').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(breedWolfAmount))){
			document.getElementById('breedWolfAmount').style.borderColor = '#a94442';
			document.getElementById('breedWolfAmount').style.borderWidth = '2px';
			document.getElementById('alert22').className = 'alert alert-danger show';
			document.getElementById('error22').innerHTML = 'Lobos - Cantidad máxima - Formato incorrecto';
		}else{
			document.getElementById('breedWolfAmount').style.borderColor = '#3c763d';
			document.getElementById('breedWolfAmount').style.borderWidth = '2px';
			document.getElementById('alert22').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('breedRabbitEach').style.borderColor = '#3c763d';
		document.getElementById('breedRabbitEach').style.borderWidth = '2px';
		document.getElementById('alert19').className = 'alert alert-danger hide';
		document.getElementById('breedRabbitAmount').style.borderColor = '#3c763d';
		document.getElementById('breedRabbitAmount').style.borderWidth = '2px';
		document.getElementById('alert20').className = 'alert alert-danger hide';
		document.getElementById('breedWolfEach').style.borderColor = '#3c763d';
		document.getElementById('breedWolfEach').style.borderWidth = '2px';
		document.getElementById('alert21').className = 'alert alert-danger hide';
		document.getElementById('breedWolfAmount').style.borderColor = '#3c763d';
		document.getElementById('breedWolfAmount').style.borderWidth = '2px';
		document.getElementById('alert22').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the inputs 'turn to eat' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number}
 *
 * @return {Boolean}
 */
function turnEat(turnEatRabbit, turnEatWolf, dayPeriod){
	dayPeriod = parseInt(dayPeriod);

	if(!(/^([0-9])*$/.test(turnEatRabbit)) || !(/^([0-9])*$/.test(turnEatWolf))){
		if(!(/^([0-9])*$/.test(turnEatRabbit))){
			document.getElementById('turnEatRabbit').style.borderColor = '#a94442';
			document.getElementById('turnEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert23').className = 'alert alert-danger show';
			document.getElementById('error23').innerHTML = 'Conejos - Necesitan (ciclos) - Formato incorrecto';
		}else if(turnEatRabbit > dayPeriod){
			document.getElementById('turnEatRabbit').style.borderColor = '#a94442';
			document.getElementById('turnEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert23').className = 'alert alert-danger show';
			document.getElementById('error23').innerHTML = 'Conejos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer';
		}else{
			document.getElementById('turnEatRabbit').style.borderColor = '#3c763d';
			document.getElementById('turnEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert23').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(turnEatWolf))){
			document.getElementById('turnEatWolf').style.borderColor = '#a94442';
			document.getElementById('turnEatWolf').style.borderWidth = '2px';
			document.getElementById('alert24').className = 'alert alert-danger show';
			document.getElementById('error24').innerHTML = 'Conejos - Necesitan (ciclos) - Formato incorrecto';
		}else if(turnEatWolf > dayPeriod){
			document.getElementById('turnEatWolf').style.borderColor = '#a94442';
			document.getElementById('turnEatWolf').style.borderWidth = '2px';
			document.getElementById('alert24').className = 'alert alert-danger show';
			document.getElementById('error24').innerHTML = 'Conejos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer';
		}else{
			document.getElementById('turnEatWolf').style.borderColor = '#3c763d';
			document.getElementById('turnEatWolf').style.borderWidth = '2px';
			document.getElementById('alert24').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		turnEatRabbit = parseInt(turnEatRabbit);
		turnEatWolf = parseInt(turnEatWolf);

		if(turnEatRabbit > dayPeriod || turnEatWolf > dayPeriod){
			if(turnEatRabbit > dayPeriod){
				document.getElementById('turnEatRabbit').style.borderColor = '#a94442';
				document.getElementById('turnEatRabbit').style.borderWidth = '2px';
				document.getElementById('alert23').className = 'alert alert-danger show';
				document.getElementById('error23').innerHTML = 'Conejos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer';
			}

			if(turnEatWolf > dayPeriod){
				document.getElementById('turnEatWolf').style.borderColor = '#a94442';
				document.getElementById('turnEatWolf').style.borderWidth = '2px';
				document.getElementById('alert24').className = 'alert alert-danger show';
				document.getElementById('error24').innerHTML = 'Conejos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer';
			}

			return false;
		}else{
			document.getElementById('turnEatRabbit').style.borderColor = '#3c763d';
			document.getElementById('turnEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert23').className = 'alert alert-danger hide';
			document.getElementById('turnEatWolf').style.borderColor = '#3c763d';
			document.getElementById('turnEatWolf').style.borderWidth = '2px';
			document.getElementById('alert24').className = 'alert alert-danger hide';

			return true;
		}
	}
}

/**
 * It checks if the input 'no need to eat' has the correct format and changes the colour of the input
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function noNeedToEat(noNeedToEatRabbit, noNeedToEatWolf, maxEatRabbit, maxEatWolf){
	maxEatRabbit = parseInt(maxEatRabbit);
	maxEatWolf = parseInt(maxEatWolf);

	if(!(/^([0-9])*$/.test(noNeedToEatRabbit)) || !(/^([0-9])*$/.test(noNeedToEatWolf))){
		if(!(/^([0-9])*$/.test(noNeedToEatRabbit))){
			document.getElementById('noNeedToEatRabbit').style.borderColor = '#a94442';
			document.getElementById('noNeedToEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert47').className = 'alert alert-danger show';
			document.getElementById('error47').innerHTML = 'Conejos - Están saciados durante (ciclos) - Formato incorrecto';
		}else if(noNeedToEatRabbit >= maxEatRabbit){
			document.getElementById('noNeedToEatRabbit').style.borderColor = '#a94442';
			document.getElementById('noNeedToEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert47').className = 'alert alert-danger show';
			document.getElementById('error47').innerHTML = 'Conejos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer';
		}else{
			document.getElementById('noNeedToEatRabbit').style.borderColor = '#3c763d';
			document.getElementById('noNeedToEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert47').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(noNeedToEatWolf))){
			document.getElementById('noNeedToEatWolf').style.borderColor = '#a94442';
			document.getElementById('noNeedToEatWolf').style.borderWidth = '2px';
			document.getElementById('alert48').className = 'alert alert-danger show';
			document.getElementById('error48').innerHTML = 'Lobos - Están saciados durante (ciclos) - Formato incorrecto';
		}else if(noNeedToEatWolf >= maxEatWolf){
			document.getElementById('noNeedToEatWolf').style.borderColor = '#a94442';
			document.getElementById('noNeedToEatWolf').style.borderWidth = '2px';
			document.getElementById('alert48').className = 'alert alert-danger show';
			document.getElementById('error48').innerHTML = 'Lobos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer';
		}else{
			document.getElementById('noNeedToEatWolf').style.borderColor = '#3c763d';
			document.getElementById('noNeedToEatWolf').style.borderWidth = '2px';
			document.getElementById('alert48').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		noNeedToEatRabbit = parseInt(noNeedToEatRabbit);
		noNeedToEatWolf = parseInt(noNeedToEatWolf);

		if(noNeedToEatRabbit >= maxEatRabbit || noNeedToEatWolf >= maxEatWolf){
			if(noNeedToEatRabbit >= maxEatRabbit){
				document.getElementById('noNeedToEatRabbit').style.borderColor = '#a94442';
				document.getElementById('noNeedToEatRabbit').style.borderWidth = '2px';
				document.getElementById('alert47').className = 'alert alert-danger show';
				document.getElementById('error47').innerHTML = 'Conejos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer';
			}

			if(noNeedToEatWolf >= maxEatWolf){
				document.getElementById('noNeedToEatWolf').style.borderColor = '#a94442';
				document.getElementById('noNeedToEatWolf').style.borderWidth = '2px';
				document.getElementById('alert48').className = 'alert alert-danger show';
				document.getElementById('error48').innerHTML = 'Lobos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer';
			}

			return false;
		}else{
			document.getElementById('noNeedToEatRabbit').style.borderColor = '#3c763d';
			document.getElementById('noNeedToEatRabbit').style.borderWidth = '2px';
			document.getElementById('alert47').className = 'alert alert-danger hide';
			document.getElementById('noNeedToEatWolf').style.borderColor = '#3c763d';
			document.getElementById('noNeedToEatWolf').style.borderWidth = '2px';
			document.getElementById('alert48').className = 'alert alert-danger hide';

			return true;
		}
	}
}

/**
 * It checks if the inputs 'turn to sleep' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number}
 *
 * @return {Boolean}
 */
function turnSleep(turnSleepRabbit, turnSleepWolf, nightPeriod){
	nightPeriod = parseInt(nightPeriod);
	
	if(!(/^([0-9])*$/.test(turnSleepRabbit)) || !(/^([0-9])*$/.test(turnSleepWolf))){
		if(!(/^([0-9])*$/.test(turnSleepRabbit))){
			document.getElementById('turnSleepRabbit').style.borderColor = '#a94442';
			document.getElementById('turnSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert25').className = 'alert alert-danger show';
			document.getElementById('error25').innerHTML = 'Conejos - Necesitan (ciclos) - Formato incorrecto';
		}else if(turnSleepRabbit > nightPeriod + parseInt(nightPeriod * 25 / 100)){
			document.getElementById('turnSleepRabbit').style.borderColor = '#a94442';
			document.getElementById('turnSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert25').className = 'alert alert-danger show';
			document.getElementById('error25').innerHTML = 'Conejos - Necesitan (ciclos) - Duración para incorrecta, no puede ser mayor que +25% de la duración de la noche';
		}else{
			document.getElementById('turnSleepRabbit').style.borderColor = '#3c763d';
			document.getElementById('turnSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert25').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(turnSleepWolf))){
			document.getElementById('turnSleepWolf').style.borderColor = '#a94442';
			document.getElementById('turnSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert26').className = 'alert alert-danger show';
			document.getElementById('error26').innerHTML = 'Conejos - Necesitan (ciclos) - Formato incorrecto';
		}else if(turnSleepWolf > nightPeriod + parseInt(nightPeriod * 25 / 100)){
			document.getElementById('turnSleepWolf').style.borderColor = '#a94442';
			document.getElementById('turnSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert26').className = 'alert alert-danger show';
			document.getElementById('error26').innerHTML = 'Conejos - Necesitan (ciclos) - Duración para incorrecta, no puede ser mayor que +25% de la duración de la noche';
		}else{
			document.getElementById('turnSleepWolf').style.borderColor = '#3c763d';
			document.getElementById('turnSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert26').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		turnSleepRabbit = parseInt(turnSleepRabbit);
		turnSleepWolf = parseInt(turnSleepWolf);

		if(turnSleepRabbit > nightPeriod + parseInt(nightPeriod * 25 / 100) || turnSleepWolf > nightPeriod + parseInt(nightPeriod * 25 / 100)){
			if(turnSleepRabbit > nightPeriod){
				document.getElementById('turnSleepRabbit').style.borderColor = '#a94442';
				document.getElementById('turnSleepRabbit').style.borderWidth = '2px';
				document.getElementById('alert25').className = 'alert alert-danger show';
				document.getElementById('error25').innerHTML = 'Conejos - Necesitan (ciclos) - Duración para incorrecta, no puede ser mayor que +25% de la duración de la noche';
			}

			if(turnSleepWolf > nightPeriod){
				document.getElementById('turnSleepWolf').style.borderColor = '#a94442';
				document.getElementById('turnSleepWolf').style.borderWidth = '2px';
				document.getElementById('alert26').className = 'alert alert-danger show';
				document.getElementById('error26').innerHTML = 'Conejos - Necesitan (ciclos) - Duración para incorrecta, no puede ser mayor que +25% de la duración de la noche';
			}

			return false;
		}else{
			document.getElementById('turnSleepRabbit').style.borderColor = '#3c763d';
			document.getElementById('turnSleepRabbit').style.borderWidth = '2px';
			document.getElementById('alert25').className = 'alert alert-danger hide';
			document.getElementById('turnSleepWolf').style.borderColor = '#3c763d';
			document.getElementById('turnSleepWolf').style.borderWidth = '2px';
			document.getElementById('alert26').className = 'alert alert-danger hide';

			return true;
		}
	}
}

/**
 * It checks if the inputs 'points per period' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function maxUse(maxUseRabbit, maxUseWolf){
	if(!(/^([0-9])*$/.test(maxUseRabbit)) || !(/^([0-9])*$/.test(maxUseWolf))){
		if(!(/^([0-9])*$/.test(maxUseRabbit))){
			document.getElementById('maxUseRabbit').style.borderColor = '#a94442';
			document.getElementById('maxUseRabbit').style.borderWidth = '2px';
			document.getElementById('alert27').className = 'alert alert-danger show';
			document.getElementById('error27').innerHTML = 'Puntos por acciones - Conejos - Formato incorrecto';
		}else{
			document.getElementById('maxUseRabbit').style.borderColor = '#3c763d';
			document.getElementById('maxUseRabbit').style.borderWidth = '2px';
			document.getElementById('alert27').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(maxUseWolf))){
			document.getElementById('maxUseWolf').style.borderColor = '#a94442';
			document.getElementById('maxUseWolf').style.borderWidth = '2px';
			document.getElementById('alert28').className = 'alert alert-danger show';
			document.getElementById('error28').innerHTML = 'Puntos por acciones - Lobos - Formato incorrecto';
		}else{
			document.getElementById('maxUseWolf').style.borderColor = '#3c763d';
			document.getElementById('maxUseWolf').style.borderWidth = '2px';
			document.getElementById('alert28').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('maxUseRabbit').style.borderColor = '#3c763d';
		document.getElementById('maxUseRabbit').style.borderWidth = '2px';
		document.getElementById('alert27').className = 'alert alert-danger hide';
		document.getElementById('maxUseWolf').style.borderColor = '#3c763d';
		document.getElementById('maxUseWolf').style.borderWidth = '2px';
		document.getElementById('alert28').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the inputs 'use per action' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function useAct(smellRabbitUse, smellWolfUse, hearRabbitUse, hearWolfUse, seeRabbitUse, seeWolfUse, moveRabbitUse, moveWolfUse, sleepRabbitUse, sleepWolfUse, breedRabbitUse, breedWolfUse){
	if(!(/^([0-9])*$/.test(smellRabbitUse)) || !(/^([0-9])*$/.test(smellWolfUse)) || !(/^([0-9])*$/.test(hearRabbitUse)) || 
		!(/^([0-9])*$/.test(hearWolfUse)) || !(/^([0-9])*$/.test(seeRabbitUse)) ||!(/^([0-9])*$/.test(seeWolfUse)) ||
		!(/^([0-9])*$/.test(moveRabbitUse)) || !(/^([0-9])*$/.test(moveWolfUse)) || !(/^([0-9])*$/.test(sleepRabbitUse)) || 
		!(/^([0-9])*$/.test(sleepWolfUse)) || !(/^([0-9])*$/.test(breedRabbitUse)) ||!(/^([0-9])*$/.test(breedWolfUse))){
		if(!(/^([0-9])*$/.test(smellRabbitUse))){
			document.getElementById('smellRabbitUse').style.borderColor = '#a94442';
			document.getElementById('smellRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert29').className = 'alert alert-danger show';
			document.getElementById('error29').innerHTML = 'Consumo por acción - Olfatear - Conejos - Formato incorrecto';
		}else{
			document.getElementById('smellRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('smellRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert29').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(smellWolfUse))){
			document.getElementById('smellWolfUse').style.borderColor = '#a94442';
			document.getElementById('smellWolfUse').style.borderWidth = '2px';
			document.getElementById('alert30').className = 'alert alert-danger show';
			document.getElementById('error30').innerHTML = 'Consumo por acción - Olfatear - Lobos - Formato incorrecto';
		}else{
			document.getElementById('smellWolfUse').style.borderColor = '#3c763d';
			document.getElementById('smellWolfUse').style.borderWidth = '2px';
			document.getElementById('alert30').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(hearRabbitUse))){
			document.getElementById('hearRabbitUse').style.borderColor = '#a94442';
			document.getElementById('hearRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert31').className = 'alert alert-danger show';
			document.getElementById('error31').innerHTML = 'Consumo por acción - Oir - Conejos - Formato incorrecto';
		}else{
			document.getElementById('hearRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('hearRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert31').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(hearWolfUse))){
			document.getElementById('hearWolfUse').style.borderColor = '#a94442';
			document.getElementById('hearWolfUse').style.borderWidth = '2px';
			document.getElementById('alert32').className = 'alert alert-danger show';
			document.getElementById('error32').innerHTML = 'Consumo por acción - Oir - Lobos - Formato incorrecto';
		}else{
			document.getElementById('hearWolfUse').style.borderColor = '#3c763d';
			document.getElementById('hearWolfUse').style.borderWidth = '2px';
			document.getElementById('alert32').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(seeRabbitUse))){
			document.getElementById('seeRabbitUse').style.borderColor = '#a94442';
			document.getElementById('seeRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert33').className = 'alert alert-danger show';
			document.getElementById('error33').innerHTML = 'Consumo por acción - Ver - Conejos - Formato incorrecto';
		}else{
			document.getElementById('seeRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('seeRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert33').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(seeWolfUse))){
			document.getElementById('seeWolfUse').style.borderColor = '#a94442';
			document.getElementById('seeWolfUse').style.borderWidth = '2px';
			document.getElementById('alert34').className = 'alert alert-danger show';
			document.getElementById('error34').innerHTML = 'Consumo por acción - Ver - Lobos - Formato incorrecto';
		}else{
			document.getElementById('seeWolfUse').style.borderColor = '#3c763d';
			document.getElementById('seeWolfUse').style.borderWidth = '2px';
			document.getElementById('alert34').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(moveRabbitUse))){
			document.getElementById('moveRabbitUse').style.borderColor = '#a94442';
			document.getElementById('moveRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert35').className = 'alert alert-danger show';
			document.getElementById('error35').innerHTML = 'Consumo por acción - Mover - Conejos - Formato incorrecto';
		}else{
			document.getElementById('moveRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('moveRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert35').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(moveWolfUse))){
			document.getElementById('moveWolfUse').style.borderColor = '#a94442';
			document.getElementById('moveWolfUse').style.borderWidth = '2px';
			document.getElementById('alert36').className = 'alert alert-danger show';
			document.getElementById('error36').innerHTML = 'Consumo por acción - Mover - Lobos - Formato incorrecto';
		}else{
			document.getElementById('moveWolfUse').style.borderColor = '#3c763d';
			document.getElementById('moveWolfUse').style.borderWidth = '2px';
			document.getElementById('alert36').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(sleepRabbitUse))){
			document.getElementById('sleepRabbitUse').style.borderColor = '#a94442';
			document.getElementById('sleepRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert37').className = 'alert alert-danger show';
			document.getElementById('error37').innerHTML = 'Consumo por acción - Dormir - Conejos - Formato incorrecto';
		}else{
			document.getElementById('sleepRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('sleepRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert37').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(sleepWolfUse))){
			document.getElementById('sleepWolfUse').style.borderColor = '#a94442';
			document.getElementById('sleepWolfUse').style.borderWidth = '2px';
			document.getElementById('alert38').className = 'alert alert-danger show';
			document.getElementById('error38').innerHTML = 'Consumo por acción - Dormir - Lobos - Formato incorrecto';
		}else{
			document.getElementById('sleepWolfUse').style.borderColor = '#3c763d';
			document.getElementById('sleepWolfUse').style.borderWidth = '2px';
			document.getElementById('alert38').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(breedRabbitUse))){
			document.getElementById('breedRabbitUse').style.borderColor = '#a94442';
			document.getElementById('breedRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert39').className = 'alert alert-danger show';
			document.getElementById('error39').innerHTML = 'Consumo por acción - Reproducirse - Conejos - Formato incorrecto';
		}else{
			document.getElementById('breedRabbitUse').style.borderColor = '#3c763d';
			document.getElementById('breedRabbitUse').style.borderWidth = '2px';
			document.getElementById('alert39').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(breedWolfUse))){
			document.getElementById('breedWolfUse').style.borderColor = '#a94442';
			document.getElementById('breedWolfUse').style.borderWidth = '2px';
			document.getElementById('alert40').className = 'alert alert-danger show';
			document.getElementById('error40').innerHTML = 'Consumo por acción - Reproducirse - Lobos - Formato incorrecto';
		}else{
			document.getElementById('breedWolfUse').style.borderColor = '#3c763d';
			document.getElementById('breedWolfUse').style.borderWidth = '2px';
			document.getElementById('alert40').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('smellRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('smellRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert29').className = 'alert alert-danger hide';
		document.getElementById('smellWolfUse').style.borderColor = '#3c763d';
		document.getElementById('smellWolfUse').style.borderWidth = '2px';
		document.getElementById('alert30').className = 'alert alert-danger hide';
		document.getElementById('hearRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('hearRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert31').className = 'alert alert-danger hide';
		document.getElementById('hearWolfUse').style.borderColor = '#3c763d';
		document.getElementById('hearWolfUse').style.borderWidth = '2px';
		document.getElementById('alert32').className = 'alert alert-danger hide';
		document.getElementById('seeRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('seeRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert33').className = 'alert alert-danger hide';
		document.getElementById('seeWolfUse').style.borderColor = '#3c763d';
		document.getElementById('seeWolfUse').style.borderWidth = '2px';
		document.getElementById('alert34').className = 'alert alert-danger hide';
		document.getElementById('moveRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('moveRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert35').className = 'alert alert-danger hide';
		document.getElementById('moveWolfUse').style.borderColor = '#3c763d';
		document.getElementById('moveWolfUse').style.borderWidth = '2px';
		document.getElementById('alert36').className = 'alert alert-danger hide';
		document.getElementById('sleepRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('sleepRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert37').className = 'alert alert-danger hide';
		document.getElementById('sleepWolfUse').style.borderColor = '#3c763d';
		document.getElementById('sleepWolfUse').style.borderWidth = '2px';
		document.getElementById('alert38').className = 'alert alert-danger hide';
		document.getElementById('breedRabbitUse').style.borderColor = '#3c763d';
		document.getElementById('breedRabbitUse').style.borderWidth = '2px';
		document.getElementById('alert39').className = 'alert alert-danger hide';
		document.getElementById('breedWolfUse').style.borderColor = '#3c763d';
		document.getElementById('breedWolfUse').style.borderWidth = '2px';
		document.getElementById('alert40').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the inputs 'range per action' has the correct format and changes the colour of the input 
 * (green if it is correct or red if not) and throw a new message if it has an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function rangeAct(seeRabbit, seeWolf, smellRabbit, smellWolf, hearRabbit, hearWolf){
	if(!(/^([0-9])*$/.test(seeRabbit)) || !(/^([0-9])*$/.test(seeWolf)) || !(/^([0-9])*$/.test(smellRabbit)) || 
		!(/^([0-9])*$/.test(smellWolf)) || !(/^([0-9])*$/.test(hearRabbit)) || !(/^([0-9])*$/.test(hearWolf))){
		if(!(/^([0-9])*$/.test(seeRabbit))){
			document.getElementById('seeRabbit').style.borderColor = '#a94442';
			document.getElementById('seeRabbit').style.borderWidth = '2px';
			document.getElementById('alert41').className = 'alert alert-danger show';
			document.getElementById('error41').innerHTML = 'Rango por acción - Ver - Conejos - Formato incorrecto';
		}else{
			document.getElementById('seeRabbit').style.borderColor = '#3c763d';
			document.getElementById('seeRabbit').style.borderWidth = '2px';
			document.getElementById('alert41').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(seeWolf))){
			document.getElementById('seeWolf').style.borderColor = '#a94442';
			document.getElementById('seeWolf').style.borderWidth = '2px';
			document.getElementById('alert42').className = 'alert alert-danger show';
			document.getElementById('error42').innerHTML = 'Rango por acción - Ver - Lobos - Formato incorrecto';
		}else{
			document.getElementById('seeWolf').style.borderColor = '#3c763d';
			document.getElementById('seeWolf').style.borderWidth = '2px';
			document.getElementById('alert42').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(smellRabbit))){
			document.getElementById('smellRabbit').style.borderColor = '#a94442';
			document.getElementById('smellRabbit').style.borderWidth = '2px';
			document.getElementById('alert43').className = 'alert alert-danger show';
			document.getElementById('error43').innerHTML = 'Rango por acción - Olfatear- Conejos - Formato incorrecto';
		}else{
			document.getElementById('smellRabbit').style.borderColor = '#3c763d';
			document.getElementById('smellRabbit').style.borderWidth = '2px';
			document.getElementById('alert43').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(smellWolf))){
			document.getElementById('smellWolf').style.borderColor = '#a94442';
			document.getElementById('smellWolf').style.borderWidth = '2px';
			document.getElementById('alert44').className = 'alert alert-danger show';
			document.getElementById('error44').innerHTML = 'Rango por acción - Olfatear - Lobos - Formato incorrecto';
		}else{
			document.getElementById('smellWolf').style.borderColor = '#3c763d';
			document.getElementById('smellWolf').style.borderWidth = '2px';
			document.getElementById('alert44').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(hearRabbit))){
			document.getElementById('hearRabbit').style.borderColor = '#a94442';
			document.getElementById('hearRabbit').style.borderWidth = '2px';
			document.getElementById('alert45').className = 'alert alert-danger show';
			document.getElementById('error45').innerHTML = 'Rango por acción - Oir - Conejos - Formato incorrecto';
		}else{
			document.getElementById('hearRabbit').style.borderColor = '#3c763d';
			document.getElementById('hearRabbit').style.borderWidth = '2px';
			document.getElementById('alert45').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(hearWolf))){
			document.getElementById('hearWolf').style.borderColor = '#a94442';
			document.getElementById('hearWolf').style.borderWidth = '2px';
			document.getElementById('alert46').className = 'alert alert-danger show';
			document.getElementById('error46').innerHTML = 'Rango por acción - Oir - Lobos - Formato incorrecto';
		}else{
			document.getElementById('hearWolf').style.borderColor = '#3c763d';
			document.getElementById('hearWolf').style.borderWidth = '2px';
			document.getElementById('alert46').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('seeRabbit').style.borderColor = '#3c763d';
		document.getElementById('seeRabbit').style.borderWidth = '2px';
		document.getElementById('alert41').className = 'alert alert-danger hide';
		document.getElementById('seeWolf').style.borderColor = '#3c763d';
		document.getElementById('seeWolf').style.borderWidth = '2px';
		document.getElementById('alert42').className = 'alert alert-danger hide';
		document.getElementById('smellRabbit').style.borderColor = '#3c763d';
		document.getElementById('smellRabbit').style.borderWidth = '2px';
		document.getElementById('alert43').className = 'alert alert-danger hide';
		document.getElementById('smellWolf').style.borderColor = '#3c763d';
		document.getElementById('smellWolf').style.borderWidth = '2px';
		document.getElementById('alert44').className = 'alert alert-danger hide';
		document.getElementById('hearRabbit').style.borderColor = '#3c763d';
		document.getElementById('hearRabbit').style.borderWidth = '2px';
		document.getElementById('alert45').className = 'alert alert-danger hide';
		document.getElementById('hearWolf').style.borderColor = '#3c763d';
		document.getElementById('hearWolf').style.borderWidth = '2px';
		document.getElementById('alert46').className = 'alert alert-danger hide';

		return true;
	}
}

/**
 * It checks if the inputs 'comfort' has the correct format and changes the colour of the input 
 * (green if they are correct or red if not) and throw a new message if they have an error
 *
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 * @param {Number|String}
 *
 * @return {Boolean}
 */
function comfort(eatComfortRabbit, eatComfortWolf, sleepComfortRabbit, sleepComfortWolf){
	if(!(/^([0-9])*$/.test(eatComfortRabbit)) || !(/^([0-9])*$/.test(eatComfortWolf)) || !(/^([0-9])*$/.test(sleepComfortRabbit)) || !(/^([0-9])*$/.test(sleepComfortWolf))){
		if(!(/^([0-9])*$/.test(eatComfortRabbit))){
			document.getElementById('eatComfortRabbit').style.borderColor = '#a94442';
			document.getElementById('eatComfortRabbit').style.borderWidth = '2px';
			document.getElementById('alert49').className = 'alert alert-danger show';
			document.getElementById('error49').innerHTML = 'Hasta (ciclos) después de comer - Conejos - Formato incorrecto';
		}else{
			document.getElementById('eatComfortRabbit').style.borderColor = '#3c763d';
			document.getElementById('eatComfortRabbit').style.borderWidth = '2px';
			document.getElementById('alert49').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(eatComfortWolf))){
			document.getElementById('eatComfortWolf').style.borderColor = '#a94442';
			document.getElementById('eatComfortWolf').style.borderWidth = '2px';
			document.getElementById('alert50').className = 'alert alert-danger show';
			document.getElementById('error50').innerHTML = 'Hasta (ciclos) después de comer - Lobos - Formato incorrecto';
		}else{
			document.getElementById('eatComfortWolf').style.borderColor = '#3c763d';
			document.getElementById('eatComfortWolf').style.borderWidth = '2px';
			document.getElementById('alert50').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(sleepComfortRabbit))){
			document.getElementById('sleepComfortRabbit').style.borderColor = '#a94442';
			document.getElementById('sleepComfortRabbit').style.borderWidth = '2px';
			document.getElementById('alert51').className = 'alert alert-danger show';
			document.getElementById('error51').innerHTML = 'Hasta (ciclos) después de dormir - Conejos - Formato incorrecto';
		}else{
			document.getElementById('sleepComfortRabbit').style.borderColor = '#3c763d';
			document.getElementById('sleepComfortRabbit').style.borderWidth = '2px';
			document.getElementById('alert51').className = 'alert alert-danger hide';
		}

		if(!(/^([0-9])*$/.test(sleepComfortWolf))){
			document.getElementById('sleepComfortWolf').style.borderColor = '#a94442';
			document.getElementById('sleepComfortWolf').style.borderWidth = '2px';
			document.getElementById('alert52').className = 'alert alert-danger show';
			document.getElementById('error52').innerHTML = 'Hasta (ciclos) después de dormir - Lobos - Formato incorrecto';
		}else{
			document.getElementById('sleepComfortWolf').style.borderColor = '#3c763d';
			document.getElementById('sleepComfortWolf').style.borderWidth = '2px';
			document.getElementById('alert52').className = 'alert alert-danger hide';
		}

		return false;
	}else{
		document.getElementById('eatComfortRabbit').style.borderColor = '#3c763d';
		document.getElementById('eatComfortRabbit').style.borderWidth = '2px';
		document.getElementById('alert49').className = 'alert alert-danger hide';
		document.getElementById('eatComfortWolf').style.borderColor = '#3c763d';
		document.getElementById('eatComfortWolf').style.borderWidth = '2px';
		document.getElementById('alert50').className = 'alert alert-danger hide';
		document.getElementById('sleepComfortRabbit').style.borderColor = '#3c763d';
		document.getElementById('sleepComfortRabbit').style.borderWidth = '2px';
		document.getElementById('alert51').className = 'alert alert-danger hide';
		document.getElementById('sleepComfortWolf').style.borderColor = '#3c763d';
		document.getElementById('sleepComfortWolf').style.borderWidth = '2px';
		document.getElementById('alert52').className = 'alert alert-danger hide';

		return true;
	}
}