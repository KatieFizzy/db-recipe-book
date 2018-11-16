
exports.up = function(knex, Promise) {
/* STEPS create table function - holds list of all steps, 
with a column to tie steps to a specific recipe_ID, and a column
for a optional step sequence number to be added. */
    
return knex.schema.createTable('steps', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter
    
    // primary key
    tbl.increments(); 
    
    // other fields
    tbl.string('step', 355)
       .unique('step');

    tbl.integer('sequence_number')
       .unique('sequence_number');
    
    //foreign id
    tbl
    .integer('recipe_id')
    .unsigned()
    .references('id')
    .inTable('recipes');
    
     });
   }

exports.down = function(knex, Promise) {
// undo the changes to the database (it's called rolling back changes)
   return knex.schema.dropTableIfExists('steps');
};
    
    
  