/* jshint ignore:start */
import ComponentRegistry from 'bower:metal/src/component/ComponentRegistry';
var Templates = ComponentRegistry.Templates;
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
  var threadList116 = opt_data.threads;
  var threadListLen116 = threadList116.length;
  for (var threadIndex116 = 0; threadIndex116 < threadListLen116; threadIndex116++) {
    var threadData116 = threadList116[threadIndex116];
    output += '<a href="#" class="list-group-item' + soy.$$escapeHtmlAttribute(opt_data.selectedThreadIndex == threadIndex116 ? ' active' : '') + '" data-onclick="handleItemClick_" data-index="' + soy.$$escapeHtmlAttribute(threadIndex116) + '">' + soy.$$escapeHtml(opt_data.allUsers[threadData116.userId].name) + '</a>';
  }
  output += '</div>';
  return soydata.VERY_UNSAFE.ordainSanitizedHtml(output);
};
if (goog.DEBUG) {
  Templates.AppThreadsSidebar.content.soyTemplateName = 'Templates.AppThreadsSidebar.content';
}

Templates.AppThreadsSidebar.content.params = ["allUsers","id","selectedThreadIndex","threads"];
export default Templates.AppThreadsSidebar;
/* jshint ignore:end */
