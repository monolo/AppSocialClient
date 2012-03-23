Ext.define('Social.model.User', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['name', 'username', 'password']
    }
});

var ed = Ext.create('User.model.User', {
    name: 'Ed',
    email: 'ed@sencha.com',
    password: 'secret'
});