import { useState } from "react";
import axios from "axios";

function CustInfoForm() {
  
    const [customer_name, setCustomer_Name] = useState("");
    const [street_Address, setStreet_Address] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [type, setType] = useState("");
    const [total, setTotal] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const newCustomer = {
            name: customer_name,
            streetAdress: street_Address,
            city: city,
            zip: zip,
            type: type,
            total: total,
        };
        console.log("Adding Customer", { newCustomer });
        
        axios
        .post("/api/order", newCustomer)
        .then((response) => {
            console.log("Add new customer worked!");
            
            // Clear forms
            setCustomer_Name("");
            setStreet_Address("");
            setCity("");
            setZip("");
            setType("");
            setTotal("");
        })
        .catch((error) => {
            console.error(error);
            alert("Sorry, the customer was not submitted!");
        });
    };

    return (
        <>
            <section>
                <h2>Step 2: Customer Information</h2>
                <form onSubmit={handleSubmit} className="add-customer-form">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        value={customer_name}
                        onChange={(event) =>
                            setCustomer_Name(event.target.value)
                        }
                    />

                    <input
                        required
                        type="text"
                        placeholder="Street Address"
                        value={street_Address}
                        onChange={(event) =>
                            setStreet_Address(event.target.value)
                        }
                    />
                    <input
                        required
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(event) => setCity(event.target.value)}
                    />

                    <input
                        required
                        type="text"
                        placeholder="Zip"
                        value={zip}
                        onChange={(event) => setZip(event.target.value)}
                    />

                    <button type="submit">NEXT</button>
                </form>
            </section>
        </>
    );
}

export default CustInfoForm;
