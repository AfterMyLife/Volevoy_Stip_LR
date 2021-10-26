const inputs = document.querySelectorAll('input');
const patterns = {
    name: /^[а-я ,.'-]+$/i,
    surname: /^[а-я ,.'-]+$/i,
    telephone: /^\+380\d{3}\d{2}\d{2}\d{2}$/,
    creditcard: /^4[0-9]{15}?$/,

}

function validate(field, regex) {
    if (regex.test(field.value)) {
        field.className = "valid";
    }
    else {
        field.className = "invalid";
    }
}



inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    })

});


function changevalue() {
    var str = document.getElementById("myinput").value.replace(/a(\w+)a/g, '!');
    console.log(str);
    document.getElementById("newinput").textContent = str;

}

var k = 5;
function validbut() {
    if (document.getElementById("creditcard").className == "valid") {
        alert("Поле кредитной карты введено правильно!");
    }
    else if (document.getElementById("creditcard").className == "invalid") {
        k--;
        alert("У вас осталось " + k + " попытки. Введите нормальную кредитную карту!");

        if (k == 0) {
            alert("Вы исчерпали все попытки! До свидания!");
            document.getElementById("creditcard").setAttribute("disabled", "disabled");
        }
    }
}
