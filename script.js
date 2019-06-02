/*De functie die de afbeeldingen filter op klassenaam bij een druk op een knop in de navigatie*/
/*Omslachtig, maar ja...*/

let afbeeldingGrid = document.getElementsByClassName("grid")[0];
let gdItems = document.getElementsByClassName("gd")[0];
let fotografieItems = document.getElementsByClassName("fotografie")[0];
let itItems = document.getElementsByClassName("it")[0];
let allKnop = document.getElementsByClassName("ALL")[0];
let fotoKnop = document.getElementsByClassName("FOTO")[0];
let gdKnop = document.getElementsByClassName("GD")[0];
let itKnop = document.getElementsByClassName("IT")[0];

/*startsituatie*/
fotografieItems.classList.add("verborgen");
gdItems.classList.add("verborgen");
itItems.classList.add("verborgen");

allKnop.addEventListener("click", toonItemsALL);
fotoKnop.addEventListener("click", toonItemsFOTO);
gdKnop.addEventListener("click", toonItemsGD);
itKnop.addEventListener("click", toonItemsIT);


function toonItemsALL(){
  fotografieItems.classList.remove("verborgen");
  itItems.classList.add("verborgen");
  gdItems.classList.remove("verborgen");
}

function toonItemsFOTO(){
  fotografieItems.classList.remove("verborgen");
  itItems.classList.add("verborgen");
  gdItems.classList.add("verborgen");
}

function toonItemsIT(){
  fotografieItems.classList.add("verborgen");
  itItems.classList.remove("verborgen");
  gdItems.classList.add("verborgen");
}

function toonItemsGD(){
  fotografieItems.classList.add("verborgen");
  itItems.classList.add("verborgen");
  gdItems.classList.remove("verborgen");
}

/*De functie die de taal van nl naar en switcht*/
let nlKnop = document.getElementsByClassName("taalnl")[0];
let engKnop = document.getElementsByClassName("taaleng")[0];

/*startsituatie*/
engKnop.style.backgroundColor = "rgb(255, 250, 208)";
engKnop.style.color = "rgb(90, 66, 54)";

let infoCategorie = document.getElementsByClassName("klik")[0];
let infoTitel = document.getElementsByTagName("h1")[0];
let info1 = document.getElementsByClassName("info1")[0];
let info2 = document.getElementsByClassName("info2")[0];
let info3 = document.getElementsByClassName("info3")[0];

nlKnop.addEventListener("click", switchEngels);
function switchEngels(){
  console.log("taalnl werkt!");
  /*past kleur aan*/
  nlKnop.style.backgroundColor = "rgb(255, 250, 208)";
  nlKnop.style.color = "rgb(90, 66, 54)";
  engKnop.style.backgroundColor = "rgb(90, 66, 54)";
  engKnop.style.color = "rgb(255, 250, 208)";

  /*past taal  + video's aan*/
  infoCategorie.innerHTML = "Klik op één van de categoriën om mijn werk te bekijken";
  let videoALL = document.getElementsByClassName("ALL")[0];
	videoALL.setAttribute("src","video/Alle.mp4");
  let videoFOTO = document.getElementsByClassName("FOTO")[0];
	videoFOTO.setAttribute("src","video/Fotografie.mp4");
  let videoGD = document.getElementsByClassName("GD")[0];
  videoGD.setAttribute("src","video/GrafischDesign.mp4");
  infoTitel.innerHTML = "Hallo, welkom op mijn pagina!";
  info1.innerHTML = "Ik ben Ymke Vandebroek, een 18-jarige studente en ik studeer grafische en digitale media aan de Artesis Plantijn Hogeschool in Antwerpen, België. Ik zit nu in mijn eerste jaar en heb al redelijk veel geleerd, maar natuurlijk zal ik de komende twee jaar van de studie nog veel meer bijleren.";
  info2.innerHTML = "Alle content op deze pagina is door mezelf gemaakt. Het merendeel van de projecten zijn gemaakt voor school, maar fotografie doe ik als hobby.";
  info3.innerHTML = "Ik zou u graag willen verwelkomen op mijn zelfgemaakte site! De site is nog niet helemaal af, maar voel u vrij om eens de verschillende items te bekijken.";
}

engKnop.addEventListener("click", switchNederlands);
function switchNederlands(){
  console.log("taaleng werkt!");
  /*past kleur aan*/
  engKnop.style.backgroundColor = "rgb(255, 250, 208)";
  engKnop.style.color = "rgb(90, 66, 54)";
  nlKnop.style.backgroundColor = "rgb(90, 66, 54)";
  nlKnop.style.color = "rgb(255, 250, 208)";

  /*past taal + video's aan*/
  infoCategorie.innerHTML = "Click on one of the categories to see my work";
  let videoALL = document.getElementsByClassName("ALL")[0];
  videoALL.setAttribute("src","video/All.mp4");
  let videoFOTO = document.getElementsByClassName("FOTO")[0];
  videoFOTO.setAttribute("src","video/Photography.mp4");
  let videoGD = document.getElementsByClassName("GD")[0];
  videoGD.setAttribute("src","video/GraphicDesign.mp4");
  infoTitel.innerHTML = "Hello, welcome on my page!";
  info1.innerHTML = "I'm Ymke Vandebroek, an 18 year old student who studies graphical and digital design at the Artesis Plantijn Hogeschool in Antwerp, Belgium. I’m in my first year right now and have learned quite a lot already, but more is yet to learn of course.";
  info2.innerHTML = "All of the content on this page are things I made myself. Most of the projects were made for school but photography is a hobby of mine.";
  info3.innerHTML = "I would like you to welcome you on my self-made site! The site is still not finished, but feel free to browse through the different items!";
}
