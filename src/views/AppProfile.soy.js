/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppProfile.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppProfile.
 * @public
 */

goog.module('AppProfile.incrementaldom');

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
  ie_open('div', null, null,
      'class', 'app-profile');
    ie_open('span', null, null,
        'class', 'avatar-photo');
      ie_open('img', null, null,
          'src', opt_data.user.photo);
      ie_close('img');
    ie_close('span');
    ie_open('h3', null, null,
        'class', 'app-profile-name');
      itext((goog.asserts.assert((opt_data.user.name) != null), opt_data.user.name));
      itext(' ');
      ie_open('small');
        itext('"');
        itext((goog.asserts.assert((opt_data.user.status) != null), opt_data.user.status));
        itext('"');
      ie_close('small');
      if (opt_data.lastTimestamp) {
        ie_open('span', null, null,
            'class', 'label label-info');
          itext('Message sent at ');
          itext((goog.asserts.assert((opt_data.lastTimestamp) != null), opt_data.lastTimestamp));
        ie_close('span');
      }
    ie_close('h3');
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppProfile.render';
}

exports.render.params = ["lastTimestamp","user"];
templates = exports;
return exports;

});

class AppProfile extends Component {}
Soy.register(AppProfile, templates);
export default templates;
export { AppProfile, templates };
/* jshint ignore:end */
