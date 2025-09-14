// login button functionality
document.getElementById("loginButton").addEventListener("click",function (e){
    e.preventDefault()
    const mobileNumber = "01916823287"
    const pinNumber = 1234
    const mobileNumberValue = document.getElementById("mobile-number").value
    // No need to convert to int, compare as string
    const mobileNumberValueConverted = mobileNumberValue
    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    console.log(mobileNumberValueConverted,pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href = "./home.html"
    }
    else{
        alert("Invalid credentials")
    }
})