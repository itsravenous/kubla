/**
 * @file Scene test rig
 * @author Tom Jenkins tom@itsravenous.com
 */
// Dependencies
var Scene = require('./lib/scene');
var Narrative = require('./lib/narrative');

/**
 * All the scenes!
 * @type {Array}
 */
var scenes = [
	require('./story/scenes/intro.json'),
	require('./story/scenes/drone_launch.json')
].map(function (scene) {
	return new Scene(scene);
});

/**
 * Stuff your scenes in here
 * @type {Narrative}
 */
var narrative = new Narrative(scenes);

/**
 * The scene number to run (default 0)
 * @type {Number}
 */
var sceneNo = process.argv[2] || 0;

// Go!
narrative.runScene(sceneNo);