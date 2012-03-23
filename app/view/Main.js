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
                    name: 'formpanel',
                    layout: 'vbox', 
 
                    items: [ 
                        { 
                            xtype: 'fieldset', 
                            title: 'Login', 
                            instructions: 'eyeonparty.com', 
                            items: [ 
                                { 
                                    xtype: 'textfield', 
                                    label: 'Usuario' ,
                                    name: 'username'
                                }, 
                                { 
                                    xtype: 'passwordfield', 
                                    label: 'Clave',
                                    name: 'password' 
                                }, 
                                { 
                                    xtype: 'hiddenfield' ,
                                    name: '_token'
                                },
                            ] 
                        }, 
                        { 
                            xtype: 'button', 
                            name: 'btnLogin',
                            text: 'Entrar', 
                            ui: 'confirm'
                        }  
                    ]  
                }  
            ]
            }
        })
