// src/app/data/games.ts
import { Game } from '../models/game.model';

export const GAMES: Game[] = [
  {
    id: 1,
    name: 'The Legend of Zelda: Breath of the Wild',
    summary:
      'Explorez un vaste monde ouvert rempli de mystères, d’ennemis et de temples dans cette réinvention de la saga Zelda.',
    first_release_date: 1488326400,
    rating: 97.5,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co3p2d.webp' },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 31, name: 'RPG' },
    ],
    platforms: [
      { id: 130, name: 'Nintendo Switch' },
      { id: 41, name: 'Wii U' },
    ],
    multiplayer: false,
    developer: 'Nintendo',
    mode: 'Solo',
  },
  {
    id: 2,
    name: 'Cyberpunk 2077',
    summary:
      'Un RPG futuriste en monde ouvert se déroulant à Night City, une mégalopole obsédée par le pouvoir et la cybernétique.',
    first_release_date: 1607558400,
    rating: 76.3,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaih8.webp' },
    genres: [
      { id: 31, name: 'RPG' },
      { id: 5, name: 'Shooter' },
    ],
    platforms: [
      { id: 6, name: 'PC (Windows)' },
      { id: 48, name: 'PlayStation 4' },
      { id: 49, name: 'Xbox One' },
    ],
    multiplayer: true,
    developer: 'CD Projekt Red',
    mode: 'Solo / Multijoueur',
  },
  {
    id: 3,
    name: 'Elden Ring',
    summary: 'Un action-RPG sombre et exigeant créé par FromSoftware et George R. R. Martin.',
    first_release_date: 1645747200,
    rating: 96.1,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg' },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 31, name: 'RPG' },
    ],
    platforms: [
      { id: 6, name: 'PC (Windows)' },
      { id: 48, name: 'PlayStation 5' },
      { id: 167, name: 'Xbox Series X|S' },
    ],
    multiplayer: false,
    developer: 'FromSoftware',
    mode: 'Solo',
  },
  {
    id: 4,
    name: 'God of War (2018)',
    summary:
      'Kratos et son fils Atreus voyagent à travers la mythologie nordique dans ce récit émotionnel et épique.',
    first_release_date: 1524153600,
    rating: 94.2,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.webp' },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 15, name: 'Action' },
    ],
    platforms: [{ id: 48, name: 'PlayStation 4' }],
    multiplayer: false,
    developer: 'Santa Monica Studio',
    mode: 'Solo',
  },
  {
    id: 5,
    name: 'Hollow Knight',
    summary: 'Un metroidvania sombre et exigeant dans un monde insecte mystérieux et magnifique.',
    first_release_date: 1496812800,
    rating: 90.5,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaes9.webp' },
    genres: [
      { id: 31, name: 'RPG' },
      { id: 15, name: 'Action' },
    ],
    platforms: [
      { id: 6, name: 'PC (Windows)' },
      { id: 48, name: 'PlayStation 4' },
      { id: 130, name: 'Nintendo Switch' },
    ],
    multiplayer: false,
    developer: 'Team Cherry',
    mode: 'Solo',
  },
  {
    id: 6,
    name: 'Horizon Forbidden West',
    summary: 'Aloy explore les terres post-apocalyptiques pleines de machines et de mystères.',
    first_release_date: 1643923200,
    rating: 88.4,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2gvu.webp' },
    genres: [
      { id: 12, name: 'Adventure' },
      { id: 15, name: 'Action' },
    ],
    platforms: [
      { id: 48, name: 'PlayStation 5' },
      { id: 49, name: 'PlayStation 4' },
    ],
    multiplayer: false,
    developer: 'Guerrilla Games',
    mode: 'Solo',
  },
  {
    id: 7,
    name: 'Mario Kart 8 Deluxe',
    summary: 'Courses de kart fun et dynamiques avec tous vos personnages préférés de Nintendo.',
    first_release_date: 1466083200,
    rating: 92.0,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co213p.webp' },
    genres: [{ id: 13, name: 'Racing' }],
    platforms: [{ id: 130, name: 'Nintendo Switch' }],
    multiplayer: true,
    developer: 'Nintendo',
    mode: 'Multijoueur',
  },
  {
    id: 8,
    name: 'The Witcher 3: Wild Hunt',
    summary:
      'Incarnez Geralt de Riv dans un immense RPG rempli de quêtes, monstres et choix moraux.',
    first_release_date: 1432752000,
    rating: 93.7,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/coaarl.webp' },
    genres: [
      { id: 31, name: 'RPG' },
      { id: 15, name: 'Action' },
    ],
    platforms: [
      { id: 6, name: 'PC (Windows)' },
      { id: 48, name: 'PlayStation 4' },
      { id: 49, name: 'Xbox One' },
    ],
    multiplayer: false,
    developer: 'CD Projekt Red',
    mode: 'Solo',
  },
  {
    id: 9,
    name: 'Zenless Zone Zero',
    summary:
      'Un jeu d’action-RPG dynamique avec des combats rapides et des personnages uniques dans un univers futuriste stylisé.',
    first_release_date: 1704067200, // exemple : 31/12/2023
    rating: 85.0,
    cover: { url: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co90je.webp' }, // exemple image
    genres: [
      { id: 31, name: 'RPG' },
      { id: 15, name: 'Action' },
    ],
    platforms: [
      { id: 6, name: 'PC (Windows)' },
      { id: 48, name: 'PlayStation 5' },
      { id: 49, name: 'Xbox Series X|S' },
    ],
    multiplayer: true,
    developer: 'HoYoverse',
    mode: 'Solo / Multijoueur',
  },
  {
    id: 10,
    name: 'La défense des tours',
    summary:
      'La défense des tours est un jeu de type Tower défense sur le thème de Star Wars. Il a remporté le CNAMY Award 2025.',
    first_release_date: 1704067200, // exemple : 31/12/2023
    rating: 101.0,
    cover: { url: 'sw.webp' }, // exemple image
    genres: [{ id: 31, name: 'Tower Defense' }],
    platforms: [{ id: 6, name: 'PC (Windows)' }],
    multiplayer: true,
    developer: 'Alizée H., Winness R., Vladimir S',
    mode: 'Solo',
    playlink: 'https://wrkt.itch.io/la-defense-des-tours',
  },
];
