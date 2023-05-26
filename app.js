class Vehicle{
make
model
year
color
mileage
rented=0
constructor(make,model,year,color,mileage){
    this.make=make;
    this.model=model;
    this.year=year;
    this.color=color;
    this.mileage=mileage;
    }
    rent(){
        if(this.rented===0){
            this.rented=1;
            console.log("Rent Successful");
        
        }
        else if(this.rented===1){
            console.log("Already rented");
        }
    }
    return(){
        if(this.rented===0){
            console.log("Not rented");
        }
        else if(this.rented===1){
            this.rented=0;
            console.log("Return Successful");
        }
    }
    getDescription(){
        console.log( this.make+" "+this.model+" "+this.year+" "+this.color+" "+this.mileage)
    }
}



class Car extends Vehicle{
    noOfDoors
    noOfSeats
    constructor(make,model,year,color,mileage,noOfDoors,noOfSeats){
        super(make,model,year,color,mileage);
        this.noOfDoors=noOfDoors;
        this.noOfSeats=noOfSeats;
    }
    getDescription(){
        super.getDescription();
        console.log("Number of Doors: "+this.noOfDoors);
        console.log("Number of Seats: "+this.noOfSeats);
    }
}

class Bike extends Vehicle{
    numGears
    constructor(make,model,year,color,mileage,numGears){
        super(make,model,year,color,mileage);
        this.numGears=numGears;
    }
    getDescription(){
        super.getDescription();
        console.log("Number of Gears: "+this.numGears);
    }
}


const car1 = new Car('Toyota', 'Corolla', 2019, 'White', 20000, 4, 5)
car1.getDescription()
car1.rent()
const bike1 = new Bike('Honda', 'CBR', 2021, 'Black', 1000, 6)
bike1.getDescription()
bike1.rent()

