/**
 * Displays a list of legislators
 */
Ext.define('Social.view.venues.List', {
    extend: 'Ext.dataview.List',

    id: 'venuesList',

    config: {
        store: 'Venues',
        grouped: false,
        emptyText: 'Cargando discotecas cercanas...',
        itemTpl: '<img src="{ url_images }" height="50px"> { name }'
    }
});
