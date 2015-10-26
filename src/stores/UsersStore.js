'use strict';

import AppActions from '../AppActions';
import AppDispatcher from '../AppDispatcher';
import FluxStore from 'bower:metal-flux/src/FluxStore';

var users = {};
var currentUserId;

class UsersStore extends FluxStore {
	getAll() {
		return users;
	}

	getCurrentUser() {
		return this.getUser(currentUserId);
	}

	getUser(id) {
		return users[id];
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case AppActions.FETCH_ALL:
				users = payload.data.users;
				currentUserId = payload.data.currentUserId;
				this.emit(FluxStore.EVENT_CHANGE);
				break;
		}
	}
}

export default new UsersStore(AppDispatcher);
