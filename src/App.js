// import React, { useState, useEffect } from "react";

// function App() {
//   const [data, setData] = useState([]);
//   const [selectedEmail, setSelectedEmail] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:9091/emails")
//       .then((res) => res.json())
//       .then((data) => setData(data))
//       .catch((err) => console.log(err));
//   }, []);

//   const handleEmailChange = (event) => {
//     setSelectedEmail(event.target.value);
//   };

//   return (
//     <div style={{ padding: "50px" }}>
//       <select value={selectedEmail} onChange={handleEmailChange}>
//         <option value="">Select an email</option>
//         {data.map((d, i) => (
//           <option key={i} value={d.email}>
//             {d.email}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = () => {
    axios
      .get("http://localhost:9091/emails")
      .then((response) => {
        console.log(response.data);
        setEmails(response.data);
      })
      .catch((err) => {
        console.error("Error fetching emails:", err);
        setError("Failed to fetch emails: " + err.message);
      });
  };

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <select>
          {emails.map((d, i) => (
            <option key={i} value={d.email}>
              {d.email}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;

// import React from "react";

// function App() {
//   const data = [
//     { email: "example1@example.com" },
//     { email: "example2@example.com" },
//     { email: "example3@example.com" },
//   ];

//   return (
//     <select>
//       {data.map((d, i) => (
//         <option key={i} value={d.email}>
//           {d.email}
//         </option>
//       ))}
//     </select>
//   );
// }

// export default App;
