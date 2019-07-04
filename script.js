function retirement(retiremenetAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retiremenetAge - age) + a);

    }
}

//create one function for each country 

var retiremenentUS = retirement(66);
var retiremenetGermany = retirement(65);
var retiremenetIceland = retirement(67);

retiremenentUS(1977);
retiremenetGermany(1977);
retiremenetIceland(1977);


//we can also use and get the same result
// retirement(66)(1977);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'teacher') {
            console.log(name + ', tell us what do you teach? ');
        } else if (job === 'drag queen') {
            console.log(name + ', do you lipsync for your life?');
        } else {
            console.log('Tell us more about what you do');
        }
    }
}

interviewQuestion('drag queen')('Jennifer');
