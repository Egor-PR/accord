let element = document.querySelector("#accordeon")
createAccordeon(element);
// {

// items: [
//   {
//     title: "Элемент 1",
//     content:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur temporibus, eos odit cupiditate eligendi voluptatum sit ea tenetur nesciunt velit deserunt tempora suscipit inventore quae.Earum vitae non eos."
//   },
//   {
//     title: "Элемент 2",
//     content:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur temporibus, eos odit cupiditate eligendi voluptatum sit ea tenetur nesciunt velit deserunt tempora suscipit inventore quae.Earum vitae non eos."

//   },
//   {
//     title: "Элемент 3",
//     content:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia aspernatur temporibus, eos odit cupiditate eligendi voluptatum sit ea tenetur nesciunt velit deserunt tempora suscipit inventore quae.Earum vitae non eos."
//   }
//      ]
// });

function createAccordeon(element, config) {
  //ДОБАВЛЯЕТ ОБРАБОТЧИК КЛИКОВ
  let lastActive;
  element.classList.add("accordeon");
  element.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("title")) {
      if (lastActive) {
        lastActive.classList.remove("active");
      }
      lastActive = e.target.parentNode;
      e.target.parentNode.classList.toggle("active");
    }
  });

  // НАПОЛНЯЕТ АККОРДИОН ЭЛЕМЕНТАМИ
  // if (!config) {
  //   return;
  // }
  // for (let i = 0; i < config.item.length; i++) {
  //   let item = config.item[i];
  //   let itemElement = document.createElement("div");
  //   let titleElement = document.createElement("div");
  //   let contentElement = document.createElement("div");
  //   titleElement.classList.add("title");
  //   titleElement.textContent = item.title;
  //   contentElement.classList.add("content");
  //   contentElement.textContent = item.content;
  //   itemElement.appendChild(titleElement);
  //   itemElement.appendChild(contentElement);
  //   element.appendChild(itemElement);
  // }
};

