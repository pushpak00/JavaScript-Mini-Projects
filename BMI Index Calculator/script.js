const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const result_text = document.querySelector("#result-text")

    if (height === '' || height === 0 || isNaN(height)){
        results.innerHTML = `Please give valid height`
    } else if (weight === '' || weight === 0 || isNaN(weight)){
        results.innerHTML = `Please gice valid weight`
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        results.innerHTML = `<span>${bmi}</span>`

        if(bmi <= 18.6) result_text.innerHTML = `<span>Under Weight</span>`
        else if(bmi >= 18.6 && bmi <= 24.9) result_text.innerHTML = `<span>Normal Range</span>`
        else result_text.innerHTML = `<span>Overweight</span>`
        
    }

})


