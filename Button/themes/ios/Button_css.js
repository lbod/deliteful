define(function(){ return '\
.d-button {\
  padding: 15px 10px;\
  border-style: outset;\
  border-width: 1px;\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fdfdfd), to(#cecece), color-stop(0.5, #f8f8f8), color-stop(0.5, #eeeeee));\
  background-image: linear-gradient(to bottom, #fdfdfd 0%, #f8f8f8 50%, #eeeeee 50%, #cecece 100%);\
  font-family: Helvetica;\
  cursor: pointer;\
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\
  border-color: #9cacc0;\
  border-radius: 5px;\
  color: black;\
  font-size: 13px;\
}\
.d-button-text {\
  margin: 10px;\
}\
.d-button:active,\
.d-button-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#f0f0f0), to(#bfbfbf), color-stop(0.5, #ebebeb), color-stop(0.5, #dedede));\
  background-image: linear-gradient(to bottom, #f0f0f0 0%, #ebebeb 50%, #dedede 50%, #bfbfbf 100%);\
  color: black;\
}\
.d-button-disabled,\
.d-button:disabled {\
  border-color: grey;\
  background-image: none;\
  color: grey;\
  cursor: default;\
}\
.d-button-blue {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#7a9de9), to(#2362dd), color-stop(0.5, #366edf), color-stop(0.5, #215fdc));\
  background-image: linear-gradient(to bottom, #7a9de9 0%, #366edf 50%, #215fdc 50%, #2362dd 100%);\
  color: white;\
}\
.d-button-blue-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#8ea4c1), to(#4a6c9b), color-stop(0.5, #5877a2), color-stop(0.5, #476999));\
  background-image: linear-gradient(to bottom, #8ea4c1 0%, #5877a2 50%, #476999 50%, #4a6c9b 100%);\
}\
.d-button-red {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#fa9d58), to(#ee4115), color-stop(0.5, #ff4d25), color-stop(0.5, #ed4d15));\
  background-image: linear-gradient(to bottom, #fa9d58 0%, #ff4d25 50%, #ed4d15 50%, #ee4115 100%);\
  color: white;\
}\
.d-button-red-selected {\
  background-image: -webkit-gradient(linear, left top, left bottom, from(#c1a48e), to(#9b6c4a), color-stop(0.5, #a27758), color-stop(0.5, #996947));\
  background-image: linear-gradient(to bottom, #c1a48e 0%, #a27758 50%, #996947 50%, #9b6c4a 100%);\
}\
'; } );
