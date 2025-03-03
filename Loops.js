/* 
loops in JavaScript: execute a block of code repeatedly until a specified condition is ture. 

1. for loop
2. while loop
3. do wile loop
4. for in loop
5. for of loop
6. for Each


*/

let fruits=["Apple","Banana","Mango","Orange","Cherry"];
let fruitsinfo=[
    'An apple is a round, edible fruit produced by an apple tree Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.',
    'A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large treelike herbaceous flowering plants in the genus Musa.',
    'A mango is an edible stone fruit produced by the tropical tree Mangifera indica. It originated from the region between northwestern Myanmar, Bangladesh,',
    'The orange, also called sweet orange to distinguish it from the bitter orange (Citrus × aurantium), is the fruit of a tree in the family Rutaceae.',
    'A cherry is any of various trees belonging to the genus Prunus and their edible fruits. Sweet cherries and tart cherries are cultivated'
];

var myfruits=new Array();
    myfruits[0]='https://www.collinsdictionary.com/images/full/apple_158989157.jpg';
    myfruits[1]='https://organicmandya.com/cdn/shop/files/BananaPachabale.jpg?v=1721369894&width=1500';
    myfruits[2]='https://www.shutterstock.com/shutterstock/photos/2500576635/display_1500/stock-photo-ripe-mango-isolated-on-white-background-2500576635.jpg';
    myfruits[3]='https://www.spotlessfruits.com/cdn/shop/products/Tangerine-SpotlessFruitsIndia_1024x1024.png?v=1634193360';
    myfruits[4]='https://m.media-amazon.com/images/I/51cRWnGNHbL._AC_UF894,1000_QL80_.jpg';

for(let i=0;i<myfruits.length;i++){
    document.write('<div class="container"><h4>"'+fruits[i]+'"</h4><img src="'+myfruits[i]+'"/><p>"'+fruitsinfo[i]+'"</p></div>');
}