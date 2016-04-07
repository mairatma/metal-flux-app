/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppThreadsSidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppThreadsSidebar.
 * @public
 */

goog.module('AppThreadsSidebar.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
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
  ie_open('div', null, null,
      'class', 'app-threads-sidebar list-group');
    var threadList118 = opt_data.threads;
    var threadListLen118 = threadList118.length;
    for (var threadIndex118 = 0; threadIndex118 < threadListLen118; threadIndex118++) {
      var threadData118 = threadList118[threadIndex118];
      ie_open('a', null, null,
          'href', '#',
          'class', 'list-group-item' + (opt_data.selectedThreadIndex == threadIndex118 ? ' active' : ''),
          'data-onclick', 'handleItemClick_',
          'data-index', threadIndex118);
        itext((goog.asserts.assert((opt_data.allUsers[threadData118.userId].name) != null), opt_data.allUsers[threadData118.userId].name));
      ie_close('a');
    }
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppThreadsSidebar.render';
}

exports.render.params = ["allUsers","selectedThreadIndex","threads"];
templates = exports;
return exports;

});

class AppThreadsSidebar extends Component {}
Soy.register(AppThreadsSidebar, templates);
export default templates;
export { AppThreadsSidebar, templates };
/* jshint ignore:end */
