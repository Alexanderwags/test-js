products = [
  "redShirt",
  "greenPants",
  "redShirt",
  "orangeShoes",
  "blackPants",
  "blackPants",
];

/*--------- featuredProduct ------------- */
let test = [
  "yellowShirt",
  "redHat",
  "blackShirt",
  "bluePants",
  "redHat",
  "pinkHat",
  "blackShirt",
  "yellowShirt",
  "greenPants",
  "greenPants",
];
function newState(array, item) {
  let cont = 0;
  array.map((pro) => {
    item == pro ? cont++ : "";
  });
  let newState = {
    prod: item,
    cant: cont,
  };
  return newState;
}
function verfication(array) {
  const myArr = array;
  const uniqueArray = [];
  const myObj = [];
  let state_prod = [];
  myArr.forEach((el) => {
    if (!(el in myObj)) {
      myObj[el] = true;
      uniqueArray.push(el);
    }
  });
  uniqueArray.map((item) => {
    state_prod.push(newState(array, item));
  });
  return state_prod;
}
function featuredProduct(array) {
  let nume = [];
  let rev = 0;
  let prod = verfication(array);
  prod.map((item) => {
    nume.push(item.cant);
  });
  let max = Math.max(...nume);
  nume.map((item) => {
    item == max ? rev++ : "";
  });

  if (rev > 1) {
    // orden de los productos
    array.sort(function (prev, next) {
      if (prev > next) {
        return 1;
      } else if (prev < next) {
        return -1;
      }
      return 0;
    });

    let state = {
      winner: "winner",
      P_featured: array.pop(),
    };
    console.log(state);
  } else if (rev == 1) {
    prod.map((item) => {
      item.cant == max ? console.log(item) : "";
    });
  }
}
featuredProduct(test);
