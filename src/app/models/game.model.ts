// src/app/models/game.model.ts
export interface IGDBImage {
  id?: number;
  url: string;
}

export interface IGDBGenre {
  id: number;
  name: string;
}

export interface IGDBPlatform {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  name: string;
  summary: string;
  first_release_date: number; // timestamp IGDB
  rating?: number;
  cover?: IGDBImage;
  genres?: IGDBGenre[];
  platforms?: IGDBPlatform[];
  multiplayer?: boolean;
  developer?: string;
  mode?: string;
  playlink?: string | null;
  embedUrl?: string | null;
}
