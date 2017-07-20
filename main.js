var Vikingo = function(nombre, salud, potenciaAtaque, velocidad){
	this.nombre = nombre;
	this.salud = salud;
	this.potenciaAtaque = potenciaAtaque;
	this.velocidad = velocidad;
	this.armas = [];
}

var vikingo1 = new Vikingo("Ru1", 100, 15, 60);
var vikingo2 = new Vikingo("Ru2", 90, 10, 50);

Vikingo.prototype.ataca = function(vikingo){
	var indiceArma = 0;
	if(this.armas.length>0){
		indiceArma = this.tomarArma();
		vikingo.salud = vikingo.salud - this.armas[indiceArma].potencia;
		this.armas[indiceArma].ataquesRestantes--;

		if(this.armas[indiceArma].ataquesRestantes==0){
			this.abandonarArma(indiceArma);
		}

		console.log("Vikingo "+this.nombre+" ataca!")
		console.log("Vikingo "+vikingo.nombre+" baja salud a "+vikingo.salud);
	}
};

Vikingo.prototype.addArma = function(arma){
	this.armas.push(arma);
};

Vikingo.prototype.tomarArma = function(){
	var potencia = 0;
	var indiceArma = 0;
	for(var i=0; i<this.armas.length; i++){
			if(this.armas[i].potencia>potencia){
				potencia = this.armas[i].potencia;
				indiceArma = i;
			}
	}
	return indiceArma;
};

Vikingo.prototype.abandonarArma = function(indiceArma){
	this.armas.splice(indiceArma, 1);
};

var Batalla = function(contrincante1, contrincante2){
	this.c1 = contrincante1;
	this.c2 = contrincante2;
}

Batalla.prototype.iniciarBatalla = function(){
	var atacaCo1 = true;

	if(this.c2.velocidad>this.c1.velocidad){
		atacaCo1 = false;
	}

	while(this.c1.salud>0 && this.c2.salud>0){
		if(atacaCo1){
			this.c1.ataca(this.c2);
		} else {
			console.log("ataca vikingo2");
			this.c2.ataca(this.c1);
		}

		atacaCo1 = !atacaCo1;
	}

	if(this.c1.salud==0){
		console.log("Vikingo " + this.c1.nombre + " ha muerto!");
	}

	if(this.c2.salud==0){
		console.log("Vikingo " + this.c2.nombre + " ha muerto!");
	}
}

var Arma = function(tipo, potencia, ataquesRestantes){
	this.tipo = tipo;
	this.potencia = potencia;
	this.ataquesRestantes = ataquesRestantes;
}
//tipo, potencia, ataquesRestantes
var armav11 = new Arma("espada", 30, 3);
	vikingo1.addArma(armav11);
var armav12 = new Arma("arco", 20, 10);
	vikingo1.addArma(armav12);

