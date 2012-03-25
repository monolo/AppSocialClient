Ext.define('Social.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
    	refs: {
    		form: 'loginpanel'
    	},
        control: {
            'loginpanel button': {
                tap: 'doLogin',
            }
        }
    },


    init: function() {
        this.location = Ext.create('Ext.util.Geolocation', {
            autoUpdate: false,
            listeners: {
                locationupdate: 'onLocationUpdate',
                locationerror: 'onLocationError',
                scope: this
            }
        });
        this.location.updateLocation();
    },
    
    doLogin: function() {
        // called whenever the Login button is tapped
        var form_values = this.getForm().getValues();
		Ext.Ajax.request({
    		url: '/Eventos/web/app_dev.php/api/login',
    		method: 'POST',
			params: form_values,
    		success: function(response) {
    			var r = Ext.JSON.decode(response.responseText);
    			
				console.log(r);
    		}
		}); 

    },

    doLogout: function() {
        // called whenever any Button with action=logout is tapped
    }, 
    onLocationUpdate: function() {
        this.hasLocation = true;
        Ext.getStore('Venues').load({
            params: {
                latitude: this.location.getLatitude(),
                longitude: this.location.getLongitude()
            },
            callback: function(records) {

            },
            scope: this
        });
    },

    onLocationError: function() {
        this.hasLocation = true;
        Ext.getStore('Venues').load({
            params: {
                latitude: 41.38,
                longitude: 2.16
            },
            callback: function(records) {

				//do something with the venues
                Ext.Msg.alert('Geolocation Unavailable', 'Setting your default location to Barcelona');
            },
            scope: this
        });
    },

});