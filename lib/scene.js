/**
 * @file Scene class
 * @author Tom Jenkins tom@itsravenous.com
 */

var cast = require('./cast');

/**
 * @class
 * @classdesc Scenes represent streams of dialogue
 */
function Scene (dialogue) {
	this.dialogue = dialogue;
}

Scene.prototype = {
	
	/**
	 * Runs the scene
	 */
	run: function () {
		var runLine = function (i) {
			// console.log(this.dialogue);
			if (this.dialogue[i]) {
				var line = this.dialogue[i];
				if (typeof line == 'number') {
					// Pause
					setTimeout(function () {
						runLine(i + 1);
					}, (line + 1) * 1000);
				} else {
					// Dialogue
					var name = line.split(': ')[0];
					var character = cast.getCharacterByName(name);
					var text = line.split(': ')[1];
					character.say(text);
					setTimeout(function () {
						runLine(i + 1);
					}, 1000);
				}
			}
		}.bind(this);
		runLine(0);
	}

};

module.exports = Scene;