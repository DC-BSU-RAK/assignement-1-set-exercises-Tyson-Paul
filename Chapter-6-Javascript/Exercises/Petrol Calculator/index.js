function calculate() {
    const petrolPrice = parseFloat(document.querySelector("#Petrol_Price").value) || 0;
    const liters = parseFloat(document.querySelector("#liters").value) || 0;
  
    const total = petrolPrice * liters;
  
    document.querySelector("#totalAmount").innerText = `AED ${total.toFixed(2)}`;
    document.querySelector("#result").classList.remove("hidden");
  }
  