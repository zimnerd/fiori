sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History) {
    'use strict';

    return Controller.extend('routing.zrouting.controller.Third', {
      onInit: function () {},
      onBackNav: function () {
        // go beck in history
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo('RouteSecond', {}, true);
        }
      },
    });
  }
);
