'use strict';

import templates from './AppPage.soy';
import Component from 'metal-component';
import LastSentTimestampStore from '../stores/LastSentTimestampStore';
import NavBarStore from '../stores/NavBarStore';
import Soy from 'metal-soy';
import ThreadsStore from '../stores/ThreadsStore';
import UsersStore from '../stores/UsersStore';

class AppPage extends Component {
	attached() {
		NavBarStore.on('change', () => {
			this.setState({
				navBarItems: NavBarStore.getAll(),
				navBarSelectedIndex: NavBarStore.getSelectedIndex()
			});
		});
		UsersStore.on('change', () => {
			this.setState({
				allUsers: UsersStore.getAll(),
				user: UsersStore.getCurrentUser()
			});
		});
		ThreadsStore.on('change', () => {
			this.setState({
				threads: ThreadsStore.getAll(),
				selectedThreadIndex: ThreadsStore.getSelectedThreadIndex()
			});
		});
		LastSentTimestampStore.on('change', () => {
			this.lastTimestamp = LastSentTimestampStore.get();
		});
	}
}
Soy.register(AppPage, templates);

AppPage.STATE = {
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

export default AppPage;
