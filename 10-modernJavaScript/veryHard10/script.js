  
let str = "Road to Hire is awesome";

console.log(str);

for (let i = 0; i < str.length ; i++){
    if(str.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
            console.log(str.charAt(i));
            break;
    }
}