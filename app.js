Ext.application({  
    name: 'Social',
    appFolder: 'app',
    controllers: ['Main'],
    views: ['Main','Login','Venues'],
    models: ['Venue'],
    stores: ['Venues'],
    launch: function() { 
     
       Ext.create('Social.view.Main');
        	
    }  
}); 