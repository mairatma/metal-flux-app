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
  var output = '<nav id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-menu navbar navbar-default"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="#" data-onclick="handleHomeClick_">My App</a></div><div class="collapse navbar-collapse"><ul class="nav navbar-nav">';
  var itemList6 = opt_data.navBarItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += '<li class="' + soy.$$escapeHtmlAttribute(itemIndex6 == opt_data.navBarSelectedIndex ? 'active' : '') + '" data-index="' + soy.$$escapeHtmlAttribute(itemIndex6) + '" data-onclick="handleItemClick_"><a href="#">' + soy.$$escapeHtml(itemData6.name) + '</a></li>';
  }
  output += '</ul></div></div></nav>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.AppMenu.content.soyTemplateName = 'Templates.AppMenu.content';
}

Templates.AppMenu.content.params = ["id","navBarItems","navBarSelectedIndex"];
export default Templates.AppMenu;
/* jshint ignore:end */
