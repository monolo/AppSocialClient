Ext.define('Social.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            nav: '#mainNav'
        }
    },

    addLogoutButton: function() {
        this.getNav().add({
            text: 'Logout'
        });
    }
});