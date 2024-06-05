let car: string = "Corolla"

//Test 1: Is car equal to Corolla? Prediction: True
console.log("Is car == 'Corolla'? I predict true");
console.log(car == 'Corolla');

//Test 2: Is car equal to Suzuki? Prediction: False
console.log("Is car == 'Suzuki'? I predict false");
console.log(car == 'Suzuki');

//Test 3: Is car not equal to Corolla? Prediction: False
console.log("Is car != 'Corolla' I predict false");
console.log(car != 'Corolla');

//Test 4: Does car starts with 'C'? Prediction: True
console.log("Does car starts with 'C'? I predict true");
console.log(car.startsWith('C'));

//Test 5: Does car end with 'la'? Prediction: True
console.log("Does car end with 'la'? I predict true");
console.log(car.endsWith('la'));

//Test 6: Is car not equal to Suzuki? Prediction: True
console.log("Is car != 'Suzuki'? I predict true");
console.log(car != 'Suzuki');

//Test 7: Does car contain 'o'? Prediction: True
console.log("Does car contain 'o'? I predict true");
console.log(car.includes ('o'));

//Test 8: Is car not in uppercase? Prediction: False
console.log("Is car in uppercase? I predict false");
console.log(car == car.toUpperCase());

//Test 9: Does car contain 'u'? Prediction: False
console.log("Does car contain 'u'? I predict false");
console.log(car.includes ('u'));

// Test 10: Is car length equal to 6? Prediction: False
console.log("Is car.length == 6? I predict false");
console.log(car.length == 6);

