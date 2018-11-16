exports.up = function(knex, Promise) {
    // makes the changes to the database

// DISHES create table function - holds list of Dishes 
    return knex.schema.createTable('dishes', function(tbl) {
        // makes changes to the table using the tbl object passed as a parameter
      
        // primary key
        tbl.increments(); 
        // other fields
        tbl.string('name', 255)
           .unique('name');
      });
};

exports.down = function(knex, Promise) {
  // undo the changes to the database (it's called rolling back changes)
  return knex.schema.dropTableIfExists('dishes');
};
