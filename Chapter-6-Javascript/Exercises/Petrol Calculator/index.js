function calculate() {
  // Get the petrol price from the input field
  const petrolPrice = parseFloat(document.querySelector("#Petrol_Price").value) || 0;

  // Get the number of liters purchased from the input field
  const liters = parseFloat(document.querySelector("#liters").value) || 0;

  // Calculate the total cost
  const total = petrolPrice * liters;

  // Display the result formatted as currency (2 decimal places)
  document.querySelector("#totalAmount").innerText = `AED ${total.toFixed(2)}`;

  // Show the result container by removing the 'hidden' class
  document.querySelector("#result").classList.remove("hidden");
}
