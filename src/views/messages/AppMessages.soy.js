/* jshint ignore:start */
import Component from 'metal/src/component/Component';
import SoyAop from 'metal/src/soy/SoyAop';
import SoyRenderer from 'metal/src/soy/SoyRenderer';
import SoyTemplates from 'metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
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
Templates.AppMessages.render = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-messages"><div class="col-xs-4">' + Templates.AppThreadsSidebar.render({allUsers: opt_data.allUsers, id: opt_data.id + '-threads-sidebar', selectedThreadIndex: opt_data.selectedThreadIndex, threads: opt_data.threads}, null, opt_ijData) + '</div><div class="col-xs-8">' + Templates.AppConversation.render({allUsers: opt_data.allUsers, id: opt_data.id + '-conversation', thread: opt_data.threads[opt_data.selectedThreadIndex], selectedThreadIndex: opt_data.selectedThreadIndex}, null, opt_ijData) + '</div></div>');
};
if (goog.DEBUG) {
  Templates.AppMessages.render.soyTemplateName = 'Templates.AppMessages.render';
}

Templates.AppMessages.render.params = ["allUsers","id","threads","selectedThreadIndex"];

class AppMessages extends Component {}
AppMessages.RENDERER = SoyRenderer;
SoyAop.registerTemplates('AppMessages');
export default AppMessages;
/* jshint ignore:end */
