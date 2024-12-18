import logo from "./Images/Davelys Logo.jpg";
import "./App.css";
import { useState } from "react";
import { confirmInformation } from "./function.js";
import { EmailSender } from "./send-email.js"
import Popup from "reactjs-popup";

function App() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");
  const [showpop, setShowPop] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: "40px",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ fontSize: "40px", fontFamily: "Cochin" }}>
            Davey's Asian Supermarket Membership Sign Up
          </p>
        </div>
      </header>
      <div className="App-TandC">
        <h1
          style={{
            justifyContent: "center",
            alignItems: "center",
            //textAlign: "Left",
            fontSize: "25px",
            color: "white",
            backgroundColor: "red",
            borderRadius: "10px",
          }}
        >
          <p style={{ marginLeft: "20px", marginRight: "20px" }}>
            Terms & Conditions of Membership
          </p>
        </h1>
        <div
          style={{
            stifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            textAlign: "Left",
            marginTop: "20px",
            backgroundColor: "black",
            opacity: 0.8,
            borderRadius: "10px",
          }}
        >
          <div style={{ marginLeft: "20px", marginRight: "20px", opacity: 1 }}>
            <p>
              This form is used to sign up for the membership of Davely's Asian
              Supermarket.
            </p>
            <p>
              This membership is free. You will get 10% Off all your future
              purchases in-store.
            </p>
            <p>
              Note that Fresh Fruit & Vegetables, Alcohol, Rice, Frozen Meat,
              Locally Made products, and Products on Special are excluded and
              cannot be further discounted.
            </p>
            <p>
              You must provide your details (i.e., Mobile Number or Name) every
              time before checkout.
            </p>
            <p>
              We cannot reprocess or refund your discount after the sale is
              completed.
            </p>
            <p>
              *In case of any dispute, Davely's Asian Supermarket reserves the
              right of final decision on all related matters. By submitting this
              form, you agree to the above Terms & Conditions.
            </p>
          </div>
        </div>
      </div>
      <div
        className="App-body"
        style={{ stifyContent: "center", alignItems: "center" }}
      >
        <div
          className="App-information-entry"
          style={{
            backgroundColor: "#282c34",
            display: "flex",
            flexDirection: "column", // Stack items vertically
            alignItems: "flex-start",
            color: "white",
            paddingLeft: "40px",
            paddingTop: "20px",
            paddingRight: "40px",
            paddingBottom: "20px",
            marginTop: "0",
            borderRadius: "10px",
          }}
        >
          <p>Please Enter Your Name</p>
          <input
            name="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ width: "250px", height: "25px" }}
          />
          <p style={{ margin: "10px 0 0 0" }}>
            Please Enter Your Mobile Number
          </p>
          <p
            style={{ fontSize: "15px", margin: "5px 0 10px 0", color: "#ccc" }}
          >
            Example: 0432123456{" "}
          </p>
          <input
            name="inputMobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={{ width: "250px", height: "25px" }}
          />

          <p style={{ margin: "10px 0 0 0" }}>
            Please Enter Your Email Address
          </p>
          <p
            style={{ fontSize: "15px", margin: "5px 0 10px 0", color: "#ccc" }}
          >
            Example: example@gmail.com{" "}
          </p>
          <input
            name="inputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "250px", height: "25px" }}
          />

          <p style={{ margin: "10px 0 0 0" }}>Please Enter Your Postcode</p>
          <p
            style={{ fontSize: "15px", margin: "5px 0 10px 0", color: "#ccc" }}
          >
            Example: 4000{" "}
          </p>
          <input
            name="inputPostcode"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            style={{ width: "250px", height: "25px" }}
          />

          <button
            type="button"
            onClick={() => setShowPop(true)}
            style={{
              width: "100px",
              height: "35px",
              marginTop: "20px", // Adds spacing between the button and the input above
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "18px",
              padding: "0", // Remove extra padding
              textAlign: "center", // Centers text horizontally
            }}
          >
            Submit
          </button>
          <Popup open={showpop} onClose={() => setShowPop(false)} modal>
            <div
              style={{
                padding: "20px",
                width: "80%",
                height: "100%",
                backgroundColor: "white",
                textAlign: "Left",
                border: "2px solid #4CAF50", // Popup border color and width
                borderRadius: "10px", // Rounded corners for popup
                boxShadow: "10px 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow to create depth
                margin: "auto", // Center the popup horizontally
              }}
            >
              <h2>Confirm Your Information</h2>
              <p>Your Name: {name}</p>
              <p>Your Mobile Number: {mobile}</p>
              <p>Your Email: {email}</p>
              <p>Your Postcode: {postcode}</p>
              <p style={{ color: "red" }}>
                By clicking the confirm, you agree the terms and conditions
              </p>
              <h1
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  margin: 0,
                }}
              >
                <button
                  onClick={() => setShowPop(false)}
                  style={{
                    width: "60px",
                    height: "25px",
                    backgroundColor: "lightcoral",
                    borderRadius: "10px",
                    padding: "0", // Remove extra padding
                    textAlign: "center", // Centers text horizontally
                    fontWeight: "bold",
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    EmailSender(name, mobile, email, postcode);
                    confirmInformation(
                      name,
                      mobile,
                      email,
                      postcode,
                      setShowPop
                    );
                  }}
                  style={{
                    width: "60px",
                    height: "27px",
                    backgroundColor: "lightgreen",
                    borderRadius: "10px",
                    padding: "0", // Remove extra padding
                    textAlign: "center", // Centers text horizontally
                    fontWeight: "bold",
                  }}
                >
                  Confirm
                </button>
              </h1>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  );
}

export default App;
