import Popup from "reactjs-popup";

export function confirmInformation(name, mobile, email, postcode, setShowPop) {
  var CustomerInformation = {
    Name: name,
    Currency: "AUD",
    PaymentTerm: null,
    Discount: 0,
    TaxRule: "GST on Income",
    Carrier: null,
    SalesRepresentative: null,
    Location: null,
    Comments: null,
    AccountReceivable: null,
    RevenueAccount: null,
    PriceTier: "Retail",
    TaxNumber: null,
    AdditionalAttribute1: null,
    AdditionalAttribute2: null,
    AdditionalAttribute3: null,
    AdditionalAttribute4: null,
    AdditionalAttribute5: null,
    AdditionalAttribute6: null,
    AdditionalAttribute7: null,
    AdditionalAttribute8: null,
    AdditionalAttribute9: null,
    AdditionalAttribute10: null,
    AttributeSet: null,
    Tags: "Member Instore",
    Status: "Active",
    IsOnCreditHold: true,
    Addresses: null,
    Contacts: [
      {
        ID: "1d62f59b-657d-423f-ad95-9ad9ec4f29a3",
        CustomerID: "4978c3ff-4382-4045-819b-2971480ddaf1",
        Name: name,
        JobTitle: null,
        Phone: mobile,
        MobilePhone: mobile,
        Fax: null,
        Email: email,
        Website: null,
        Default: true,
        Comment: null,
        IncludeInEmail: false,
      },
    ],
  };
  setShowPop(false);
}



/* Following code is provided by Cin7 Core API*/
/* need to confirm POST or PUT which one works better*/
function postInfo() {
  var request = new XMLHttpRequest();

  request.open(
    "POST", /*or PUT*/ 
    "https://inventory.dearsystems.com/ExternalApi/v2/customer"
  );

  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader(
    "api-auth-accountid",
    "auth-id"
  );
  request.setRequestHeader(
    "api-auth-applicationkey",
    "auth-key"
  );

  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log("Status:", this.status);
      console.log("Headers:", this.getAllResponseHeaders());
      console.log("Body:", this.responseText);
    }
  };
  request.send(JSON.stringify(body));
}
