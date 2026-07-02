export default class Character {

	constructor(name, strength, resistance, speed, hitbox, image, mov)
	{
		this.mov = mov;
		this.name = name;
		this.damage = 0;
		this.strength = strength;
		this.resistance = resistance;
		this.speed = speed;
		this.hitbox = hitbox;
		this.image = image;
	}

	attack(){
		console.log('${this.name} - attack');
	}
	
	special(){
		console.log('${this.name} - special');
	}
	jump(){
		console.log('${this.name} - jump');
	}
	dash(){
		console.log('${this.name} - dash');
	}
	getHit(){
		console.log('${this.name} - getHit');
	}
}
