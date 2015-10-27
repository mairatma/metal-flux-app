'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import NavBarStore from '../stores/NavBarStore';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import UsersStore from '../stores/UsersStore';
import './AppMenu';
import './AppPage.soy';

class AppPage extends SoyComponent {
	attached() {
		NavBarStore.on('change', () => {
			this.setAttrs({
				navBarItems: NavBarStore.getAll(),
				navBarSelectedIndex: NavBarStore.getSelectedIndex()
			});
		});
		UsersStore.on('change', () => {
			this.setAttrs({
				user: UsersStore.getCurrentUser()
			});
		});
	}
}

AppPage.ATTRS = {
	navBarItems: {
		valueFn: NavBarStore.getAll
	},

	navBarSelectedIndex: {
		valueFn: NavBarStore.getSelectedIndex
	},

	user: {
		valueFn: UsersStore.getCurrentUser.bind(UsersStore)
	}
};

AppPage.ELEMENT_CLASSES = 'app';

ComponentRegistry.register('AppPage', AppPage);

export default AppPage;
