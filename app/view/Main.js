Ext.define('Social.view.Main', {
    extend: 'Ext.TabPanel',
    requires: ['Social.view.Venues','Social.view.Login','Ext.TitleBar'],

    id: 'viewport',
	xtype: 'main',
    config: {
		
		tabBarPosition: 'bottom',

        layout: {
            type: 'card',
            animation: {
                duration: 300,
                easing: 'ease-in-out',
                type: 'slide',
                direction: 'left'
            }
        },
        fullscreen: true,

        items: [
            { xtype: 'venues' }
        ]
    }
});
