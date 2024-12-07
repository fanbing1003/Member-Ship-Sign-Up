import axios from "axios";

export async function EmailSender(name, mobile, email, postcode) {
  console.log(name, mobile, email, postcode);
  try {
    const response = await axios.post(
      "http://davelys-membership/sendemail",
      { name, mobile, email, postcode },
    );
    console.log({ name, mobile, email, postcode });
    if (response.data.success) {
      console.log("Email sent successfully");
    } else {
      console.log("Failed to send email");
    }
  } catch (error) {
    console.error("Error sending email:", error);
    console.log(error);
  }
}