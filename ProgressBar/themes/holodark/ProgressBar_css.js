define(function(){ return '\
/*\
 * -----------------------------------------------\
 *  Theme     : holodark\
 *  Widget    : deliteful/ProgressBar\
 *  baseClass : d-progress-bar\
 * -----------------------------------------------\
 */\
.d-progress-bar::before {\
  content: "";\
  position: absolute;\
  left: 0;\
  top: 0;\
  width: 100%;\
  height: 0.344em;\
  background-color: white;\
  opacity: 0.15;\
}\
.d-progress-bar-success .d-progress-bar-indicator {\
  background-color: #5cb85c;\
}\
.d-progress-bar-info .d-progress-bar-indicator {\
  background-color: #5bc0de;\
}\
.d-progress-bar-warning .d-progress-bar-indicator {\
  background-color: #f0ad4e;\
}\
.d-progress-bar-danger .d-progress-bar-indicator {\
  background-color: #d9534f;\
}\
.d-progress-bar-msg-ext::after {\
  content: attr(msg-ext);\
  float: right;\
  display: block;\
}\
.d-progress-bar-indeterminate.d-progress-bar-success .d-progress-bar-background {\
  background-color: #5cb85c;\
}\
.d-progress-bar-indeterminate.d-progress-bar-info .d-progress-bar-background {\
  background-color: #5bc0de;\
}\
.d-progress-bar-indeterminate.d-progress-bar-warning .d-progress-bar-background {\
  background-color: #f0ad4e;\
}\
.d-progress-bar-indeterminate.d-progress-bar-danger .d-progress-bar-background {\
  background-color: #d9534f;\
}\
.d-progress-bar {\
  display: inline-block;\
  position: relative;\
  margin: 2px;\
  padding: 0;\
  width: 100%;\
  height: 1.8em;\
  font-size: 12px;\
  vertical-align: middle;\
}\
.d-progress-bar-background {\
  left: 0;\
  width: 100%;\
  margin: 0;\
  padding: 0;\
  position: absolute;\
  height: 0.344em;\
  background-color: transparent;\
  top: 0;\
}\
.d-progress-bar-indicator {\
  top: 0;\
  left: 0;\
  width: 100%;\
  margin: 0;\
  padding: 0;\
  -webkit-transition: width 0.3s linear 0s;\
  transition: width 0.3s linear 0s;\
  height: 100%;\
  background: #33b5e5;\
  position: absolute;\
}\
.d-progress-bar-msg {\
  width: 100%;\
  margin: 0;\
  padding: 0;\
  overflow: hidden;\
  text-align: center;\
  position: absolute;\
  height: 1.4em;\
  line-height: 1.4em;\
  top: 0.4em;\
  white-space: nowrap;\
  text-overflow: ellipsis;\
}\
.d-progress-bar-msg-invert {\
  display: none;\
}\
.d-progress-bar-a11y {\
  display: none;\
}\
.d-progress-bar-msg-ext {\
  text-align: left;\
  overflow: hidden;\
}\
.d-progress-bar-indeterminate .d-progress-bar-background {\
  margin: 0;\
  padding: 0;\
  background: #33b5e5;\
}\
.d-progress-bar-indeterminate .d-progress-bar-indicator {\
  margin: 0;\
  padding: 0;\
  background: #333333;\
  width: 5%;\
  -webkit-transition: width 0s;\
  transition: width 0s;\
  -webkit-animation-name: d-progress-bar-indeterminate-animation;\
  animation-name: d-progress-bar-indeterminate-animation;\
  -webkit-animation-duration: 1.5s;\
  animation-duration: 1.5s;\
  -webkit-animation-timing-function: cubic-bezier(0.1, 0.86, 0.76, 0.1);\
  animation-timing-function: cubic-bezier(0.1, 0.86, 0.76, 0.1);\
  -webkit-animation-iteration-count: infinite;\
  animation-iteration-count: infinite;\
}\
@keyframes d-progress-bar-indeterminate-animation {\
  0% {\
    left: 2%;\
  }\
  100% {\
    left: 93%;\
  }\
}\
@-webkit-keyframes d-progress-bar-indeterminate-animation {\
  0% {\
    left: 2%;\
  }\
  100% {\
    left: 93%;\
  }\
}\
'; } );
