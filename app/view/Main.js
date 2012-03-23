Ext.define('Social.view.Main', {
    extend: 'Ext.Container',
    requires: ['Social.view.Login'],

    id: 'viewport',

    config: {
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
            { xtype: 'loginpanel' }
        ]
    }
});
