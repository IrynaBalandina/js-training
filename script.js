/*const text = document.getElementById("text");
console.dir(text);
const container = document.getElementById("container");
console.dir(container);
text.textContent = "Я інший текст прийшов з ДЖС";
text.style.backgroundColor = "lime";
text.classList.add("text");

// console.log(container.innerHTML);
// container.innerHTML = "Я новий параграф"
//  container.insertAdjacentHTML("beforeend","<p class='text' >Я новий параграф</p> <a href='#'>link</a>");
const pElement = document.createElement("p");
pElement.className = "text";
pElement.textContent = "Я новий параграф!!!!!";
container.append(pElement);*/


const colors = [
        { 
         label: "red",
         color: "#FF0000",
 },
 {
    label: "green",
     color: "#00FF00",
 },
 {
     label: "blue",
     color: "#0000FF",
},
 {
     label: "yellow",
     color: "#FFFF00",
 },]

const fragment = document.createDocumentFragment();
for(const {color,label} of colors){
const buttonEl    = document.createElement("button");
buttonEl.textContent = label;
buttonEl.style.backgroundColor = color;
buttonEl.type = "button";
fragment.appendChild(buttonEl);

}

document.body.prepend(fragment);


/*1. Створити спільного батька(фрагмент)
2. Перебрати циклом масив кнопок
2.1 Створити елемент кнопки 
2.2 Даємо кнопці підпис
2.3 Даємо кнопці стиль кольору
2.4 Додаємо тип кнопки 
2.5 Додати кнопку в батька
3. Додаємо батька в дом*/


 /*const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const markup = technologies.map((technology)=> `<li>${technology}</li>`).join("");
document.body.insertAdjacentHTML("beforeend", `<ul>${markup}</ul>`);

console.log(markup);*/


 /*  1 варіант 
 const ulEl = document.createElement("ul");
 for(technology of technologies){
    const liEl = document.createElement("li");
    liEl.textContent = technology;
    ulEl.appendChild(liEl);
 }*/

 /*document.body.appendChild(ulEl);*/

  /*Як зробити
1. Створити контейнер для лішок  "ul"
 2. Перебрати масив 
 2.1 Створити лішкк
 2.2 Записати в кожну лішку текст контент
 2.3 Додати лішку в контейнер ul 
 3. Додати ul в DOM */


 /*2 варіант як зробити
 1. Запустити цикл меп в середині перетворити технології на лішки 
 2. Джойн для того, щоб зібрати лішки в одну строку
 3. Огорнути створені лішки в ul
 4. Вставити розмітку на сторінку */
