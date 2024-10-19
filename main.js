
//------------------------------------------------1st Way--------------------------------------------------//


let temperature = document.querySelector("#temperature");
// const temp = document.querySelector("#temperature");
let fromUnit = document.querySelector("#from")
let toUnit = document.querySelector("#to")
let form = document.querySelector("#form")
let resultWrapper = document.querySelector("#result")
let buttonWrapper = document.querySelector("#Convert")

let unitTo = "Celsius";
let unitFrom = "Celsius";
let isClick = false;

toUnit.addEventListener("change", ()=> {
    unitTo = toUnit.value
})
fromUnit.addEventListener("change", ()=> {
    unitFrom = fromUnit.value
})

buttonWrapper.addEventListener("click", ()=> {
    isClick = true;
})


const convertTemperature = () =>{
    let result;

    let temp = parseFloat(temperature.value)
    
    // Celsius to other units
    if (unitFrom === "Celsius") {
        if (unitTo === "Fahrenheit") {
            result = (temp * 9/5) + 32; // Celsius to Fahrenheit
        } else if (unitTo === "Kelvin") {
            result = temp + 273.15; // Celsius to Kelvin
        } else {
            result = temp; // Celsius to Celsius (same)
        }
    }

// Fahrenheit to other units
if (unitFrom === "Fahrenheit") {
    if (unitTo === "Celsius") {
        result = (temp - 32) * 5/9; // Fahrenheit to Celsius
    } else if (unitTo === "Kelvin") {
        result = (temp - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
    } else {
        result = temp; // Fahrenheit to Fahrenheit (same)
    }
}

// Kelvin to other units
if (unitFrom === "Kelvin") {
    if (unitTo === "Celsius") {
        result = temp - 273.15; // Kelvin to Celsius
    } else if (unitTo === "Fahrenheit") {
        result = (temp - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
    } else {
        result = temp; // Kelvin to Kelvin (same)
    }
}

isClick && (resultWrapper.textContent = `Converted Temperature: ${result.toFixed(2)} ${unitTo}`)



}

form.addEventListener("click", convertTemperature)





//------------------------------------------------2nd Way--------------------------------------------------//

// let degree = document.querySelector("#degree")
// let fromUnit = document.querySelector("#fromUnit")
// let toUnit = document.querySelector("#toUnit")
// let result = document.querySelector("#result")
// let convertBtn = document.querySelector("#convert-btn")
// let resultValue = document.querySelector("#resultValue")

// const tempConvert = () =>{
//     // console.log("hlo")
//         let data = parseFloat(degree.value); // Input value ko number mein convert karna
//         // console.log(data)
//         let from = fromUnit.value; // From unit
//         // console.log(from)
//         let to = toUnit.value; // To unit
//         // console.log(to)
//         let resultValue;
//         result.style.fontSize = "24px"; 
//         // resultValue.style.fontSize = "20px"
        
//         if(from === "Celcius"){
//             if(to === "Fahrenheit"){ 
//                 resultValue = (data * 9/5) + 32; //celsius to fahrenheit
//                 // console.log(result)
//             }
//             else if (to === "Kelvin") {
//                 resultValue = data + 273.15; // Celsius to Kelvin
//             // console.log(result)
//             } else {
//                 resultValue = data; // Celsius to Celsius
//                 }
//         }


//         if(from === "Fahrenheit"){
//             if(to === "Celcius"){
//                 resultValue = (data - 32) * 5/9;
//                 // °C = (°F - 32) × 5/9,
//                 // console.log("isha") //Fahrenheit to celcius
//             }
//             else if(to === "Kelvin"){
//                 resultValue = (data - 32) * 5/9 + 273.15;
//                 // K = (°F + 459.67) × 5/9
//                 // console.log("isha") // Fahrenheit to kelvin
//             } else{
//                 resultValue = data;
//                 // console.log(isha) // Fahrenheit to Fahrenheit
//             }
//         }


//         if(from === "Kelvin"){
//             if(to === "Celcius"){
//                 resultValue = data - 273.15;
//                 // C = K - 273.15.
//                 // console.log("isha") //Kelvin to Celcius
//             }
//             else if( to === "Fahrenheit"){
//                 resultValue = (data - 273.15) * 9/5 + 32;
//                 // °F = (K − 273.15) × 1.8 + 32
//                 // console.log("isha") // Kelvin to Fahrenheit
//             }
//             else{
//                 resultValue = data;
//                 // console.log("isha") //Kelvin to Kelvin
//             }
//         }
//     //   console.log(resultValue);
//     result.textContent = `Converted Value: ${resultValue.toFixed(2)}`; 
//     //   result.appendChild(resultValue ); 
// }


// convertBtn.addEventListener("click", tempConvert)




//------------------------------------------------3nd Way--------------------------------------------------//


// function convertTemperature() {
    // let temperature = parseFloat(document.getElementById("temperature").value);
    // let fromUnit = document.getElementById("from").value;
    // let toUnit = document.getElementById("to").value;
    
    // let result;
    

    // // Celsius to other units
    // if (fromUnit === "Celsius") {
    //     if (toUnit === "Fahrenheit") {
    //         result = (temperature * 9/5) + 32; // Celsius to Fahrenheit
    //     } else if (toUnit === "Kelvin") {
    //         result = temperature + 273.15; // Celsius to Kelvin
    //     } else {
    //         result = temperature; // Celsius to Celsius (same)
    //     }
    // }
    
    // // Fahrenheit to other units
    // else if (fromUnit === "Fahrenheit") {
    //     if (toUnit === "Celsius") {
    //         result = (temperature - 32) * 5/9; // Fahrenheit to Celsius
    //     } else if (toUnit === "Kelvin") {
    //         result = (temperature - 32) * 5/9 + 273.15; // Fahrenheit to Kelvin
    //     } else {
    //         result = temperature; // Fahrenheit to Fahrenheit (same)
    //     }
    // }
    
    // // Kelvin to other units
    // else if (fromUnit === "Kelvin") {
    //     if (toUnit === "Celsius") {
    //         result = temperature - 273.15; // Kelvin to Celsius
    //     } else if (toUnit === "Fahrenheit") {
    //         result = (temperature - 273.15) * 9/5 + 32; // Kelvin to Fahrenheit
    //     } else {
    //         result = temperature; // Kelvin to Kelvin (same)
    //     }
    // }
    
    // // Display result
    // document.getElementById("result").textContent = 
    //     `Converted Temperature: ${result.toFixed(2)} ${toUnit}`;



