'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './App.soy';

class App extends SoyComponent {
	constructor(opt_config) {
		super(opt_config);
	}
}

App.ELEMENT_CLASSES = 'app';

ComponentRegistry.register('App', App);

export default App;
