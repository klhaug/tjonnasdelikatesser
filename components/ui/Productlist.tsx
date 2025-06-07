import React from 'react'
import HorisontalProductCard from './HorisontalProductCard';
import { error } from 'console';


type FakeProduct = {
  id: string
  name: string
  price: number
  description: string
  imgUrl: string
  category: string
  inStock: boolean
}

type Props = {
    query?: string | null
    limit?: string | null
    filter?: string | null
    priceMin?: string | null
    priceMax?: string | null
}

const fakeProductDB: FakeProduct[] = [
    {
      id: "1",
      name: "Black Truffle Pasta",
      price: 249,
      description: "Handmade pasta infused with rich black truffle shavings for an earthy, luxurious taste.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Pasta",
      inStock: true,
    },
    {
      id: "2",
      name: "Foie Gras Terrine",
      price: 299,
      description: "Traditional French duck liver terrine served with fig compote and toasted brioche.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Meat",
      inStock: false,
    },
    {
      id: "3",
      name: "Beluga Caviar",
      price: 1200,
      description: "Premium Beluga caviar with a buttery texture and subtle sea flavor, served chilled.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: true,
    },
    {
      id: "4",
      name: "Saffron Lobster Risotto",
      price: 340,
      description: "Creamy risotto cooked with saffron and topped with buttery chunks of lobster tail.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: true,
    },
    {
      id: "5",
      name: "Jamon Ibérico de Bellota",
      price: 425,
      description: "Cured ham from acorn-fed Iberian pigs, sliced paper-thin for maximum flavor.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Meat",
      inStock: true,
    },
    {
      id: "6",
      name: "Bluefin Tuna Tataki",
      price: 310,
      description: "Lightly seared sashimi-grade bluefin tuna, served with yuzu soy dressing.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: false,
    },
    {
      id: "7",
      name: "White Truffle Oil Popcorn",
      price: 89,
      description: "Gourmet popcorn tossed in white truffle oil and sea salt for a savory crunch.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Snack",
      inStock: true,
    },
    {
      id: "8",
      name: "Osetra Caviar Blinis",
      price: 950,
      description: "Golden Osetra caviar served on mini buckwheat pancakes with crème fraîche.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: true,
    },
    {
      id: "9",
      name: "Duck Confit with Orange Glaze",
      price: 275,
      description: "Slow-cooked duck leg confit finished with a sweet citrusy orange glaze.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Meat",
      inStock: false,
    },
    {
      id: "10",
      name: "A5 Wagyu Steak",
      price: 1200,
      description: "Melt-in-your-mouth Japanese A5 Wagyu, grilled to perfection with sea salt flakes.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Meat",
      inStock: true,
    },
    {
      id: "11",
      name: "Burrata with Heirloom Tomatoes",
      price: 160,
      description: "Creamy burrata cheese served with a medley of heirloom tomatoes and balsamic drizzle.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Vegetarian",
      inStock: true,
    },
    {
      id: "12",
      name: "Octopus Carpaccio",
      price: 245,
      description: "Thinly sliced Mediterranean octopus drizzled with olive oil and lemon zest.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: true,
    },
    {
      id: "13",
      name: "Porcini Mushroom Tart",
      price: 150,
      description: "Buttery tart filled with porcini mushrooms, herbs, and Gruyère cheese.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Vegetarian",
      inStock: false,
    },
    {
      id: "14",
      name: "Sakura Smoked Salmon",
      price: 290,
      description: "Cold-smoked salmon cured with cherry blossom wood for a delicate floral aroma.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Seafood",
      inStock: true,
    },
    {
      id: "15",
      name: "French Macaron Tower",
      price: 200,
      description: "A colorful tower of assorted French macarons with exotic fillings like lychee and passionfruit.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Dessert",
      inStock: true,
    },
    {
      id: "16",
      name: "Escargot à la Bourguignonne",
      price: 185,
      description: "Snails baked in garlic parsley butter, served with warm crusty bread.",
      imgUrl: "/images/241A9411-1.jpg",
      category: "Appetizer",
      inStock: true,
    },
  
]




export default async function Productlist({query, limit, priceMax, priceMin, filter}: Props) {

  const limitInt = typeof limit === "string" ? parseFloat(limit) : null;
  console.log(limitInt)

  // Vi vil ha en basic liste sortert alfabetisk når man kommer inn på produktsiden
  // Vi vil ha muligheten til å sortere denne listen
  // Sorteringen må ta utgangspunkt i hele databasen
  // Men antallet kan begrenses i etterkant hvor man legger til 10 og 10 dersom det er fler enn 10 resultater
  // Man bør lage en funksjon for hver filtreringsprosess

  

// SORTING FUNCTIONS
// Disse fire påvirker vel det originale arrayet
  function sortByAscName(array: FakeProduct[]){

    array.sort((a, b) => {

      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function sortByDescName(array: FakeProduct[]){

    array.sort((a, b) => {

      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    
      // names must be equal
      return 0;
    });
  }

  function sortByAscPrice(array: FakeProduct[]){
   array.sort((a, b) => a.price - b.price);
  }

  function sortByDescPrice(array: FakeProduct[]){
    array.sort((a, b) => b.price - a.price);
  }

// Denne returnerer en shallow copy
  function filterBySearch(db, query){
    const re = new RegExp(String.raw`${query}`, "i");
    return db.filter((product) => product.name.match(re))
  }
  
  //Hovedfunksjoner
  function filterByPriceDirection(db, filter){
    if(filter === "priceAsc"){
      sortByAscPrice(db)
      return;
    } else if(filter === "priceDesc"){
      sortByDescPrice(db)
      return;
    } else {
      console.error("Unknown Filter Value", error)
      return;
    }
  }


  function filterByPriceRange(db: FakeProduct[], priceMin:string, priceMax:string){
    const minPrice = parseFloat(priceMin)
    const maxPrice = parseFloat(priceMax)
    const lowerPriceRangeRemoved = db.filter((product) => product.price > minPrice);
    const bothRangesRemoved = lowerPriceRangeRemoved.filter((product) => product.price < maxPrice);
    return bothRangesRemoved;
  }


  function filterByName(db, filter){
    if(filter === "nameAsc"){
      sortByAscName(db)
      return;
    } else if(filter === "nameDesc"){
      sortByDescName(db)
      return;
    } else {
      console.error("Unknown Filter Value", error)
      return;
    }
  }

    
   
    async function getProducts(db: FakeProduct[]): Promise<FakeProduct[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          
          const returnedArray = db;
          const priceRangeArray = [];

          if(filter === "nameAsc" || filter === null) {
            sortByAscName(returnedArray);
          }
          if(filter === "nameDesc") {
            sortByDescName(returnedArray);
          }

          if(filter === "priceAsc") {
            sortByAscPrice(returnedArray);
          }

          if(filter === "priceDesc") {
            sortByDescPrice(returnedArray);
          }

          if(priceMax !== null && priceMin !== null){
          console.log("YOUVE ENTERED")
            priceRangeArray.push(filterByPriceRange(returnedArray, priceMin, priceMax,))
          }

          const finalArray = priceRangeArray.length > 0 ? priceRangeArray[0] : returnedArray
          console.log(finalArray)


          resolve(
            //Her må du lage en løsning dersom resultatene er mindre enn antallet...

            limitInt === null ? finalArray.slice(0,5) : finalArray.slice(0,limitInt)
          )
        }, 500)
      })
    }
    

    const filteredProducts =  await getProducts(fakeProductDB)

    
  return (
    <div className='flex flex-col gap-6'>
        {filteredProducts.length > 0 ? filteredProducts.map((product) => {
          const {name, id, description, price, imgUrl, category, inStock} = product
          return(
            <HorisontalProductCard
              key={id} 
              name={name} 
              description={description}
              price={price}
              imgUrl={imgUrl}
              category={category}
              inStock={inStock}  
            />
          )
          })
        : <h1>{query} finnes ikke i vår sortiment</h1>
        }
    </div>
  )
}
