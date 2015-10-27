/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from AppConversation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppConversation.
 */

if (typeof Templates.AppConversation == 'undefined') { Templates.AppConversation = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppConversation.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-conversation">' + Templates.AppConversation.messages(opt_data, null, opt_ijData) + Templates.AppConversation.input(opt_data, null, opt_ijData) + '</div>');
};
if (goog.DEBUG) {
  Templates.AppConversation.content.soyTemplateName = 'Templates.AppConversation.content';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppConversation.messages = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-messages" class="col-xs-12"><h3>' + soy.$$escapeHtml(opt_data.allUsers[opt_data.thread.userId].name) + '</h3>';
  var messageList86 = opt_data.thread.messages;
  var messageListLen86 = messageList86.length;
  for (var messageIndex86 = 0; messageIndex86 < messageListLen86; messageIndex86++) {
    var messageData86 = messageList86[messageIndex86];
    var user__soy87 = opt_data.allUsers[messageData86.from];
    output += '<div class="app-message"><span class="avatar-photo avatar-medium"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(user__soy87.photo)) + '"></span><strong> ' + soy.$$escapeHtml(user__soy87.name) + ': </strong><span>' + soy.$$escapeHtml(messageData86.content) + '</span></div>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.AppConversation.messages.soyTemplateName = 'Templates.AppConversation.messages';
}


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppConversation.input = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '-input"><div class="col-xs-9"><input type="text" class="form-control" data-onkeyup="handleInputKeyUp_"></div><div class="col-xs-3"><button type="button" class="btn btn-primary" data-onclick="handleSendClick_">Send</button></div></div>');
};
if (goog.DEBUG) {
  Templates.AppConversation.input.soyTemplateName = 'Templates.AppConversation.input';
}

Templates.AppConversation.content.params = ["id"];
Templates.AppConversation.messages.params = ["allUsers","id","thread"];
Templates.AppConversation.input.params = ["id"];
export default Templates.AppConversation;
/* jshint ignore:end */
