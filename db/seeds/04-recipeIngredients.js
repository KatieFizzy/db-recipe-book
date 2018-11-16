
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipeIngredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipeIngredients').insert([
        {ingredient_id: 1, recipe_id: 5,quantity: 1.5, quantity_unit: 'cup/s' },
        {ingredient_id: 2, recipe_id: 5,quantity: 1, quantity_unit: 'cup/s' },
        {ingredient_id: 3, recipe_id: 3,quantity: 2, quantity_unit: 'cup/s' },
        {ingredient_id: 4, recipe_id: 3,quantity: 3, quantity_unit: 'tablespoon/s' },
        {ingredient_id: 6, recipe_id: 1,quantity: 1.25, quantity_unit: 'cup/s' }
      ]);
    });
};
