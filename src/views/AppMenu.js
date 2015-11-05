'use strict';

import AppActions from '../AppActions';
import AppMenuBase from './AppMenu.soy';

class AppMenu extends AppMenuBase {
	handleHomeClick_() {
		AppActions.selectNavBarItem(0);
	}

	handleItemClick_(event) {
		AppActions.selectNavBarItem(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}
AppMenuBase.setImpl(AppMenu);

export default AppMenu;
