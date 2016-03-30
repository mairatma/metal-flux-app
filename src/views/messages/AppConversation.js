'use strict';

import templates from './AppConversation.soy';
import AppActions from '../../AppActions';
import Component from 'metal-component';
import Soy from 'metal-soy';

class AppConversation extends Component {
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
Soy.register(AppConversation, templates);

AppConversation.STATE = {
	selectedThreadIndex: {
	}
};

export default AppConversation;
