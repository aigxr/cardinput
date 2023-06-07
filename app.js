const redBorder = "1px solid hsl(0, 100%, 66%)"

function formatCardNumber(input) {
    var cardNumber = input.value.replace(/\s/g, "");
    let cardNumbers = document.querySelector("#numbers").value

    var formattedCardNumber = ''
    for (let i = 0; i < cardNumber.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedCardNumber += ' '
        }
        formattedCardNumber += cardNumber.charAt(i)
    }
    input.value = formattedCardNumber
}

function allFunctions() {
    let numbers = `1234567890!@#$%^&*()-=[];',./_+{}:<>?"`
    const name = document.querySelector("#name").value
    const nameBorder = document.querySelector("#name")

    for (let i = 0; i < numbers.length; i++) {
        if (name.includes(numbers.charAt(i))) {
            nameBorder.style.border = redBorder
            document.querySelector("#show").innerHTML = "Can't contain numbers"
            return;
        } else if (name.length == 0) {
            nameBorder.style.border = redBorder
            document.querySelector("#show").innerHTML = "Can't be blank"
            return;
        } else {
            document.querySelector("#userName").innerHTML = name.toUpperCase()
        }
    }

    let chars = `QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm`
    const cardNumbers = document.querySelector("#numbers").value
    const cardBorder = document.querySelector("#numbers")
    let showcard = document.querySelector("#someNmbrs").innerHTML = cardNumbers
        
    const cardNumberWithoutSpaces = cardNumbers.replace(/\s/g, "");
    const formattedCardNumber = cardNumberWithoutSpaces.replace(/(.{4})/g, "$1 ");

    for (let i = 0; i < chars.length; i++) {
        if (cardNumbers.includes(chars.charAt(i))) {
            cardBorder.style.border = redBorder
            document.querySelector("#show2").innerHTML = "Can't contain letters"
            return;
        } else if (cardNumbers.length <= 15) {
            cardBorder.style.border = redBorder
            document.querySelector("#show2").innerHTML = "Must have 16 digits"
        } else {
            showcard.innerHTML = formattedCardNumber;
        }
    }

    if (cardNumbers.length == 4) {
        cardNumbers.innerHTML = ""
    }

    const date1 = document.querySelector("#date1").value
    const date2 = document.querySelector("#date2").value
    let dateBorder = document.querySelector(".small")
    let show3 = document.querySelector("#show3")
    let data = document.querySelector("#data")
    let data2 = document.querySelector("#data2")

    if (date1.length <= 1 || date2.length <= 1) {
        dateBorder.style.border = redBorder
        show3.innerHTML = "Enter 2 dates"
        return
    } else if (date1 > 12 || date1 == 00) {
        dateBorder.style.border = redBorder
        show3.innerHTML = "Invalid month"
        return
    } else if (date2 < 23 || date2 > 28){
        dateBorder.style.border = redBorder
        show3.innerHTML = "Invalid year"
        return
    } else {
        for (let i = 0; i < chars.length; i++) {
            if (date1.includes(chars.charAt(i)) || date2.includes(chars.charAt(i))) {
                dateBorder.style.border = redBorder
                show3.innerHTML = "Can't contain letters"
                return
            } else {
                data.innerHTML = date1;
                data2.innerHTML = date2;
            }
        }
    }

    const cvc = document.querySelector("#cvc").value
    let cvcBorder = document.querySelector("#cvc")
    let show4 = document.querySelector("#show4")
    let cvcCard = document.querySelector("#cvcCard")

    for (let i = 0; i < chars.length; i++) {
        if (cvc.includes(chars.charAt(i))) {
            cvcBorder.style.border = redBorder
            show4.innerHTML = "Can't contain letters"
            return
        } else if (cvc.length < 3) {
            cvcBorder.style.border = redBorder
            show4.innerHTML = "Can't be blank"
            return
        } else {
            cvcCard.innerHTML = cvc
        }
    }

    document.querySelector(".inputs-container").style.opacity = "0";
    document.querySelector(".main-container").style.display = "block";
}