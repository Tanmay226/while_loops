// while loops statement---> 1 2 3 4 5
//jumping statement in last line
let i = 0;

while (i <= 20) {
  console.log(i); //1 2 3 4 5 6 7 8 9
  i++; //i+=1 same as i =i +1;
  console.log(i);
  i += 2;
  //  console.log(i);
  //  i-=3;
}

// 2 4  6 8 ...10 even number

// let i = 2;
// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }

//reverse number down

// let a=10;
// while(a>0)
// {
//     console.log(a);// 10 9  8 7 6 5 4 3
//     --a;
// }

// do.. while******

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);

//  10 9 8 7 6 5 4 3 .....1

// let i=10;

// do{
//     console.log(i);
//     i--;
// }while(i>=0);

//for loop *****//for(initilization;condition;inc/dec){statement exicute}
// 1 2.......10

// for(let i=0;i<=10;i++){
//     console.log(i);// 1 2 3..10
// }

// 2 4 6 8..even number

// for(let i=2;i<=10;i+=2){
//     console.log(i);//  2 4..10
// }

// 10 9 8 7 6
for (let i = 10; i > 0; i--) {
  console.log(i); //10 9 8.....1
}

// for loop ***jumping statement;
// break; continue

for (let i = 1; i <= 10; i++) {
  if (i == 5 || i == 7 || i == 9) continue; //  break;

  console.log(i); //1 2 3 4 6 8 10
}
