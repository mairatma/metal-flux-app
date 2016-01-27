/* jshint ignore:start */
import Component from 'metal/src/component/Component';
import SoyAop from 'metal/src/soy/SoyAop';
import SoyRenderer from 'metal/src/soy/SoyRenderer';
import SoyTemplates from 'metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
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
Templates.AppSettings.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<form id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-settings"><div class="form-group"><label>Name</label><input type="text" class="form-control" placeholder="Name" name="name" value="' + soy.$$escapeHtmlAttribute(opt_data.user.name) + '"></div><div class="form-group"><label>Status</label><input type="text" class="form-control" placeholder="Status" name="status" value="' + soy.$$escapeHtmlAttribute(opt_data.user.status) + '"></div><button type="button" class="btn btn-primary" data-onclick="handleClickSave_">Save</button></form>');
};
if (goog.DEBUG) {
  Templates.AppSettings.render.soyTemplateName = 'Templates.AppSettings.render';
}

Templates.AppSettings.render.params = ["id","user"];

class AppSettings extends Component {}
AppSettings.RENDERER = SoyRenderer;
SoyAop.registerTemplates('AppSettings');
export default AppSettings;
/* jshint ignore:end */
