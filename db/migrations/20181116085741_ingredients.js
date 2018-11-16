
exports.up = function(knex, Promise) {

/* INGREDIENTS create table function - holds a list of all 
possible ingredient types
*/
return knex.schema.createTable('ingredients', function(tbl) {
   // make changes to the table using the tbl object passed as a parameter
   
   // primary key
   tbl.increments(); // generate and id field and make it autoincfement and the primary key
   
   // other fields
   tbl.string('type', 255)
      .unique('type');
    });
   };
    
exports.down = function(knex, Promise) {
   // undo the changes to the database (it's called rolling back changes)
    return knex.schema.dropTableIfExists('ingredients');
 };
      