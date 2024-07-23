import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

function App() {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);
  const [selectedEmail, setSelectedEmail] = useState("");

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = () => {
    axios
      .get("http://localhost:9091/emails")
      .then((response) => {
        console.log("Fetched data:", response.data);
        // Transform the data
        const transformedData = response.data.map((item) => ({
          id: item[0],
          email: item[1],
        }));
        setEmails(transformedData);
      })
      .catch((err) => {
        console.error("Error fetching emails:", err);
        setError("Failed to fetch emails: " + err.message);
      });
  };

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  return (
    <div className="container">
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <select
          value={selectedEmail}
          onChange={handleEmailChange}
          className="dropdown"
        >
          <option value="">Select Email</option>
          {emails.map((d) => (
            <option key={d.id} value={d.email} className="dropdown-option">
              {d.email}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
