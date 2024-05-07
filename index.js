/* Conditional-lar vasitəsilə biz müəyyən bir şərt ödəndikdə (və ya ödənmədikdə) hər hansı bir
 əməliyyatı icra edə bilərik.
 */

// if else adətən ən çox 3 seçim olduqda istifadə olunur.
let temperature = 25;

if (temperature > 30) {
  console.log("It's a hot day!");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("It's a nice day.");
} else {
  console.log("It's cold today.");
}

// 3dən çox seçim olduqda kodun daha anlaşılan olması üçün switch-dən istifadə olunur.
let day = 6;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Other week day";
}

// console.log(dayName);

// ternary operator 2 seçim olan əməliyyatlarda istifadə olunur, sadə if else’in sintaks olaraq daha qısa formasıdır.
const orderComplete = true;

const sendDelivery = () => {
  console.log("Your order is being processed");
};

const tryAgain = () => {
  console.log("An error happened during the payment, please try again");
};

orderComplete ? sendDelivery() : tryAgain();

// JS events

// Userlərin saytdakı elementlərlə interaction-u zamanı baş verən hadisələr və dəyişikliklər event-lər adlanır.

const btn = document.getElementById("myButton");

btn.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button clicked");
});

document.getElementById("myDiv").addEventListener("click", function () {
  console.log("div clicked");
});

const inp = document.getElementById("myInput");

inp.addEventListener("change", (event) => {
  console.log(event.target.value);
  event.key === "Enter" && console.log("Enter key pressed");
});

document.getElementById("myInput").addEventListener("change", function (event) {
  console.log("Input value changed to:", event.target.value);
});
