sap.ui.define(
  ['sap/ui/core/mvc/Controller', 'sap/ui/core/routing/History'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, History) {
    'use strict';

    return Controller.extend('routing.zrouting.controller.Second', {
      onInit: function () {},
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo('RouteThird');
      },
      onBackNavSecond: function () {
        // go beck in history
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo('RouteMain', {}, true);
        }
      },
    });
  }
);
