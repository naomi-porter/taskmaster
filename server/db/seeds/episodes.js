/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('table_name').del()
  await knex('table_name').insert([
    { id: 1, season: 1, title: "Melon buffet", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_01_thumb.jpg" },
    { id: 2, season: 1, title: "The pie whisperer", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_02_thumb.jpg" },
    { id: 3, season: 1, title: "The poet and the egg", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_03_thumb.jpg" },
    { id: 4, season: 1, title: "Down an octave", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_04_thumb.jpg" },
    { id: 5, season: 1, title: "Little denim shorts", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_05_thumb.jpg" },
    { id: 6, season: 1, title: "The Last Supper", image: "https://taskmaster.info/images/episodes/taskmaster_uk_01_06_thumb.jpg" },
    { id: 7, season: 2, title: "Fear of failure", image: "https://taskmaster.info/images/episodes/taskmaster_uk_02_01_thumb.jpg" },
    { id: 8, season: 2, title: "Pork is a sausage", image: "https://taskmaster.info/images/episodes/taskmaster_uk_02_02_thumb.jpg" },
    { id: 9, season: 2, title: "A pistachio éclair", image: "https://taskmaster.info/images/episodes/taskmaster_uk_02_03_thumb.jpg" },
    { id: 10, season: 2, title: "Welcome to Rico Face", image: "https://taskmaster.info/images/episodes/taskmaster_uk_02_04_thumb.jpg" },
    { id: 11, season: 2, title: "There’s strength in arches", image: "https://taskmaster.info/images/episodes/taskmaster_uk_02_05_thumb.jpg" },
    { id: 12, season: 3, title: "A pea in a haystack", image: "https://taskmaster.info/images/episodes/taskmaster_uk_03_01_thumb.jpg" },
    { id: 13, season: 3, title: "The dong and the gong", image: "https://taskmaster.info/images/episodes/taskmaster_uk_03_02_thumb.jpg" },
    { id: 14, season: 3, title: "Little polythene grief cave", image: "https://taskmaster.info/images/episodes/taskmaster_uk_03_03_thumb.jpg" },
    { id: 15, season: 3, title: "A very nuanced character", image: "https://taskmaster.info/images/episodes/taskmaster_uk_03_04_thumb.jpg" },
    { id: 16, season: 3, title: "The F.I.P.", image: "https://taskmaster.info/images/episodes/taskmaster_uk_03_05_thumb.jpg" },
  ]);
};
