Ext.application({  
    name: 'Social',
    appFolder: 'app',
    controller: ['Main'],
    views: ['Main'],
    launch: function() {  
       Ext.create('Social.view.Main');
        	
    }  
}); 