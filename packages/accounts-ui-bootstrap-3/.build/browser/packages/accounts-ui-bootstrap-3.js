(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/accounts_ui.js                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
if (!Accounts.ui)                                                                                                // 1
  Accounts.ui = {};                                                                                              // 2
                                                                                                                 // 3
if (!Accounts.ui._options) {                                                                                     // 4
  Accounts.ui._options = {                                                                                       // 5
    requestPermissions: {}                                                                                       // 6
  };                                                                                                             // 7
}                                                                                                                // 8
                                                                                                                 // 9
                                                                                                                 // 10
Accounts.ui.config = function(options) {                                                                         // 11
  // validate options keys                                                                                       // 12
  var VALID_KEYS = ['passwordSignupFields', 'requestPermissions'];                                               // 13
  _.each(_.keys(options), function (key) {                                                                       // 14
    if (!_.contains(VALID_KEYS, key))                                                                            // 15
      throw new Error("Accounts.ui.config: Invalid key: " + key);                                                // 16
  });                                                                                                            // 17
                                                                                                                 // 18
  // deal with `passwordSignupFields`                                                                            // 19
  if (options.passwordSignupFields) {                                                                            // 20
    if (_.contains([                                                                                             // 21
      "USERNAME_AND_EMAIL_CONFIRM",                                                                              // 22
      "USERNAME_AND_EMAIL",                                                                                      // 23
      "USERNAME_AND_OPTIONAL_EMAIL",                                                                             // 24
      "USERNAME_ONLY",                                                                                           // 25
      "EMAIL_ONLY"                                                                                               // 26
    ], options.passwordSignupFields)) {                                                                          // 27
      if (Accounts.ui._options.passwordSignupFields)                                                             // 28
        throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                  // 29
      else                                                                                                       // 30
        Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                                // 31
    } else {                                                                                                     // 32
      throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
    }                                                                                                            // 34
  }                                                                                                              // 35
                                                                                                                 // 36
  // deal with `requestPermissions`                                                                              // 37
  if (options.requestPermissions) {                                                                              // 38
    _.each(options.requestPermissions, function (scope, service) {                                               // 39
      if (Accounts.ui._options.requestPermissions[service]) {                                                    // 40
        throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);     // 41
      } else if (!(scope instanceof Array)) {                                                                    // 42
        throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                  // 43
      } else {                                                                                                   // 44
        Accounts.ui._options.requestPermissions[service] = scope;                                                // 45
      }                                                                                                          // 46
    });                                                                                                          // 47
  }                                                                                                              // 48
};                                                                                                               // 49
                                                                                                                 // 50
Accounts.ui._passwordSignupFields = function () {                                                                // 51
  return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                              // 52
};                                                                                                               // 53
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/template.login_buttons.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.__define__("_loginButtons",Package.handlebars.Handlebars.json_ast_to_func(["<div id=\"login-buttons\" class=\"login-buttons-dropdown-align-",["{",[[0,"align"]]],"\"></div>\n  ",["#",[[0,"if"],[0,"currentUser"]],["\n    ",["#",[[0,"if"],[0,"loggingIn"]],["\n      ","\n      ",["#",[[0,"if"],[0,"dropdown"]],["\n        ",[">","_loginButtonsLoggingIn"],"\n      "],["\n        <div class=\"login-buttons-with-only-one-button\">\n          ",[">","_loginButtonsLoggingInSingleLoginButton"],"\n        </div>\n      "]],"\n    "],["\n      ",[">","_loginButtonsLoggedIn"],"\n    "]],"\n  "],["\n    ",[">","_loginButtonsLoggedOut"],"\n  "]]]));
Template.__define__("_loginButtonsLoggedIn",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"dropdown"]],["\n    ",[">","_loginButtonsLoggedInDropdown"],"\n  "],["\n    <div class=\"login-buttons-with-only-one-button\">\n      ",[">","_loginButtonsLoggedInSingleLogoutButton"],"\n    </div>\n  "]]]));
Template.__define__("_loginButtonsLoggedOut",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"services"]],[" ","\n    ",["#",[[0,"if"],[0,"configurationLoaded"]],["\n      ",["#",[[0,"if"],[0,"dropdown"]],[" ","\n        ",[">","_loginButtonsLoggedOutDropdown"],"\n      "],["\n        ",["#",[[0,"with"],[0,"singleService"]],[" ","\n          <div class=\"login-buttons-with-only-one-button\">\n            ",["#",[[0,"if"],[0,"loggingIn"]],["\n              ",[">","_loginButtonsLoggingInSingleLoginButton"],"\n            "],["\n              ",[">","_loginButtonsLoggedOutSingleLoginButton"],"\n            "]],"\n          </div>\n        "]],"\n      "]],"\n    "]],"\n  "],["\n    <div class=\"no-services\">No login services configured</div>\n  "]]]));
Template.__define__("_loginButtonsMessages",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"errorMessage"]],["\n    <div class=\"alert alert-danger\">",["{",[[0,"errorMessage"]]],"</div>\n  "]],"\n  ",["#",[[0,"if"],[0,"infoMessage"]],["\n    <div class=\"alert alert-success no-margin\">",["{",[[0,"infoMessage"]]],"</div>\n  "]]]));
Template.__define__("_loginButtonsLoggingIn",Package.handlebars.Handlebars.json_ast_to_func([[">","_loginButtonsLoggingInPadding"],"\n  <div class=\"loading\">&nbsp;</div>\n  ",[">","_loginButtonsLoggingInPadding"]]));
Template.__define__("_loginButtonsLoggingInPadding",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"unless"],[0,"dropdown"]],["\n    ","\n    <div class=\"login-buttons-padding\">\n      <div class=\"login-button single-login-button\" style=\"visibility: hidden;\" id=\"login-buttons-logout\">&nbsp;</div>\n    </div>\n  "],["\n    ","\n    <div class=\"login-buttons-padding\" />\n  "]]]));
                                                                                                                 // 7
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/template.login_buttons_single.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.__define__("_loginButtonsLoggedOutSingleLoginButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    <div class=\"login-button single-login-button col-sm-12 ",["#",[[0,"if"],[0,"configured"]],["btn btn-info "],["configure-button btn btn-danger"]],"\" id=\"login-buttons-",["{",[[0,"name"]]],"\">\n      <div class=\"login-image\" id=\"login-buttons-image-",["{",[[0,"name"]]],"\"></div>\n      ",["#",[[0,"if"],[0,"configured"]],["\n        <span class=\"text-besides-image sign-in-text-",["{",[[0,"name"]]],"\">Sign in with ",["{",[[0,"capitalizedName"]]],"</span>\n      "],["\n        <span class=\"text-besides-image configure-text-",["{",[[0,"name"]]],"\">Configure ",["{",[[0,"capitalizedName"]]]," Login</span>\n      "]],"\n    </div>\n  </div>"]));
Template.__define__("_loginButtonsLoggingInSingleLoginButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    ",[">","_loginButtonsLoggingIn"],"\n  </div>"]));
Template.__define__("_loginButtonsLoggedInSingleLogoutButton",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-text-and-button\">\n    <div class=\"login-display-name\">\n      ",["{",[[0,"displayName"]]],"\n    </div>\n    <div class=\"login-button single-login-button\" id=\"login-buttons-logout\">Sign Out</div>\n  </div>"]));
                                                                                                                 // 4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                           //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Template.__define__("_loginButtonsLoggedInDropdown",Package.handlebars.Handlebars.json_ast_to_func(["<li id=\"login-dropdown-list\" class=\"dropdown\">\n    <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\">\n      ",["{",[[0,"displayName"]]],"\n      <b class=\"caret\"></b>\n    </a>\n    <div class=\"dropdown-menu col-sm-3\">\n      ",["#",[[0,"if"],[0,"inMessageOnlyFlow"]],["\n        ",[">","_loginButtonsMessages"],"\n      "],["\n        ",["#",[[0,"if"],[0,"inChangePasswordFlow"]],["\n          ",[">","_loginButtonsChangePassword"],"\n        "],["\n          ",[">","_loginButtonsLoggedInDropdownActions"],"\n        "]],"\n      "]],"\n    </div>\n  </li>"]));
Template.__define__("_loginButtonsLoggedInDropdownActions",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"allowChangingPassword"]],["\n    <button class=\"btn btn-default btn-block\" id=\"login-buttons-open-change-password\">Сменить пароль</button>\n  "]],"\n  <button class=\"btn btn-block btn-primary\" id=\"login-buttons-logout\">Выйти</button>"]));
Template.__define__("_loginButtonsLoggedOutDropdown",Package.handlebars.Handlebars.json_ast_to_func(["<li id=\"login-dropdown-list\" class=\"dropdown\">\n    <a class=\"dropdown-toggle\"  data-toggle=\"dropdown\">\n      Вход",["#",[[0,"unless"],[0,"forbidClientAccountCreation"]],[" / Регистрация"]],"\n      <b class=\"caret\"></b>\n    </a>\n    <div class=\"dropdown-menu\">\n      ",[">","_loginButtonsLoggedOutAllServices"],"\n    </div>\n  </li>"]));
Template.__define__("_loginButtonsLoggedOutAllServices",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"each"],[0,"services"]],["\n  ",["#",[[0,"unless"],[0,"hasPasswordService"]],["\n    ",[">","_loginButtonsMessages"],"\n  "]],"\n    ",["#",[[0,"if"],[0,"isPasswordService"]],["\n      ",["#",[[0,"if"],[0,"hasOtherServices"]],[" ","\n        ",[">","_loginButtonsLoggedOutPasswordServiceSeparator"],"\n      "]],"\n      ",[">","_loginButtonsLoggedOutPasswordService"],"\n    "],["\n      ",[">","_loginButtonsLoggedOutSingleLoginButton"],"\n    "]],"\n  "]]]));
Template.__define__("_loginButtonsLoggedOutPasswordServiceSeparator",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"or\">\n    <span class=\"hline\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n    <span class=\"or-text\">or</span>\n    <span class=\"hline\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>"]));
Template.__define__("_loginButtonsLoggedOutPasswordService",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inForgotPasswordFlow"]],["\n    ",[">","_forgotPasswordForm"],"\n  "],["\n    ",[">","_loginButtonsMessages"],"\n    ",["#",[[0,"each"],[0,"fields"]],["\n      ",[">","_loginButtonsFormField"],"\n    "]],"\n    <button class=\"btn btn-primary col-sm-12\" id=\"login-buttons-password\" type=\"button\">\n      ",["#",[[0,"if"],[0,"inSignupFlow"]],["\n        Create\n      "],["\n        Sign in\n      "]],"\n    </button>\n    ",["#",[[0,"if"],[0,"inLoginFlow"]],["\n      <div id=\"login-other-options\">\n      ",["#",[[0,"if"],[0,"showForgotPasswordLink"]],["\n        <a id=\"forgot-password-link\" class=\"pull-left\" >Forgot password?</a>\n      "]],"\n      ",["#",[[0,"if"],[0,"showCreateAccountLink"]],["\n        <a id=\"signup-link\" class=\"pull-right\" >Create account</a>\n      "]],"\n      </div>\n    "]],"\n    ",["#",[[0,"if"],[0,"inSignupFlow"]],["\n      ",[">","_loginButtonsBackToLoginLink"],"\n    "]],"\n  "]]]));
Template.__define__("_forgotPasswordForm",Package.handlebars.Handlebars.json_ast_to_func(["<div class=\"login-form\">\n    ",[">","_loginButtonsMessages"],"\n    <div id=\"forgot-password-email-label-and-input\"> ","\n      <input id=\"forgot-password-email\" type=\"email\" placeholder=\"E-mail\" class=\"form-control\" />\n    </div>\n    <button class=\"btn btn-primary login-button-form-submit col-sm-12\" id=\"login-buttons-forgot-password\">Reset password</button>\n    ",[">","_loginButtonsBackToLoginLink"],"\n  </div>"]));
Template.__define__("_loginButtonsBackToLoginLink",Package.handlebars.Handlebars.json_ast_to_func(["<button id=\"back-to-login-link\" class=\"btn btn-default col-sm-12\">Cancel</button>"]));
Template.__define__("_loginButtonsFormField",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <input id=\"login-",["{",[[0,"fieldName"]]],"\" type=\"",["{",[[0,"inputType"]]],"\" placeholder=\"",["{",[[0,"fieldLabel"]]],"\" class=\"form-control\" />\n  "]]]));
Template.__define__("_loginButtonsChangePassword",Package.handlebars.Handlebars.json_ast_to_func([[">","_loginButtonsMessages"],"\n  ",["#",[[0,"each"],[0,"fields"]],["\n    ",[">","_loginButtonsFormField"],"\n  "]],"\n  <button class=\"btn btn-primary\" id=\"login-buttons-do-change-password\">Change password</button>\n  <button class=\"btn btn-default login-close\">Close</button>"]));
                                                                                                                 // 11
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
Meteor.startup(function(){document.body.appendChild(Spark.render(Template.__define__(null,Package.handlebars.Handlebars.json_ast_to_func([[">","_resetPasswordDialog"],"\n  ",[">","_enrollAccountDialog"],"\n  ",[">","_justVerifiedEmailDialog"],"\n  ",[">","_configureLoginServiceDialog"],"\n\n  <!-- if we're not showing a dropdown, we need some other place to show messages -->\n  ",[">","_loginButtonsMessagesDialog"]]))));});Template.__define__("_resetPasswordDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inResetPasswordFlow"]],["\n    <div class=\"modal\" id=\"login-buttons-reset-password-modal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <h4 class=\"modal-title\">Reset your password</h4>\n          </div>\n          <div class=\"modal-body\">\n            <input id=\"reset-password-new-password\" class=\"form-control\" type=\"password\" placeholder=\"New Password\"/>\n            ",[">","_loginButtonsMessages"],"\n          </div>\n          <div class=\"modal-footer\">\n            <a class=\"btn btn-default\" id=\"login-buttons-cancel-reset-password\">Close</a>\n            <button class=\"btn btn-primary\" id=\"login-buttons-reset-password-button\">\n              Set password\n            </button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dalog -->\n    </div><!-- /.modal -->\n  "]]]));
Template.__define__("_enrollAccountDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"inEnrollAccountFlow"]],["\n    <div class=\"modal\" id=\"login-buttons-enroll-account-modal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n            <h4 class=\"modal-title\">Choose a password</h4>\n          </div>\n          <div class=\"modal-body\">\n            <input id=\"enroll-account-password\" class=\"form-control\" type=\"password\" placeholder=\"New Password\" />\n            ",[">","_loginButtonsMessages"],"\n          </div>\n          <div class=\"modal-footer\">\n            <a class=\"btn btn-default\" id=\"login-buttons-cancel-enroll-account-button\">Close</a>\n            <button class=\"btn btn-primary\" id=\"login-buttons-enroll-account-button\">\n              Set password\n            </button>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dalog -->\n    </div><!-- /.modal -->\n  "]]]));
Template.__define__("_justVerifiedEmailDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <div class=\"accounts-dialog accounts-centered-dialog\">\n      Email verified\n      <div class=\"login-button\" id=\"just-verified-dismiss-button\">Dismiss</div>\n    </div>\n  "]]]));
Template.__define__("_configureLoginServiceDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n  <div class=\"modal-dialog\" id=\"configure-login-service-dialog-modal\">\n      <div class=\"modal-content\">\n          <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Configure Service</h4>\n          </div>\n          <div class=\"modal-body\">\n            <div id=\"configure-login-service-dialog\" class=\"accounts-dialog accounts-centered-dialog\">\n              ",["!",[[0,"configurationSteps"]]],"\n              <p>\n                Now, copy over some details.\n              </p>\n              <p>\n                <table>\n                  <colgroup>\n                    <col span=\"1\" class=\"configuration_labels\">\n                    <col span=\"1\" class=\"configuration_inputs\">\n                  </colgroup>\n                  ",["#",[[0,"each"],[0,"configurationFields"]],["\n                    <tr>\n                      <td>\n                        <label for=\"configure-login-service-dialog-",["{",[[0,"property"]]],"\">",["{",[[0,"label"]]],"</label>\n                      </td>\n                      <td>\n                        <input id=\"configure-login-service-dialog-",["{",[[0,"property"]]],"\" type=\"text\" />\n                      </td>\n                    </tr>\n                  "]],"\n                </table>\n              </p>\n            </div>\n          </div>\n          <div class=\"modal-footer new-section\">\n                <div class=\"login-button btn btn-danger configure-login-service-dismiss-button\">\n                  I'll do this later\n                </div>\n                ",["#",[[0,"isolate"]],["\n                  <div class=\"login-button login-button-configure btn btn-success ",["#",[[0,"if"],[0,"saveDisabled"]],["login-button-disabled"]],"\"\n                     id=\"configure-login-service-dialog-save-configuration\">\n                    Save Configuration\n                  </div>\n                "]],"\n              </div>\n      </div>\n  </div>\n  <div class=\"modal-backdrop  in\"></div>\n  "]]]));
Template.__define__("_loginButtonsMessagesDialog",Package.handlebars.Handlebars.json_ast_to_func([["#",[[0,"if"],[0,"visible"]],["\n    <div class=\"accounts-dialog accounts-centered-dialog\" id=\"login-buttons-message-dialog\">\n      ",[">","_loginButtonsMessages"],"\n      <div class=\"login-button\" id=\"messages-dialog-dismiss-button\">Dismiss</div>\n    </div>\n  "]]]));
                                                                                                                 // 6
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/login_buttons_session.js                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
  var VALID_KEYS = [                                                                                             // 2
    'dropdownVisible',                                                                                           // 3
                                                                                                                 // 4
    // XXX consider replacing these with one key that has an enum for values.                                    // 5
    'inSignupFlow',                                                                                              // 6
    'inForgotPasswordFlow',                                                                                      // 7
    'inChangePasswordFlow',                                                                                      // 8
    'inMessageOnlyFlow',                                                                                         // 9
                                                                                                                 // 10
    'errorMessage',                                                                                              // 11
    'infoMessage',                                                                                               // 12
                                                                                                                 // 13
    // dialogs with messages (info and error)                                                                    // 14
    'resetPasswordToken',                                                                                        // 15
    'enrollAccountToken',                                                                                        // 16
    'justVerifiedEmail',                                                                                         // 17
                                                                                                                 // 18
    'configureLoginServiceDialogVisible',                                                                        // 19
    'configureLoginServiceDialogServiceName',                                                                    // 20
    'configureLoginServiceDialogSaveDisabled'                                                                    // 21
  ];                                                                                                             // 22
                                                                                                                 // 23
  var validateKey = function (key) {                                                                             // 24
    if (!_.contains(VALID_KEYS, key))                                                                            // 25
      throw new Error("Invalid key in loginButtonsSession: " + key);                                             // 26
  };                                                                                                             // 27
                                                                                                                 // 28
  var KEY_PREFIX = "Meteor.loginButtons.";                                                                       // 29
                                                                                                                 // 30
  // XXX we should have a better pattern for code private to a package like this one                             // 31
  Accounts._loginButtonsSession = {                                                                              // 32
    set: function(key, value) {                                                                                  // 33
      validateKey(key);                                                                                          // 34
      if (_.contains(['errorMessage', 'infoMessage'], key))                                                      // 35
        throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");
                                                                                                                 // 37
      this._set(key, value);                                                                                     // 38
    },                                                                                                           // 39
                                                                                                                 // 40
    _set: function(key, value) {                                                                                 // 41
      Session.set(KEY_PREFIX + key, value);                                                                      // 42
    },                                                                                                           // 43
                                                                                                                 // 44
    get: function(key) {                                                                                         // 45
      validateKey(key);                                                                                          // 46
      return Session.get(KEY_PREFIX + key);                                                                      // 47
    },                                                                                                           // 48
                                                                                                                 // 49
    closeDropdown: function () {                                                                                 // 50
      this.set('inSignupFlow', false);                                                                           // 51
      this.set('inForgotPasswordFlow', false);                                                                   // 52
      this.set('inChangePasswordFlow', false);                                                                   // 53
      this.set('inMessageOnlyFlow', false);                                                                      // 54
      this.set('dropdownVisible', false);                                                                        // 55
      this.resetMessages();                                                                                      // 56
    },                                                                                                           // 57
                                                                                                                 // 58
    infoMessage: function(message) {                                                                             // 59
      this._set("errorMessage", null);                                                                           // 60
      this._set("infoMessage", message);                                                                         // 61
      this.ensureMessageVisible();                                                                               // 62
    },                                                                                                           // 63
                                                                                                                 // 64
    errorMessage: function(message) {                                                                            // 65
      this._set("errorMessage", message);                                                                        // 66
      this._set("infoMessage", null);                                                                            // 67
      this.ensureMessageVisible();                                                                               // 68
    },                                                                                                           // 69
                                                                                                                 // 70
    // is there a visible dialog that shows messages (info and error)                                            // 71
    isMessageDialogVisible: function () {                                                                        // 72
      return this.get('resetPasswordToken') ||                                                                   // 73
        this.get('enrollAccountToken') ||                                                                        // 74
        this.get('justVerifiedEmail');                                                                           // 75
    },                                                                                                           // 76
                                                                                                                 // 77
    // ensure that somethings displaying a message (info or error) is                                            // 78
    // visible.  if a dialog with messages is open, do nothing;                                                  // 79
    // otherwise open the dropdown.                                                                              // 80
    //                                                                                                           // 81
    // notably this doesn't matter when only displaying a single login                                           // 82
    // button since then we have an explicit message dialog                                                      // 83
    // (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                           // 84
    // this case.                                                                                                // 85
    ensureMessageVisible: function () {                                                                          // 86
      if (!this.isMessageDialogVisible())                                                                        // 87
        this.set("dropdownVisible", true);                                                                       // 88
    },                                                                                                           // 89
                                                                                                                 // 90
    resetMessages: function () {                                                                                 // 91
      this._set("errorMessage", null);                                                                           // 92
      this._set("infoMessage", null);                                                                            // 93
    },                                                                                                           // 94
                                                                                                                 // 95
    configureService: function (name) {                                                                          // 96
      this.set('configureLoginServiceDialogVisible', true);                                                      // 97
      this.set('configureLoginServiceDialogServiceName', name);                                                  // 98
      this.set('configureLoginServiceDialogSaveDisabled', true);                                                 // 99
    }                                                                                                            // 100
  };                                                                                                             // 101
}) ();                                                                                                           // 102
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/login_buttons.js                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function() {                                                                                                    // 1
    if (!Accounts._loginButtons)                                                                                 // 2
        Accounts._loginButtons = {};                                                                             // 3
                                                                                                                 // 4
    // for convenience                                                                                           // 5
    var loginButtonsSession = Accounts._loginButtonsSession;                                                     // 6
                                                                                                                 // 7
    Handlebars.registerHelper(                                                                                   // 8
        "loginButtons",                                                                                          // 9
        function(options) {                                                                                      // 10
            if (options.hash.align === "left")                                                                   // 11
                return new Handlebars.SafeString(Template._loginButtons({                                        // 12
                    align: "left"                                                                                // 13
                }));                                                                                             // 14
            else                                                                                                 // 15
                return new Handlebars.SafeString(Template._loginButtons({                                        // 16
                    align: "right"                                                                               // 17
                }));                                                                                             // 18
        });                                                                                                      // 19
                                                                                                                 // 20
    // shared between dropdown and single mode                                                                   // 21
    Template._loginButtons.events({                                                                              // 22
        'click #login-buttons-logout': function() {                                                              // 23
            Meteor.logout(function() {                                                                           // 24
                loginButtonsSession.closeDropdown();                                                             // 25
            });                                                                                                  // 26
        }                                                                                                        // 27
    });                                                                                                          // 28
                                                                                                                 // 29
    Template._loginButtons.preserve({                                                                            // 30
        'input[id]': Spark._labelFromIdOrName                                                                    // 31
    });                                                                                                          // 32
                                                                                                                 // 33
    //                                                                                                           // 34
    // loginButtonLoggedOut template                                                                             // 35
    //                                                                                                           // 36
                                                                                                                 // 37
    Template._loginButtonsLoggedOut.dropdown = function() {                                                      // 38
        return Accounts._loginButtons.dropdown();                                                                // 39
    };                                                                                                           // 40
                                                                                                                 // 41
    Template._loginButtonsLoggedOut.services = function() {                                                      // 42
        return Accounts._loginButtons.getLoginServices();                                                        // 43
    };                                                                                                           // 44
                                                                                                                 // 45
    Template._loginButtonsLoggedOut.singleService = function() {                                                 // 46
        var services = Accounts._loginButtons.getLoginServices();                                                // 47
        if (services.length !== 1)                                                                               // 48
            throw new Error(                                                                                     // 49
                "Shouldn't be rendering this template with more than one configured service");                   // 50
        return services[0];                                                                                      // 51
    };                                                                                                           // 52
                                                                                                                 // 53
    Template._loginButtonsLoggedOut.configurationLoaded = function() {                                           // 54
        return Accounts.loginServicesConfigured();                                                               // 55
    };                                                                                                           // 56
                                                                                                                 // 57
                                                                                                                 // 58
    //                                                                                                           // 59
    // loginButtonsLoggedIn template                                                                             // 60
    //                                                                                                           // 61
                                                                                                                 // 62
    // decide whether we should show a dropdown rather than a row of                                             // 63
    // buttons                                                                                                   // 64
    Template._loginButtonsLoggedIn.dropdown = function() {                                                       // 65
        return Accounts._loginButtons.dropdown();                                                                // 66
    };                                                                                                           // 67
                                                                                                                 // 68
    Template._loginButtonsLoggedIn.displayName = function() {                                                    // 69
        return Accounts._loginButtons.displayName();                                                             // 70
    };                                                                                                           // 71
                                                                                                                 // 72
                                                                                                                 // 73
                                                                                                                 // 74
    //                                                                                                           // 75
    // loginButtonsMessage template                                                                              // 76
    //                                                                                                           // 77
                                                                                                                 // 78
    Template._loginButtonsMessages.errorMessage = function() {                                                   // 79
        return loginButtonsSession.get('errorMessage');                                                          // 80
    };                                                                                                           // 81
                                                                                                                 // 82
    Template._loginButtonsMessages.infoMessage = function() {                                                    // 83
        return loginButtonsSession.get('infoMessage');                                                           // 84
    };                                                                                                           // 85
                                                                                                                 // 86
    //                                                                                                           // 87
    // loginButtonsLoggingInPadding template                                                                     // 88
    //                                                                                                           // 89
                                                                                                                 // 90
    Template._loginButtonsLoggingInPadding.dropdown = function() {                                               // 91
        return Accounts._loginButtons.dropdown();                                                                // 92
    };                                                                                                           // 93
                                                                                                                 // 94
    //                                                                                                           // 95
    // helpers                                                                                                   // 96
    //                                                                                                           // 97
                                                                                                                 // 98
    Accounts._loginButtons.displayName = function() {                                                            // 99
        var user = Meteor.user();                                                                                // 100
        if (!user)                                                                                               // 101
            return '';                                                                                           // 102
                                                                                                                 // 103
        if (user.profile && user.profile.name)                                                                   // 104
            return user.profile.name;                                                                            // 105
        if (user.username)                                                                                       // 106
            return user.username;                                                                                // 107
        if (user.emails && user.emails[0] && user.emails[0].address)                                             // 108
            return user.emails[0].address;                                                                       // 109
                                                                                                                 // 110
        return '';                                                                                               // 111
    };                                                                                                           // 112
                                                                                                                 // 113
    Accounts._loginButtons.getLoginServices = function() {                                                       // 114
        // First look for OAuth services.                                                                        // 115
        var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                           // 116
                                                                                                                 // 117
        // Be equally kind to all login services. This also preserves                                            // 118
        // backwards-compatibility. (But maybe order should be                                                   // 119
        // configurable?)                                                                                        // 120
        services.sort();                                                                                         // 121
                                                                                                                 // 122
        // Add password, if it's there; it must come last.                                                       // 123
        if (this.hasPasswordService())                                                                           // 124
            services.push('password');                                                                           // 125
                                                                                                                 // 126
        return _.map(services, function(name) {                                                                  // 127
            return {                                                                                             // 128
                name: name                                                                                       // 129
            };                                                                                                   // 130
        });                                                                                                      // 131
    };                                                                                                           // 132
                                                                                                                 // 133
    Accounts._loginButtons.hasPasswordService = function() {                                                     // 134
        return !!Package['accounts-password'];                                                                   // 135
    };                                                                                                           // 136
                                                                                                                 // 137
    Accounts._loginButtons.dropdown = function() {                                                               // 138
        return this.hasPasswordService() || getLoginServices().length > 1;                                       // 139
    };                                                                                                           // 140
                                                                                                                 // 141
    // XXX improve these. should this be in accounts-password instead?                                           // 142
    //                                                                                                           // 143
    // XXX these will become configurable, and will be validated on                                              // 144
    // the server as well.                                                                                       // 145
    Accounts._loginButtons.validateUsername = function(username) {                                               // 146
        if (username.length >= 3) {                                                                              // 147
            return true;                                                                                         // 148
        } else {                                                                                                 // 149
            loginButtonsSession.errorMessage("Username must be at least 3 characters long");                     // 150
            return false;                                                                                        // 151
        }                                                                                                        // 152
    };                                                                                                           // 153
                                                                                                                 // 154
    Accounts._loginButtons.validateSkype = function(skype) {                                                     // 155
        if (skype.length > 0) {                                                                                  // 156
            if (!Meteor.users.findOne({'profile.skype': skype})) {                                               // 157
            	return true;                                                                                        // 158
            } else {                                                                                             // 159
            	loginButtonsSession.errorMessage("Такой скайп уже есть");                                           // 160
            	return false;                                                                                       // 161
            }                                                                                                    // 162
        } else {                                                                                                 // 163
            loginButtonsSession.errorMessage("Введите скайп");                                                   // 164
            return false;                                                                                        // 165
        }                                                                                                        // 166
    };                                                                                                           // 167
    Accounts._loginButtons.validateEmail = function(email) {                                                     // 168
        if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === '')               // 169
            return true;                                                                                         // 170
                                                                                                                 // 171
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                                 // 173
        if (re.test(email)) {                                                                                    // 174
            return true;                                                                                         // 175
        } else {                                                                                                 // 176
            loginButtonsSession.errorMessage("Invalid email");                                                   // 177
            return false;                                                                                        // 178
        }                                                                                                        // 179
    };                                                                                                           // 180
    Accounts._loginButtons.validatePassword = function(password) {                                               // 181
        if (password.length >= 6) {                                                                              // 182
            return true;                                                                                         // 183
        } else {                                                                                                 // 184
            loginButtonsSession.errorMessage("Password must be at least 6 characters long");                     // 185
            return false;                                                                                        // 186
        }                                                                                                        // 187
    };                                                                                                           // 188
                                                                                                                 // 189
})();                                                                                                            // 190
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/login_buttons_single.js                                                      //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
  // for convenience                                                                                             // 2
  var loginButtonsSession = Accounts._loginButtonsSession;                                                       // 3
                                                                                                                 // 4
  Template._loginButtonsLoggedOutSingleLoginButton.events({                                                      // 5
    'click .login-button': function () {                                                                         // 6
      var serviceName = this.name;                                                                               // 7
      loginButtonsSession.resetMessages();                                                                       // 8
      var callback = function (err) {                                                                            // 9
        if (!err) {                                                                                              // 10
          loginButtonsSession.closeDropdown();                                                                   // 11
        } else if (err instanceof Accounts.LoginCancelledError) {                                                // 12
          // do nothing                                                                                          // 13
        } else if (err instanceof Accounts.ConfigError) {                                                        // 14
          loginButtonsSession.configureService(serviceName);                                                     // 15
        } else {                                                                                                 // 16
          loginButtonsSession.errorMessage(err.reason || "Unknown error");                                       // 17
        }                                                                                                        // 18
      };                                                                                                         // 19
                                                                                                                 // 20
      var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                      // 21
                                                                                                                 // 22
      var options = {}; // use default scope unless specified                                                    // 23
      if (Accounts.ui._options.requestPermissions[serviceName])                                                  // 24
        options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                       // 25
                                                                                                                 // 26
      loginWithService(options, callback);                                                                       // 27
    }                                                                                                            // 28
  });                                                                                                            // 29
                                                                                                                 // 30
  Template._loginButtonsLoggedOutSingleLoginButton.configured = function () {                                    // 31
    return !!Accounts.loginServiceConfiguration.findOne({service: this.name});                                   // 32
  };                                                                                                             // 33
                                                                                                                 // 34
  Template._loginButtonsLoggedOutSingleLoginButton.capitalizedName = function () {                               // 35
    if (this.name === 'github')                                                                                  // 36
      // XXX we should allow service packages to set their capitalized name                                      // 37
      return 'GitHub';                                                                                           // 38
    else                                                                                                         // 39
      return capitalize(this.name);                                                                              // 40
  };                                                                                                             // 41
                                                                                                                 // 42
  // XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                 // 43
  var capitalize = function(str){                                                                                // 44
    str = str == null ? '' : String(str);                                                                        // 45
    return str.charAt(0).toUpperCase() + str.slice(1);                                                           // 46
  };                                                                                                             // 47
}) ();                                                                                                           // 48
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                    //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
                                                                                                                 // 2
  // for convenience                                                                                             // 3
  var loginButtonsSession = Accounts._loginButtonsSession;                                                       // 4
                                                                                                                 // 5
  // events shared between loginButtonsLoggedOutDropdown and                                                     // 6
  // loginButtonsLoggedInDropdown                                                                                // 7
  Template._loginButtons.events({                                                                                // 8
    'click input, click label, click button, click .dropdown-menu, click .alert': function(event) {              // 9
      event.stopPropagation();                                                                                   // 10
    },                                                                                                           // 11
    'click #login-name-link, click #login-sign-in-link': function () {                                           // 12
      event.stopPropagation();                                                                                   // 13
      loginButtonsSession.set('dropdownVisible', true);                                                          // 14
      Meteor.flush();                                                                                            // 15
    },                                                                                                           // 16
    'click .login-close': function () {                                                                          // 17
      loginButtonsSession.closeDropdown();                                                                       // 18
    }                                                                                                            // 19
  });                                                                                                            // 20
                                                                                                                 // 21
                                                                                                                 // 22
  //                                                                                                             // 23
  // loginButtonsLoggedInDropdown template and related                                                           // 24
  //                                                                                                             // 25
                                                                                                                 // 26
  Template._loginButtonsLoggedInDropdown.events({                                                                // 27
    'click #login-buttons-open-change-password': function(event) {                                               // 28
      event.stopPropagation();                                                                                   // 29
      loginButtonsSession.resetMessages();                                                                       // 30
      loginButtonsSession.set('inChangePasswordFlow', true);                                                     // 31
      Meteor.flush();                                                                                            // 32
      toggleDropdown();                                                                                          // 33
    }                                                                                                            // 34
  });                                                                                                            // 35
                                                                                                                 // 36
  Template._loginButtonsLoggedInDropdown.displayName = function () {                                             // 37
    return Accounts._loginButtons.displayName();                                                                 // 38
  };                                                                                                             // 39
                                                                                                                 // 40
  Template._loginButtonsLoggedInDropdown.inChangePasswordFlow = function () {                                    // 41
    return loginButtonsSession.get('inChangePasswordFlow');                                                      // 42
  };                                                                                                             // 43
                                                                                                                 // 44
  Template._loginButtonsLoggedInDropdown.inMessageOnlyFlow = function () {                                       // 45
    return loginButtonsSession.get('inMessageOnlyFlow');                                                         // 46
  };                                                                                                             // 47
                                                                                                                 // 48
  Template._loginButtonsLoggedInDropdown.dropdownVisible = function () {                                         // 49
    return loginButtonsSession.get('dropdownVisible');                                                           // 50
  };                                                                                                             // 51
                                                                                                                 // 52
  Template._loginButtonsLoggedInDropdownActions.allowChangingPassword = function () {                            // 53
    // it would be more correct to check whether the user has a password set,                                    // 54
    // but in order to do that we'd have to send more data down to the client,                                   // 55
    // and it'd be preferable not to send down the entire service.password document.                             // 56
    //                                                                                                           // 57
    // instead we use the heuristic: if the user has a username or email set.                                    // 58
    var user = Meteor.user();                                                                                    // 59
    return user.username || (user.emails && user.emails[0] && user.emails[0].address);                           // 60
  };                                                                                                             // 61
                                                                                                                 // 62
                                                                                                                 // 63
  //                                                                                                             // 64
  // loginButtonsLoggedOutDropdown template and related                                                          // 65
  //                                                                                                             // 66
                                                                                                                 // 67
  Template._loginButtonsLoggedOutDropdown.events({                                                               // 68
    'click #login-buttons-password': function () {                                                               // 69
      loginOrSignup();                                                                                           // 70
    },                                                                                                           // 71
                                                                                                                 // 72
    'keypress #forgot-password-email': function (event) {                                                        // 73
      if (event.keyCode === 13)                                                                                  // 74
        forgotPassword();                                                                                        // 75
    },                                                                                                           // 76
                                                                                                                 // 77
    'click #login-buttons-forgot-password': function (event) {                                                   // 78
      event.stopPropagation();                                                                                   // 79
      forgotPassword();                                                                                          // 80
    },                                                                                                           // 81
                                                                                                                 // 82
    'click #signup-link': function (event) {                                                                     // 83
      event.stopPropagation();                                                                                   // 84
      loginButtonsSession.resetMessages();                                                                       // 85
                                                                                                                 // 86
      // store values of fields before swtiching to the signup form                                              // 87
      var username = trimmedElementValueById('login-username');                                                  // 88
      var email = trimmedElementValueById('login-email');                                                        // 89
      var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                  // 90
      // notably not trimmed. a password could (?) start or end with a space                                     // 91
      var password = elementValueById('login-password');                                                         // 92
                                                                                                                 // 93
      loginButtonsSession.set('inSignupFlow', true);                                                             // 94
      loginButtonsSession.set('inForgotPasswordFlow', false);                                                    // 95
                                                                                                                 // 96
      // force the ui to update so that we have the approprate fields to fill in                                 // 97
      Meteor.flush();                                                                                            // 98
                                                                                                                 // 99
      // update new fields with appropriate defaults                                                             // 100
      if (username !== null) {                                                                                   // 101
        document.getElementById('login-username').value = username;                                              // 102
      } else if (email !== null) {                                                                               // 103
        document.getElementById('login-email').value = email;                                                    // 104
      } else if (usernameOrEmail !== null) {                                                                     // 105
        if (usernameOrEmail.indexOf('@') === -1) {                                                               // 106
          document.getElementById('login-username').value = usernameOrEmail;                                     // 107
        }                                                                                                        // 108
      }                                                                                                          // 109
      else                                                                                                       // 110
        document.getElementById('login-email').value = usernameOrEmail;                                          // 111
    },                                                                                                           // 112
    'click #forgot-password-link': function (event) {                                                            // 113
      event.stopPropagation();                                                                                   // 114
      loginButtonsSession.resetMessages();                                                                       // 115
                                                                                                                 // 116
      // store values of fields before swtiching to the signup form                                              // 117
      var email = trimmedElementValueById('login-email');                                                        // 118
      var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                  // 119
                                                                                                                 // 120
      loginButtonsSession.set('inSignupFlow', false);                                                            // 121
      loginButtonsSession.set('inForgotPasswordFlow', true);                                                     // 122
                                                                                                                 // 123
      // force the ui to update so that we have the approprate fields to fill in                                 // 124
      Meteor.flush();                                                                                            // 125
      //toggleDropdown();                                                                                        // 126
                                                                                                                 // 127
      // update new fields with appropriate defaults                                                             // 128
      if (email !== null)                                                                                        // 129
        document.getElementById('forgot-password-email').value = email;                                          // 130
      else if (usernameOrEmail !== null)                                                                         // 131
        if (usernameOrEmail.indexOf('@') !== -1)                                                                 // 132
          document.getElementById('forgot-password-email').value = usernameOrEmail;                              // 133
    },                                                                                                           // 134
    'click #back-to-login-link': function () {                                                                   // 135
      loginButtonsSession.resetMessages();                                                                       // 136
                                                                                                                 // 137
      var username = trimmedElementValueById('login-username');                                                  // 138
      var email = trimmedElementValueById('login-email')                                                         // 139
            || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?                  // 140
                                                                                                                 // 141
      loginButtonsSession.set('inSignupFlow', false);                                                            // 142
      loginButtonsSession.set('inForgotPasswordFlow', false);                                                    // 143
                                                                                                                 // 144
      // force the ui to update so that we have the approprate fields to fill in                                 // 145
      Meteor.flush();                                                                                            // 146
                                                                                                                 // 147
      if (document.getElementById('login-username'))                                                             // 148
        document.getElementById('login-username').value = username;                                              // 149
      if (document.getElementById('login-email'))                                                                // 150
        document.getElementById('login-email').value = email;                                                    // 151
      // "login-password" is preserved thanks to the preserve-inputs package                                     // 152
      if (document.getElementById('login-username-or-email'))                                                    // 153
        document.getElementById('login-username-or-email').value = email || username;                            // 154
    },                                                                                                           // 155
    'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function (event) {
      if (event.keyCode === 13)                                                                                  // 157
        loginOrSignup();                                                                                         // 158
    }                                                                                                            // 159
  });                                                                                                            // 160
                                                                                                                 // 161
  // additional classes that can be helpful in styling the dropdown                                              // 162
  Template._loginButtonsLoggedOutDropdown.additionalClasses = function () {                                      // 163
    if (!Accounts.password) {                                                                                    // 164
      return false;                                                                                              // 165
    } else {                                                                                                     // 166
      if (loginButtonsSession.get('inSignupFlow')) {                                                             // 167
        return 'login-form-create-account';                                                                      // 168
      } else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                              // 169
        return 'login-form-forgot-password';                                                                     // 170
      } else {                                                                                                   // 171
        return 'login-form-sign-in';                                                                             // 172
      }                                                                                                          // 173
    }                                                                                                            // 174
  };                                                                                                             // 175
                                                                                                                 // 176
  Template._loginButtonsLoggedOutDropdown.dropdownVisible = function () {                                        // 177
    return loginButtonsSession.get('dropdownVisible');                                                           // 178
  };                                                                                                             // 179
                                                                                                                 // 180
  Template._loginButtonsLoggedOutDropdown.hasPasswordService = function () {                                     // 181
    return Accounts._loginButtons.hasPasswordService();                                                          // 182
  };                                                                                                             // 183
                                                                                                                 // 184
  Template._loginButtonsLoggedOutDropdown.forbidClientAccountCreation = function () {                            // 185
    return Accounts._options.forbidClientAccountCreation;                                                        // 186
  };                                                                                                             // 187
                                                                                                                 // 188
  Template._loginButtonsLoggedOutAllServices.services = function () {                                            // 189
    return Accounts._loginButtons.getLoginServices();                                                            // 190
  };                                                                                                             // 191
                                                                                                                 // 192
  Template._loginButtonsLoggedOutAllServices.isPasswordService = function () {                                   // 193
    return this.name === 'password';                                                                             // 194
  };                                                                                                             // 195
                                                                                                                 // 196
  Template._loginButtonsLoggedOutAllServices.hasOtherServices = function () {                                    // 197
    return Accounts._loginButtons.getLoginServices().length > 1;                                                 // 198
  };                                                                                                             // 199
                                                                                                                 // 200
  Template._loginButtonsLoggedOutAllServices.hasPasswordService = function () {                                  // 201
    return Accounts._loginButtons.hasPasswordService();                                                          // 202
  };                                                                                                             // 203
                                                                                                                 // 204
  Template._loginButtonsLoggedOutPasswordService.fields = function () {                                          // 205
    var loginFields = [                                                                                          // 206
      {fieldName: 'username-or-email', fieldLabel: 'Username or Email',                                          // 207
       visible: function () {                                                                                    // 208
         return _.contains(                                                                                      // 209
           ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],                  // 210
           Accounts.ui._passwordSignupFields());                                                                 // 211
       }},                                                                                                       // 212
      {fieldName: 'username', fieldLabel: 'Username',                                                            // 213
       visible: function () {                                                                                    // 214
         return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";                                         // 215
       }},                                                                                                       // 216
      {fieldName: 'email', fieldLabel: 'Email', inputType: 'email',                                              // 217
       visible: function () {                                                                                    // 218
         return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";                                            // 219
       }},                                                                                                       // 220
      {fieldName: 'password', fieldLabel: 'Password', inputType: 'password',                                     // 221
       visible: function () {                                                                                    // 222
         return true;                                                                                            // 223
       }}                                                                                                        // 224
    ];                                                                                                           // 225
                                                                                                                 // 226
    var signupFields = [                                                                                         // 227
      {fieldName: 'username', fieldLabel: 'Username',                                                            // 228
       visible: function () {                                                                                    // 229
         return _.contains(                                                                                      // 230
           ["USERNAME_AND_EMAIL_CONFIRM","USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],  // 231
           Accounts.ui._passwordSignupFields());                                                                 // 232
       }},                                                                                                       // 233
      {fieldName: 'email', fieldLabel: 'Email', inputType: 'email',                                              // 234
       visible: function () {                                                                                    // 235
         return _.contains(                                                                                      // 236
           ["USERNAME_AND_EMAIL_CONFIRM","USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                    // 237
           Accounts.ui._passwordSignupFields());                                                                 // 238
       }},                                                                                                       // 239
      {fieldName: 'email', fieldLabel: 'Email (optional)', inputType: 'email',                                   // 240
       visible: function () {                                                                                    // 241
         return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                           // 242
       }},                                                                                                       // 243
      {                                                                                                          // 244
        fieldName: 'skype',                                                                                      // 245
        fieldLabel: 'Skype (обязательно)',                                                                       // 246
        inputType: 'text',                                                                                       // 247
        visible: true                                                                                            // 248
      },                                                                                                         // 249
      {fieldName: 'password', fieldLabel: 'Password', inputType: 'password',                                     // 250
       visible: function () {                                                                                    // 251
         return true;                                                                                            // 252
       }},                                                                                                       // 253
      {fieldName: 'password-again', fieldLabel: 'Password (again)',                                              // 254
       inputType: 'password',                                                                                    // 255
       visible: function () {                                                                                    // 256
         // No need to make users double-enter their password if                                                 // 257
         // they'll necessarily have an email set, since they can use                                            // 258
         // the "forgot password" flow.                                                                          // 259
         return _.contains(                                                                                      // 260
           ["USERNAME_AND_EMAIL_CONFIRM","USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                        // 261
           Accounts.ui._passwordSignupFields());                                                                 // 262
       }}                                                                                                        // 263
    ];                                                                                                           // 264
                                                                                                                 // 265
    return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                 // 266
  };                                                                                                             // 267
                                                                                                                 // 268
  Template._loginButtonsLoggedOutPasswordService.inForgotPasswordFlow = function () {                            // 269
    return loginButtonsSession.get('inForgotPasswordFlow');                                                      // 270
  };                                                                                                             // 271
                                                                                                                 // 272
  Template._loginButtonsLoggedOutPasswordService.inLoginFlow = function () {                                     // 273
    return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');         // 274
  };                                                                                                             // 275
                                                                                                                 // 276
  Template._loginButtonsLoggedOutPasswordService.inSignupFlow = function () {                                    // 277
    return loginButtonsSession.get('inSignupFlow');                                                              // 278
  };                                                                                                             // 279
                                                                                                                 // 280
  Template._loginButtonsLoggedOutPasswordService.showForgotPasswordLink = function () {                          // 281
    return _.contains(                                                                                           // 282
      ["USERNAME_AND_EMAIL_CONFIRM","USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],          // 283
      Accounts.ui._passwordSignupFields());                                                                      // 284
  };                                                                                                             // 285
                                                                                                                 // 286
  Template._loginButtonsLoggedOutPasswordService.showCreateAccountLink = function() {                            // 287
    return !Accounts._options.forbidClientAccountCreation;                                                       // 288
  };                                                                                                             // 289
                                                                                                                 // 290
  Template._loginButtonsFormField.inputType = function () {                                                      // 291
    return this.inputType || "text";                                                                             // 292
  };                                                                                                             // 293
                                                                                                                 // 294
                                                                                                                 // 295
  //                                                                                                             // 296
  // loginButtonsChangePassword template                                                                         // 297
  //                                                                                                             // 298
                                                                                                                 // 299
  Template._loginButtonsChangePassword.events({                                                                  // 300
    'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function (event) { // 301
      if (event.keyCode === 13)                                                                                  // 302
        changePassword();                                                                                        // 303
    },                                                                                                           // 304
    'click #login-buttons-do-change-password': function (event) {                                                // 305
      event.stopPropagation();                                                                                   // 306
      changePassword();                                                                                          // 307
    }                                                                                                            // 308
  });                                                                                                            // 309
                                                                                                                 // 310
  Template._loginButtonsChangePassword.fields = function () {                                                    // 311
    return [                                                                                                     // 312
      {fieldName: 'old-password', fieldLabel: 'Current Password', inputType: 'password',                         // 313
       visible: function () {                                                                                    // 314
         return true;                                                                                            // 315
       }},                                                                                                       // 316
      {fieldName: 'password', fieldLabel: 'New Password', inputType: 'password',                                 // 317
       visible: function () {                                                                                    // 318
         return true;                                                                                            // 319
       }},                                                                                                       // 320
      {fieldName: 'password-again', fieldLabel: 'New Password (again)',                                          // 321
       inputType: 'password',                                                                                    // 322
       visible: function () {                                                                                    // 323
         // No need to make users double-enter their password if                                                 // 324
         // they'll necessarily have an email set, since they can use                                            // 325
         // the "forgot password" flow.                                                                          // 326
         return _.contains(                                                                                      // 327
           ["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                     // 328
           Accounts.ui._passwordSignupFields());                                                                 // 329
       }}                                                                                                        // 330
    ];                                                                                                           // 331
  };                                                                                                             // 332
                                                                                                                 // 333
                                                                                                                 // 334
  //                                                                                                             // 335
  // helpers                                                                                                     // 336
  //                                                                                                             // 337
                                                                                                                 // 338
  var elementValueById = function(id) {                                                                          // 339
    var element = document.getElementById(id);                                                                   // 340
    if (!element)                                                                                                // 341
      return null;                                                                                               // 342
    else                                                                                                         // 343
      return element.value;                                                                                      // 344
  };                                                                                                             // 345
                                                                                                                 // 346
  var trimmedElementValueById = function(id) {                                                                   // 347
    var element = document.getElementById(id);                                                                   // 348
    if (!element)                                                                                                // 349
      return null;                                                                                               // 350
    else                                                                                                         // 351
      return element.value.replace(/^\s*|\s*$/g, ""); // trim;                                                   // 352
  };                                                                                                             // 353
                                                                                                                 // 354
  var loginOrSignup = function () {                                                                              // 355
    if (loginButtonsSession.get('inSignupFlow'))                                                                 // 356
      signup();                                                                                                  // 357
    else                                                                                                         // 358
      login();                                                                                                   // 359
  };                                                                                                             // 360
                                                                                                                 // 361
  var login = function () {                                                                                      // 362
    loginButtonsSession.resetMessages();                                                                         // 363
                                                                                                                 // 364
    var username = trimmedElementValueById('login-username');                                                    // 365
    var email = trimmedElementValueById('login-email');                                                          // 366
    var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                    // 367
    // notably not trimmed. a password could (?) start or end with a space                                       // 368
    var password = elementValueById('login-password');                                                           // 369
                                                                                                                 // 370
    var loginSelector;                                                                                           // 371
    if (username !== null) {                                                                                     // 372
      if (!Accounts._loginButtons.validateUsername(username))                                                    // 373
        return;                                                                                                  // 374
      else                                                                                                       // 375
        loginSelector = {username: username};                                                                    // 376
    } else if (email !== null) {                                                                                 // 377
      if (!Accounts._loginButtons.validateEmail(email))                                                          // 378
        return;                                                                                                  // 379
      else                                                                                                       // 380
        loginSelector = {email: email};                                                                          // 381
    } else if (usernameOrEmail !== null) {                                                                       // 382
      // XXX not sure how we should validate this. but this seems good enough (for now),                         // 383
      // since an email must have at least 3 characters anyways                                                  // 384
      if (!Accounts._loginButtons.validateUsername(usernameOrEmail))                                             // 385
        return;                                                                                                  // 386
      else                                                                                                       // 387
        loginSelector = usernameOrEmail;                                                                         // 388
    } else {                                                                                                     // 389
      throw new Error("Unexpected -- no element to use as a login user selector");                               // 390
    }                                                                                                            // 391
                                                                                                                 // 392
    Meteor.loginWithPassword(loginSelector, password, function (error, result) {                                 // 393
      if (error) {                                                                                               // 394
        loginButtonsSession.errorMessage(error.reason || "Unknown error");                                       // 395
      } else {                                                                                                   // 396
        loginButtonsSession.closeDropdown();                                                                     // 397
      }                                                                                                          // 398
    });                                                                                                          // 399
  };                                                                                                             // 400
                                                                                                                 // 401
  var toggleDropdown = function() {                                                                              // 402
    $('#login-dropdown-list .dropdown-menu').dropdown('toggle');                                                 // 403
  };                                                                                                             // 404
                                                                                                                 // 405
  var signup = function () {                                                                                     // 406
    loginButtonsSession.resetMessages();                                                                         // 407
                                                                                                                 // 408
    var options = {}; // to be passed to Accounts.createUser                                                     // 409
    options.profile = {};                                                                                        // 410
                                                                                                                 // 411
    var username = trimmedElementValueById('login-username');                                                    // 412
    if (username !== null) {                                                                                     // 413
      if (!Accounts._loginButtons.validateUsername(username))                                                    // 414
        return;                                                                                                  // 415
      else                                                                                                       // 416
        options.username = username;                                                                             // 417
    }                                                                                                            // 418
                                                                                                                 // 419
    var skype = trimmedElementValueById('login-skype');                                                          // 420
    if (skype !== null) {                                                                                        // 421
      if (!Accounts._loginButtons.validateSkype(skype)) {                                                        // 422
        return;                                                                                                  // 423
      } else {                                                                                                   // 424
        options.profile.skype = skype;                                                                           // 425
      }                                                                                                          // 426
    }                                                                                                            // 427
                                                                                                                 // 428
    var email = trimmedElementValueById('login-email');                                                          // 429
    if (email !== null) {                                                                                        // 430
      if (!Accounts._loginButtons.validateEmail(email))                                                          // 431
        return;                                                                                                  // 432
      else                                                                                                       // 433
        options.email = email;                                                                                   // 434
    }                                                                                                            // 435
                                                                                                                 // 436
    // notably not trimmed. a password could (?) start or end with a space                                       // 437
    var password = elementValueById('login-password');                                                           // 438
    if (!Accounts._loginButtons.validatePassword(password))                                                      // 439
      return;                                                                                                    // 440
    else                                                                                                         // 441
      options.password = password;                                                                               // 442
                                                                                                                 // 443
    if (!matchPasswordAgainIfPresent())                                                                          // 444
      return;                                                                                                    // 445
    Accounts.createUser(options, function (error) {                                                              // 446
      if (error) {                                                                                               // 447
        loginButtonsSession.errorMessage(error.reason || "Unknown error");                                       // 448
      } else {                                                                                                   // 449
        loginButtonsSession.closeDropdown();                                                                     // 450
      }                                                                                                          // 451
    });                                                                                                          // 452
  };                                                                                                             // 453
                                                                                                                 // 454
  var forgotPassword = function () {                                                                             // 455
    loginButtonsSession.resetMessages();                                                                         // 456
                                                                                                                 // 457
    var email = trimmedElementValueById("forgot-password-email");                                                // 458
    if (email.indexOf('@') !== -1) {                                                                             // 459
      Accounts.forgotPassword({email: email}, function (error) {                                                 // 460
        if (error)                                                                                               // 461
          loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 462
        else                                                                                                     // 463
          loginButtonsSession.infoMessage("Email sent");                                                         // 464
      });                                                                                                        // 465
    } else {                                                                                                     // 466
      loginButtonsSession.infoMessage("Email sent");                                                             // 467
    }                                                                                                            // 468
  };                                                                                                             // 469
                                                                                                                 // 470
  var changePassword = function () {                                                                             // 471
    loginButtonsSession.resetMessages();                                                                         // 472
                                                                                                                 // 473
    // notably not trimmed. a password could (?) start or end with a space                                       // 474
    var oldPassword = elementValueById('login-old-password');                                                    // 475
                                                                                                                 // 476
    // notably not trimmed. a password could (?) start or end with a space                                       // 477
    var password = elementValueById('login-password');                                                           // 478
    if (!Accounts._loginButtons.validatePassword(password))                                                      // 479
      return;                                                                                                    // 480
                                                                                                                 // 481
    if (!matchPasswordAgainIfPresent())                                                                          // 482
      return;                                                                                                    // 483
                                                                                                                 // 484
    Accounts.changePassword(oldPassword, password, function (error) {                                            // 485
      if (error) {                                                                                               // 486
         loginButtonsSession.errorMessage(error.reason || "Unknown error");                                      // 487
      } else {                                                                                                   // 488
        loginButtonsSession.infoMessage("Password changed");                                                     // 489
                                                                                                                 // 490
        // wait 3 seconds, then expire the msg                                                                   // 491
        Meteor.setTimeout(function() {                                                                           // 492
          loginButtonsSession.resetMessages();                                                                   // 493
        }, 3000);                                                                                                // 494
      }                                                                                                          // 495
    });                                                                                                          // 496
  };                                                                                                             // 497
                                                                                                                 // 498
  var matchPasswordAgainIfPresent = function () {                                                                // 499
    // notably not trimmed. a password could (?) start or end with a space                                       // 500
    var passwordAgain = elementValueById('login-password-again');                                                // 501
    if (passwordAgain !== null) {                                                                                // 502
      // notably not trimmed. a password could (?) start or end with a space                                     // 503
      var password = elementValueById('login-password');                                                         // 504
      if (password !== passwordAgain) {                                                                          // 505
        loginButtonsSession.errorMessage("Passwords don't match");                                               // 506
        return false;                                                                                            // 507
      }                                                                                                          // 508
    }                                                                                                            // 509
    return true;                                                                                                 // 510
  };                                                                                                             // 511
}) ();                                                                                                           // 512
                                                                                                                 // 513
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function () {                                                                                                   // 1
  // for convenience                                                                                             // 2
  var loginButtonsSession = Accounts._loginButtonsSession;                                                       // 3
                                                                                                                 // 4
                                                                                                                 // 5
  //                                                                                                             // 6
  // populate the session so that the appropriate dialogs are                                                    // 7
  // displayed by reading variables set by accounts-urls, which parses                                           // 8
  // special URLs. since accounts-ui depends on accounts-urls, we are                                            // 9
  // guaranteed to have these set at this point.                                                                 // 10
  //                                                                                                             // 11
                                                                                                                 // 12
  if (Accounts._resetPasswordToken) {                                                                            // 13
    loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                 // 14
  }                                                                                                              // 15
                                                                                                                 // 16
  if (Accounts._enrollAccountToken) {                                                                            // 17
    loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                 // 18
  }                                                                                                              // 19
                                                                                                                 // 20
  // Needs to be in Meteor.startup because of a package loading order                                            // 21
  // issue. We can't be sure that accounts-password is loaded earlier                                            // 22
  // than accounts-ui so Accounts.verifyEmail might not be defined.                                              // 23
  Meteor.startup(function () {                                                                                   // 24
    if (Accounts._verifyEmailToken) {                                                                            // 25
      Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                         // 26
        Accounts._enableAutoLogin();                                                                             // 27
        if (!error)                                                                                              // 28
          loginButtonsSession.set('justVerifiedEmail', true);                                                    // 29
        // XXX show something if there was an error.                                                             // 30
      });                                                                                                        // 31
    }                                                                                                            // 32
  });                                                                                                            // 33
                                                                                                                 // 34
                                                                                                                 // 35
  //                                                                                                             // 36
  // resetPasswordDialog template                                                                                // 37
  //                                                                                                             // 38
  Template._resetPasswordDialog.rendered = function() {                                                          // 39
    var $modal = $(this.find('#login-buttons-reset-password-modal'));                                            // 40
    $modal.modal();                                                                                              // 41
  }                                                                                                              // 42
                                                                                                                 // 43
  Template._resetPasswordDialog.events({                                                                         // 44
    'click #login-buttons-reset-password-button': function () {                                                  // 45
      resetPassword();                                                                                           // 46
    },                                                                                                           // 47
    'keypress #reset-password-new-password': function (event) {                                                  // 48
      if (event.keyCode === 13)                                                                                  // 49
        resetPassword();                                                                                         // 50
    },                                                                                                           // 51
    'click #login-buttons-cancel-reset-password': function () {                                                  // 52
      loginButtonsSession.set('resetPasswordToken', null);                                                       // 53
      Accounts._enableAutoLogin();                                                                               // 54
      $('#login-buttons-reset-password-modal').modal("hide");                                                    // 55
    }                                                                                                            // 56
  });                                                                                                            // 57
                                                                                                                 // 58
  var resetPassword = function () {                                                                              // 59
    loginButtonsSession.resetMessages();                                                                         // 60
    var newPassword = document.getElementById('reset-password-new-password').value;                              // 61
    if (!Accounts._loginButtons.validatePassword(newPassword))                                                   // 62
      return;                                                                                                    // 63
                                                                                                                 // 64
    Accounts.resetPassword(                                                                                      // 65
      loginButtonsSession.get('resetPasswordToken'), newPassword,                                                // 66
      function (error) {                                                                                         // 67
        if (error) {                                                                                             // 68
          loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 69
        } else {                                                                                                 // 70
          loginButtonsSession.set('resetPasswordToken', null);                                                   // 71
          Accounts._enableAutoLogin();                                                                           // 72
          $('#login-buttons-reset-password-modal').modal("hide");                                                // 73
        }                                                                                                        // 74
      });                                                                                                        // 75
  };                                                                                                             // 76
                                                                                                                 // 77
  Template._resetPasswordDialog.inResetPasswordFlow = function () {                                              // 78
    return loginButtonsSession.get('resetPasswordToken');                                                        // 79
  };                                                                                                             // 80
                                                                                                                 // 81
                                                                                                                 // 82
  //                                                                                                             // 83
  // enrollAccountDialog template                                                                                // 84
  //                                                                                                             // 85
                                                                                                                 // 86
  Template._enrollAccountDialog.events({                                                                         // 87
    'click #login-buttons-enroll-account-button': function () {                                                  // 88
      enrollAccount();                                                                                           // 89
    },                                                                                                           // 90
    'keypress #enroll-account-password': function (event) {                                                      // 91
      if (event.keyCode === 13)                                                                                  // 92
        enrollAccount();                                                                                         // 93
    },                                                                                                           // 94
    'click #login-buttons-cancel-enroll-account-button': function () {                                           // 95
      loginButtonsSession.set('enrollAccountToken', null);                                                       // 96
      Accounts._enableAutoLogin();                                                                               // 97
      $modal.modal("hide");                                                                                      // 98
    }                                                                                                            // 99
  });                                                                                                            // 100
                                                                                                                 // 101
  Template._enrollAccountDialog.rendered = function() {                                                          // 102
    $modal = $(this.find('#login-buttons-enroll-account-modal'));                                                // 103
    $modal.modal();                                                                                              // 104
  };                                                                                                             // 105
                                                                                                                 // 106
  var enrollAccount = function () {                                                                              // 107
    loginButtonsSession.resetMessages();                                                                         // 108
    var password = document.getElementById('enroll-account-password').value;                                     // 109
    if (!Accounts._loginButtons.validatePassword(password))                                                      // 110
      return;                                                                                                    // 111
                                                                                                                 // 112
    Accounts.resetPassword(                                                                                      // 113
      loginButtonsSession.get('enrollAccountToken'), password,                                                   // 114
      function (error) {                                                                                         // 115
        if (error) {                                                                                             // 116
          loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 117
        } else {                                                                                                 // 118
          loginButtonsSession.set('enrollAccountToken', null);                                                   // 119
          Accounts._enableAutoLogin();                                                                           // 120
          $modal.modal("hide");                                                                                  // 121
        }                                                                                                        // 122
      });                                                                                                        // 123
  };                                                                                                             // 124
                                                                                                                 // 125
  Template._enrollAccountDialog.inEnrollAccountFlow = function () {                                              // 126
    return loginButtonsSession.get('enrollAccountToken');                                                        // 127
  };                                                                                                             // 128
                                                                                                                 // 129
                                                                                                                 // 130
  //                                                                                                             // 131
  // justVerifiedEmailDialog template                                                                            // 132
  //                                                                                                             // 133
                                                                                                                 // 134
  Template._justVerifiedEmailDialog.events({                                                                     // 135
    'click #just-verified-dismiss-button': function () {                                                         // 136
      loginButtonsSession.set('justVerifiedEmail', false);                                                       // 137
    }                                                                                                            // 138
  });                                                                                                            // 139
                                                                                                                 // 140
  Template._justVerifiedEmailDialog.visible = function () {                                                      // 141
    return loginButtonsSession.get('justVerifiedEmail');                                                         // 142
  };                                                                                                             // 143
                                                                                                                 // 144
                                                                                                                 // 145
  //                                                                                                             // 146
  // loginButtonsMessagesDialog template                                                                         // 147
  //                                                                                                             // 148
                                                                                                                 // 149
  // Template._loginButtonsMessagesDialog.rendered = function() {                                                // 150
  //   var $modal = $(this.find('#configure-login-service-dialog-modal'));                                       // 151
  //   $modal.modal();                                                                                           // 152
  // }                                                                                                           // 153
                                                                                                                 // 154
  Template._loginButtonsMessagesDialog.events({                                                                  // 155
    'click #messages-dialog-dismiss-button': function () {                                                       // 156
      loginButtonsSession.resetMessages();                                                                       // 157
    }                                                                                                            // 158
  });                                                                                                            // 159
                                                                                                                 // 160
  Template._loginButtonsMessagesDialog.visible = function () {                                                   // 161
    var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');          // 162
    return !Accounts._loginButtons.dropdown() && hasMessage;                                                     // 163
  };                                                                                                             // 164
                                                                                                                 // 165
                                                                                                                 // 166
  //                                                                                                             // 167
  // configureLoginServiceDialog template                                                                        // 168
  //                                                                                                             // 169
                                                                                                                 // 170
  Template._configureLoginServiceDialog.events({                                                                 // 171
    'click .configure-login-service-dismiss-button': function () {                                               // 172
      loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                      // 173
    },                                                                                                           // 174
    'click #configure-login-service-dialog-save-configuration': function () {                                    // 175
      if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                       // 176
          ! loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                // 177
        // Prepare the configuration document for this login service                                             // 178
        var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                     // 179
        var configuration = {                                                                                    // 180
          service: serviceName                                                                                   // 181
        };                                                                                                       // 182
        _.each(configurationFields(), function(field) {                                                          // 183
          configuration[field.property] = document.getElementById(                                               // 184
            'configure-login-service-dialog-' + field.property).value                                            // 185
            .replace(/^\s*|\s*$/g, ""); // trim;                                                                 // 186
        });                                                                                                      // 187
                                                                                                                 // 188
        // Configure this login service                                                                          // 189
        Meteor.call("configureLoginService", configuration, function (error, result) {                           // 190
          if (error)                                                                                             // 191
            Meteor._debug("Error configuring login service " + serviceName, error);                              // 192
          else                                                                                                   // 193
            loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                // 194
        });                                                                                                      // 195
      }                                                                                                          // 196
    },                                                                                                           // 197
    // IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                  // 198
    // well. (Keeping the 'input' event means that this also fires when you use                                  // 199
    // the mouse to change the contents of the field, eg 'Cut' menu item.)                                       // 200
    'input, keyup input': function (event) {                                                                     // 201
      // if the event fired on one of the configuration input fields,                                            // 202
      // check whether we should enable the 'save configuration' button                                          // 203
      if (event.target.id.indexOf('configure-login-service-dialog') === 0)                                       // 204
        updateSaveDisabled();                                                                                    // 205
    }                                                                                                            // 206
  });                                                                                                            // 207
                                                                                                                 // 208
  // check whether the 'save configuration' button should be enabled.                                            // 209
  // this is a really strange way to implement this and a Forms                                                  // 210
  // Abstraction would make all of this reactive, and simpler.                                                   // 211
  var updateSaveDisabled = function () {                                                                         // 212
    var anyFieldEmpty = _.any(configurationFields(), function(field) {                                           // 213
      return document.getElementById(                                                                            // 214
        'configure-login-service-dialog-' + field.property).value === '';                                        // 215
    });                                                                                                          // 216
                                                                                                                 // 217
    loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                           // 218
  };                                                                                                             // 219
                                                                                                                 // 220
  // Returns the appropriate template for this login service.  This                                              // 221
  // template should be defined in the service's package                                                         // 222
  var configureLoginServiceDialogTemplateForService = function () {                                              // 223
    var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                         // 224
    return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                 // 225
  };                                                                                                             // 226
                                                                                                                 // 227
  var configurationFields = function () {                                                                        // 228
    var template = configureLoginServiceDialogTemplateForService();                                              // 229
    return template.fields();                                                                                    // 230
  };                                                                                                             // 231
                                                                                                                 // 232
  Template._configureLoginServiceDialog.configurationFields = function () {                                      // 233
    return configurationFields();                                                                                // 234
  };                                                                                                             // 235
                                                                                                                 // 236
  Template._configureLoginServiceDialog.visible = function () {                                                  // 237
    return loginButtonsSession.get('configureLoginServiceDialogVisible');                                        // 238
  };                                                                                                             // 239
                                                                                                                 // 240
  Template._configureLoginServiceDialog.configurationSteps = function () {                                       // 241
    // renders the appropriate template                                                                          // 242
    return configureLoginServiceDialogTemplateForService()();                                                    // 243
  };                                                                                                             // 244
                                                                                                                 // 245
  Template._configureLoginServiceDialog.saveDisabled = function () {                                             // 246
    return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                   // 247
  };                                                                                                             // 248
                                                                                                                 // 249
                                                                                                                 // 250
  // XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                 // 251
  var capitalize = function(str){                                                                                // 252
    str = str == null ? '' : String(str);                                                                        // 253
    return str.charAt(0).toUpperCase() + str.slice(1);                                                           // 254
  };                                                                                                             // 255
                                                                                                                 // 256
}) ();                                                                                                           // 257
                                                                                                                 // 258
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
