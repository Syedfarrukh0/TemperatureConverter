
//--------------Declear the variables-------------

let celcius = document.querySelector("#celcius input");
let fahrenheit = document.querySelector("#fahrenheit input");

//--------------Declear the input event to perform the function in celcius-------------

celcius.addEventListener('input', function(){

 //--------------Declear the assigning variables-------------

    let cel = this.value;
    let fah = (cel * 9/5) + 32;

 //---------To assign the value of celcius in fehrenheit----------

    fahrenheit.value = fah;

 //---------Apply the condition for fixed(4) decimal digits in fehrenheit----------

    if (!Number.isInteger(fah)) {
        fah = fah.toFixed(4);
    }   
});

//---------------------------------------------------------------------------------------------------//

//--------------Again declear the input event to perform the function in fahrenheit-------------

fahrenheit.addEventListener('input', function(){

 //--------------Declear the assigning variables-------------

    let fah = this.value;
    let cel = (fah-32) * 5/9;

 //---------To assign the value of fahrenheit in celcius----------

    celcius.value = cel;

 //---------Apply the condition for fixed(4) decimal digits in celcius----------

    if (!Number.isInteger(cel)) {
        cel = cel.toFixed(4);
    }
});