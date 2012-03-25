/**
 * Login screen
 */
Ext.define('Social.view.Venues', {
    extend: 'Ext.navigation.View',
    xtype: 'venues',
    requires: ['Social.view.venues.List'],
    config: {
        title: 'Discotecas en Barcelona',
        iconCls: 'star',
        scrollable: true,
//        styleHtmlContent: true,

                items: 
            {
                xclass: 'Social.view.venues.List'
            }       

		}
                
        
});
