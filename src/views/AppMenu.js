'use strict';

import AppActions from '../AppActions';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppMenu.soy';

class AppMenu extends SoyComponent {
	handleHomeClick_() {
		AppActions.selectNavBarItem(0);
	}

	handleItemClick_(event) {
		AppActions.selectNavBarItem(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}

AppMenu.ELEMENT_CLASSES = 'app-menu navbar navbar-default';

ComponentRegistry.register('AppMenu', AppMenu);

export default AppMenu;
