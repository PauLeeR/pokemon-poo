function Pokemon (nombre, color, poderDeAtaque){
	this.nombre = nombre
	this.color = color
	this.nivelDeAmistad = 0

	this.vida = 100
	this.poderDeAtaque = poderDeAtaque

	this.mostrarPokemon = function(){
		document.getElementById("guerraPokemon").innerHTML += ("Hola, soy " + this.nombre + " , soy de color " + this.color + " y mi poder de ataque es " + this.poderDeAtaque + "<br>" + "<br>")
	}

	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor
	}

	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque
		//document.getElementById("resultadopelea").innerHTML += (this.nombre + " atacó a " + pokemon.nombre + " y " + pokemon.nombre + " tiene una vida restante de " + pokemon.vida );
	}

}

function pelear(){
	var pokemonUno = document.getElementById("pokemon1").value;//creamos variable que va a llamar al select 1 o pokemones del boton 1 del html
	var pokemonDos = document.getElementById("pokemon2").value;//creamos variable que va a llamar al select 2 o pokemones del boton 2 del html
	var pokemonPega = new Pokemon(pokemonUno, "color", 100);//instancia del objeto Pokemon que será el primer pokemon que elija el usuario para pelear/atacar
	var pokemonRecibe = new Pokemon(pokemonDos, "color", 50);//segundo pokemon que peleará, éste recibe el ataque

	pokemonPega.atacar(pokemonRecibe);//llamamos a la función atacar, donde pelearán ambos pokemones seleccionados

	if (pokemonPega.nombre === pokemonRecibe.nombre){
		alert(pokemonPega.nombre + " no puede pelear consigo mismo!!! ");
	} else {
		pokemonPega.atacar(pokemonRecibe);
	} 	
	//alert("hola");

	document.getElementById("resultadopelea").innerHTML += (pokemonPega.nombre + " atacó a " + pokemonRecibe.nombre + " y " + pokemonRecibe.nombre + " tiene una vida restante de " + pokemonRecibe.vida);

}


const Pikachu = new Pokemon("Pikachu", "amarillo", 100)
Pikachu.mostrarPokemon();

const Charmander = new Pokemon("Charmander", "rojo", 20)
Charmander.mostrarPokemon();

const Snorlax = new Pokemon("Snorlax", "azul", 180)
Snorlax.mostrarPokemon();

const Bulbasaur = new Pokemon("Bulbasaur", "verde", 49)
Bulbasaur.mostrarPokemon();

Pikachu.atacar(Charmander)




/*function pelear(){

	document.getElementById("botoncito").addEventListener("click", function(){
	}
)}*/


console.log(Charmander.vida)
