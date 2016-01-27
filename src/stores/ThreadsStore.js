'use strict';

import AppActions from '../AppActions';
import AppDispatcher from '../AppDispatcher';
import FluxStore from 'metal-flux/src/FluxStore';
import UsersStore from './UsersStore';

var threads = [];
var selectedThreadIndex = 0;

class ThreadsStore extends FluxStore {
	getAll() {
		return threads;
	}

	get(threadId) {
		return threads[threadId];
	}

	getSelectedThreadIndex() {
		return selectedThreadIndex;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case AppActions.FETCH_ALL:
				threads = payload.data.threads;
				this.emit(FluxStore.EVENT_CHANGE);
				break;
			case AppActions.SELECT_THREAD:
				if (selectedThreadIndex !== payload.index) {
					selectedThreadIndex = payload.index;
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
			case AppActions.SEND_MESSAGE:
				var thread = this.get(payload.threadIndex);
				thread.messages.push({
					from: UsersStore.getCurrentUser().id,
					content: payload.content
				})
				var time = new Date();
				thread.timestamp = time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
				this.emit(FluxStore.EVENT_CHANGE);
				break;
		}
	}
}

export default new ThreadsStore(AppDispatcher);
