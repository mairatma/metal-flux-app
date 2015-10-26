/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from App.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.App.
 */

if (typeof Templates.App == 'undefined') { Templates.App = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.App.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app component' + soy.$$escapeHtmlAttribute(opt_data.elementClasses ? ' ' + opt_data.elementClasses : '') + '"></div>');
};
if (goog.DEBUG) {
  Templates.App.content.soyTemplateName = 'Templates.App.content';
}

Templates.App.content.params = ["id"];
export default Templates.App;
/* jshint ignore:end */
