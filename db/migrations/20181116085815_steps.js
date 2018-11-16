
exports.up = function(knex, Promise) {
/* STEPS create table function - holds list of all steps, 
with a column to tie steps to a specific recipeIngredientsID, and a column
for a optional step sequence number to be added. Ties recipeIngredientsID
vs recipe ID so it has ability to refer to ingredients and quantity
if needed in some frontend scenario*/
    
return knex.schema.createTable('steps', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter
    
    // primary key
    tbl.increments(); 
    
    // other fields
    tbl.string('step', 355)
       .unique('step');

    tbl.integer('sequence number')
       .unique('sequence number');
    
    //foreign id
    tbl
    .integer('recipeIngredient_id')
    .unsigned()
    .references('id')
    .inTable('recipeIngredients');
    
     });
   }

exports.down = function(knex, Promise) {
// undo the changes to the database (it's called rolling back changes)
   return knex.schema.dropTableIfExists('steps');
};
    
    
  