//Problem 0: Part A
var cat = {
    name: "Fluffy",
    activities: ["play", "eat cat food"],
    catFriends: [
        {
        name: "bar",
        activities: ["be grumpy", "eat bread omblet"],
        weight: 8,
        furcolor: "white"
        }, 
        {
        name: "foo",
        activities: ["sleep", "pre-sleep naps"],
        weight: 3
        }
    ]
   }
   console.log(cat);
   //Add height and weight to Fluffy
   cat["height"]=10

   //Fluffy name is spelled wrongly. Update it to Fluffyy
   cat["name"]="Fluffyy";

   //List all the activities of Fluffyy’s catFriends.
   for(i in cat["catFriends"]){
       console.log(cat["catFriends"][i]["activities"])
   }

   //Print the catFriends names.
   for(i of cat["catFriends"]){
       console.log(i["name"])
   }

   //Print the total weight of catFriends
   let totalWt=0
   for(i of cat["catFriends"]){
       totalWt+=+i["weight"]
   }

   //Print the total activities of all cats (op:6)
   console.log("total weight of cat friends is : "+ totalWt);
   let totalActivities=cat["activities"].length
   for(i of cat["catFriends"]){
       totalActivities+=i["activities"].length
   }
   console.log(totalActivities);

   //Add 2 more activities to bar & foo cats
   for(i of cat["catFriends"]){
       if(i["name"]==="bar"){
           i["activities"].push("new activity 1");
           i["activities"].push("new activity 2");
           break;
       }

   }
   for(i of cat["catFriends"]){
    if(i["name"]==="foo"){
        i["activities"].push("new activity 1");
        i["activities"].push("new activity 2");
        break;
        }
    }

    ////Update the fur color of bar
    for(i of cat["catFriends"]){
        if(i["name"]==="bar"){
            i["furcolor"]="Black"
            break;
        }

    }
    console.log(cat)


//Problem 0 : Part B
var myCar = {
    make: "Bugatti",
    model: "Bugatti La Voiture Noire",
    year: 2019,
    accidents: [
    {
    date: "3/15/2019",
    damage_points: "5000",
    atFaultForAccident: true
    },
    {
    date: "7/4/2022",
    damage_points: "2200",
    atFaultForAccident: true
    },
    {
    date: "6/22/2021",
    damage_points: "7900",
    atFaultForAccident: true
    }
    ]
}

//1. Loop over the accidents array. Change atFaultForAccident from true to false.

for(i of myCar["accidents"]){
    i["atFaultForAccident"]=false;
}
console.log(myCar)

//2. Print the dated of my accidents
for(i of myCar["accidents"]){
    console.log(i["date"])
}


//Problem 1 :Write a function called "printAllValues" which returns an newArray of all the input object’s values.
var obj = {name: "RajiniKanth", age: 33, hasPets : false};
let printAllValues=(obj)=>{
    let newArray=[]
    for(key in obj){
        newArray.push(obj[key])
    }
    return newArray
}
console.log(printAllValues(obj));

//Problem 2 :Write a function called "printAllKeys" which returns an newArray of all the input object’s keys.
let printAllKeys=(obj)=>{
    let newArray2=[]
    for(key in obj){
        newArray2.push(key);
    }
    return newArray2;
}
console.log(printAllKeys(obj));


//Problem 3: Write a function called "convertObjectToList" which converts an object literal into an array of arrays.
var object = {name: "ISRO", age: 35, role: "Scientist"};
let convertObjectToList=(object)=>{
    let outputList=[];
    for(i in object){
        let tempArray=[];
        tempArray.push(i);
        tempArray.push(object[i]);
        outputList.push(tempArray)
    }
    return outputList;
}
console.log(convertObjectToList(object));


//Problem 4: Parsing a list and transform the first and last elements of it:
var array = ["GUVI", "I", "am", "Geek"];
let transformFirstAndLast=(array)=>{
    newObject={};
    newObject[array[0]]=array[array.length-1];
    return newObject;
}
console.log(transformFirstAndLast(array));


//Problem 5: Write a function "fromListToObject" 
//which takes in an array of arrays, and returns an object with 
//each pair of elements in the array as a key-value pair.

var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
let fromListToObject=(array)=>{
    let newObject={};
    for(i of array){
        newObject[i[0]]=i[1];
    }
    return newObject;
}
console.log(fromListToObject(array));


//Problem 6: Write a function called "transformGeekData" 
//that transforms some set of data from one format to another.
var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], 
                [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];
let transformGeekData=(array)=>{
    var transformEmployeeList=[];
    for(ele of array){
        let object={};
        for(innerEle of ele){
            object[innerEle[0]]=innerEle[1]
        }
        transformEmployeeList.push(object)
    }
    return transformEmployeeList;
}
console.log(transformGeekData(array));


//Problem 7: Parsing two JSON objects and Compare
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 5}
let assertObjectsEqual=(expected,actual,testName)=>{
    if(JSON.stringify(expected)===JSON.stringify(actual)){
        console.log("Passed")
    }
    else{
        console.log(`FAILED [my test:${testName}] Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`);
    }
}
assertObjectsEqual(expected,actual,'detects that two objects are equal')


//Problem 8: Parsing two JSON objects and Compare to check security question and answer are valid
var securityQuestions = [
    {
    question: "What was your first pet’s name?",
    expectedAnswer: "FlufferNutter"
    },
    {
    question: "What was the model year of your first car?",
    expectedAnswer: "1985"
    },
    {
    question: "What city were you born in?",
    expectedAnswer: "NYC"
    }
   ]
let chksecurityQuestions=(securityQuestions,question,ans)=>{
    for(i of securityQuestions){
        if(i["question"]===question && i["expectedAnswer"]===ans){
            return true;
        }
    }
    return false;
}
var ques = "What was your first pet’s name?";
var ans  =  "FlufferNutter";
status=chksecurityQuestions(securityQuestions,ques,ans)
console.log(status)
var ques = "What was your first pet’s name?";
var ans  =  "DufferNutter";
status=chksecurityQuestions(securityQuestions,ques,ans)
console.log(status);


//Problem 9: Write a function to return the list of characters below 20 age
var students = [
    {name: "Siddharth Abhimanyu", age: 21}, { name: "Malar", age: 25},
    {name: "Maari",age: 18},{name: "Bhallala Deva",age: 17},
    {name: "Baahubali",age: 16},{name: "AAK chandran",age: 23},   
    {name:"Gabbar Singh",age: 33},{name: "Mogambo",age: 53},
    {name: "Munnabhai",age: 40},{name: "Sher Khan",age: 20},
    {name: "Chulbul Pandey",age: 19},{name: "Anthony",age: 28},
    {name: "Devdas",age: 56}
];
let returnMinors=(students)=>{
    let minorStudents=[]
    for(ele of students){
        if(ele["age"]<20){
            minorStudents.push(ele["name"])
        }
    }
    return minorStudents
}
console.log(returnMinors(students));
