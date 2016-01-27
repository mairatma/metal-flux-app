/* jshint ignore:start */
import Component from 'metal/src/component/Component';
import SoyAop from 'metal/src/soy/SoyAop';
import SoyRenderer from 'metal/src/soy/SoyRenderer';
import SoyTemplates from 'metal/src/soy/SoyTemplates';
var Templates = SoyTemplates.get();
// This file was automatically generated from AppPage.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Templates.AppPage.
 */

if (typeof Templates.AppPage == 'undefined') { Templates.AppPage = {}; }


/**
 * @param {Object.<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object.<string, *>=} opt_ijData
 * @return {!soydata.SanitizedHtml}
 * @suppress {checkTypes}
 */
Templates.AppPage.content = function(opt_data, opt_ignored, opt_ijData) {
  return soydata.VERY_UNSAFE.ordainSanitizedHtml('<div id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="app component">' + Templates.AppMenu.content({id: opt_data.id + '-menu', navBarItems: opt_data.navBarItems, navBarSelectedIndex: opt_data.navBarSelectedIndex, user: opt_data.user}, null, opt_ijData) + '<div class="container"><div class="row">' + ((opt_data.navBarSelectedIndex == 0) ? Templates.AppProfile.content({id: opt_data.id + '-profile', lastTimestamp: opt_data.lastTimestamp, user: opt_data.user}, null, opt_ijData) : (opt_data.navBarSelectedIndex == 1) ? Templates.AppMessages.content({allUsers: opt_data.allUsers, id: opt_data.id + '-messages', selectedThreadIndex: opt_data.selectedThreadIndex, threads: opt_data.threads}, null, opt_ijData) : Templates.AppSettings.content({id: opt_data.id + '-settings', user: opt_data.user}, null, opt_ijData)) + '</div></div></div>');
};
if (goog.DEBUG) {
  Templates.AppPage.content.soyTemplateName = 'Templates.AppPage.content';
}

Templates.AppPage.content.params = ["allUsers","id","lastTimestamp","navBarItems","navBarSelectedIndex","selectedThreadIndex","threads","user"];

class AppPage extends Component {}
AppPage.RENDERER = SoyRenderer;
SoyAop.registerTemplates('AppPage');
export default AppPage;
/* jshint ignore:end */
