'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import LastSentTimestampStore from '../stores/LastSentTimestampStore';
import NavBarStore from '../stores/NavBarStore';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import ThreadsStore from '../stores/ThreadsStore';
import UsersStore from '../stores/UsersStore';
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
				allUsers: UsersStore.getAll(),
				user: UsersStore.getCurrentUser()
			});
		});
		ThreadsStore.on('change', () => {
			this.setAttrs({
				threads: ThreadsStore.getAll(),
				selectedThreadIndex: ThreadsStore.getSelectedThreadIndex()
			});
		});
		LastSentTimestampStore.on('change', () => {
			this.lastTimestamp = LastSentTimestampStore.get();
		});
	}
}

AppPage.ATTRS = {
	allUsers: {
		valueFn: UsersStore.getAll
	},

	lastTimestamp: {
		valueFn: LastSentTimestampStore.get
	},

	navBarItems: {
		valueFn: NavBarStore.getAll
	},

	navBarSelectedIndex: {
		valueFn: NavBarStore.getSelectedIndex
	},

	selectedThreadIndex: {
		valueFn: ThreadsStore.getSelectedThreadIndex
	},

	threads: {
		valueFn: ThreadsStore.getAll
	},

	user: {
		valueFn: UsersStore.getCurrentUser.bind(UsersStore)
	}
};

AppPage.ELEMENT_CLASSES = 'app';

ComponentRegistry.register('AppPage', AppPage);

export default AppPage;
