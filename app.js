Ext.application({  
    name: 'Social',
    appFolder: 'app',
    controller: ['Main', ''],
    launch: function() {  
        Ext.create("Ext.TabPanel", {
        	fullscreen: true,  
            tabBarPosition: 'bottom',
            items: [
            	{ 
                    title: 'Login', 
                    iconCls: 'user', 
                    xtype: 'formpanel', 
                    url: 'contact.php', 
                    layout: 'vbox', 
 
                    items: [ 
                        { 
                            xtype: 'fieldset', 
                            title: 'Login', 
                            instructions: 'eyeonparty.com', 
                            items: [ 
                                { 
                                    xtype: 'textfield', 
                                    label: 'Name' 
                                }, 
                                { 
                                    xtype: 'passwordfield', 
                                    label: 'Password' 
                                },
                            ] 
                        }, 
                        { 
                            xtype: 'button', 
                            text: 'Entrar', 
                            ui: 'confirm', 
                            handler: function() { 
                                this.up('formpanel').submit();  
                            }  
                        }  
                    ]  
                }  
            ]
        })
        	
    }  
}); 