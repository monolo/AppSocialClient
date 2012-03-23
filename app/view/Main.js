 Ext.define("Social.view.Main", {
	     extend: 'Ext.TabPanel',
	     config: {
        	fullscreen: true,  
            tabBarPosition: 'bottom',
            items: [
            	{ 
                    title: 'EyeOnParty.com', 
                    iconCls: 'user', 
                    xtype: 'formpanel', 
                    url: '/login',
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
            }
        })
