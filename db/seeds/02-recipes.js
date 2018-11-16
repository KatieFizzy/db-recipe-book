
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {dish_id:1, recipe_name: 'Vegan Taco'},
        {dish_id:1, recipe_name:'Fiesta Taco'},
        {dish_id:2, recipe_name: 'Pear and Blue Cheese Salad'},
        {dish_id:2, recipe_name:'Chef Salad'},
        {dish_id:3, recipe_name: 'Derby Pie'},
        {dish_id:3, recipe_name:'Chocolate Cake'},
        {dish_id:2, recipe_name: 'Kale Salad'}
      ]);
    });
};
