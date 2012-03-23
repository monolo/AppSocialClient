Ext.application({  
    name: 'Social',
    appFolder: 'app',
    controllers: ['Main'],
    views: ['Main','Login'],
    launch: function() {  
       Ext.create('Social.view.Main');
        	
    }  
}); 