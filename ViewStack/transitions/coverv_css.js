define(function(){ return '\
.-d-view-stack-coverv {\
  -webkit-transition-property: none;\
  -moz-transition-property: none;\
  transition-property: none;\
  -webkit-transition-duration: 0s;\
  -moz-transition-duration: 0s;\
  transition-duration: 0s;\
}\
.-d-view-stack-coverv.-d-view-stack-transition {\
  -webkit-transition-property: -webkit-transform;\
  transition-property: transform;\
  -webkit-transition-duration: 0.4s;\
  -moz-transition-duration: 0.4s;\
  transition-duration: 0.4s;\
}\
.-d-view-stack-coverv.-d-view-stack-out {\
  z-index: -100;\
  -webkit-transform: translate3d(0px, 0%, -1px) !important;\
  transform: translate3d(0px, 0%, -1px) !important;\
}\
.-d-view-stack-coverv.-d-view-stack-in {\
  -webkit-transform: translate3d(0px, 100%, 0px) !important;\
  transform: translate3d(0px, 100%, 0px) !important;\
}\
.-d-view-stack-coverv.-d-view-stack-in.-d-view-stack-reverse {\
  -webkit-transform: translate3d(0px, -100%, 0px) !important;\
  transform: translate3d(0px, -100%, 0px) !important;\
}\
.-d-view-stack-coverv.-d-view-stack-out.-d-view-stack-transition,\
.-d-view-stack-coverv.-d-view-stack-in.-d-view-stack-transition {\
  -webkit-transform: translate3d(0px, 0%, 0px) !important;\
  transform: translate3d(0px, 0%, 0px) !important;\
}\
.dj_android.dj_tablet .-d-view-stack-coverv.-d-view-stack-transition {\
  -webkit-transition-duration: 0.6s;\
  -moz-transition-duration: 0.6s;\
  transition-duration: 0.6s;\
  -webkit-transition-timing-function: linear;\
  -moz-transition-timing-function: linear;\
  transition-timing-function: linear;\
}\
'; } );
