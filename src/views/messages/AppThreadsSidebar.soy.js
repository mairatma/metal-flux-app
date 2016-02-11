/* jshint ignore:start */
import Component from 'metal-component';
import { SoyAop, SoyRenderer, SoyTemplates } from 'metal-soy';
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
Templates.AppThreadsSidebar.render = function(opt_data, opt_ignored, opt_ijData) {
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
  Templates.AppThreadsSidebar.render.soyTemplateName = 'Templates.AppThreadsSidebar.render';
}

Templates.AppThreadsSidebar.render.params = ["allUsers","id","selectedThreadIndex","threads"];

class AppThreadsSidebar extends Component {}
AppThreadsSidebar.RENDERER = SoyRenderer;
SoyAop.registerTemplates('AppThreadsSidebar');
export default AppThreadsSidebar;
/* jshint ignore:end */
