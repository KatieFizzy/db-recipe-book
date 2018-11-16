
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shoppingList').del()
    .then(function () {
      // Inserts seed entries
      return knex('shoppingList').insert([
        {recipeIngredient_id: 1},
        {recipeIngredient_id: 2},
        {recipeIngredient_id: 3}
      ]);
    });
};
