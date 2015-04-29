/**
 * @file Cast class
 * @author Tom Jenkins tom@itsravenous.com
 */

var Character = require('./character');


/**
 * @class
 * @classdesc A Cast is a collection of characters
 */
function Cast (characters) {
	this.characters = characters.map(function (character) {
		return new Character(character);
	});
}

Cast.prototype = {

	getCharacterByName: function (name) {
		return this.characters.filter(function (character) {
			return character.name == name;
		})[0];
	}

};

var characters = require('../story/characters.json');

// Export singleton
module.exports = new Cast(characters);