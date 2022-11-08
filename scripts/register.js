//object literal
let petSalon = {
    //properties
    //name is simple, and only needs one simple property value
    name:"The Fashion Pet",
    //address is more complex, and so we need to create another object within this object to define the various values for address
    address:{
        street:"University",
        number:"262",
        zip:"22400"
    },
    //pets is a long list of data, and therefore an array is needed.
    pets:[
    //curly brackets below here indicate an anonymous object as giving it a name would be redundant
            {
                name:"Scooby",
                age:60,
                gender:"male",
                breed:"Dane",
                service:"Grooming",
                owner:"Shaggy",
                contactPhone:"555-555-5555"
            },
            {
                name:"Speedy Gonzalez",
                age:70,
                gender:"male",
                breed:"Mixed",
                service:"Nails Cut",
                owner:"Bugs Bunny",
                contactPhone:"555-555-5555"
            },
            {
                name:"Scrappy",
                    age:50,
                    gender:"male",
                    breed:"Mixed",
                    service:"Vaccine",
                    owner:"Shaggy",
                    contactPhone:"555-555-5555"
                }
        ]
        
}
let counter = 0;
        for (let obj of petSalon.pets) {
          if (obj.status = 'name') counter++;
        }
        
        alert(counter);
//ways of accessing the values in the object. Use period (.) after object name to go down into the property within the object
//console.log(petSalon.address.street);
//accessing a specific name below, by defining the position ([0]) followed by period (.) and then name property. Pay attention to syntax
//console.log(petSalon.pets[0].name);



function displayNames() {
    for (let i = 0; i < petSalon.pets.length; i++) {
        let petNames = petSalon.pets[i].name; // get the name
        console.log(petNames);
      }
        
}
displayNames();

    //alert to display count of how many pets
    //display the names using a for loop

