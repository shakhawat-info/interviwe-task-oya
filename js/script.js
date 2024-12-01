const users = [
    { id: 1, name: "Alice", age: 25, isActive: true, scores: [85, 92, 88] },
    { id: 2, name: "Bob", age: 30, isActive: false, scores: [70, 75, 80] },
    { id: 3, name: "Charlie", age: 35, isActive: true, scores: [95, 90, 93] },
    { id: 4, name: "Diana", age: 28, isActive: true, scores: [60, 65, 70] },
    { id: 5, name: "Eve", age: 40, isActive: false, scores: [80, 85, 88] }
];



// Processing Function

function processUsers(){

// choose active user start
let activeUsers = [];

users.map((user)=>{
    if(user.isActive){
        activeUsers.push(user)
    }
    
})
activeUsers.map((item)=>{
    
    
    ActiveUsename = document.querySelector('.ActiveUsename');
    ActiveUsename.innerHTML +=`
    <tr>
    <td>${item.id}</td>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.isActive}</td>
    <td>${item.scores}</td>
    </tr>
    `
// choose active user end


// average scross start
let itemArry = Array.from(item.scores);

let totalNumber = 0;

for(let n = 0 ; n < itemArry.length ; n++){
    totalNumber += itemArry[n] / item.scores.length;
}

item.averageScore = totalNumber;
let AvScore = document.querySelector('.AvScore');

AvScore.innerHTML += `
<tr>
<td>${item.id}</td>
<td>${item.name}</td>
<td>${item.scores}</td>
<td>${item.averageScore}</td>
</tr>
`

})
// average scross end



// top performer start

const topPerformer = activeUsers.reduce((top, user) => {
    return !top || user.averageScore > top.averageScore ? user : top;
}, null);


let HighPerformer = document.querySelector('.HighPerformer');
HighPerformer.innerHTML +=`
                <tr>
                    <td>${topPerformer.id}</td>
                    <td>${topPerformer.name}</td>
                    <td>${topPerformer.age}</td>
                    <td>${topPerformer.scores}</td>
                    <td>${topPerformer.averageScore}</td>
                </tr>
`

// top performer end

// age group start
let ageGroups = {'Under30':[], 'above30': []}

users.map((AgeGroup)=>{
    if(AgeGroup.age < 30){
        ageGroups.Under30.push(AgeGroup)
    }
    else{
        ageGroups.above30.push(AgeGroup)
        
    }
})
// age group end


}

processUsers();