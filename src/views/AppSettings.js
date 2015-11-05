'use strict';

import AppActions from '../AppActions';
import AppSettingsBase from './AppSettings.soy';

class AppSettings extends AppSettingsBase {
	handleClickSave_() {
		AppActions.editUser(
			this.user.id,
			this.element.querySelector('[name="name"]').value.trim(),
			this.element.querySelector('[name="status"]').value.trim()
		);
	}
}
AppSettingsBase.setImpl(AppSettings);

export default AppSettings;
