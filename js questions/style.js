//  🟢 EASY (1–20)
// // 1.	Check if a number is positive or negative.
//         let nun=5;
//         if(nun>0){console.log("A number is positive");
//         } else if(nun<0){
//             console.log("A number is positive");
//         }
// 2.	Check if a number is zero or not.
// let nun = -1;
// if(nun==0){
//     console.log("A number is zero");
// } else if(nun>0 || nun<0 ){
//     console.log("A number is not zero");
// }
// 3.	Check if a number is even or odd.
// let nun = 3;
// if(nun%2==0){
//     console.log(`${nun} is even`);
// } else {
//     console.log(`${nun} is odd`);
// }
// 4.	Compare two numbers and print the larger one.
// let a=2;
// let b=3;
// if(a>b){
//     console.log(`${a} is larger`);
// } else if (a<b){
//      console.log(`${b} is larger`);
// }
// 5.Check if a person is eligible to vote (age ≥ 18).
// let age=17;
// if(age>=18 ){
//     console.log(`${age} you can eligible to vote`);
// }else{
//     console.log(`${age} you can not eligible to vote`);
// }
// 6.Check if a number is divisible by 5.
// let nun = 6;
// if(nun%5==0){
//     console.log(`${nun} is divisible by 5`);
// } else {console.log(`${nun} is not divisible by 5`)};
// 7.Check if a character is a vowel or consonant.
// let char = "k";
// if("aeiouAEIOU".includes(char)){
//     console.log(`${char} is vowel`);
// } else {console.log(`${char} is not a vowel`);}
// 7.Check if a year is a leap year.
// let leap = 5;
// if(leap%4==0){
//     console.log(`${leap} is a leap year`);
// } else {console.log(`${leap} is not a leap year`);}
// 8.Check if a character is a vowel or consonant.
//     let char = "k";
// if("aeiouAEIOU".includes(char)){
//     console.log(`${char} is vowel`);
// } else {console.log(`${char} is not a consonant`);}
// 9.Check if a temperature is hot (>30) or cold.
// let tem=20;
// if(tem>=30){
//     console.log(`${tem} is hot`);
// } else {console.log(`${tem} is cold`);}
// 10.Check if a student passed (marks ≥ 40).
// let mark =10;
// if(mark>=40){
//     console.log(`${mark} num is passed`);
// }else{console.log(`${mark} num is not passed`);}
// 11.Check if a number is multiple of 3 or 7.
// let num=2;
// if( num%3==0 & num%7==0){
//     console.log(`${num} is multiple of 3 or 7`);
// } else{console.log(`${num} is not multiple of 3 or 7`)}
// 12.Check whether a number is single-digit, double-digit, or more.
// let num = 9;
// if(num>9){
//     console.log(`${num} is  double-digit number`);
// } else{ console.log(`${num} is single-digit number`);}
// 13.Compare three numbers and print the greatest.
// let a= 102;
// let b= 120;
// let c= 12;
// if(a>b || a>c){
//     console.log(`${a} a is greatest`);
// }else if(b>c || b>a){
//     console.log(`${a} b is greatest`);
// }else if(c>b || c>a){
//     console.log(`${a} c is greatest`);
// }
// 14.Check if a number is divisible by both 2 and 3.
// let num=30;
// if(num%2==0 & num%3==0){
//     console.log(`${num} is divisible by both 2 and 3`);
// }
// 15.Check if a password length is at least 8 characters.
// let pass="123456789";
// let a=pass.length
// if(a==="9"){
//     console.log(`${a} is the length of password`);
// }else {console.log(`${a} is not length of password`);}
//
// 16.Print “Morning”, “Afternoon”, or “Night” based on hour.
// let hour = 18;
// if(hour<=12){
//     console.log(`Morning`);
// }else if(hour<=18){
//     console.log(`Afternoon`);
// }else{console.log("Night");}
// 17.Check if two strings are equal.
// let a ="pawan grover";
// let b="pawa grover";
// if(a===b){
//     console.log(`both are equal`);
// }else{console.log(`both are not equal`);}
// 18.Check if a number is between 10 and 50.
// let num=9;
// if(num>=10 & num<=50){
//     console.log(`${num}  number is between 10 and 50`);
// }else { console.log(`${num}  number is not  between 10 and 50`);}
// 19.Check if a person is a teenager (13–19).
// let age=18;
// if(age>=13 & age<=19){
//     console.log(`teenager`);
// }
// 20.Check if a character is uppercase or lowercase.
// let word = 1;
// if(word>="A" & word<="Z"){
//     console.log(`uppercase`);
// }else if(word>="a" & word<="z"){console.log(`lowercase`);}
// else if(word>=0 || word<=0){
//     console.log("its a interger not a word");
// }
// ________________________________________
// 🟡 MEDIUM (21–40)
// 21.Assign grade based on marks:
// •≥90 → A
// •≥75 → B
// •≥60 → C
// •Else → Fail
// let mark =75;
// if(mark>=90){
//     console.log(`${mark} mark is grade A`);
// }else if(mark>=75 & mark<90){
//     console.log(`${mark} mark is grade B`);
// }else if(mark>=60 & mark<75){
//     console.log(`${mark} mark is grade C`);
// }else if(mark<60){
//     console.log(`${mark} is Fail`);
// }
// 22.Find discount:
// •amount > 5000 → 20%
// •3000 → 10%
// •else → 5%
// let amount = 8000;
// if (amount>=5000){
//     console.log(`${amount} per 20% discont`);
// }else if(amount<5000 & amount>=3000){
//     console.log(`${amount} per 10% discount`);
// }else{
//     console.log(`${amount} per 5% discount`);
// }
// 23.Check triangle type (equilateral / isosceles / scalene).
// let a=20;
// let b=50;
// let c=40;
// if(a===b & b===c & c===a){
//     console.log(`equilateral triangle`);
// }else if(a===b || b===c  || a===c){
//     console.log(`isosceles triangle`)
// }else{console.log(`scalene`);}
// 24.Check if number is divisible by 2, 5, or 10.
// let num = 66;
// if(num%2==0 & num%5==0 & num%10==0){
//     console.log(`${num} is divisible by 2, 5, or 10`);
// }else{
//      console.log(`${num} is not divisible by 2, 5, or 10`);
// }
// 25.Traffic light system:
// •Red → Stop
// •Yellow → Ready
// •Green → Go
// let light ="Yellow";
// if(light==="Red"){
//     console.log(`${light} is stop`);
// }else if(light==="Yellow"){
//      console.log(`${light} is Ready`);
// }else if(light==="Green"){
//      console.log(`${light} is Go`);
// }
// 26.Find electricity bill slab:
// •≤100 units → ₹1/unit
// •≤300 → ₹2/unit
// •300 → ₹3/unit
// let bill =300;
// if(bill<=100){
//     console.log(`${bill} is ₹1/unit `);
// }else if(bill>100 & bill<=300){
//     console.log(`${bill} is ₹2/unit `);
// }else if( bill>300){
//     console.log(`${bill} is ₹3/unit `);
// }
// 27.Check if three sides form a valid triangle.
// let x =10, y=10, z=1;
// if(x+y>z || x+z>y || y+z>x  ){
// console.log(`valid`);
// }else{
//     console.log(`invalid`);
// }
// 28.Convert marks to result:
// Distinction / First / Second / Fail.
// let mark=66;
// if(mark>=75){
//     console.log(" Distinction");
// }else if(mark<75 & mark>=60){
//     console.log(`first`);
// }else if(mark<60 & mark>=40){
//     console.log(`secong`);
// } else if( mark<40){
//     console.log(`fail`);
// }
// 29.	Check login:
// username & password correct → success
// else → error
// let username="pawan" ,password="grover";
// if(username==="pawan" & password==="grover"){
//     console.log(`succes`);
// }else{
//     console.log(`error`);
// }
// 30.Check whether a character is alphabet, digit, or special symbol.
// let char="#";
// if(char>="a" & char>="z" || char>="A" & char>="Z"){
//     console.log(`${char} is alphabe`);
// }else if(char>=0 || char<0){
//     console.log(`${char} is interger`);
// }
// else{
//     console.log(`special symbol`);
// }
// 31.Check if number is prime (using conditionals).
// let prime=7;
// if(prime%prime==1){

// }
// 32.ATM withdrawal:
// balance must stay ≥ 500 after withdrawal.
// let balance=300;
// if(balance>=500){
//     console.log(`withdrawal`);
// }else{
//     console.log(` balance must stay`);
// }
// 33.Find largest of 4 numbers.

// let arr=[0,2,5,9,3,40,];
// let mix=arr[0];
// for (let i of arr){

//   if (i < max) max = i;
// }
// console.log(max);
// for(let i of arr){
//     if(i<mix) mix =i
// }

// 34.Print weekday using switch (1–7).

// 35.Find smallest of 3 numbers using ternary.

// 36.Check if a year is century year and leap year.

// let year = 1700;

// if (year % 400 === 0) {
//     console.log("Century Leap Year");
// }
// else if (year % 100 === 0) {
//     console.log("Century Year but Not Leap Year");
// }
// else if (year % 4 === 0) {
//     console.log("Leap Year");
// }
// else {
//     console.log("Normal Year");
// }
// 37.Shipping cost:
// •weight < 2kg → ₹50
// •<5kg → ₹100
// •else → ₹200
// let weight=3;
// if(weight<=2){
//     console.log(`${weight}kg cost is 50`);
// }else if(weight<=5 ){
//      console.log(`${weight}kg cost is 100`);
// }else if(weight>5){
//      console.log(`${weight}kg cost is 200`);
// }
// 38.Movie ticket price:
// •child → ₹100
// •adult → ₹200
// •senior → ₹150
// let category="senior";
// if(category==="child"){
//     console.log(`${category} movie ticket price is 100`);
// }else if(category==="adult"){
//     console.log(`${category} movie ticket price is 200`);
// }else if (category==="senior"){
//     console.log(`${category} movie ticket price is 150`);
// }else{
//      console.log(`${category} "Invalid category"`);
// }

