function getShippingCost(country) {
  switch (country) {
    case "China":
      console.log(`Shipping to ${country} will cost 100 credits`); 
      break;
    case "Chile":
      console.log(`Shipping to ${country} will cost 250 credits`);
      break;
    case "Australia":
      console.log(`Shipping to ${country} will cost 170 credits`);
      break;
    case "Jamaica":
      console.log(`Shipping to ${country} will cost 120 credits`);
      break;
    default:
      console.log("Sorry, there is no delivery to your country");
  }
}

console.log(getShippingCost("Australia"));
console.log(getShippingCost("Germany"));
console.log(getShippingCost("China"));
console.log(getShippingCost("Chile"));
console.log(getShippingCost("Jamaica"));
console.log(getShippingCost("Sweden"));
