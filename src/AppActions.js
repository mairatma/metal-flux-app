'use strict';

import AppDispatcher from './AppDispatcher';

class AppActions {
	static selectNavBarItem(index) {
		AppDispatcher.dispatch({
			type: AppActions.SELECT_NAV_BAR_ITEM,
			index: index
		});
	}
}

AppActions.FETCH_ALL = 'fetch-all';
AppActions.SELECT_NAV_BAR_ITEM = 'select-nav-bar-item';

export default AppActions;
