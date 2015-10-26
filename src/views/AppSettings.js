'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppSettings.soy';

class AppSettings extends SoyComponent {
}

AppSettings.ELEMENT_CLASSES = 'app-profile';

ComponentRegistry.register('AppSettings', AppSettings);

export default AppSettings;
