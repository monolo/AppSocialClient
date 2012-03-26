/**
 * Displays a list of legislators
 */
Ext.define('Social.view.venues.List', {
    extend: 'Ext.dataview.List',
	xtype: 'venueslist',
    id: 'venuesList',

    config: {
        store: 'Venues',
        grouped: false,
        title: 'Discotecas cercanas',
        emptyText: 'Cargando discotecas cercanas...',
        itemTpl: [
        	'<img style="float:left;" src="{ url_images }" height="50px">',
        	'<h1 style="float:left; margin: 5px;">{ name }</h1>',
        	'<div style="clear:both"></div>',
        	].join('')
    }
});
