
exports.up = function(knex, Promise) {
/* SHOPPING LIST create table function - Holds list of 
ingredients per recipe added with associated qty, tied to 
recipeIngredients_ID
*/
   return knex.schema.createTable('shoppingList', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter
    
    // primary key
    tbl.increments(); 
    
    // other fields

    
    //foreign id
    tbl
    .integer('recipeIngredient_id')
    .unsigned()
    .references('id')
    .inTable('recipeIngredients');
    
     });
    };
exports.down = function(knex, Promise) {
// undo the changes to the database (it's called rolling back changes)
return knex.schema.dropTableIfExists('shoppingList');
};
            