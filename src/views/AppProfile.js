'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppProfile.soy';

class AppProfile extends SoyComponent {
}

AppProfile.ELEMENT_CLASSES = 'app-profile';

ComponentRegistry.register('AppProfile', AppProfile);

export default AppProfile;
