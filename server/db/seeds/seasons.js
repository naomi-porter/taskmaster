/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, year: 2015, image: "https://taskmaster.info/images/seasons/taskmaster_uk_series_01_thumb.jpg" },
    { id: 2, year: 2016, image: "https://taskmaster.info/images/seasons/taskmaster_uk_series_02_thumb.jpg" },
    { id: 3, year: 2016, image: "https://taskmaster.info/images/seasons/taskmaster_uk_series_03_thumb.jpg" },
  ]);
};
