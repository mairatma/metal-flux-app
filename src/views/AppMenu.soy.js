/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from AppMenu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AppMenu.
 * @public
 */

goog.module('AppMenu.incrementaldom');

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
  ie_open('nav', null, null,
      'class', 'app-menu navbar navbar-default');
    ie_open('div', null, null,
        'class', 'container-fluid');
      ie_open('div', null, null,
          'class', 'navbar-header');
        ie_open('a', null, null,
            'class', 'navbar-brand',
            'href', '#',
            'data-onclick', 'handleHomeClick_');
          itext((goog.asserts.assert((opt_data.user.name) != null), opt_data.user.name));
        ie_close('a');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'collapse navbar-collapse');
        ie_open('ul', null, null,
            'class', 'nav navbar-nav');
          var itemList13 = opt_data.navBarItems;
          var itemListLen13 = itemList13.length;
          for (var itemIndex13 = 0; itemIndex13 < itemListLen13; itemIndex13++) {
            var itemData13 = itemList13[itemIndex13];
            ie_open('li', null, null,
                'class', itemIndex13 == opt_data.navBarSelectedIndex ? 'active' : '',
                'data-index', itemIndex13,
                'data-onclick', 'handleItemClick_');
              ie_open('a', null, null,
                  'href', '#');
                itext((goog.asserts.assert((itemData13.name) != null), itemData13.name));
              ie_close('a');
            ie_close('li');
          }
        ie_close('ul');
      ie_close('div');
    ie_close('div');
  ie_close('nav');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'AppMenu.render';
}

exports.render.params = ["navBarItems","navBarSelectedIndex","user"];
templates = exports;
return exports;

});

class AppMenu extends Component {}
Soy.register(AppMenu, templates);
export default templates;
export { AppMenu, templates };
/* jshint ignore:end */
