var jsn = {
	"localidade 1": {
		"Continente": "África",
		"País": "Angola",
		"Capital": "Luanda"
	},
	"localidade 2": {
		"Continente": "América do Norte",
		"País": "Estados Unidos",
		"Capital": "Washington DC"
	},
	"localidade 3": {
		"Continente": "América Central",
		"País": "México",
		"Capital": "Cidade do México"
	},
	"localidade 4": {
		"Continente": "América do Sul",
		"País": "Brasil",
		"Capital": "Brasília"
	},
	"localidade 5": {
		"Continente": "Europa",
		"País": "Espanha",
		"Capital": "Madri"
	},
	"localidade 6": {
		"Continente": "Europa",
		"País": "Alemanha",
		"Capital": "Berlim"
	},
	"localidade 7": {
		"Continente": "Oceania",
		"País": "Austrália",
		"Capital": "Camberra"
	},
	"localidade 8": {
		"Continente": "Ásia",
		"País": "Japão",
		"Capital": "Tóquio"
	}
}

//Código para jsntener el país de localidade 8
console.log("El País de localidade 8 es", jsn["localidade 8"].País);

//Código que permite añadir una localidad a tu elección
jsn = {...jsn, "localidade 9": { Continente: "Europa", País: "Francia", Capital: "París" } };
console.log("El dato nuevo de localidade 9, y sus datos son:", jsn["localidade 9"])

//Modifica localidade 4, añadiendo el número de habitantes
jsn["localidade 4"].Habitantes = "212,6 millones";
console.log("El dato añadido a localidad 4 es:", jsn["localidade 4"].Habitantes);

//Cambia la estructura del JSON de forma que sea más directo acceder a las capitales de las localidades, dado que va a ser el dato que más vamos a consultar
jsnCapital = {
	"Angola": "Luanda",
	"Estados Unidos": "Washington DC",
	"México": "Cidade do México",
	"Brasil": "Brasília",
	"Espanha": "Madri",
	"Alemania": "Berlim",
	"Austrália": "Camberra",
	"Japão": "Tóquio"
}

console.log("La capital de Brasil es:", jsnCapital["Brasil"]);

//Diseña y elabora un JSON que contenga y permita acceder de manera más sencilla posible, el precio y las calorías de cada desayuno.
var breakfast = {
	"Precio": {
		"Gofre Belga": "5.95€",
		"Gofres Belgas con fresas": "7.95€",
		"Gofres Belgas con frutas del bosque": "8.95€",
		"Tostada Francesa": "4.50€",
		"Desayuno de la casa": "6.95€"
	},
	"Calorías": {
		"Gofre Belga": "650 cal", 
		"Gofres Belgas con fresas":"900 cal", 
		"Gofres Belgas con frutas del bosque": "900 cal", 
		"Tostada Francesa": "600 cal",
		"Desayuno de la casa": "950 cal"
	}
}

console.log("Precio de los desayunos: ", breakfast["Precio"]);
console.log("Calorías de los desayunos: ", breakfast["Calorías"]);
