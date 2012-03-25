Ext.define('Social.store.Venues', {
    extend  : 'Ext.data.Store',
    config: {
		model: 'Social.model.Venue',
		proxy: {
			type: 'jsonp',
			url: 'http://eyeonparty.com/api/venues',
            reader: {
               type: 'json',
               rootProperty: 'results'
            }
        } 
    }
});
