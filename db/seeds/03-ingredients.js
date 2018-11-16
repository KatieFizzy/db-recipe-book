
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {type:'sugar'},
        {type:'butter'},
        {type:'pear/s'},
        {type:'blue cheese'},
        {type:'pecans'},
        {type:'seitan'},
        {type:'green bell pepper'},
        {type:'bib lettuce'},
        {type:'kale'}
      ]);
    });
};
