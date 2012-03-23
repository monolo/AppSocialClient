Ext.define('Social.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {
    		username: 'loginpannel fieldset textfield'
    	},
        control: {
            'loginpanel button': {
                tap: 'doLogin',
                itemtap: 'doLogin'
            }
        }
    },

    doLogin: function() {
        // called whenever the Login button is tapped
	//	var uname = this.getUsername().getData();

		Ext.Ajax.request({
    			url: '/Eventos/web/app_dev.php/api/login',
    			method: 'POST',
    			params: {
        			username: 'helo'
    			},
    			callback: function(response) {
        		console.log(response.responseText);
    	}
}); 




    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    }
});