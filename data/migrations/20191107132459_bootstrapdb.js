
exports.up = function(knex) {
    return knex.schema.createTable('species', tbl => {
        tbl.increments(); // the type is integer

        tbl.string('name', 255).notNullable();
    })
        .createTable('animals', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();

        //define foreign keys
        tbl
        .integer('species_id')
        .unsigned()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT') // about deleting the record from the primary key table. CASCADE or SET NULL or NO ACTION
        .onUpdate('CASCADE') // about changing the value of the primary key table
    })
    .createTable('zoos', tbl => {
        tbl.increments();

        tbl.string('name', 255).notNullable();
        tbl.string('address', 255);
    })
    .createTable('animal_zoos', tbl => {
        tbl.increments();

        tbl.integer('zoo_id').notNullable();
        tbl.integer('animal_id').notNullable();
        tbl.date('from').notNullable();
        tbl.date('to').notNullable();
    })
};

exports.down = function(knex) {
  
};
