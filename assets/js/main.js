(function() {
    emailjs.init("user_IGZeBLW3OALzovVSnaySL");
})();

const amount = document.querySelector("#amount");
var amountbal;
const email = document.querySelector("#email");

amount.addEventListener("keyup", (event) => {
    document.querySelector("#bal").innerHTML = event.target.value;
    amountbal = event.target.value
})


const paycash = () => {
    const template_param = {
        to_name: email.value,
        from_name: "paycheck",
        message:  "N" + amountbal + " paid succesfuly from paycheck"
    }
    emailjs.send("joshua-akinleye", "template_3a3z3a9", template_param).then(() => {
        alert("Payment succesful, Check email for reciept")
    }).catch(() => {
        alert("Payment failed")
    })
}