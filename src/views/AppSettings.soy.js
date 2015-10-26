/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from AppSettings.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppSettings.
 */

if (typeof Templates.AppSettings == 'undefined') { Templates.AppSettings = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppSettings.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-settings"></div>');
};
if (goog.DEBUG) {
  Templates.AppSettings.content.soyTemplateName = 'Templates.AppSettings.content';
}

Templates.AppSettings.content.params = ["id"];
export default Templates.AppSettings;
/* jshint ignore:end */