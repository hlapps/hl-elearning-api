
exports.up = function (knex, Promise) {
    return knex.schema.createTable('courses', function (t) {
        t.increments('id').primary()
        t.string('code').notNullable()
        t.string('name').notNullable()
        t.string('description').notNullable()
        t.boolean('is_active').notNullable()
        t.timestamps(false, true)
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('courses')
};
