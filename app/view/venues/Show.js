/**
 * Displays a list of legislators
 */
Ext.define('Social.view.venues.Show', {
    extend: 'Ext.Panel',
	xtype: 'venuesshow',
    id: 'venuesShow',
    config: {
        styleHtmlContent: true,
        html: null,
        image : null,
        title : null,
        comment: null
    },
    initialize: function(){
    	var render = [
        	'<img src="'+this.getImage()+'" style="float:left; margin-right: 10px">',
        	'<h1>'+this.getTitle()+'</h1>',
        	'<br>'+this.getComment()
        ].join('');
    	this.setHtml(render);
    }
});
