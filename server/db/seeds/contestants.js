/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('contestants').del()
  await knex('contestants').insert([
    { id: 1, name: "Frank Skinner", season: 1, final_score: 93, image: "https://taskmaster.info/images/people/0056_frank_skinner.png" },
    { id: 2, name: "Josh Widdicombe", season: 1, final_score: 94, image: "https://taskmaster.info/images/people/0069_josh_widdicombe.png" },
    { id: 3, name: "Roisin Conaty", season: 1, final_score: 68, image: "https://taskmaster.info/images/people/0015_roisin_conaty.png" },
    { id: 4, name: "Romesh Ranganathan", season: 1, final_score: 93, image: "https://taskmaster.info/images/people/0048_romesh_ranganathan.png" },
    { id: 5, name: "Tim Key", season: 1, final_score: 88, image: "https://taskmaster.info/images/people/0034_tim_key.png" },
    { id: 6, name: "Doc Brown", season: 2, final_score: 78, image: "https://taskmaster.info/images/people/0011_doc_brown.png" },
    { id: 7, name: "Joe Wilkinson", season: 2, final_score: 69, image: "https://taskmaster.info/images/people/0070_joe_wilkinson.png" },
    { id: 8, name: "Jon Richardson", season: 2, final_score: 90, image: "https://taskmaster.info/images/people/0049_jon_richardson.png" },
    { id: 9, name: "Katherine Ryan", season: 2, final_score: 94, image: "https://taskmaster.info/images/people/0052_katherine_ryan.png" },
    { id: 10, name: "Richard Osman", season: 2, final_score: 86, image: "https://taskmaster.info/images/people/0044_richard_osman.png" },
    { id: 11, name: "Al Murray", season: 3, final_score: 80, image: "https://taskmaster.info/images/people/0043_al_murray.png" },
    { id: 12, name: "Dave Gorman", season: 3, final_score: 81, image: "https://taskmaster.info/images/people/0027_dave_gorman.png" },
    { id: 13, name: "Paul Chowdhry", season: 3, final_score: 66, image: "https://taskmaster.info/images/people/0013_paul_chowdhry.png" },
    { id: 14, name: "Rob Beckett", season: 3, final_score: 87, image: "https://taskmaster.info/images/people/0008_rob_beckett.png" },
    { id: 15, name: "Sara Pascoe", season: 3, final_score: 72, image: "https://taskmaster.info/images/people/0046_sara_pascoe.png" },
  ]);
};
