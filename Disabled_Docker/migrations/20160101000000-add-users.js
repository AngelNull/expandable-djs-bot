exports.up = function (db) {
    return db.createTable('users', {
        userID: {
            type: 'string',
            length: 20,
            notNull: true,
            primaryKey: true,
        },
    });
};

exports.down = function (db) {
    return db.dropTable('users');
};

exports._meta = {
    version: 1,
};
