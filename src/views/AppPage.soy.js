/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppPage.
 * @public
 */

goog.module('AppPage.incrementaldom');

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

var $templateAlias1 = Soy.getTemplate('AppMenu.incrementaldom', 'render');

var $templateAlias3 = Soy.getTemplate('AppMessages.incrementaldom', 'render');

var $templateAlias2 = Soy.getTemplate('AppProfile.incrementaldom', 'render');

var $templateAlias4 = Soy.getTemplate('AppSettings.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'app component');
    $templateAlias1({key: 'menu', navBarItems: opt_data.navBarItems, navBarSelectedIndex: opt_data.navBarSelectedIndex, user: opt_data.user}, null, opt_ijData);
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row');
        if (opt_data.navBarSelectedIndex == 0) {
          ie_open('div');
            $templateAlias2({key: 'profile', lastTimestamp: opt_data.lastTimestamp, user: opt_data.user}, null, opt_ijData);
          ie_close('div');
        } else if (opt_data.navBarSelectedIndex == 1) {
          ie_open('div');
            $templateAlias3({allUsers: opt_data.allUsers, key: 'messages', selectedThreadIndex: opt_data.selectedThreadIndex, threads: opt_data.threads}, null, opt_ijData);
          ie_close('div');
        } else {
          ie_open('div');
            $templateAlias4({key: 'settings', user: opt_data.user}, null, opt_ijData);
          ie_close('div');
        }
      ie_close('div');
    ie_close('div');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppPage.render';
}

exports.render.params = ["allUsers","lastTimestamp","navBarItems","navBarSelectedIndex","selectedThreadIndex","threads","user"];
templates = exports;
return exports;

});

class AppPage extends Component {}
Soy.register(AppPage, templates);
export default templates;
export { AppPage, templates };
/* jshint ignore:end */
