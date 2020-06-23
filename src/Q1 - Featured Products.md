# Problem

An e-commerce site tracks the purchases made each day. The product that is purchased the most one day is the featured product for the following day. If there is a tie for the product purchased most frequently, those product names are ordered
alphabetically ascending and the last name in the list is chosen.

## Example

    products = ['redShirt', 'greenPants', 'redShirt', 'orangeShoes', 'blackPants', 'blackPants']

greenPants and orangeShoes were purchased once.

redShirt and blackPants were each purchased 2 times on the given day.

After ordering the products alphabetically ascending, redShirt is the last product listed.

redShirt is the featured product for the following day.

## Function Description

Complete the function featuredProduct below.

featuredProduct has the following parameter(s):

    string products[n]:  an array of strings where each represents a purchased product

Returns:

    string: the name of the featured product

Constraints

1 ≤ n ≤ 10^4

Sample Input

```
// Sample Input
yellowShirt
redHat
blackShirt
bluePants
redHat
pinkHat
blackShirt
yellowShirt
greenPants
greenPants

// Sample Output
yellowShirt
```

```ts
// Write your code in index.html

function featuredProduct(products) {
  return ""
}
```
