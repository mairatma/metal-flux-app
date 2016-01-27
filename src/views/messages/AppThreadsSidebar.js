'use strict';

import AppActions from '../../AppActions';
import AppThreadsSidebarBase from './AppThreadsSidebar.soy';

class AppThreadsSidebar extends AppThreadsSidebarBase {
	handleItemClick_(event) {
		AppActions.selectThread(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}

export default AppThreadsSidebar;
