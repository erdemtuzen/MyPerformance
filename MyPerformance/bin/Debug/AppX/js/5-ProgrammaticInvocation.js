//// THIS CODE AND INFORMATION IS PROVIDED "AS IS" WITHOUT WARRANTY OF
//// ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO
//// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND/OR FITNESS FOR A
//// PARTICULAR PURPOSE.
////
//// Copyright (c) Microsoft Corporation. All rights reserved

(function () {
    "use strict";
    var page = WinJS.UI.Pages.define("/html/5-ProgrammaticInvocation.html", {
        ready: function (element, options) {
          //  document.getElementById("scenario5Add").addEventListener("click", scenario5AddSettingsFlyout, false);
            document.getElementById("scenario5Show").addEventListener("click", scenario5ShowSettingsFlyout, false);
            
        }
    });

    function scenario5AddSettingsFlyout() {
        WinJS.Application.onsettings = function (e) {
            e.detail.applicationcommands = { "settingsDiv": { title: "Defaults", href: "/html/5-SettingsFlyout-Settings.html" } };
            WinJS.UI.SettingsFlyout.populateSettings(e);
        };
        // Make sure the following is called after the DOM has initialized. Typically this would be part of app initialization
        WinJS.Application.start();

        // Display a status message in the SDK sample output region
        WinJS.log && WinJS.log("Defaults settings flyout added from 5-SettingsFlyout-Settings.html", "samples", "status");
    }

    function scenario5ShowSettingsFlyout() {
        WinJS.UI.SettingsFlyout.showSettings("settingsDiv", "/html/5-SettingsFlyout-Settings.html");

        // Display a status message in the SDK sample output region
        WinJS.log && WinJS.log("Defaults settings flyout showing", "samples", "status");
    }
})();
