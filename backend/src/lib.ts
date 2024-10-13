
import { Introduction } from "./main";

export function makeIntroduction(introductions: Introduction[], language: string){
 const lowerCaseLanguage = language.toLowerCase();

 for (let i = 0; i < introductions.length; i++) {
  if (introductions[i].language === lowerCaseLanguage) return introductions[i].text;
 };
 return "Language not found. Write something else."; 
 
}