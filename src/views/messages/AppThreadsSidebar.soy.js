/* jshint ignore:start */
import Component from 'bower:metal/src/component/Component';
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
import SoyAop from 'bower:metal/src/soy/SoyAop';
import SoyRenderer from 'bower:metal/src/soy/SoyRenderer';
import SoyTemplates from 'bower:metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from AppThreadsSidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppThreadsSidebar.
 */

if (typeof Templates.AppThreadsSidebar == 'undefined') { Templates.AppThreadsSidebar = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppThreadsSidebar.content = function(opt_data, opt_ignored, opt_ijData) {
  var output = '<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app-threads-sidebar list-group">';
  var threadList123 = opt_data.threads;
  var threadListLen123 = threadList123.length;
  for (var threadIndex123 = 0; threadIndex123 < threadListLen123; threadIndex123++) {
    var threadData123 = threadList123[threadIndex123];
    output += '<a href="#" class="list-group-item' + soy.$$escapeHtmlAttribute(opt_data.selectedThreadIndex == threadIndex123 ? ' active' : '') + '" data-onclick="handleItemClick_" data-index="' + soy.$$escapeHtmlAttribute(threadIndex123) + '">' + soy.$$escapeHtml(opt_data.allUsers[threadData123.userId].name) + '</a>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.AppThreadsSidebar.content.soyTemplateName = 'Templates.AppThreadsSidebar.content';
}

Templates.AppThreadsSidebar.content.params = ["allUsers","id","selectedThreadIndex","threads"];

class AppThreadsSidebar extends Component {
  static setImpl(ctor) {
    ComponentRegistry.register(ctor, 'AppThreadsSidebar');
  }
}
AppThreadsSidebar.RENDERER = SoyRenderer;
AppThreadsSidebar.setImpl(AppThreadsSidebar);
SoyAop.registerTemplates('AppThreadsSidebar');
export default AppThreadsSidebar;
/* jshint ignore:end */
