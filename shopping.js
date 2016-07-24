// 1-Create an array to represent your shopping list with the following items:
//  'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
var list = ['pop tarts', 'ramen noodles', 'chips','salsa','coffee'];
console.log('\n1-The List\n' + list);

// 2-Add 'fruit loops' to the list.
list.push('fruit loops');
console.log('\n2-Add fruit loops to the list\n' + list);

// 3-Update 'coffee' to 'fair trade coffee'
list[4]= 'fair trade coffe';
console.log('\n3-Update coffee to fair trade coffee\n' + list);

// 4-Replace 'chips' and 'salsa' with 'rice' and 'beans'
list.splice(2,2, 'rice','beans');
console.log('\n4-replace chips and salsa with rice and beans\n' + list);

// 5-Create an empty array to represent your shopping cart.
var cart=[];
console.log('\n5-Empty Shopping Cart \n' + cart);

// 6-Remove the last item from your shopping list and add it to your cart
cart.push(list.pop());
console.log('\n6-moving last item of list to the cart\n' + 'new list:\n' + list +  '\nnew cart:\n' + cart);

// 7-Remove the first item from your shopping list and add it to the cart
cart.push(list.shift());
console.log('\n7-moving first item of list to the cart\n' + 'new list:\n' + list +  '\nnew cart:\n' + cart);

// 8-Write a 'while' loop that takes items from your shopping list and moves them to your cart
// until there are no items left on the list.
while(list.length!== 0){
  cart.push(list.pop());
}
console.log('\n8-moving all remaining items from list to cart\n' + 'new list:\n' + list +  '\nnew cart:\n' + cart);

// 9-Sort the items in your cart alphabetically... backwards
cart.sort();
cart.reverse();
console.log('\n9-The cart sorted alphabetically bakwards:\n' + cart );

// 10-Print the list of items in your shopping cart to the console as comma separated string.
var newcart = cart.join(' | '); //I used | insted of , so I can tell it's working....
console.log('\n10-Listing the cart as a comma seperated string:\n' + newcart);
