'use strict';

import AppActions from '../../AppActions';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppThreadsSidebar.soy';

class AppThreadsSidebar extends SoyComponent {
	handleItemClick_(event) {
		AppActions.selectThread(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}

AppThreadsSidebar.ELEMENT_CLASSES = 'app-threads-sidebar list-group';

ComponentRegistry.register('AppThreadsSidebar', AppThreadsSidebar);

export default AppThreadsSidebar;
