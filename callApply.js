const normalPerson = {
    firstName: 'Abdur Rahim',
    lastName: 'Bin Abdul Mannan',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount-tips-tax;
        return this.salary;  
    }
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Golam',
    salary: 25000
}

// normalPerson.chargeBill();

// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(2000);
// heroBillCharge(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(5000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(heroPerson,900);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,900,300,30 );
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[500,300,50]);
console.log(heroPerson.salary);