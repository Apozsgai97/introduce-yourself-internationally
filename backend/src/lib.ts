export function makeIntroduction(text: string, language: string){

 switch(language){
  case "swedish":
   return text;
   break;
  case "english":
   return text;
   break;
  case "hungarian":
   return text;
  case "spanish":
   return text;
  default:
   return "Language not found. Write something else."
 }
}