function retirement(retiremenetAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retiremenetAge - age) + a);

    }
}

//create one function for each country 

var retiremenentUS = retirement(66);
retiremenentUS(1977);

//we can also use 
retirement(66)(1977);