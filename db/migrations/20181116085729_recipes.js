exports.up = function(knex, Promise) {

// RECIPES create table function - holds list of recipes for a specific dish
return knex.schema.createTable('dishes', function(tbl) {
    // make changes to the table using the tbl object passed as a parameter
  
    // primary key
    tbl.increments(); 

    // other fields
    tbl.string('name', 255)
       .unique('name');
    
    //foreign id
    tbl
    .integer('dish_id')
    .unsigned()
    .references('id')
    .inTable('dishes');
  });

/* STEPS create table function - holds list of all steps, 
with a column to tie steps to a specific recipe, and a column
for a optional step sequence number to be added */

return knex.schema.createTable('steps', function(tbl) {
// make changes to the table using the tbl object passed as a parameter

// primary key
tbl.increments(); // generate and id field and make it autoincfement and the primary key

// other fields
tbl.string('name', 255)
   .unique('name');

//foreign id
tbl
.integer('cohort_id')
.unsigned()
.references('id')
.inTable('cohorts_table');

 });


// INGREDIENTS create table function
return knex.schema.createTable('ingredients', function(tbl) {
// make changes to the table using the tbl object passed as a parameter

// primary key
tbl.increments(); // generate and id field and make it autoincfement and the primary key

// other fields
tbl.string('name', 255)
   .unique('name');

//foreign id
tbl
.integer('cohort_id')
.unsigned()
.references('id')
.inTable('cohorts_table');

 });
};

// RECIPE INGREDIENTS create table function
return knex.schema.createTable('recipeIngredients', function(tbl) {
// make changes to the table using the tbl object passed as a parameter

// primary key
tbl.increments(); // generate and id field and make it autoincfement and the primary key

// other fields
tbl.string('name', 255)
   .unique('name');

//foreign id
tbl
.integer('cohort_id')
.unsigned()
.references('id')
.inTable('cohorts_table');

 });
};

// SHOPPING LIST create table function
return knex.schema.createTable('shoppingList', function(tbl) {
// make changes to the table using the tbl object passed as a parameter

// primary key
tbl.increments(); // generate and id field and make it autoincfement and the primary key

// other fields
tbl.string('name', 255)
   .unique('name');

//foreign id
tbl
.integer('cohort_id')
.unsigned()
.references('id')
.inTable('cohorts_table');

 });
};

exports.down = function(knex, Promise) {
    // undo the changes to the database (it's called rolling back changes)
    return knex.schema.dropTableIfExists('recipes');
  };
  