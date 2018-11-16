
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {recipe_id: 5, step: 'Mix together butter, and eggs', sequence_number:1},
        {recipe_id: 5, step: 'Mix together sugar, and flour', sequence_number:2},
        {recipe_id: 3, step: 'clean and chop lettuce', sequence_number:1},
        {recipe_id: 3, step: 'chop pears', sequence_number:2},
        {recipe_id: 3, step: 'crumble blue cheese', sequence_number:3},
        {recipe_id: 1, step: 'dice bell peppers', sequence_number:1}
      ]);
    });
};
