Ext.application({
    name: 'Social',
    
    controllers: ['Main'],
    views: ['Main'],

    launch: function() {
    	Ext.Viewport.add({
    		xclass: 'Social.view.Main'
    	})
    }
});