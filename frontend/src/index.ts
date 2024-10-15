const form = document.getElementById("introductionForm") as HTMLFormElement;
const outputSection = document.getElementById("introductionOutput");


form.addEventListener('submit', function (event){
 event.preventDefault();

 const formData = new FormData(form);
 const data = new URLSearchParams();

 formData.forEach((value, key) => {
  data.append(key, value as string);
 })
})

fetch(form.action, {
 method: "POST",
 headers: 
})