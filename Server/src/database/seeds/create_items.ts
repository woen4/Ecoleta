import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lâmpadas", image: "lampadas.svg" },
    { title: "Pilhas e Baterias", image: "baterias.svg" },
    { title: "Papeis e Papelão", image: "papeis-papelao.svg" },
    { title: "Resíduos Eletônicos", image: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", image: "organicos.svg" },
    { title: "Óleo de cozinha", image: "oleo.svg" },
  ]);
}
