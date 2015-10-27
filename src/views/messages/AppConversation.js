'use strict';

import AppActions from '../../AppActions';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyComponent from 'bower:metal/src/soy/SoyComponent';
import './AppConversation.soy';

class AppConversation extends SoyComponent {
	handleInputKeyUp_(event) {
		if (event.keyCode === 13) {
			this.sendMessage_();
		}
	}

	handleSendClick_() {
		this.sendMessage_();
	}

	sendMessage_() {
		var input = this.element.querySelector('input[type="text"]');
		var content = input.value.trim();
		AppActions.sendMessage(this.selectedThreadIndex, content);
		input.value = '';
		input.focus();
	}
}

AppConversation.ATTRS = {
	selectedThreadIndex: {
	}
};

AppConversation.ELEMENT_CLASSES = 'app-conversation';

ComponentRegistry.register('AppConversation', AppConversation);

export default AppConversation;
