/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppConversation.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppConversation.
 * @public
 */

goog.module('AppConversation.incrementaldom');

var soy = goog.require('soy');
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  ie_open('div', null, null,
      'class', 'app-conversation');
    $messages(opt_data, null, opt_ijData);
    $input(opt_data, null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppConversation.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $messages(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'col-xs-12');
    ie_open('h3');
      itext((goog.asserts.assert((opt_data.allUsers[opt_data.thread.userId].name) != null), opt_data.allUsers[opt_data.thread.userId].name));
    ie_close('h3');
    var messageList88 = opt_data.thread.messages;
    var messageListLen88 = messageList88.length;
    for (var messageIndex88 = 0; messageIndex88 < messageListLen88; messageIndex88++) {
      var messageData88 = messageList88[messageIndex88];
      var user__soy80 = opt_data.allUsers[messageData88.from];
      ie_open('div', null, null,
          'class', 'app-message');
        ie_open('span', null, null,
            'class', 'avatar-photo avatar-medium');
          ie_open('img', null, null,
              'src', user__soy80.photo);
          ie_close('img');
        ie_close('span');
        ie_open('strong');
          itext(' ');
          itext((goog.asserts.assert((user__soy80.name) != null), user__soy80.name));
          itext(': ');
        ie_close('strong');
        ie_open('span');
          itext((goog.asserts.assert((messageData88.content) != null), messageData88.content));
        ie_close('span');
      ie_close('div');
    }
  ie_close('div');
}
exports.messages = $messages;
if (goog.DEBUG) {
  $messages.soyTemplateName = 'AppConversation.messages';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $input(opt_data, opt_ignored, opt_ijData) {
  ie_open('div');
    ie_open('div', null, null,
        'class', 'col-xs-9');
      ie_open('input', null, null,
          'type', 'text',
          'class', 'form-control',
          'data-onkeyup', 'handleInputKeyUp_');
      ie_close('input');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-xs-3');
      ie_open('button', null, null,
          'type', 'button',
          'class', 'btn btn-primary',
          'data-onclick', 'handleSendClick_');
        itext('Send');
      ie_close('button');
    ie_close('div');
  ie_close('div');
}
exports.input = $input;
if (goog.DEBUG) {
  $input.soyTemplateName = 'AppConversation.input';
}

exports.render.params = [];
exports.messages.params = ["allUsers","thread"];
exports.input.params = [];
templates = exports;
return exports;

});

class AppConversation extends Component {}
Soy.register(AppConversation, templates);
export default templates;
export { AppConversation, templates };
/* jshint ignore:end */
