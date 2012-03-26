Ext.define('Social.view.util.Image', {
    extend: 'Ext.Img',

    config: {
        title: null,
        description: null
    },

    //sets up our tap event listener
    initialize: function() {
        this.callParent(arguments);

        this.element.on('tap', this.onTap, this);
    },

    //this is called whenever you tap on the image
    onTap: function() {
        Ext.Msg.alert(this.getTitle(), this.getDescription());
    }
});