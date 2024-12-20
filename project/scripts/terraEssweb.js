const hamButton = document.querySelector('#hamMenu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const today = new Date();
currentyear.innerHTML = `<span>${today.getFullYear()}</span>`;
let oLastModif = new Date(document.lastModified);
lastModified.innerHTML= `<span>${oLastModif}</span>`;

const discountProducts = [
	{
		productName: "",
		promoTime: "",
		imageLocation: "",
		percentDiscount: ""
	},
	{
		productName: "",
		promoTime: "",
		imageLocation: "",
		percentDiscount: ""
	},
	{
		productName: "",
		promoTime: "",
		imageLocation: "",
		percentDiscount: ""
	},
	{
		productName: "",
		promoTime: "",
		imageLocation: "",
		percentDiscount: ""
	},
]


// For this array of objects, categories are as follows:
// Essential oils: 1
// Carrier oils: 2
// Natural Products: 3
// Electronic devices: 4

const allProducts = [
    {
      productName: "Aceite esencial de Lavanda",
	  variety: "Lavandula Angustifolia",
	  Content: "10mL, 5ml",
      ProdCategory: 1,
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
	  Price: "40-70 $",
      imageLocation: "images/boteLavanda.webp",
	  technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Orégano",
		variety: "Oreganum vulgare",
		Content: "10mL",
		ProdCategory:1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "50-80 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/oregano",
	},

	{
		productName: "Aceite esencial de Manzanilla",
		variety: "Matricaria Recutita",
		Content: "5-10 mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "80-150 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Romero",
		variety: "Rosmarinus officianalis",
		Content: "5-10ml",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "50-80 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Naranja",
		variety: "Citrus Sinensis",
		Content: "10mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "40 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Limon",
		variety: "Lemon citrus",
		Content: "10mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "30 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Copaiba",
		variety: "Copaifera",
		Content: "10mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "50 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de Albahaca",
		variety: "Oscimun Basilicum",
		Content: "5-10mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "80-150 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite esencial de molle",
		variety: "Schinus molle",
		Content: "10mL",
		ProdCategory: 1,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "40 $",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite de coco fraccionado",
		variety: "Coco",
		Content: "100mL",
		ProdCategory: 2,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "40$",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite de moringa",
		variety: "Moringa oleifera",
		Content: "100mL",
		ProdCategory: 2,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "90$",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Aceite de palta",
		variety: "Aguacate",
		Content: "100mL",
		ProdCategory: 2,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "90$",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Isaño médico",
		variety: "Isañus",
		Content: "50mL",
		ProdCategory: 3,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "70$",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	{
		productName: "Humidificador",
		variety: "-",
		Content: "400mL",
		ProdCategory: 4,
		Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, perspiciatis quibusdam. Atque sed ut tenetur, quaerat itaque fugiat facere deserunt, modi dolores amet impedit dolorem aperiam, placeat consequatur esse ullam!",
		Price: "150$",
		imageLocation: "images/boteLavanda.webp",
		technicalDataSheet: "documents/lavanda",
	},

	
    
   
    // Add more product objects here...
  ];


const esenOil= document.querySelector("#essential")
const carryOil= document.querySelector("#carrier")
const natural= document.querySelector("#natural")
const electronic= document.querySelector("#humidifiers")


esenOil.addEventListener("click", () => {
	createProductCard(allProducts.filter(product => product.ProdCategory == 1  
	));
  });

carryOil.addEventListener("click", () => {
	createProductCard(allProducts.filter(product => product.ProdCategory == 2  
	));
  });

natural.addEventListener("click", () => {
	createProductCard(allProducts.filter(product => product.ProdCategory == 3  
	));
  });


electronic.addEventListener("click", () => {
	createProductCard(allProducts.filter(product => product.ProdCategory == 4  
	));
  });




function createProductCard(filteredProducts) {
    document.querySelector(".products").innerHTML = "";
	let newSpace=document.createElement("div");
	let returnMain1= document.createElement("a");
	let returnMain2= document.createElement("a");

	newSpace.setAttribute("class","newSpace");	
	returnMain1.innerHTML= `<span class="label">Return</span>`;;
	returnMain1.setAttribute("href", "products.html");
	returnMain1.setAttribute("id", "returnBox");
	returnMain2.innerHTML= `<span class="label">Return</span>`;;
	returnMain2.setAttribute("href", "products.html");
	returnMain2.setAttribute("id", "returnBox");
	document.querySelector(".products").appendChild(returnMain1);

	document.querySelector(".products").appendChild(newSpace);

    filteredProducts.forEach(product => {
		
        let card = document.createElement("section");
        let name = document.createElement("h3");
		let varietyPlant=document.createElement("h4");
        let size = document.createElement("p");
        let smallDescription = document.createElement("p");
		let productCost = document.createElement("p");
        let img = document.createElement("img");
		img.setAttribute("loading", "lazy");

        name.textContent = product.productName;
        varietyPlant.innerHTML = `<span class="label">Variety:</span> ${product.variety}`;
        size.innerHTML = `<span class="label">Content:</span> ${product.Content}`;
        smallDescription.innerHTML = `<span class="label">Description:</span> ${product.Description}.`;
		productCost.innerHTML = `<span class="label">Price:</span> ${product.Price}`;
        img.setAttribute("src", product.imageLocation);
        img.setAttribute("alt", `${product.productName}`);
        img.setAttribute("loading", "lazy");
		card.setAttribute("class", "newCard");
			
		
        card.appendChild(name);
        card.appendChild(varietyPlant);
        card.appendChild(size);
        card.appendChild(smallDescription);
		card.appendChild(productCost);
        card.appendChild(img);
		newSpace.appendChild(card);

    });

	document.querySelector(".products").appendChild(returnMain2);
}



const currentUrl = window.location.href;

const everything = currentUrl.split('?');

let formData = everything[1].split('&');
console.log(formData);

function show(cup) {
	formData.forEach((element) => {
		if (element.startsWith(cup)){
			result = element.split('=')[1].replace("%40", "@").replaceAll("+"," ").replace("%3F","");
		}
	});
	return result
}

const showInfo = document.querySelector("#results");

showInfo.innerHTML = `<h3>Hello ${show('name')} thank you for sending your message</h3>
<p>Your message is: ${show('message')}</p>
<p>We will replay to this email: ${show('email')} as soon as possible</p>
`;