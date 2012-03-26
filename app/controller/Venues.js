Ext.define('Social.controller.Venues', {
    extend: 'Ext.app.Controller',
	requires: ['Social.view.venues.Show'],
    config: {
    	refs: {
    		venues: 'venues'
    	},
        control: {
            'venueslist': {
                itemtap: 'showPost',
            }
        }
    },

	showPost: function(list,index,element,record) {
		var render = Ext.create('Social.view.venues.Show',{
			image: record.get('url_images'),
			title: record.get('name'),
			comment: record.get('comment')
		})
		this.getVenues().push(render);
		    
    },

});