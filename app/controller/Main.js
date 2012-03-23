Ext.define('Social.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        control: {
            loginButton: {
                tap: 'doLogin'
            },
            'button[action=logout]': {
                tap: 'doLogout'
            }
        },

        refs: {
            loginButton: 'button[action=login]'
        }
    },

    doLogin: function() {
        // called whenever the Login button is tapped
    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    }
});