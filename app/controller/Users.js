Ext.define('MyApp.controller.Users', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'login': 'showLogin',
            'user/:id': 'showUserById'
        },

        refs: {
            main: '#mainTabPanel'
        }
    },

    // uses our 'main' ref above to add a loginpanel to our main TabPanel (note that
    // 'loginpanel' is a custom xtype created for this application)
    showLogin: function() {
        this.getMain().add({
            xtype: 'loginpanel'
        });
    },

    // Loads the User then adds a 'userprofile' view to the main TabPanel
    showUserById: function(id) {
        MyApp.model.User.load(id, {
            scope: this,
            success: function(user) {
                this.getMain().add({
                    xtype: 'userprofile',
                    user: user
                });
            }
        });
    }
});