// Good Luck! You got this 💪🏾
// Write your code here.
function describeCountry (country,population,capitalCity){
    console.log(`${country} has ${population} million people and its captial city is ${capitalCity}`)
  }
  
  describeCountry ("Somaliland",3.5,"Hargeisa")
  describeCountry ("Ethiopia",117.9,"Addis Ababa")
  describeCountry ("Zambia",18.92,"Lusaka")


  function  percentageOfWorld1 (county,population,){
    
    console.log(`${county} has ${population} million people, so it's about${population / 7900 * 100}% of the world population`)
  }

  percentageOfWorld1("Spain",47.8)
  percentageOfWorld1("United State America",335.8)
  percentageOfWorld1("Russia",146)

// kenya,Tanzaniam,Ethiopia,somalia



let  population = [65.7,63.9,117.9,17]
let  neighbours = ["Ethiopia","Kenya","Djibouti","Tanzania"]

console.log(neighbours.length == neighbours.length)


for(let i = 0; i  < 4;i++){
  console.log(neighbours[i])
  
}

for (let i = neighbours.length;  i > 0 ;i--){
    console.log(neighbours[i-1])
}

 i = 0
while (i <= 4){
    console.log(neighbours[i])
    i++
}

i = 4
while(i > 0){
console.log(neighbours[i-1])
i--
}