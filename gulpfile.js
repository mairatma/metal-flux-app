'use strict';

var metal = require('gulp-metal');

metal.registerTasks({
	bundleCssFileName: 'app.css',
	bundleFileName: 'app.js',
	globalName: 'metal',
	mainBuildJsTasks: ['build:globals'],
	moduleName: 'metal-flux-app'
});
