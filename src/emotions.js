import { catsData } from "./data";

export const emotions = Array.from(new Set(catsData.flatMap(cat => cat.emotionTags)))