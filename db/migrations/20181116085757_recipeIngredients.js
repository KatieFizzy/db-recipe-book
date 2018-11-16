
exports.up = function(knex, Promise) {
/* RECIPE INGREDIENTS create table function - holds a list of
of ingredient types pulling from ingredients table, tied to a 
specific recipe via recipe id. Has additional column to specify
qty and qty unit of measure, for this specific recipe instance of the ingredient 
*/
return knex.schema.createTable('recipeIngredients', function(tbl) {
   // make changes to the table using the tbl object passed as a parameter
   
   // primary key
   tbl.increments(); 
   
   // other fields
   tbl.string('ingredient_type', 255)
      .unique('ingredient_type');

   tbl.real('quantity')
     
   tbl.string('quantity_unit', 50)
      .unique('quantity_unit');

   //foreign ids
   tbl
   .integer('recipe_id')
   .unsigned()
   .references('id')
   .inTable('recipes');

   tbl
   .integer('ingredient_id')
   .unsigned()
   .references('id')
   .inTable('ingredients');

    });
   };

exports.down = function(knex, Promise) {
// undo the changes to the database (it's called rolling back changes)
   return knex.schema.dropTableIfExists('recipeIngredients');
};
         