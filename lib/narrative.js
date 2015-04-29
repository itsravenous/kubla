/**
 * @file Narrative class
 * @author Tom Jenkins tom@itsravenous.com
 */

/**
 * @class
 * @classdesc Narratives group scenes together 
 */
function Narrative (scenes) {
	this.scenes = scenes;
}

Narrative.prototype = {
	
	/**
	 * Runs a scene
	 * @param {Number} i  scene index
	 */
	runScene: function (i) {
		this.scenes[i].run();
	}

};

module.exports = Narrative;