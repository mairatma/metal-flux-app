/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppSettings.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppSettings.
 * @public
 */

goog.module('AppSettings.incrementaldom');

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
  ie_open('form', null, null,
      'class', 'app-settings');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('label');
        itext('Name');
      ie_close('label');
      ie_open('input', null, null,
          'type', 'text',
          'class', 'form-control',
          'placeholder', 'Name',
          'name', 'name',
          'value', opt_data.user.name);
      ie_close('input');
    ie_close('div');
    ie_open('div', null, null,
        'class', 'form-group');
      ie_open('label');
        itext('Status');
      ie_close('label');
      ie_open('input', null, null,
          'type', 'text',
          'class', 'form-control',
          'placeholder', 'Status',
          'name', 'status',
          'value', opt_data.user.status);
      ie_close('input');
    ie_close('div');
    ie_open('button', null, null,
        'type', 'button',
        'class', 'btn btn-primary',
        'data-onclick', 'handleClickSave_');
      itext('Save');
    ie_close('button');
  ie_close('form');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppSettings.render';
}

exports.render.params = ["user"];
templates = exports;
return exports;

});

class AppSettings extends Component {}
Soy.register(AppSettings, templates);
export default templates;
export { AppSettings, templates };
/* jshint ignore:end */
