'use strict';

import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppMessages.soy';

class AppMessages extends SoyComponent {
}

AppMessages.ELEMENT_CLASSES = 'app-messages';

ComponentRegistry.register('AppMessages', AppMessages);

export default AppMessages;
