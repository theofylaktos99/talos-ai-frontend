// src/components/ContactForm/ContactForm.jsx (Sends data to Backend)
import React, { useState } from 'react';
import styles from './ContactForm.module.css';

// Assume backend runs on port 8080
const BACKEND_URL = 'http://localhost:8080/api/contact';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (statusMessage) setStatusMessage('');
  };

  const handleSubmit = async (e) => { // Make async for await
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Αποστολή...');
    setIsSuccess(false);
    console.log("Attempting to send:", formData);

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed (e.g., CSRF token if implemented)
        },
        body: JSON.stringify(formData), // Convert JS object to JSON string
      });

      // Check if the response status is OK (e.g., 200-299)
      if (response.ok) {
        // const result = await response.json(); // Parse success message from backend if needed
        // console.log("Backend Success Response:", result);
        setStatusMessage('Το μήνυμά σας εστάλη με επιτυχία!'); // Use simple success message
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' }); // Clear form on success
        // Hide message after delay
        setTimeout(() => setStatusMessage(''), 5000); // Longer visibility for success
      } else {
        // Handle HTTP errors (e.g., 400 Bad Request, 500 Internal Server Error)
        let errorMessage = `Σφάλμα αποστολής: ${response.status} ${response.statusText}`;
        try {
            // Try to parse potential error message from backend JSON response
            const errorResult = await response.json();
            errorMessage = errorResult.message || errorResult.errors || errorMessage;
             console.error("Backend Error Response:", errorResult);
        } catch (parseError) {
            // If response is not JSON or empty, use the default HTTP error message
             console.error("Could not parse error response:", parseError);
        }
        setStatusMessage(errorMessage);
        setIsSuccess(false);
      }
    } catch (error) {
      // Handle network errors (e.g., backend server down, CORS issue if not configured properly)
      console.error("Network or Fetch Error:", error);
      setStatusMessage('Σφάλμα δικτύου. Δεν ήταν δυνατή η αποστολή.');
      setIsSuccess(false);
    } finally {
      // Ensure sending state is reset regardless of success or failure
      setIsSending(false);
    }
  };

  return (
    // Keep the same form structure and attributes (including autoComplete)
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.label}>Όνομα:</label>
        <input
          type="text"
          id="name"
          name="name"
          className={styles.input}
          value={formData.name}
          onChange={handleChange}
          required
          aria-required="true"
          disabled={isSending}
          autoComplete="name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.input}
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          disabled={isSending}
          autoComplete="email"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="message" className={styles.label}>Μήνυμα:</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          required
          aria-required="true"
          disabled={isSending}
          autoComplete="off"
        ></textarea>
      </div>
      <div className={styles.formStatus}>
         {statusMessage && <p className={isSuccess ? styles.success : styles.error}>{statusMessage}</p>}
      </div>
      <button
        type="submit"
        className={`btn primary-btn ${styles.submitButton}`}
        disabled={isSending}
      >
        {isSending ? 'ΑΠΟΣΤΟΛΗ...' : 'ΑΠΟΣΤΟΛΗ ΜΗΝΥΜΑΤΟΣ'}
      </button>
    </form>
  );
}

export default ContactForm;