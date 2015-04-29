/**
 * @file Character class
 * @author Tom Jenkins tom@itsravenous.com
 */

var colors = require('colors');

function Character (character) {
	this.name = character.name;
	this.color = character.color;
}

Character.prototype = {
	
	say: function (line) {
		console.log(colors[this.color](line));
	}

};

module.exports = Character;