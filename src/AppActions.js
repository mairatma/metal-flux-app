'use strict';

import AppDispatcher from './AppDispatcher';

class AppActions {
	static editUser(id, name, status) {
		AppDispatcher.dispatch({
			type: AppActions.EDIT_USER,
			id: id,
			name: name,
			status: status
		});
	}

	static selectNavBarItem(index) {
		AppDispatcher.dispatch({
			type: AppActions.SELECT_NAV_BAR_ITEM,
			index: index
		});
	}

	static selectThread(index) {
		AppDispatcher.dispatch({
			type: AppActions.SELECT_THREAD,
			index: index
		});
	}

	static sendMessage(threadIndex, content) {
		AppDispatcher.dispatch({
			type: AppActions.SEND_MESSAGE,
			threadIndex: threadIndex,
			content: content
		});
	}
}

AppActions.EDIT_USER = 'edit-user';
AppActions.FETCH_ALL = 'fetch-all';
AppActions.SELECT_NAV_BAR_ITEM = 'select-nav-bar-item';
AppActions.SELECT_THREAD = 'select-thread';
AppActions.SEND_MESSAGE = 'send-message';

export default AppActions;
