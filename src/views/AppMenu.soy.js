/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from AppMenu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppMenu.
 */

if (typeof Templates.AppMenu == 'undefined') { Templates.AppMenu = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppMenu.content = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-menu navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#" data-onclick="handleHomeClick_">' + soy.$$escapeHtml(opt_data.user.name) + '</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav">';
  var itemList8 = opt_data.navBarItems;
  var itemListLen8 = itemList8.length;
  for (var itemIndex8 = 0; itemIndex8 < itemListLen8; itemIndex8++) {
    var itemData8 = itemList8[itemIndex8];
    output += '<li class="' + soy.$$escapeHtmlAttribute(itemIndex8 == opt_data.navBarSelectedIndex ? 'active' : '') + '" data-index="' + soy.$$escapeHtmlAttribute(itemIndex8) + '" data-onclick="handleItemClick_"><a href="#">' + soy.$$escapeHtml(itemData8.name) + '</a></li>';
  }
  output += '</ul></div></div></nav>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.AppMenu.content.soyTemplateName = 'Templates.AppMenu.content';
}

Templates.AppMenu.content.params = ["id","navBarItems","navBarSelectedIndex","user"];
export default Templates.AppMenu;
/* jshint ignore:end */
