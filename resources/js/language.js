/**
 * It translates a text to other language
 */
function translate(text, language){
	switch(language){
		case 'es':
			return es[text];
			break;
		case 'ga':
			return ga[text];
			break;
		case 'en':
			return en[text];
			break;
	}
}

/**
 * Spanish dictionary
 */
var es = {
	'World' : 'Mundo',
	'Elements' : 'Elementos',
	'Restrictions' : 'Restricciones',
	'Period' : 'Ciclos',
	'Actions' : 'Acciones',
	'Ranges' : 'Rangos',
	'Behaviour' : 'Comportamiento',
	'Total period - Wrong format' : 'Duración total - Formato incorrecto',
	'Total period - It must be equal or more than 2' : 'Duración total - Tiene que ser igual o mayor que 2',
	'Daylight period - Wrong format' : 'Duración del día - Formato incorrecto',
	'Daylight period - It must be equal or more than 1' : 'Duración del día - Tiene que ser igual o mayor que 1',
	'Night period - Wrong format' : 'Duración de la noche - Formato incorrecto',
	'Night period - It must be equal or more than 1' : 'Duración de la noche - Tiene que ser igual o mayor que 1',
	'Size (height) of the world - Wrong format' : 'Dimensión (largo) del mundo - Formato incorrecto',
	'Size (height) of the world - It must be equal or more than 1' : 'Dimensión (largo) del mundo - Tiene que ser igual o mayor que 1',
	'Size (width) of the world - Wrong format' : 'Dimensión (ancho) del mundo - Formato incorrecto',
	'Size (width) of the world - It must be equal or more than 1' : 'Dimensión (ancho) del mundo - Tiene que ser igual o mayor que 1',
	'Change weather each (cycles) - Wrong format' : 'Cambiar tiempo cada (ciclos) - Formato incorrecto',
	'Change weather each (cycles) - It must be equal or less than total period' : 'Cambiar tiempo cada (ciclos) - Tiene que ser igual o menor que el número de ciclos de ejecución',
	'Amount of carrots - Wrong format' : 'Cantidad de zanahorias - Formato incorrecto',
	'Amount of trees - Wrong format' : 'Cantidad de árboles - Formato incorrecto',
	'Amount of lair - Wrong format' : 'Cantidad de madrigueras - Formato incorrecto',
	'Amount of rabbits - Wrong format' : 'Cantidad de conejos - Formato incorrecto',
	'Amount of wolves - Wrong format' : 'Cantidad de lobos - Formato incorrecto',
	'Begining amount of elements - It must be equal or less than size world' : 'Cantidad inicial de elementos - Tiene que ser menor o igual que la dimensión del mundo',
	'Regeneration of carrots each - Wrong format' : 'Regeneración de zanahorias cada',
	'Regeneration of carrots each - The number of cycles mustn\'t be more than total period' : 'Regenara zanahorias cada - El número de ciclos no puede ser mayor que el número de ciclos de ejecución',
	'Regeneration of carrots each - The number of cycles must be more than 0' : 'Regenara zanahorias cada - El número de ciclos tiene que ser mayor que 0',
	'Regeneration of carrots (amount) - Wrong format' : 'Regenara zanahorias (cantidad) - Formato incorrecto',
	'Cycles without eat (rabbits) - Wrong format' : 'Ciclos sin comer (conejos) - Formato incorrecto',
	'Cycles without eat (wolves) - Wrong format' : 'Ciclos sin comer (lobos) - Formato incorrecto',
	'Cycles without sleep (rabbits) - Wrong format' : 'Ciclos sin dormir (conejos) - Formato incorrecto',
	'Cycles without sleep (wolves) - Wrong format' : 'Ciclos sin dormir (lobos) - Formato incorrecto',
	'Rabbits - Limit each (cycles)' : 'Conejos - Límite cada (ciclos) - Formato incorrecto',
	'Rabbits - Maximum amount - Wrong format' : 'Conejos - Cantidad máxima - Formato incorrecto',
	'Wolves - Limit each (cycles) - Wrong format' : 'Lobos - Límite cada (ciclos) - Formato incorrecto',
	'Wolves - Maximum amount - Wrong format' : 'Lobos - Cantidad máxima - Formato incorrecto',
	'Rabbits - Need (cycles) - Wrong format' : 'Conejos - Necesitan (ciclos) - Formato incorrecto',
	'Rabbits - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Conejos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer',
	'Wolves - Need (cycles) - Wrong format' : 'Lobos - Necesitan (ciclos) - Formato incorrecto',
	'Wolves - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Lobos - Necesitan (ciclos) - No se puede tardar más de la duración del día en comer',
	'Rabbits - Are sated for (cycles) - Wrong format' : 'Conejos - Están saciados durante (ciclos) - Formato incorrecto',
	'Rabbits - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Conejos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer',
	'Wolves - Are sated for (cycles) - Wrong format' : 'Lobos - Están saciados durante (ciclos) - Formato incorrecto',
	'Wolves - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Lobos - Están saciados durante (ciclos) - El número de ciclos tiene que ser menor que el tiempo que pueden pasar sin comer',
	'Rabbits - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Conejos - Necesitan (ciclos) - Duración incorrecta, no puede ser mayor que +25% de la duración de la noche',
	'Wolves - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Lobos - Necesitan (ciclos) - Duración incorrecta, no puede ser mayor que +25% de la duración de la noche',
	'Points per actions - Rabbits - Wrong format' : 'Puntos por acciones - Conejos - Formato incorrecto',
	'Points per actions - Wolves - Wrong format' : 'Puntos por acciones - Lobos - Formato incorrecto',
	'Use per action - Smell - Rabbits - Wrong format' : 'Consumo por acción - Olfatear - Conejos - Formato incorrecto',
	'Use per action - Smell - Wolves - Wrong format' : 'Consumo por acción - Olfatear - Lobos - Formato incorrecto',
	'Use per action - Hear - Rabbits - Wrong format' : 'Consumo por acción - Oir - Conejos - Formato incorrecto',
	'Use per action - Hear - Wolves - Wrong format' : 'Consumo por acción - Oir - Lobos - Formato incorrecto',
	'Use per action - See - Rabbits - Wrong format' : 'Consumo por acción - Ver - Lobos - Formato incorrecto',
	'Use per action - See - Wolves - Wrong format' : 'Consumo por acción - Ver - Lobos - Formato incorrecto',
	'Use per action - Move - Rabbits - Wrong format' : 'Consumo por acción - Mover - Lobos - Formato incorrecto',
	'Use per action - Move - Wolves - Wrong format' : 'Consumo por acción - Mover - Lobos - Formato incorrecto',
	'Use per action - Sleep - Rabbits - Wrong format' : 'Consumo por acción - Dormir - Lobos - Formato incorrecto',
	'Use per action - Sleep - Wolves - Wrong format' : 'Consumo por acción - Dormir - Lobos - Formato incorrecto',
	'Use per action - Breed - Rabbits - Wrong format' : 'Consumo por acción - Reproducirse - Lobos - Formato incorrecto',
	'Use per action - Breed - Wolves - Wrong format' : 'Consumo por acción - Reproducirse - Lobos - Formato incorrecto',
	'Range per action - See - Rabbits - Wrong format' : 'Rango por acción - Ver - Conejos - Formato incorrecto',
	'Range per action - See - Wolves - Wrong format' : 'Rango por acción - Ver - Lobos - Formato incorrecto',
	'Range per action - Smell - Rabbits - Wrong format' : 'Rango por acción - Olfatear - Conejos - Formato incorrecto',
	'Range per action - Smell - Wolves - Wrong format' : 'Rango por acción - Olfatear - Lobos - Formato incorrecto',
	'Range per action - See - Rabbits - Wrong format' : 'Rango por acción - Ver - Conejos - Formato incorrecto',
	'Range per action - See - Wolves - Wrong format' : 'Rango por acción - Ver - Lobos - Formato incorrecto',
	'Until (cycles) after eating - Rabbits - Wrong format' : 'Hasta (ciclos) después de comer - Conejos - Formato incorrecto',
	'Until (cycles) after eating - Wolves - Wrong format' : 'Hasta (ciclos) después de comer - Lobos - Formato incorrecto',
	'Until (cycles) after sleeping - Rabbits - Wrong format' : 'Hasta (ciclos) después de dormir - Conejos - Formato incorrecto',
	'Until (cycles) after sleeping - Wolves - Wrong format' : 'Hasta (ciclos) después de dormir - Lobos - Formato incorrecto',
	'Weather' : 'Tiempo atmosférico',
	'Cycles' : 'Ciclos',
	'Sunny' : 'Soleado',
	'Rainy' : 'Lluvioso',
	'Windy' : 'Con viento',
	'Foggy' : 'Con niebla',
	'Rabbits' : 'Conejos',
	'Wolves' : 'Lobos',
	'Carrots' : 'Zanahorias',
	'Amount' : 'Cantidad',
	'Current cycle' : 'Ciclo actual',
	'Behaviour rabbits' : 'Comportamiento de los conejos - Formato incorrecto',
	'Behaviour wolves' : 'Comportamiento de los lobos - Formato incorrecto'
};

/**
 * Galician dictionary
 */
var ga = {
	'World' : 'Mundo',
	'Elements' : 'Elementos',
	'Restrictions' : 'Restriccións',
	'Period' : 'Ciclos',
	'Actions' : 'Accións',
	'Ranges' : 'Rangos',
	'Behaviour' : 'Comportamento',
	'Total period - Wrong format' : 'Duración total - Formato incorrecto',
	'Total period - It must be equal or more than 2' : 'Duración total - Ten que ser igual ou maior que 2',
	'Daylight period - Wrong format' : 'Duración do día - Formato incorrecto',
	'Daylight period - It must be equal or more than 1' : 'Duración do día - Ten que ser igual ou maior que 1',
	'Night period - Wrong format' : 'Duración da noite - Formato incorrecto',
	'Night period - It must be equal or more than 1' : 'Duración da noite - Ten que ser igual ou maior que 1',
	'Size (height) of the world - Wrong format' : 'Dimensión (largo) do mundo - Formato incorrecto',
	'Size (height) of the world - It must be equal or more than 1' : 'Dimensión (largo) do mundo - Ten que ser igual ou maior que 1',
	'Size (width) of the world - Wrong format' : 'Dimensión (ancho) do mundo - Formato incorrecto',
	'Size (width) of the world - It must be equal or more than 1' : 'Dimensión (ancho) do mundo - Ten que ser igual ou maior que 1',
	'Change weather each (cycles) - Wrong format' : 'Cambiar tempo cada (ciclos) - Formato incorrecto',
	'Change weather each (cycles) - It must be equal or less than total period' : 'Cambiar tempo cada (ciclos) - Ten que ser igual ou menor que o número de ciclos de execución',
	'Amount of carrots - Wrong format' : 'Cantidade de cenorias - Formato incorrecto',
	'Amount of trees - Wrong format' : 'Cantidade de árbores - Formato incorrecto',
	'Amount of lair - Wrong format' : 'Cantidade de madrigueiras - Formato incorrecto',
	'Amount of rabbits - Wrong format' : 'Cantidade de coellos - Formato incorrecto',
	'Amount of wolves - Wrong format' : 'Cantidade de lobos - Formato incorrecto',
	'Begining amount of elements - It must be equal or less than size world' : 'Cantidade inicial de elementos - Ten que ser menor ou igual que a dimensión do mundo',
	'Regeneration of carrots each - Wrong format' : 'Rexeneración de cenorias cada',
	'Regeneration of carrots each - The number of cycles mustn\'t be more than total period' : 'Rexenera cenorias cada - O número de ciclos non pode ser maior que o número de ciclos de execución',
	'Regeneration of carrots each - The number of cycles must be more than 0' : 'Rexenera cenorias cada - O número de ciclos ten que ser maior que 0',
	'Regeneration of carrots (amount) - Wrong format' : 'Rexenera cenorias (cantidade) - Formato incorrecto',
	'Cycles without eat (rabbits) - Wrong format' : 'Ciclos sen comer (coellos) - Formato incorrecto',
	'Cycles without eat (wolves) - Wrong format' : 'Ciclos sen comer (lobos) - Formato incorrecto',
	'Cycles without sleep (rabbits) - Wrong format' : 'Ciclos sen dormir (coellos) - Formato incorrecto',
	'Cycles without sleep (wolves) - Wrong format' : 'Ciclos sen dormir (lobos) - Formato incorrecto',
	'Rabbits - Limit each (cycles) - Wrong format' : 'Coellos - Límite cada (ciclos) - Formato incorrecto',
	'Rabbits - Maximum amount - Wrong format' : 'Coellos - Cantidade máxima - Formato incorrecto',
	'Wolves - Limit each (cycles) - Wrong format' : 'Lobos - Límite cada (ciclos) - Formato incorrecto',
	'Wolves - Maximum amount - Wrong format' : 'Lobos - Cantidade máxima - Formato incorrecto',
	'Rabbits - Need (cycles) - Wrong format' : 'Coellos - Necesitan (ciclos) - Formato incorrecto',
	'Rabbits - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Coellos - Necesitan (ciclos) - Non se pode tardar más da duración do día en comer',
	'Wolves - Need (cycles) - Wrong format' : 'Lobos - Necesitan (ciclos) - Formato incorrecto',
	'Wolves - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Lobos - Necesitan (ciclos) - Non se pode tardar más da duración do día en comer',
	'Rabbits - Are sated for (cycles) - Wrong format' : 'Coellos - Están saciados durante (ciclos) - Formato incorrecto',
	'Rabbits - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Coellos - Están saciados durante (ciclos) - O número de ciclos ten que ser menor que o tempo que poden pasar sen comer',
	'Wolves - Are sated for (cycles) - Wrong format' : 'Lobos - Están saciados durante (ciclos) - Formato incorrecto',
	'Wolves - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Lobos - Están saciados durante (ciclos) - O número de ciclos ten que ser menor que o tempo que poden pasar sen comer',
	'Rabbits - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Coellos - Necesitan (ciclos) - Duración incorrecta, non pode ser maior que o +25% da duración da noite',
	'Wolves - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Lobos - Necesitan (ciclos) - Duración incorrecta, no pode ser maior que o +25% da duración da noite',
	'Points per actions - Rabbits - Wrong format' : 'Puntos por accións - Coellos - Formato incorrecto',
	'Points per actions - Wolves - Wrong format' : 'Puntos por accións - Lobos - Formato incorrecto',
	'Use per action - Smell - Rabbits - Wrong format' : 'Consumo por acción - Olfatear - Coellos - Formato incorrecto',
	'Use per action - Smell - Wolves - Wrong format' : 'Consumo por acción - Olfatear - Lobos - Formato incorrecto',
	'Use per action - Hear - Rabbits - Wrong format' : 'Consumo por acción - Oir - Coellos - Formato incorrecto',
	'Use per action - Hear - Wolves - Wrong format' : 'Consumo por acción - Oir - Lobos - Formato incorrecto',
	'Use per action - See - Rabbits - Wrong format' : 'Consumo por acción - Ver - Lobos - Formato incorrecto',
	'Use per action - See - Wolves - Wrong format' : 'Consumo por acción - Ver - Lobos - Formato incorrecto',
	'Use per action - Move - Rabbits - Wrong format' : 'Consumo por acción - Mover - Lobos - Formato incorrecto',
	'Use per action - Move - Wolves - Wrong format' : 'Consumo por acción - Mover - Lobos - Formato incorrecto',
	'Use per action - Sleep - Rabbits - Wrong format' : 'Consumo por acción - Dormir - Lobos - Formato incorrecto',
	'Use per action - Sleep - Wolves - Wrong format' : 'Consumo por acción - Dormir - Lobos - Formato incorrecto',
	'Use per action - Breed - Rabbits - Wrong format' : 'Consumo por acción - Reproducirse - Lobos - Formato incorrecto',
	'Use per action - Breed - Wolves - Wrong format' : 'Consumo por acción - Reproducirse - Lobos - Formato incorrecto',
	'Range per action - See - Rabbits - Wrong format' : 'Rango por acción - Ver - Coellos - Formato incorrecto',
	'Range per action - See - Wolves - Wrong format' : 'Rango por acción - Ver - Lobos - Formato incorrecto',
	'Range per action - Smell - Rabbits - Wrong format' : 'Rango por acción - Olfatear - Coellos - Formato incorrecto',
	'Range per action - Smell - Wolves - Wrong format' : 'Rango por acción - Olfatear - Lobos - Formato incorrecto',
	'Range per action - See - Rabbits - Wrong format' : 'Rango por acción - Ver - Coellos - Formato incorrecto',
	'Range per action - See - Wolves - Wrong format' : 'Rango por acción - Ver - Lobos - Formato incorrecto',
	'Until (cycles) after eating - Rabbits - Wrong format' : 'Ata (ciclos) despois de comer - Coellos - Formato incorrecto',
	'Until (cycles) after eating - Wolves - Wrong format' : 'Ata (ciclos) despois de comer - Lobos - Formato incorrecto',
	'Until (cycles) after sleeping - Rabbits - Wrong format' : 'Ata (ciclos) despois de dormir - Coellos - Formato incorrecto',
	'Until (cycles) after sleeping - Wolves - Wrong format' : 'Ata (ciclos) despois de dormir - Lobos - Formato incorrecto',
	'Weather' : 'Tempo atmosférico',
	'Cycles' : 'Ciclos',
	'Sunny' : 'Soleado',
	'Rainy' : 'Chuvioso',
	'Windy' : 'Con vento',
	'Foggy' : 'Con néboa',
	'Rabbits' : 'Coellos',
	'Wolves' : 'Lobos',
	'Carrots' : 'Cenorias',
	'Amount' : 'Cantidade',
	'Current cycle' : 'Ciclo actual',
	'Behaviour rabbits' : 'Comportamento dos coellos - Formato incorrecto',
	'Behaviour wolves' : 'Comportamento dos lobos - Formato incorrecto'
};

/**
 * English dictionary
 */
var en = {
	'World' : 'World',
	'Elements' : 'Elements',
	'Restrictions' : 'Restrictions',
	'Period' : 'Period',
	'Actions' : 'Actions',
	'Ranges' : 'Ranges',
	'Behaviour' : 'Behaviour',
	'Total period - Wrong format' : 'Total period - Wrong format',
	'Total period - It must be equal or more than 2' : 'Total period - It must be equal or more than 2',
	'Daylight period - Wrong format' : 'Daylight period - Wrong format',
	'Daylight period - It must be equal or more than 1' : 'Daylight period - It must be equal or more than 1',
	'Night period - Wrong format' : 'Night period - Wrong format',
	'Night period - It must be equal or more than 1' : 'Night period - It must be equal or more than 1',
	'Size (height) of the world - Wrong format' : 'Size (height) of the world - Wrong format',
	'Size (height) of the world - It must be equal or more than 1' : 'Size (height) of the world - It must be equal or more than 1',
	'Size (width) of the world - Wrong format' : 'Size (width) of the world - Wrong format',
	'Size (width) of the world - It must be equal or more than 1' : 'Size (width) of the world - It must be equal or more than 1',
	'Change weather each (cycles) - Wrong format' : 'Change weather each (cycles) - Wrong format',
	'Change weather each (cycles) - It must be equal or less than total period' : 'Change weather each (cycles) - It must be equal or less than total period',
	'Amount of carrots - Wrong format' : 'Amount of carrots - Wrong format',
	'Amount of trees - Wrong format' : 'Amount of trees - Wrong format',
	'Amount of lair - Wrong format' : 'Amount of lair - Wrong format',
	'Amount of rabbits - Wrong format' : 'Amount of conejos - Wrong format',
	'Amount of wolves - Wrong format' : 'Amount of lobos - Wrong format',
	'Begining amount of elements - It must be equal or less than size world' : 'Begining amount of elements - It must be equal or less than size world',
	'Regeneration of carrots each - Wrong format' : 'Regeneration of carrots each - Wrong format',
	'Regeneration of carrots each - The number of cycles mustn\'t be more than total period' : 'Regeneration of carrots each - The number of cycles mustn\'t be more than total period',
	'Regeneration of carrots each - The number of cycles must be more than 0' : 'Regeneration of carrots each - The number of cycles must be more than 0',
	'Regeneration of carrots (amount) - Wrong format' : 'Regeneration of carrots (amount) - Wrong format',
	'Cycles without eat (rabbits) - Wrong format' : 'Cycles without eat (rabbits) - Wrong format',
	'Cycles without eat (wolves) - Wrong format' : 'Cycles without eat (wolves) - Wrong format',
	'Cycles without sleep (rabbits) - Wrong format' : 'Cycles without sleep (rabbits) - Wrong format',
	'Cycles without sleep (wolves) - Wrong format' : 'Cycles without sleep (wolves) - Wrong format',
	'Rabbits - Limit each (cycles) - Wrong format' : 'Rabbits - Limit each (cycles) - Wrong format',
	'Rabbits - Maximum amount - Wrong format' : 'Rabbits - Maximum amount - Wrong format',
	'Wolves - Limit each (cycles) - Wrong format' : 'Wolves - Limit each (cycles) - Wrong format',
	'Wolves - Maximum amount - Wrong format' : 'Wolves - Maximum amount - Wrong format',
	'Rabbits - Need (cycles) - Wrong format' : 'Rabbits - Need (cycles) - Wrong format',
	'Rabbits - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Rabbits - Need (cycles) - Can\'t need more than daylight duration to eat',
	'Wolves - Need (cycles) - Wrong format' : 'Wolves - Need (cycles) - Wrong format',
	'Wolves - Need (cycles) - Can\'t need more than daylight duration to eat' : 'Wolves - Need (cycles) - Can\'t need more than daylight duration to eat',
	'Rabbits - Are sated for (cycles) - Wrong format' : 'Rabbits - Are sated for (cycles) - Wrong format',
	'Rabbits - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Rabbits - Are sated for (cycles) - The number of cycles must be less than the time without eat',
	'Wolves - Are sated for (cycles) - Wrong format' : 'Wolves - Are sated for (cycles) - Wrong format',
	'Wolves - Are sated for (cycles) - The number of cycles must be less than the time without eat' : 'Wolves - Are sated for (cycles) - The number of cycles must be less than the time without eat',
	'Rabbits - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Rabbits - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period',
	'Wolves - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period' : 'Wolves - Need (cycles) - Wrong period, it mustn\'t be more than 25% of night period',
	'Points per actions - Rabbits - Wrong format' : 'Points per actions - Rabbits - Wrong format',
	'Points per actions - Wolves - Wrong format' : 'Points per actions - Wolves - Wrong format',
	'Use per action - Smell - Rabbits - Wrong format' : 'Use per action - Smell - Rabbits - Wrong format',
	'Use per action - Smell - Wolves - Wrong format' : 'Use per action - Smell - Wolves - Wrong format',
	'Use per action - Hear - Rabbits - Wrong format' : 'Use per action - Hear - Rabbits - Wrong format',
	'Use per action - Hear - Wolves - Wrong format' : 'Use per action - Hear - Wolves - Wrong format',
	'Use per action - See - Rabbits - Wrong format' : 'Use per action - See - Rabbits - Wrong format',
	'Use per action - See - Wolves - Wrong format' : 'Use per action - See - Wolves - Wrong format',
	'Use per action - Move - Rabbits - Wrong format' : 'Use per action - Move - Rabbits - Wrong format',
	'Use per action - Move - Wolves - Wrong format' : 'Use per action - Move - Wolves - Wrong format',
	'Use per action - Sleep - Rabbits - Wrong format' : 'Use per action - Sleep - Rabbits - Wrong format',
	'Use per action - Sleep - Wolves - Wrong format' : 'Use per action - Sleep - Wolves - Wrong format',
	'Use per action - Breed - Rabbits - Wrong format' : 'se per action - Breed - Rabbits - Wrong format',
	'Use per action - Breed - Wolves - Wrong format' : 'Use per action - Breed - Wolves - Wrong format',
	'Range per action - See - Rabbits - Wrong format' : 'Range per action - See - Rabbits - Wrong format',
	'Range per action - See - Wolves - Wrong format' : 'Range per action - See - Wolves - Wrong format',
	'Range per action - Smell - Rabbits - Wrong format' : 'Range per action - Smell - Rabbits - Wrong format',
	'Range per action - Smell - Wolves - Wrong format' : 'Range per action - Smell - Wolves - Wrong format',
	'Range per action - See - Rabbits - Wrong format' : 'Range per action - See - Rabbits - Wrong format',
	'Range per action - See - Wolves - Wrong format' : 'Range per action - See - Wolves - Wrong format',
	'Until (cycles) after eating - Rabbits - Wrong format' : 'Until (cycles) after eating - Rabbits - Wrong format',
	'Until (cycles) after eating - Wolves - Wrong format' : 'Until (cycles) after eating - Wolves - Wrong format',
	'Until (cycles) after sleeping - Rabbits - Wrong format' : 'Until (cycles) after sleeping - Rabbits - Wrong format',
	'Until (cycles) after sleeping - Wolves - Wrong format' : 'Until (cycles) after sleeping - Wolves - Wrong format',
	'Weather' : 'Tiempo atmosférico',
	'Cycles' : 'Cycles',
	'Sunny' : 'Sunny',
	'Rainy' : 'Rainy',
	'Windy' : 'Windy',
	'Foggy' : 'Foggy',
	'Rabbits' : 'Rabbits',
	'Wolves' : 'Wolves',
	'Carrots' : 'Carrots',
	'Amount' : 'Amount',
	'Current cycle' : 'Current cycle',
	'Behaviour rabbits' : 'Behaviour rabbits',
	'Behaviour wolves' : 'Behaviour wolves'
};