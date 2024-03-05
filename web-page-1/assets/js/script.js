let btn_menu_nav = document.getElementById("btn-menu-mobile");
let contenedor_lista_nav = document.getElementById("c-list-nav");

const principal = () => {
  document.addEventListener("DOMContentLoaded", () => {
    btn_menu_nav.addEventListener("click", () => {
      if (contenedor_lista_nav.style.display === "none") {
        contenedor_lista_nav.style.display = "block";
      } else {
        contenedor_lista_nav.style.display = "none";
      }
    });

    main_elements();
  });
}


const main_elements = () => {
  let banner_main = document.querySelector(".page-about__header");
  let content_lemonade_1 = document.querySelector(".media-img-lemonade-1");
  let content_lemonade_2 = document.querySelector(".media-img-lemonade-2");
  let content_lightgreen_1 = document.querySelector(".media-img-lightgreen-1");
  let content_lightgreen_2 = document.querySelector(".media-img-lightgreen-2");
  let content_lightgreen_3 = document.querySelector(".media-img-lightgreen-3");
  let content_jobs_teaser_media = document.querySelector(".page-about__jobs-teaser__media");

  // banner principal
  let new_element_image = document.createElement("img");
  new_element_image.src = "assets/img/img-banner.jpg";
  new_element_image.alt = "img-banner.jpg";
  new_element_image.classList.add("page-about__img-banner");
  banner_main.appendChild(new_element_image);

  // primera seccion con 2 fotos 
  let new_image_palette_limonade_1 = document.createElement("img");
  new_image_palette_limonade_1.classList.add("img-section-one");
  new_image_palette_limonade_1.src = "assets/img/img-section-one.jpg";
  new_image_palette_limonade_1.alt = "img-section-one.jpg";
  content_lemonade_1.appendChild(new_image_palette_limonade_1);

  let new_image_palette_limonade_2 = document.createElement("img");
  new_image_palette_limonade_2.classList.add("img-section-two");
  new_image_palette_limonade_2.src = "assets/img/img-section-two.jpg";
  new_image_palette_limonade_2.alt = "img-section-two.jpg";
  content_lemonade_2.appendChild(new_image_palette_limonade_2);

  // segunda sección con 3 fotos de people's
  let new_image_palette_lightgreen_1 = document.createElement("img");
  new_image_palette_lightgreen_1.classList.add("img-people-1");
  new_image_palette_lightgreen_1.src = "assets/img/img-people-1.jpg";
  new_image_palette_lightgreen_1.alt = "img-people-1.jpg";
  content_lightgreen_1.appendChild(new_image_palette_lightgreen_1);

  let new_image_palette_lightgreen_2 = document.createElement("img");
  new_image_palette_lightgreen_2.classList.add("img-people-2");
  new_image_palette_lightgreen_2.src = "assets/img/img-people-2.jpg";
  new_image_palette_lightgreen_2.alt = "img-people-2.jpg";
  content_lightgreen_2.appendChild(new_image_palette_lightgreen_2);

  let new_image_palette_lightgreen_3 = document.createElement("img");
  new_image_palette_lightgreen_3.classList.add("img-people-3");
  new_image_palette_lightgreen_3.src = "assets/img/img-people-3.jpg";
  new_image_palette_lightgreen_3.alt = "img-people-3.jpg";
  content_lightgreen_3.appendChild(new_image_palette_lightgreen_3);

  // sección con una foto del jobs teaser
  let new_element_image_jobs_teaser = document.createElement("img");
  new_element_image_jobs_teaser.classList.add("img-jobs-info");
  new_element_image_jobs_teaser.src = "assets/img/img-jobs-teaser.jpg";
  new_element_image_jobs_teaser.alt = "img-jobs-teaser.jpg";
  content_jobs_teaser_media.appendChild(new_element_image_jobs_teaser);
}


const render = () => {
  principal()
}

render()