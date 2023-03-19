const pincodeForm = document.getElementById("pincodeForm");
const pincodeDiv = document.getElementById("pincode");
pincodeForm.addEventListener("submit", event => {
    event.preventDefault();
    const postalCode = document.getElementById("search").value;
    const apiUrl = `https://api.postalpincode.in/pincode/${postalCode}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        // Handle the API response data here
        if (data.length > 0) {
          const postOffices = data[0].PostOffice;
          let pincodeHtml = "";
          for (const postOffice of postOffices) {
            pincodeHtml += `
              <hr>
              <h3>Name: ${postOffice.Name}</h3>
              <h3>Postal Code: ${postOffice.Pincode}</h3>
              <h3>City: ${postOffice.Name}</h3>
              <h3>District: ${postOffice.District}</h3>
              <h3>Division: ${postOffice.Division}</h3>
              <h3>DeliveryStatus: ${postOffice.DeliveryStatus}</h3>
              <h3>State: ${postOffice.State}</h3>
            `;
          }
          pincodeDiv.innerHTML = pincodeHtml;
        } else {
            pincodeDiv.innerHTML = "<p>No data available</p>";
        }
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  });
  function showIpAddress() {
    var ipAddress = document.getElementById("ip-address");
    fetch("https://api.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        ipAddress.innerHTML = "<strong>Your IP address:</strong> " + data.ip;
      })
      .catch(error => {
        console.error(error);
      });
    }