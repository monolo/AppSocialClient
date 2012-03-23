/**
 * Login screen
 */
Ext.define('Social.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginpanel',
    require: ['Ext.form.FieldSet'],

    config: {
        title: 'Login',
        iconCls: 'user',
        scrollable: true,
//        styleHtmlContent: true,

                items: [
                    {
                        xtype: 'fieldset',
                        title : 'Identificate en EyeOnParty.com',
                        items: [
                        {
                        	xtype: 'textfield',
                        	placeHolder:'Usuario',
                        	label: 'Usuario',
                        	name: 'username'
                        },
                        {
                        	xtype: 'passwordfield',
                        	placeHolder:'Clave',
                        	label: 'Clave',
                        	name: 'password'
                        },
                        {
                        	xtype: 'hiddenfield',
                        	name: "_token"
                        }]
                    },
                    {
                        xtype :'button',
                        text : 'Enviar',
                        id : 'btnLogin',
                        ui: 'confirm'
                        	
                    }
                       ]

                    }
                
        
});
