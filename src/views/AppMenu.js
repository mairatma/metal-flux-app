'use strict';

import templates from './AppMenu.soy';
import AppActions from '../AppActions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class AppMenu extends Component {
	handleHomeClick_() {
		AppActions.selectNavBarItem(0);
	}

	handleItemClick_(event) {
		AppActions.selectNavBarItem(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}
Soy.register(AppMenu, templates);

export default AppMenu;
