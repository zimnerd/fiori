sap.ui.define(
  ['sap/ui/core/mvc/Controller'],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller) {
    'use strict';

    return Controller.extend('routing.zrouting.controller.Main', {
      onInit: function () {},
      onPress: function () {
        this.getOwnerComponent().getRouter().navTo('RouteSecond');
      },
    });
  }
);
