Ext.define('Social.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'email', 'password']
    }
});

var ed = Ext.create('User.model.User', {
    name: 'Ed',
    email: 'ed@sencha.com',
    password: 'secret'
});