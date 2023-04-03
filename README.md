# Indian-Postal-Code

# Overview

This program is a web application that allows users to search for Indian postal code details by entering a pincode. The program uses the fetch API to call the postalpincode.in API to get the postal code details and display them on the web page. The web page also displays the user's IP address using the ipify.org API.

# File structure
- index.html: the main HTML file that contains the structure of the web page and links to the CSS and JavaScript files.
- styles.css: the CSS file that styles the web page.
- app.js: the JavaScript file that contains the logic of the program.

# How to use the program

1. Open the index.html file in a web browser.
2. The web page will display the user's IP address and a search box to enter a pincode.
3. Enter a valid Indian pincode in the search box and press Enter or click on the search button.
4. The program will call the postalpincode.in API to get the postal code details and display them on the web page.
5. If the pincode is invalid or no data is available, the program will display a message "No data available".

# Technologies used

- showIpAddress(): a function that calls the ipify.org API to get the user's IP address and displays it on the web page.
- pincodeForm.addEventListener(): an event listener that listens for a form submission event and calls the postalpincode.in API to get the postal code details and displays them on the web page.

# APIs

- postalpincode.in API: a free REST API that provides Indian postal code details.
- ipify.org API: a free REST API that provides the user's IP address.


To See How It Works- https://akhilathuluri.github.io/Indian-Postal-Code/

![image](https://user-images.githubusercontent.com/89147384/226204573-bd735a85-b843-4097-9551-08fbc4b8b499.png)
