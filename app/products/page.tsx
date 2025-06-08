import ClientWrapper from "@/components/ui/ClientWrapper"

type FakeProduct = {
  id: string
  name: string
  price: number
  description: string
  imgUrl: string
  category: string
  inStock: boolean
}



const fakeProductDB: FakeProduct[] = [
  {
    "id": "1",
    "name": "Carbonara Twist 1",
    "price": 274,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "2",
    "name": "Olive Tapenade Capellini 2",
    "price": 156,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "3",
    "name": "Spinach Ricotta Gnocchi 3",
    "price": 179,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "4",
    "name": "Pumpkin Sage Agnolotti 4",
    "price": 256,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "5",
    "name": "Lemon Ricotta Tortellini 5",
    "price": 170,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "6",
    "name": "Lobster Mac & Cheese 6",
    "price": 270,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "7",
    "name": "Four Cheese Lasagna 7",
    "price": 278,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "8",
    "name": "Wild Garlic Fettuccine 8",
    "price": 132,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "9",
    "name": "Seafood Marinara Penne 9",
    "price": 273,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "10",
    "name": "Saffron Risotto 10",
    "price": 283,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "11",
    "name": "Porcini Mushroom Ravioli 11",
    "price": 226,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "12",
    "name": "Creamy Mushroom Farfalle 12",
    "price": 171,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "13",
    "name": "Saffron Risotto 13",
    "price": 172,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "14",
    "name": "Zucchini Lemon Penne 14",
    "price": 196,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "15",
    "name": "Chili Crab Spaghetti 15",
    "price": 104,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "16",
    "name": "Creamy Mushroom Farfalle 16",
    "price": 226,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "17",
    "name": "Carbonara Twist 17",
    "price": 106,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "18",
    "name": "Wild Garlic Fettuccine 18",
    "price": 257,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "19",
    "name": "Black Truffle Pasta 19",
    "price": 219,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "20",
    "name": "Zucchini Lemon Penne 20",
    "price": 125,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "21",
    "name": "Porcini Mushroom Ravioli 21",
    "price": 177,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "22",
    "name": "Tomato Basil Fusilli 22",
    "price": 222,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "23",
    "name": "Lobster Mac & Cheese 23",
    "price": 291,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "24",
    "name": "Zucchini Lemon Penne 24",
    "price": 270,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "25",
    "name": "Garlic Butter Noodles 25",
    "price": 103,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "26",
    "name": "Sun-dried Tomato Rigatoni 26",
    "price": 131,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "27",
    "name": "Sun-dried Tomato Rigatoni 27",
    "price": 299,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "28",
    "name": "Basil Pesto Linguine 28",
    "price": 257,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "29",
    "name": "Basil Pesto Linguine 29",
    "price": 144,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "30",
    "name": "Seafood Marinara Penne 30",
    "price": 234,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "31",
    "name": "Porcini Mushroom Ravioli 31",
    "price": 277,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "32",
    "name": "Garlic Butter Noodles 32",
    "price": 115,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "33",
    "name": "Chili Crab Spaghetti 33",
    "price": 137,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "34",
    "name": "Zucchini Lemon Penne 34",
    "price": 133,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "35",
    "name": "Chili Crab Spaghetti 35",
    "price": 253,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "36",
    "name": "Seafood Marinara Penne 36",
    "price": 110,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "37",
    "name": "Spinach Ricotta Gnocchi 37",
    "price": 288,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "38",
    "name": "Porcini Mushroom Ravioli 38",
    "price": 155,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "39",
    "name": "Olive Tapenade Capellini 39",
    "price": 121,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "40",
    "name": "Chili Crab Spaghetti 40",
    "price": 247,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "41",
    "name": "Chili Crab Spaghetti 41",
    "price": 288,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "42",
    "name": "Olive Tapenade Capellini 42",
    "price": 130,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "43",
    "name": "Seafood Marinara Penne 43",
    "price": 276,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "44",
    "name": "Lemon Ricotta Tortellini 44",
    "price": 130,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "45",
    "name": "Saffron Risotto 45",
    "price": 124,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "46",
    "name": "Lobster Mac & Cheese 46",
    "price": 264,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "47",
    "name": "Zucchini Lemon Penne 47",
    "price": 151,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "48",
    "name": "Sun-dried Tomato Rigatoni 48",
    "price": 216,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "49",
    "name": "Porcini Mushroom Ravioli 49",
    "price": 200,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "50",
    "name": "Spinach Ricotta Gnocchi 50",
    "price": 246,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "51",
    "name": "Black Truffle Pasta 51",
    "price": 259,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "52",
    "name": "Porcini Mushroom Ravioli 52",
    "price": 187,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "53",
    "name": "Seafood Marinara Penne 53",
    "price": 248,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "54",
    "name": "Sun-dried Tomato Rigatoni 54",
    "price": 259,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "55",
    "name": "Porcini Mushroom Ravioli 55",
    "price": 128,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "56",
    "name": "Garlic Butter Noodles 56",
    "price": 138,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "57",
    "name": "Black Truffle Pasta 57",
    "price": 286,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "58",
    "name": "Sun-dried Tomato Rigatoni 58",
    "price": 267,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "59",
    "name": "Black Truffle Pasta 59",
    "price": 186,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "60",
    "name": "Seafood Marinara Penne 60",
    "price": 248,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "61",
    "name": "Pumpkin Sage Agnolotti 61",
    "price": 109,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "62",
    "name": "Creamy Mushroom Farfalle 62",
    "price": 298,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "63",
    "name": "Chili Crab Spaghetti 63",
    "price": 242,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "64",
    "name": "Wild Garlic Fettuccine 64",
    "price": 247,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "65",
    "name": "Carbonara Twist 65",
    "price": 127,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "66",
    "name": "Zucchini Lemon Penne 66",
    "price": 164,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "67",
    "name": "Tomato Basil Fusilli 67",
    "price": 117,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "68",
    "name": "Olive Tapenade Capellini 68",
    "price": 117,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "69",
    "name": "Pumpkin Sage Agnolotti 69",
    "price": 240,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "70",
    "name": "Black Truffle Pasta 70",
    "price": 158,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "71",
    "name": "Black Truffle Pasta 71",
    "price": 121,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "72",
    "name": "Zucchini Lemon Penne 72",
    "price": 238,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "73",
    "name": "Pumpkin Sage Agnolotti 73",
    "price": 199,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "74",
    "name": "Carbonara Twist 74",
    "price": 210,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "75",
    "name": "Basil Pesto Linguine 75",
    "price": 280,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "76",
    "name": "Black Truffle Pasta 76",
    "price": 106,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "77",
    "name": "Garlic Butter Noodles 77",
    "price": 282,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "78",
    "name": "Tomato Basil Fusilli 78",
    "price": 123,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "79",
    "name": "Wild Garlic Fettuccine 79",
    "price": 177,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "80",
    "name": "Basil Pesto Linguine 80",
    "price": 212,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "81",
    "name": "Carbonara Twist 81",
    "price": 277,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "82",
    "name": "Four Cheese Lasagna 82",
    "price": 200,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "83",
    "name": "Lobster Mac & Cheese 83",
    "price": 113,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "84",
    "name": "Lemon Ricotta Tortellini 84",
    "price": 238,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "85",
    "name": "Creamy Mushroom Farfalle 85",
    "price": 224,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "86",
    "name": "Sun-dried Tomato Rigatoni 86",
    "price": 128,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "87",
    "name": "Beetroot Tagliatelle 87",
    "price": 167,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "88",
    "name": "Tomato Basil Fusilli 88",
    "price": 282,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "89",
    "name": "Four Cheese Lasagna 89",
    "price": 257,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "90",
    "name": "Basil Pesto Linguine 90",
    "price": 283,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "91",
    "name": "Pumpkin Sage Agnolotti 91",
    "price": 166,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "92",
    "name": "Spinach Ricotta Gnocchi 92",
    "price": 293,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "93",
    "name": "Wild Garlic Fettuccine 93",
    "price": 248,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "94",
    "name": "Tomato Basil Fusilli 94",
    "price": 220,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "95",
    "name": "Olive Tapenade Capellini 95",
    "price": 242,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "96",
    "name": "Carbonara Twist 96",
    "price": 269,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "97",
    "name": "Spinach Ricotta Gnocchi 97",
    "price": 102,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "98",
    "name": "Saffron Risotto 98",
    "price": 155,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "99",
    "name": "Lobster Mac & Cheese 99",
    "price": 264,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "100",
    "name": "Chili Crab Spaghetti 100",
    "price": 206,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "101",
    "name": "Sun-dried Tomato Rigatoni 101",
    "price": 259,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "102",
    "name": "Lobster Mac & Cheese 102",
    "price": 164,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "103",
    "name": "Black Truffle Pasta 103",
    "price": 179,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "104",
    "name": "Olive Tapenade Capellini 104",
    "price": 226,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "105",
    "name": "Lobster Mac & Cheese 105",
    "price": 222,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "106",
    "name": "Tomato Basil Fusilli 106",
    "price": 193,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "107",
    "name": "Tomato Basil Fusilli 107",
    "price": 268,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "108",
    "name": "Zucchini Lemon Penne 108",
    "price": 238,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "109",
    "name": "Seafood Marinara Penne 109",
    "price": 206,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "110",
    "name": "Four Cheese Lasagna 110",
    "price": 165,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "111",
    "name": "Garlic Butter Noodles 111",
    "price": 123,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "112",
    "name": "Creamy Mushroom Farfalle 112",
    "price": 136,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "113",
    "name": "Garlic Butter Noodles 113",
    "price": 252,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "114",
    "name": "Lemon Ricotta Tortellini 114",
    "price": 149,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "115",
    "name": "Four Cheese Lasagna 115",
    "price": 261,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "116",
    "name": "Chili Crab Spaghetti 116",
    "price": 134,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "117",
    "name": "Pumpkin Sage Agnolotti 117",
    "price": 289,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "118",
    "name": "Four Cheese Lasagna 118",
    "price": 236,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "119",
    "name": "Saffron Risotto 119",
    "price": 114,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "120",
    "name": "Carbonara Twist 120",
    "price": 138,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "121",
    "name": "Olive Tapenade Capellini 121",
    "price": 252,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "122",
    "name": "Sun-dried Tomato Rigatoni 122",
    "price": 116,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "123",
    "name": "Four Cheese Lasagna 123",
    "price": 146,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "124",
    "name": "Chili Crab Spaghetti 124",
    "price": 141,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "125",
    "name": "Four Cheese Lasagna 125",
    "price": 100,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "126",
    "name": "Basil Pesto Linguine 126",
    "price": 273,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "127",
    "name": "Spinach Ricotta Gnocchi 127",
    "price": 128,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "128",
    "name": "Pumpkin Sage Agnolotti 128",
    "price": 292,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "129",
    "name": "Carbonara Twist 129",
    "price": 189,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "130",
    "name": "Porcini Mushroom Ravioli 130",
    "price": 201,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "131",
    "name": "Lobster Mac & Cheese 131",
    "price": 198,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "132",
    "name": "Black Truffle Pasta 132",
    "price": 195,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "133",
    "name": "Beetroot Tagliatelle 133",
    "price": 260,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "134",
    "name": "Seafood Marinara Penne 134",
    "price": 189,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "135",
    "name": "Basil Pesto Linguine 135",
    "price": 182,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "136",
    "name": "Seafood Marinara Penne 136",
    "price": 167,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "137",
    "name": "Pumpkin Sage Agnolotti 137",
    "price": 191,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "138",
    "name": "Chili Crab Spaghetti 138",
    "price": 259,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "139",
    "name": "Beetroot Tagliatelle 139",
    "price": 102,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "140",
    "name": "Chili Crab Spaghetti 140",
    "price": 208,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "141",
    "name": "Tomato Basil Fusilli 141",
    "price": 99,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "142",
    "name": "Black Truffle Pasta 142",
    "price": 222,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "143",
    "name": "Sun-dried Tomato Rigatoni 143",
    "price": 173,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "144",
    "name": "Seafood Marinara Penne 144",
    "price": 138,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "145",
    "name": "Seafood Marinara Penne 145",
    "price": 124,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "146",
    "name": "Four Cheese Lasagna 146",
    "price": 269,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "147",
    "name": "Lobster Mac & Cheese 147",
    "price": 118,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "148",
    "name": "Four Cheese Lasagna 148",
    "price": 181,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "149",
    "name": "Beetroot Tagliatelle 149",
    "price": 193,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "150",
    "name": "Zucchini Lemon Penne 150",
    "price": 147,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "151",
    "name": "Beetroot Tagliatelle 151",
    "price": 263,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "152",
    "name": "Beetroot Tagliatelle 152",
    "price": 225,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "153",
    "name": "Porcini Mushroom Ravioli 153",
    "price": 177,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "154",
    "name": "Porcini Mushroom Ravioli 154",
    "price": 165,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "155",
    "name": "Beetroot Tagliatelle 155",
    "price": 266,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "156",
    "name": "Beetroot Tagliatelle 156",
    "price": 114,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "157",
    "name": "Four Cheese Lasagna 157",
    "price": 203,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "158",
    "name": "Sun-dried Tomato Rigatoni 158",
    "price": 243,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "159",
    "name": "Zucchini Lemon Penne 159",
    "price": 250,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "160",
    "name": "Spinach Ricotta Gnocchi 160",
    "price": 110,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "161",
    "name": "Beetroot Tagliatelle 161",
    "price": 277,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "162",
    "name": "Tomato Basil Fusilli 162",
    "price": 261,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "163",
    "name": "Creamy Mushroom Farfalle 163",
    "price": 178,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "164",
    "name": "Spinach Ricotta Gnocchi 164",
    "price": 146,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "165",
    "name": "Lobster Mac & Cheese 165",
    "price": 226,
    "description": "Inspired by traditional Italian recipes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "166",
    "name": "Creamy Mushroom Farfalle 166",
    "price": 129,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "167",
    "name": "Lemon Ricotta Tortellini 167",
    "price": 138,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "168",
    "name": "Garlic Butter Noodles 168",
    "price": 207,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "169",
    "name": "Carbonara Twist 169",
    "price": 187,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "170",
    "name": "Four Cheese Lasagna 170",
    "price": 156,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "171",
    "name": "Tomato Basil Fusilli 171",
    "price": 136,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "172",
    "name": "Seafood Marinara Penne 172",
    "price": 148,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "173",
    "name": "Creamy Mushroom Farfalle 173",
    "price": 182,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "174",
    "name": "Lobster Mac & Cheese 174",
    "price": 256,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Risotto",
    "inStock": true
  },
  {
    "id": "175",
    "name": "Wild Garlic Fettuccine 175",
    "price": 127,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "176",
    "name": "Saffron Risotto 176",
    "price": 248,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "177",
    "name": "Black Truffle Pasta 177",
    "price": 281,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "178",
    "name": "Sun-dried Tomato Rigatoni 178",
    "price": 119,
    "description": "Slow-cooked with aromatic herbs for a rich taste.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "179",
    "name": "Creamy Mushroom Farfalle 179",
    "price": 177,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "180",
    "name": "Carbonara Twist 180",
    "price": 243,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "181",
    "name": "Zucchini Lemon Penne 181",
    "price": 182,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "182",
    "name": "Wild Garlic Fettuccine 182",
    "price": 160,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Pasta",
    "inStock": true
  },
  {
    "id": "183",
    "name": "Sun-dried Tomato Rigatoni 183",
    "price": 100,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "184",
    "name": "Black Truffle Pasta 184",
    "price": 104,
    "description": "Infused with locally sourced ingredients.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "185",
    "name": "Beetroot Tagliatelle 185",
    "price": 224,
    "description": "Crafted with care and culinary passion.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "186",
    "name": "Lemon Ricotta Tortellini 186",
    "price": 233,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "187",
    "name": "Tomato Basil Fusilli 187",
    "price": 263,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "188",
    "name": "Sun-dried Tomato Rigatoni 188",
    "price": 121,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  },
  {
    "id": "189",
    "name": "Garlic Butter Noodles 189",
    "price": 262,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "190",
    "name": "Four Cheese Lasagna 190",
    "price": 100,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "191",
    "name": "Olive Tapenade Capellini 191",
    "price": 278,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "192",
    "name": "Tomato Basil Fusilli 192",
    "price": 247,
    "description": "Perfectly balanced with tangy and savory notes.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "193",
    "name": "Beetroot Tagliatelle 193",
    "price": 287,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "194",
    "name": "Spinach Ricotta Gnocchi 194",
    "price": 263,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "195",
    "name": "Black Truffle Pasta 195",
    "price": 141,
    "description": "Topped with aged parmesan and herbs.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "196",
    "name": "Wild Garlic Fettuccine 196",
    "price": 222,
    "description": "Served with a creamy gourmet sauce.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Fettuccine",
    "inStock": true
  },
  {
    "id": "197",
    "name": "Seafood Marinara Penne 197",
    "price": 132,
    "description": "A delightful blend of flavors wrapped in handmade dough.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Ravioli",
    "inStock": true
  },
  {
    "id": "198",
    "name": "Spinach Ricotta Gnocchi 198",
    "price": 207,
    "description": "A seasonal favorite with a modern twist.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Gnocchi",
    "inStock": true
  },
  {
    "id": "199",
    "name": "Basil Pesto Linguine 199",
    "price": 145,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Mac & Cheese",
    "inStock": true
  },
  {
    "id": "200",
    "name": "Creamy Mushroom Farfalle 200",
    "price": 112,
    "description": "A hearty meal that warms the soul.",
    "imgUrl": "/images/241A9411-1.jpg",
    "category": "Spaghetti",
    "inStock": true
  }
]
export default async function Page() {
  
  async function getProducts(db: FakeProduct[]): Promise<FakeProduct[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const allData = db;
      
        resolve(
          allData
        )
      }, 600)
    })
  }

    const filteredProducts = await getProducts(fakeProductDB)


  return(
    <div>
          <ClientWrapper products={filteredProducts} />
    </div>
  )
}

