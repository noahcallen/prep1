# React SKU Lookup Challenge

This is a React-based coding challenge for candidates to demonstrate their ability to work with component state, conditional rendering, and basic debugging.

---

## 📦 Installation

1. Clone this repository:

   ```bash
   git clone git@github.com:noahcallen/prep1.git
   cd prep1



npm install
npm start

---

💼 Candidate Instructions
Your task is to fix a simple React application that allows a user to look up a product by SKU.

🛠 What You Need to Do
1. Fix the Boolean Display Logic
The boolean values for product details are currently displayed incorrectly.
Update the logic so that:

true → displays as "Yes"

false → displays as "No"

2. Improve the Error Message
When an invalid SKU is entered, the current error message is unclear.
Replace it with a clearer, more user-friendly message that informs the user the SKU was not found.

3. Normalize the SKU Input
Right now, SKUs must be entered in uppercase to be matched.
Update the logic so that the SKU check works regardless of letter case (uppercase or lowercase input should still match).

4. Conditionally Render Product Details
Product information is shown on page load, even when no product has been searched.
Update the component so that product details are only displayed after a valid product is found.

