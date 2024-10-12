export function makeIntroduction(text: string, language: string){

 switch(language){
  case "swedish":
   return text;
   break;
  default:
   return "Language not found. Write something else."
 }
}