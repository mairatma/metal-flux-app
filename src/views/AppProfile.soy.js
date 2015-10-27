/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
// This file was automatically generated from AppProfile.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppProfile.
 */

if (typeof Templates.AppProfile == 'undefined') { Templates.AppProfile = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppProfile.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-profile"><span class="avatar-photo"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.user.photo)) + '"></span><h3 class="app-profile-name">' + soy.$$escapeHtml(opt_data.user.name) + ' <small>"' + soy.$$escapeHtml(opt_data.user.status) + '"</small>' + ((opt_data.lastTimestamp) ? '<span class="label label-info">Message sent at ' + soy.$$escapeHtml(opt_data.lastTimestamp) + '</span>' : '') + '</h3></div>');
};
if (goog.DEBUG) {
  Templates.AppProfile.content.soyTemplateName = 'Templates.AppProfile.content';
}

Templates.AppProfile.content.params = ["id","lastTimestamp","user"];
export default Templates.AppProfile;
/* jshint ignore:end */
