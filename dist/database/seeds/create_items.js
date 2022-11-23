"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seed = void 0;
async function seed(knex) {
    await knex('items').insert([
        { title: 'Básica (parede interna e externa)', image: 'basica.jpg' },
        { title: 'Textura, Grafiato e Projetado', image: 'grafiato.jpg' },
        { title: 'Efeitos Decorativos', image: 'cimento-queimado.jpg' },
        { title: 'Impermeabilização', image: 'impermeabilizante.jpg' },
        { title: 'Pisos (Estacionamento, quadra e etc)', image: 'piso.jpg' },
        { title: 'Pintura de Azulejo e Piscina', image: 'azulejo.jpg' },
        { title: 'Industrial', image: 'industrial.jpg' },
        { title: 'Papel de parede', image: 'papel-parede.jpg' },
        { title: 'Instalação de Sanca', image: 'sanca.jpg' },
        { title: 'Pintura com Airless', image: 'airless.jpg' },
    ]);
}
exports.seed = seed;
