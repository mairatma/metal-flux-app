'use strict';

import templates from './AppSettings.soy';
import AppActions from '../AppActions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class AppSettings extends Component {
	handleClickSave_() {
		AppActions.editUser(
			this.user.id,
			this.element.querySelector('[name="name"]').value.trim(),
			this.element.querySelector('[name="status"]').value.trim()
		);
	}
}
Soy.register(AppSettings, templates);

export default AppSettings;
