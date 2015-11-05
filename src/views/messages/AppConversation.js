'use strict';

import AppActions from '../../AppActions';
import AppConversationBase from './AppConversation.soy';

class AppConversation extends AppConversationBase {
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

AppConversationBase.setImpl(AppConversation);

export default AppConversation;
