const axios = require('axios');
let data = JSON.stringify({
  "Data": {
    "ConsentId": "ec62477b-xxxx-41e2-xxxx-4d760c425a3e",
    "Initiation": {
      "InstructionIdentification": "ID412",
      "EndToEndIdentification": "E2E123",
      "InstructedAmount": {
        "Amount": "10.0",
        "Currency": "GBP"
      },
      "CreditorAccount": {
        "SchemeName": "UK.OBIE.SortCodeAccountNumber",
        "Identification": "11223321325698",
        "Name": "Receiver Co."
      },
      "RemittanceInformation": {
        "Unstructured": "Shipment fee"
      }
    }
  },
  "Risk": {
    "PaymentContextCode": "EcommerceGoods",
    "MerchantCategoryCode": "5967",
    "MerchantCustomerIdentification": "1238808123123",
    "DeliveryAddress": {
      "AddressLine": [
        "7"
      ],
      "StreetName": "Apple Street",
      "BuildingNumber": "1",
      "PostCode": "E2 7AA",
      "TownName": "London",
      "Country": "UK"
    }
  }
});

let config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://oba.revolut.com/domestic-payments',
  headers: { 
    'Content-Type': 'application/json', 
    'Accept': 'application/json', 
    'x-jws-signature': '<API_KEY_VALUE>', 
    'Authorization': 'Bearer <yourSecretApiKey>'
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});