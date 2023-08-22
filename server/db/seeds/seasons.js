/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('seasons').del()
  await knex('seasons').insert([
    { id: 1, year: 2015, image: "https://taskmaster.info/images/seasons/taskmaster_uk_01_framed.png" },
    { id: 2, year: 2016, image: "https://taskmaster.info/images/seasons/taskmaster_uk_02_framed.png" },
    { id: 3, year: 2016, image: "https://taskmaster.info/images/seasons/taskmaster_uk_03_framed.png" },
  ]);
};
