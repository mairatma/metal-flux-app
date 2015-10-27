'use strict';

import AppActions from '../AppActions';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppSettings.soy';

class AppSettings extends SoyComponent {
	handleClickSave_() {
		AppActions.editUser(
			this.user.id,
			this.element.querySelector('[name="name"]').value.trim(),
			this.element.querySelector('[name="status"]').value.trim()
		);
	}
}

AppSettings.ELEMENT_CLASSES = 'app-profile';

ComponentRegistry.register('AppSettings', AppSettings);

export default AppSettings;
