'use strict';

import AppActions from '../AppActions';
import AppDispatcher from '../AppDispatcher';
import { FluxStore } from 'metal-flux';
import ThreadsStore from './ThreadsStore';

var timestamp;

class LastSentTimestampStore extends FluxStore {
	get() {
		return timestamp;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case AppActions.SEND_MESSAGE:
				this.dispatcher_.waitFor(ThreadsStore.dispatcherId_);
				timestamp = ThreadsStore.get(payload.threadIndex).timestamp;
				this.emit(FluxStore.EVENT_CHANGE);
				break;
		}
	}
}

export default new LastSentTimestampStore(AppDispatcher);
