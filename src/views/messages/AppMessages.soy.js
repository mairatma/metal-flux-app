/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
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
Templates.AppMessages.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-messages"><div class="col-xs-4">' + Templates.AppThreadsSidebar.content({allUsers: opt_data.allUsers, id: opt_data.id + '-threads-sidebar', selectedThreadIndex: opt_data.selectedThreadIndex, threads: opt_data.threads}, null, opt_ijData) + '</div><div class="col-xs-8">' + Templates.AppConversation.content({allUsers: opt_data.allUsers, id: opt_data.id + '-conversation', thread: opt_data.threads[opt_data.selectedThreadIndex], selectedThreadIndex: opt_data.selectedThreadIndex}, null, opt_ijData) + '</div></div>');
};
if (goog.DEBUG) {
  Templates.AppMessages.content.soyTemplateName = 'Templates.AppMessages.content';
}

Templates.AppMessages.content.params = ["allUsers","id","threads","selectedThreadIndex"];

class AppMessages extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'AppMessages');
  }
}
AppMessages.RENDERER = SoyRenderer;
AppMessages.setImpl(AppMessages);
SoyAop.registerTemplates('AppMessages');
export default AppMessages;
/* jshint ignore:end */
