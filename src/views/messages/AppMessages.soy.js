/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppMessages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppMessages.
 * @public
 */

goog.module('AppMessages.incrementaldom');

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

var $templateAlias2 = Soy.getTemplate('AppConversation.incrementaldom', 'render');

var $templateAlias1 = Soy.getTemplate('AppThreadsSidebar.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'app-messages');
    ie_open('div', null, null,
        'class', 'col-xs-4');
      $templateAlias1({allUsers: opt_data.allUsers, key: 'threads-sidebar', selectedThreadIndex: opt_data.selectedThreadIndex, threads: opt_data.threads}, null, opt_ijData);
    ie_close('div');
    ie_open('div', null, null,
        'class', 'col-xs-8');
      $templateAlias2({allUsers: opt_data.allUsers, key: 'conversation', thread: opt_data.threads[opt_data.selectedThreadIndex], selectedThreadIndex: opt_data.selectedThreadIndex}, null, opt_ijData);
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppMessages.render';
}

exports.render.params = ["allUsers","threads","selectedThreadIndex"];
templates = exports;
return exports;

});

class AppMessages extends Component {}
Soy.register(AppMessages, templates);
export default templates;
export { AppMessages, templates };
/* jshint ignore:end */
