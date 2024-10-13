
import { Introduction } from "./main";

export function makeIntroduction(introductions: Introduction[], language: string){
 const lowerCaseLanguage = language.toLowerCase();

 for (let i = 0; i < introductions.length; i++) {
  if (introductions[i].language === lowerCaseLanguage) return introductions[i].text;
 };
 return "Language not found. Write something else."; 
 
}

export function addUsername(text: string, name: string){
 if(name === "") return text;
 const textWithUserName = text.replace("NAME", rightFormatName(name));
 return textWithUserName;
};

export function rightFormatName(name: string){
 const trimedName = name.trim();
 
 return trimedName.charAt(0).toUpperCase() + trimedName.slice(1).toLowerCase();
}

/*export function sliceResult(result: string){
 const splitResult = result.split(":");
 const sliceResult = splitResult[1].slice(1,-2);
 return sliceResult;
}*/