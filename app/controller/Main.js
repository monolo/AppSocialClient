Ext.define('Social.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            loginForm: 'formpanel'
        },
        control: {
            'formpanel btnLogin': {
                tap: 'doLogin'
            }
        }
    },

    doLogin: function() {
        // called whenever the Login button is tapped
        
        var form   = this.getLoginForm(),
            values = form.getValues();
          alert("helo");  
        Ext.Ajax.request({
    url: '/Events/web/app_dev.php/api/login',
    form: 'formpanel',

    callback: function(response, successful) {
        if (successful) {
            Ext.Msg.alert('Success', 'We got your form submission: '+response);
        } else {
            Ext.Msg.alert('Fail', 'Hmm, that did not work');
        }
    }
});


    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    }
});