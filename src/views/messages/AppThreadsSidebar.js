'use strict';

import templates from './AppThreadsSidebar.soy';
import AppActions from '../../AppActions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class AppThreadsSidebar extends Component {
	handleItemClick_(event) {
		AppActions.selectThread(parseInt(event.delegateTarget.getAttribute('data-index'), 10));
	}
}
Soy.register(AppThreadsSidebar, templates);

export default AppThreadsSidebar;
