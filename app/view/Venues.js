/**
 * Login screen
 */
Ext.define('Social.view.Venues', {
    extend: 'Ext.navigation.View',
    xtype: 'venues',
    requires: ['Social.view.venues.List','Social.view.venues.Show'],
    config: {
        title: 		'Clubes',
        iconCls: 	'info',
        scrollable:	false,
//        styleHtmlContent: true,
			items: {
                xclass: 'Social.view.venues.List'
            }       
		}
                
        
});
