'use strict';

import AppActions from './AppActions';
import AppDispatcher from './AppDispatcher';
import AppPage from './views/AppPage';

class App {
	static run(initialData) {
		AppDispatcher.dispatch({
			type: AppActions.FETCH_ALL,
			data: initialData
		});

		new AppPage();
	}
}

export default App;
