'use strict';

import AppActions from '../AppActions';
import AppDispatcher from '../AppDispatcher';
import FluxStore from 'metal-flux/src/FluxStore';

var items = [];
var selectedIndex;

class NavBarStore extends FluxStore {
	getAll() {
		return items;
	}

	getSelectedIndex() {
		return selectedIndex;
	}

	handleDispatch_(payload) {
		switch (payload.type) {
			case AppActions.FETCH_ALL:
				items = payload.data.navBarItems;
				selectedIndex = payload.data.navBarSelectedIndex;
				this.emit(FluxStore.EVENT_CHANGE);
				break;
			case AppActions.SELECT_NAV_BAR_ITEM:
				if (selectedIndex !== payload.index) {
					selectedIndex = payload.index;
					this.emit(FluxStore.EVENT_CHANGE);
				}
				break;
		}
	}
}

export default new NavBarStore(AppDispatcher);
