(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*\n  ----------------------------------------------------------------------------\n  # Colors\n  ----------------------------------------------------------------------------\n*/\n/*\n  ----------------------------------------------------------------------------\n  # Reset\n  ----------------------------------------------------------------------------\n*/\n*:focus {\n  outline: none; }\nbutton {\n  background-color: transparent; }\nbutton[disabled] {\n  background-color: grey; }\n/*\n  ----------------------------------------------------------------------------\n  # Background\n  ----------------------------------------------------------------------------\n*/\n.bg-primary {\n  background-color: blue; }\n.bg-static {\n  background-color: #f0efed; }\n.bg-shadow {\n  background-color: rgba(0, 0, 0, 0.5); }\n/*\n  ----------------------------------------------------------------------------\n  # Border\n  ----------------------------------------------------------------------------\n*/\n.bd-0 {\n  border: 0; }\n.bd-primary {\n  border: 2px solid blue; }\n.bdr-5 {\n  border-radius: 5px; }\n.bdr-10 {\n  border-radius: 10px; }\n/*\n  ----------------------------------------------------------------------------\n  # Box Size\n  ----------------------------------------------------------------------------\n*/\n.bxs-content-box {\n  box-sizing: content-box; }\n.bxs-border-box {\n  box-sizing: border-box; }\n/*\n  ----------------------------------------------------------------------------\n  # Cursor\n  ----------------------------------------------------------------------------\n*/\n.cur-pointer {\n  cursor: pointer; }\n.cur-not-allowed, button[disabled] {\n  cursor: not-allowed; }\n/*\n  ----------------------------------------------------------------------------\n  # Fonts and Texts\n  ----------------------------------------------------------------------------\n*/\n.ff-arial {\n  font-family: Arial; }\n.fc-primary {\n  color: blue; }\n.fc-variant {\n  color: white; }\n.fc-static {\n  color: #f0efed; }\n.tt-uppercase {\n  text-transform: uppercase; }\n/*\n  ----------------------------------------------------------------------------\n  # Flex Box\n  ----------------------------------------------------------------------------\n*/\n.d-flex {\n  display: flex; }\n.ai-center {\n  align-items: center; }\n.fxd-column {\n  flex-direction: column; }\n.jc-center {\n  justify-content: center; }\n/*\n  ----------------------------------------------------------------------------\n  # Spacing\n  ----------------------------------------------------------------------------\n*/\n.p-10 {\n  padding: 10px; }\n.p-20 {\n  padding: 20px; }\n.pt-10 {\n  padding-top: 10px; }\n.pt-40 {\n  padding-top: 40px; }\n.pb-10 {\n  padding-bottom: 10px; }\n.pr-10 {\n  padding-right: 10px; }\n.m-20 {\n  margin: 20px; }\n.mt-45 {\n  margin-top: 45px; }\n.mr-10 {\n  margin-right: 10px; }\n.mr-20 {\n  margin-right: 20px; }\n/*\n  ----------------------------------------------------------------------------\n  # Sizes\n  ----------------------------------------------------------------------------\n*/\n.mxw-1280 {\n  max-width: 1280px; }\n.mxw-320 {\n  max-width: 320px; }\n.mxw-600 {\n  max-width: 600px; }\n.mxw-580 {\n  max-width: 580px; }\n.w-100p {\n  width: 100%; }\n.w-100 {\n  width: 100px; }\n.w-320 {\n  width: 320px; }\n.h-32 {\n  height: 32px; }\n.h-100p {\n  height: 100%; }\n/*\n  ----------------------------------------------------------------------------\n  # Positions\n  ----------------------------------------------------------------------------\n*/\n.pos-relative {\n  position: relative; }\n.pos-absolute {\n  position: absolute; }\n.t-0 {\n  top: 0; }\n.t-20 {\n  top: 20px; }\n.t--20 {\n  top: -20px; }\n.l-0 {\n  left: 0; }\n.r-0 {\n  right: 0; }\n.zi-10 {\n  z-index: 10; }\n.zi-20 {\n  z-index: 20; }\n/*\n  ----------------------------------------------------------------------------\n  # Shadows\n  ----------------------------------------------------------------------------\n*/\n.bxw-very {\n  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5); }\n.bxw-inset {\n  box-shadow: inset 0px 0px 10px -5px rgba(0, 0, 0, 0.5); }\n.bxw-inset:focus {\n    box-shadow: inset 0px 0px 10px 0 rgba(0, 0, 0, 0.5); }\n.bxw-hover:not([disabled]):hover {\n  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.5); }\n.op-0 {\n  opacity: 0; }\n.op-1 {\n  opacity: 1; }\n/*\n  ----------------------------------------------------------------------------\n  # Animations and Transformation\n  ----------------------------------------------------------------------------\n*/\n.trs-eio-500 {\n  transition: all 500ms ease-in-out; }\n.fade-in {\n  -webkit-animation: fade-in .5s ease-in-out forwards;\n          animation: fade-in .5s ease-in-out forwards; }\n@-webkit-keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n@keyframes fade-in {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n.fade-out {\n  -webkit-animation: fade-out .5s ease-in-out forwards;\n          animation: fade-out .5s ease-in-out forwards; }\n@-webkit-keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n@keyframes fade-out {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGJydW5vLm1vdXJhXFx3b3Jrc3BhY2VcXGRlc2FmaW8tbHVpemEtbGFicy9zcmNcXHN0eWxlcy5zY3NzIiwic3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBZUE7Ozs7Q0NWQztBRHdCRDs7OztDQ25CQztBRHdCRDtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsNkJBQTZCLEVBQUE7QUFHL0I7RUFFRSxzQkFyQm1CLEVBQUE7QUF3QnJCOzs7O0NDdkJDO0FENEJEO0VBQ0Usc0JBakNrQixFQUFBO0FBb0NwQjtFQUNFLHlCQW5Db0IsRUFBQTtBQXNDdEI7RUFDRSxvQ0FwQ2UsRUFBQTtBQXVDakI7Ozs7Q0MxQkM7QUQrQkQ7RUFDRSxTQUFTLEVBQUE7QUFHWDtFQUNFLHNCQXREa0IsRUFBQTtBQXlEcEI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCOzs7O0NDOUJDO0FEbUNEO0VBQ0UsdUJBQXVCLEVBQUE7QUFHekI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4Qjs7OztDQ2hDQztBRHFDRDtFQUNFLGVBQWUsRUFBQTtBQUdqQjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCOzs7O0NDbENDO0FEdUNEO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxXQXJHa0IsRUFBQTtBQXdHcEI7RUFDRSxZQXhHbUIsRUFBQTtBQTJHckI7RUFDRSxjQTNHb0IsRUFBQTtBQThHdEI7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjs7OztDQ3ZDQztBRDRDRDtFQUNFLGFBQWEsRUFBQTtBQUdmO0VBQ0UsbUJBQW1CLEVBQUE7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLHVCQUF1QixFQUFBO0FBR3pCOzs7O0NDM0NDO0FEZ0REO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDRSxhQUFhLEVBQUE7QUFHZjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7QUFHbkI7RUFDRSxvQkFBb0IsRUFBQTtBQUd0QjtFQUNFLG1CQUFtQixFQUFBO0FBR3JCO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7Ozs7Q0NyREM7QUQwREQ7RUFDRSxpQkFBaUIsRUFBQTtBQUduQjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0UsZ0JBQWdCLEVBQUE7QUFHbEI7RUFDRSxnQkFBZ0IsRUFBQTtBQUdsQjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLFlBQVksRUFBQTtBQUdkO0VBQ0UsWUFBWSxFQUFBO0FBR2Q7Ozs7Q0M5REM7QURtRUQ7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UsTUFBTSxFQUFBO0FBR1I7RUFDRSxTQUFTLEVBQUE7QUFHWDtFQUNFLFVBQVUsRUFBQTtBQUdaO0VBQ0UsT0FBTyxFQUFBO0FBR1Q7RUFDRSxRQUFRLEVBQUE7QUFHVjtFQUNFLFdBQVcsRUFBQTtBQUdiO0VBQ0UsV0FBVyxFQUFBO0FBR2I7Ozs7Q0N2RUM7QURzRkQ7RUFDRSwrQ0FuUmUsRUFBQTtBQXNSakI7RUFDRSxzREF2UmUsRUFBQTtBQXNSakI7SUFHSSxtREF6UmEsRUFBQTtBQTZSakI7RUFHTSwrQ0FoU1csRUFBQTtBQXFTakI7RUFDRSxVQUFVLEVBQUE7QUFHWjtFQUNFLFVBQVUsRUFBQTtBQUdaOzs7O0NDM0ZDO0FEZ0dEO0VBQ0UsaUNBQWlDLEVBQUE7QUFHbkM7RUFuVUUsbURBQXVDO1VBQXZDLDJDQUF1QyxFQUFBO0FBTnZDO0VBNFVFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQWhWZDtFQTRVRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7QUFLaEI7RUEvVUUsb0RBQXVDO1VBQXZDLDRDQUF1QyxFQUFBO0FBTnZDO0VBd1ZFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTtBQTVWZDtFQXdWRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vICAgTUlYSU5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuQG1peGluIGtleWZyYW1lcygkYW5pbWF0aW9uLW5hbWUpIHtcbiAgQGtleWZyYW1lcyAjeyRhbmltYXRpb24tbmFtZX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBhbmltYXRpb24oJHN0cikge1xuICBhbmltYXRpb246ICN7JHN0cn0gZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG59XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBDb2xvcnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbiRjb2xvci1wcmltYXJ5OiBibHVlO1xuJGNvbG9yLXZhcmlhbnQ6IHdoaXRlO1xuJGNvbG9yLXN0YXRpYzogI2YwZWZlZDtcbiRjb2xvci1kaXNhYmxlZDogZ3JleTtcbiRjb2xvci1zaGFkb3c6IHJnYmEoXG4gICRjb2xvcjogIzAwMDAwMCxcbiAgJGFscGhhOiAwLjVcbik7XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBSZXNldFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuKjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbmJ1dHRvbntcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmJ1dHRvbltkaXNhYmxlZF0ge1xuICBAZXh0ZW5kIC5jdXItbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1kaXNhYmxlZDtcbn1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEJhY2tncm91bmRcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5iZy1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbi5iZy1zdGF0aWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc3RhdGljO1xufVxuXG4uYmctc2hhZG93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNoYWRvdztcbn1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEJvcmRlclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLmJkLTAge1xuICBib3JkZXI6IDA7XG59XG5cbi5iZC1wcmltYXJ5e1xuICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbn1cblxuLmJkci01IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uYmRyLTEwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEJveCBTaXplXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uYnhzLWNvbnRlbnQtYm94IHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbi5ieHMtYm9yZGVyLWJveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBDdXJzb3JcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmN1ci1ub3QtYWxsb3dlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBGb250cyBhbmQgVGV4dHNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5mZi1hcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbn1cblxuLmZjLXByaW1hcnkge1xuICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbi5mYy12YXJpYW50IHtcbiAgY29sb3I6ICRjb2xvci12YXJpYW50O1xufVxuXG4uZmMtc3RhdGljIHtcbiAgY29sb3I6ICRjb2xvci1zdGF0aWM7XG59XG5cbi50dC11cHBlcmNhc2Uge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgRmxleCBCb3hcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5kLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYWktY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZ4ZC1jb2x1bW4ge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uamMtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBTcGFjaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wLTIwIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnB0LTEwe1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLnB0LTQwe1xuICBwYWRkaW5nLXRvcDogNDBweDtcbn1cblxuLnBiLTEwe1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnByLTEwIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLm0tMjB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm10LTQ1e1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4ubXItMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5tci0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIFNpemVzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4ubXh3LTEyODAge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbn1cblxuLm14dy0zMjAge1xuICBtYXgtd2lkdGg6IDMyMHB4O1xufVxuXG4ubXh3LTYwMCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5teHctNTgwIHtcbiAgbWF4LXdpZHRoOiA1ODBweDtcbn1cblxuLnctMTAwcCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udy0xMDAge1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi53LTMyMCB7XG4gIHdpZHRoOiAzMjBweDtcbn1cblxuLmgtMzIge1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5oLTEwMHAge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBQb3NpdGlvbnNcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5wb3MtcmVsYXRpdmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wb3MtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50LTAge1xuICB0b3A6IDA7XG59XG5cbi50LTIwe1xuICB0b3A6IDIwcHg7XG59XG5cbi50LS0yMHtcbiAgdG9wOiAtMjBweDtcbn1cblxuLmwtMCB7XG4gIGxlZnQ6IDA7XG59XG5cbi5yLTB7XG4gIHJpZ2h0OiAwO1xufVxuXG4uemktMTB7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uemktMjB7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgU2hhZG93c1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuXG4kc2hhZG93LXByaW1hcnk6IDBweCAwcHggMTBweDtcbiRzaGFkb3ctb3RoZXI6IDBweCAwcHggMTVweDtcblxuJHNoYWRvdy1pbnNldDogaW5zZXQgJHNoYWRvdy1wcmltYXJ5IC01cHggJGNvbG9yLXNoYWRvdztcbiRzaGFkb3ctaW5zZXQtaDogaW5zZXQgJHNoYWRvdy1wcmltYXJ5IDAgJGNvbG9yLXNoYWRvdztcblxuJHNoYWRvdy12ZXJ5OiAkc2hhZG93LXByaW1hcnkgMHB4ICRjb2xvci1zaGFkb3c7XG4kc2hhZG93LWhvdmVyOiAkc2hhZG93LW90aGVyIDBweCAkY29sb3Itc2hhZG93O1xuXG4uYnh3LXZlcnkge1xuICBib3gtc2hhZG93OiAkc2hhZG93LXZlcnk7XG59XG5cbi5ieHctaW5zZXQge1xuICBib3gtc2hhZG93OiAkc2hhZG93LWluc2V0O1xuICAmOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiAkc2hhZG93LWluc2V0LWg7XG4gIH1cbn1cblxuLmJ4dy1ob3ZlciB7XG4gICY6bm90KFtkaXNhYmxlZF0pIHtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctaG92ZXI7XG4gICAgfVxuICB9XG59XG5cbi5vcC0wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm9wLTEge1xuICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQW5pbWF0aW9ucyBhbmQgVHJhbnNmb3JtYXRpb25cbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi50cnMtZWlvLTUwMCB7XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbn1cblxuLmZhZGUtaW4ge1xuICBAaW5jbHVkZSBhbmltYXRpb24oXCJmYWRlLWluIC41c1wiKTtcbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGZhZGUtaW4pIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59XG5cbi5mYWRlLW91dCB7XG4gIEBpbmNsdWRlIGFuaW1hdGlvbihcImZhZGUtb3V0IC41c1wiKTtcbiAgQGluY2x1ZGUga2V5ZnJhbWVzKGZhZGUtb3V0KSB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxufVxuIiwiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIENvbG9yc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIFJlc2V0XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4qOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTsgfVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG5idXR0b25bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTsgfVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQmFja2dyb3VuZFxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyB9XG5cbi5iZy1zdGF0aWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBlZmVkOyB9XG5cbi5iZy1zaGFkb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEJvcmRlclxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLmJkLTAge1xuICBib3JkZXI6IDA7IH1cblxuLmJkLXByaW1hcnkge1xuICBib3JkZXI6IDJweCBzb2xpZCBibHVlOyB9XG5cbi5iZHItNSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDsgfVxuXG4uYmRyLTEwIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDsgfVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgQm94IFNpemVcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5ieHMtY29udGVudC1ib3gge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgfVxuXG4uYnhzLWJvcmRlci1ib3gge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBDdXJzb3JcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKi9cbi5jdXItcG9pbnRlciB7XG4gIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4uY3VyLW5vdC1hbGxvd2VkLCBidXR0b25bZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgRm9udHMgYW5kIFRleHRzXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uZmYtYXJpYWwge1xuICBmb250LWZhbWlseTogQXJpYWw7IH1cblxuLmZjLXByaW1hcnkge1xuICBjb2xvcjogYmx1ZTsgfVxuXG4uZmMtdmFyaWFudCB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4uZmMtc3RhdGljIHtcbiAgY29sb3I6ICNmMGVmZWQ7IH1cblxuLnR0LXVwcGVyY2FzZSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLypcbiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAjIEZsZXggQm94XG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4uZC1mbGV4IHtcbiAgZGlzcGxheTogZmxleDsgfVxuXG4uYWktY2VudGVyIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuXG4uZnhkLWNvbHVtbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLmpjLWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBTcGFjaW5nXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7IH1cblxuLnAtMjAge1xuICBwYWRkaW5nOiAyMHB4OyB9XG5cbi5wdC0xMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4OyB9XG5cbi5wdC00MCB7XG4gIHBhZGRpbmctdG9wOiA0MHB4OyB9XG5cbi5wYi0xMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4OyB9XG5cbi5wci0xMCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cblxuLm0tMjAge1xuICBtYXJnaW46IDIwcHg7IH1cblxuLm10LTQ1IHtcbiAgbWFyZ2luLXRvcDogNDVweDsgfVxuXG4ubXItMTAge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7IH1cblxuLm1yLTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4OyB9XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBTaXplc1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLm14dy0xMjgwIHtcbiAgbWF4LXdpZHRoOiAxMjgwcHg7IH1cblxuLm14dy0zMjAge1xuICBtYXgtd2lkdGg6IDMyMHB4OyB9XG5cbi5teHctNjAwIHtcbiAgbWF4LXdpZHRoOiA2MDBweDsgfVxuXG4ubXh3LTU4MCB7XG4gIG1heC13aWR0aDogNTgwcHg7IH1cblxuLnctMTAwcCB7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi53LTEwMCB7XG4gIHdpZHRoOiAxMDBweDsgfVxuXG4udy0zMjAge1xuICB3aWR0aDogMzIwcHg7IH1cblxuLmgtMzIge1xuICBoZWlnaHQ6IDMycHg7IH1cblxuLmgtMTAwcCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgUG9zaXRpb25zXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiovXG4ucG9zLXJlbGF0aXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5wb3MtYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cblxuLnQtMCB7XG4gIHRvcDogMDsgfVxuXG4udC0yMCB7XG4gIHRvcDogMjBweDsgfVxuXG4udC0tMjAge1xuICB0b3A6IC0yMHB4OyB9XG5cbi5sLTAge1xuICBsZWZ0OiAwOyB9XG5cbi5yLTAge1xuICByaWdodDogMDsgfVxuXG4uemktMTAge1xuICB6LWluZGV4OiAxMDsgfVxuXG4uemktMjAge1xuICB6LWluZGV4OiAyMDsgfVxuXG4vKlxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICMgU2hhZG93c1xuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLmJ4dy12ZXJ5IHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmJ4dy1pbnNldCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuICAuYnh3LWluc2V0OmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7IH1cblxuLmJ4dy1ob3Zlcjpub3QoW2Rpc2FibGVkXSk6aG92ZXIge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC41KTsgfVxuXG4ub3AtMCB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLm9wLTEge1xuICBvcGFjaXR5OiAxOyB9XG5cbi8qXG4gIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgIyBBbmltYXRpb25zIGFuZCBUcmFuc2Zvcm1hdGlvblxuICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qL1xuLnRycy1laW8tNTAwIHtcbiAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0OyB9XG5cbi5mYWRlLWluIHtcbiAgYW5pbWF0aW9uOiBmYWRlLWluIC41cyBlYXNlLWluLW91dCBmb3J3YXJkczsgfVxuXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwOyB9XG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxOyB9IH1cblxuLmZhZGUtb3V0IHtcbiAgYW5pbWF0aW9uOiBmYWRlLW91dCAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7IH1cblxuQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7IH0gfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bruno.moura\workspace\desafio-luiza-labs\src\styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles.js.map