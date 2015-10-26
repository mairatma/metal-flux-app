/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from AppMessages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppMessages.
 */

if (typeof Templates.AppMessages == 'undefined') { Templates.AppMessages = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppMessages.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-messages"></div>');
};
if (goog.DEBUG) {
  Templates.AppMessages.content.soyTemplateName = 'Templates.AppMessages.content';
}

Templates.AppMessages.content.params = ["id"];
export default Templates.AppMessages;
/* jshint ignore:end */
