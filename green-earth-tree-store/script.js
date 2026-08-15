const categoryLoad = () => {
    
    const url = "https://openapi.programming-hero.com/api/categories";
    
    fetch(url).then((res) => res.json()).then((data) => {
       
      
         
        displayCategories(data.categories)
    
       
    })
}

const displayCategories = (catas) => {


    const categoryContainer = document.getElementById('category-container');
    categoryContainer.innerHTML = "";
    catas.forEach(cata => {
        const el1 = document.createElement('div');
        el1.innerHTML = `
        
 <button id = "cata-vutton-${cata.id}"
  onclick="loadTree(${cata.id})"  class= "btn btn-soft btn-success cata-vtn">
 ${cata.category_name}
    
                  </button>

        `
        categoryContainer.append(el1);
    });
}

categoryLoad();

const manageSpinner = (status) => {

    if (status == true) {
        document.getElementById('spinner').classList.remove('hidden');
        document.getElementById('card-container').classList.add('hidden');
    }

    else {
        document.getElementById('card-container').classList.remove('hidden');
        document.getElementById('spinner').classList.add('hidden');
    }


}

const loadTree = (num) => {
    manageSpinner(true);

    const url = `https://openapi.programming-hero.com/api/category/${num}`
    fetch(url).then((res) => res.json()).then((data) => {
        // console.log(data.categories);
        // displayCategories(data.plants)
         removeAllTreeACtive()
        removeActive()
        const clickBtn = document.getElementById(`cata-vutton-${num}`)
        clickBtn.classList.add("active")
        displayTree(data.plants);
        manageSpinner(false);

    })

}


const displayTree = (plants) => {
    const treeContainer = document.getElementById('card-container')
    treeContainer.innerHTML = '';
    plants.forEach(plant => {
        const el3 = document.createElement('div')
        el3.innerHTML = `
       <div class="bg-white space-y-3 rounded-2xl ">

                    <div class="bg-gray-100 rounded-2xl m-4">
                        <img class ="w-full h-70 rounded-2xl" src="${plant.image}" alt="">
                    </div>
                    <h1 onclick = "loadTreeDetail(${plant.id})"
                     class="ml-4 font-bold">${plant.name}</h1>
                    <p class="ml-4">${plant.description}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class=" bg-green-200 text-green-700 p-3 ml-4 rounded-2xl ">${plant.category}</div>
                        <div class="mr-4">৳${plant.price}</div>
                    </div>

                   <div onclick='addToCart(${JSON.stringify(plant)})' 
                class="cursor-pointer flex justify-center items-center bg-green-600 text-white rounded-2xl mx-4 p-2">
                <button>
                Add To Cart
                </button>
            </div>
                </div>

    
</div>
       
       `


        treeContainer.append(el3);
    })
}

const removeActive = () => {
    const cataVuttons = document.querySelectorAll(".cata-vtn")
    cataVuttons.forEach((vtn) => vtn.classList.remove('active'));
}

const removeAllTreeACtive = () => {
    const cataVuttons = document.querySelectorAll(".tree-vtn")
    cataVuttons.forEach((vtn) => vtn.classList.remove('active'));
}




const allPlantLoad = () => {

    manageSpinner(true);
    const url = "https://openapi.programming-hero.com/api/plants"
    fetch(url).then((res) => res.json()).then((data) => {

        removeActive()
        const clickBtn = document.getElementById("all-tree")
        clickBtn.classList.add("active")
        // console.log(data.plants)
        // console.log(data.categories);
        // displayCategories(data.categories)
        
        displayAllPlant(data.plants);
        manageSpinner(false);
    })
}

displayAllPlant = (plants) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
    plants.forEach(plant => {

        const el2 = document.createElement('div');
        el2.innerHTML = `

<div class="bg-white space-y-3 rounded-2xl  ">

                    <div class="bg-gray-100 ">
                        <img class=" w-full h-70 rounded-2xl " src="${plant.image}" alt="">
                    </div>
                    <h1  onclick = "loadTreeDetail(${plant.id})"
                     class="ml-4 font-bold">${plant.name}</h1>
                    <p class="ml-4">${plant.description}
                    </p>
                    <div class="flex justify-between items-center">
                        <div class=" bg-green-200 text-green-700 p-3 ml-4 rounded-2xl">${plant.category}</div>
                        <div class="mr-4">৳${plant.price}</div>
                    </div>

                    <div onclick='addToCart(${JSON.stringify(plant)})' 
                class="cursor-pointer flex justify-center items-center bg-green-600 text-white rounded-2xl mx-4 p-2">
                <button>
                Add To Cart
                </button>
            </div>
                </div>

    
</div>

`
        cardContainer.append(el2)

    })
}

allPlantLoad()


let total = 0;

const addToCart = (plant) => {
    alert(`${plant.name} has been added to the cart`)
    const cartContainer = document.getElementById("cart-container");

    const el4 = document.createElement("div");
    el4.classList = "bg-green-200 m-2 p-2 flex justify-between items-center rounded-lg";

    el4.innerHTML = `
        <div>
            <h1 class="font-bold">${plant.name}</h1>
            <p>৳${plant.price}</p>
        </div>
        <div>
            <i class="fa-solid fa-xmark cursor-pointer text-red-600"></i>
        </div>
    `;

    el4.querySelector("i").addEventListener("click", () => {
        cartContainer.removeChild(el4);
        total -= plant.price;
        updateTotal();
    });

    cartContainer.appendChild(el4);

    total += plant.price;
    updateTotal();
};

const updateTotal = () => {
    let totalEl = document.getElementById("cart-total");
    if (!totalEl) {
        totalEl = document.createElement("h1");
        totalEl.id = "cart-total";
        totalEl.classList = "font-bold mt-4";
        document.getElementById("cart-container").append(totalEl);
    }
    totalEl.innerText = `Total: ৳${total}`;
};

const loadTreeDetail = async (id) => {

    const url = `
   https://openapi.programming-hero.com/api/plant/${id}
  `;
    console.log(url);
    const response = await fetch(url);
    const details = await response.json();

    displayTreeDetail(details.plants);
}

const displayTreeDetail = (tree) => {

    const detailsBox = document.getElementById('details-container')
    detailsBox.innerHTML = `
  
  <div class="m-4 p-5 space-y-2">
        <h1 class="font-bold text-2xl">${tree.name}</h1>
        <img class="w-full h-70 rounded-2xl" src="${tree.image}" alt="">
        
        <div class="flex">
<p class="font-bold">Category:</p>
        
     <div>
           ${tree.category}
     </div>

</div>



 <div class="flex">
<p class="font-bold">Price:</p>
        
     <div>
           ৳${tree.price}
     </div>

</div> 

<div class="flex">
<p class="font-bold">Description:</p>
        
     
${tree.description} 
     

</div>
    </div>
  `
    document.getElementById('word_modal').showModal();
}



