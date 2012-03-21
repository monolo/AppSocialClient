Ext.define("Social.view.Main", {
	extend: 'Ext.TabPanel',
	
	config: {
	fullscreen: true,
	tabBarPosition: 'top',
	
	items: [
                {
                    title: 'Home',
                    iconCls: 'home',
                    html: [
                        '<img src="http://staging.sencha.com/img/sencha.png" />',
                        '<h1>Welcome to Sencha Touch</h1>',
                        "<p>You're creating the Getting Started app. This demonstrates how ",
                        "to use tabs, lists and forms to create a simple app</p>",
                        '<h2>Sencha Touch (2.0.0)</h2>'
                    ].join("")
                }
            ,
            {
            	title: 'Fotos',
            	iconCls: 'search',
            	html: 'not much to tell yet'
            }
            ]}
        });