define(function(){ return '\
.d-side-pane {\
  width: 15em;\
  height: 100%;\
  top: 0;\
  -webkit-box-sizing: border-box;\
  -moz-box-sizing: border-box;\
  box-sizing: border-box;\
  position: fixed;\
  background-color: white;\
}\
.-d-side-pane-animate {\
  -webkit-transition: -webkit-transform 0.3s ease-in-out;\
  transition: transform 0.3s ease-in-out;\
}\
.-d-side-pane-no-select {\
  -webkit-touch-callout: none;\
  user-select: none;\
  -webkit-user-select: none;\
  -ms-user-select: none;\
  -moz-user-select: none;\
}\
.-d-side-pane-start {\
  left: 0;\
}\
.-d-side-pane-end {\
  right: 0;\
}\
.-d-side-pane-under {\
  z-index: -1;\
}\
.-d-side-pane-ontop {\
  z-index: 1;\
}\
.-d-side-pane-start.-d-side-pane-push.-d-side-pane-hidden,\
.-d-side-pane-start.-d-side-pane-overlay.-d-side-pane-hidden {\
  -webkit-transform: translate3d(-15em, 0px, 0px);\
  transform: translate3d(-15em, 0px, 0px);\
}\
.-d-side-pane-start.-d-side-pane-push.-d-side-pane-visible,\
.-d-side-pane-start.-d-side-pane-overlay.-d-side-pane-visible {\
  -webkit-transform: translate3d(0px, 0px, 0px);\
  transform: translate3d(0px, 0px, 0px);\
}\
.-d-side-pane-end.-d-side-pane-push.-d-side-pane-hidden,\
.-d-side-pane-end.-d-side-pane-overlay.-d-side-pane-hidden {\
  right: 0;\
  -webkit-transform: translate3d(15em, 0px, 0px);\
  transform: translate3d(15em, 0px, 0px);\
}\
.-d-side-pane-end.-d-side-pane-push.-d-side-pane-visible,\
.-d-side-pane-end.-d-side-pane-overlay.-d-side-pane-visible {\
  right: 0;\
  -webkit-transform: translate3d(0px, 0px, 0px);\
  transform: translate3d(0px, 0px, 0px);\
}\
.-d-side-pane-start.-d-side-pane-translated {\
  -webkit-transform: translate3d(15em, 0px, 0px);\
  transform: translate3d(15em, 0px, 0px);\
}\
.-d-side-pane-start.-d-side-pane-nottranslated {\
  -webkit-transform: translate3d(0px, 0px, 0px);\
  transform: translate3d(0px, 0px, 0px);\
}\
.-d-side-pane-end.-d-side-pane-translated {\
  -webkit-transform: translate3d(-15em, 0px, 0px);\
  transform: translate3d(-15em, 0px, 0px);\
}\
.-d-side-pane-end.-d-side-pane-nottranslated {\
  -webkit-transform: translate3d(0px, 0px, 0px);\
  transform: translate3d(0px, 0px, 0px);\
}\
.-d-side-pane-end.-d-side-pane-reveal.-d-side-pane-visible,\
.-d-side-pane.-d-side-pane-end-reveal.-d-side-pane-hidden {\
  right: 0;\
}\
'; } );
