import { useState } from 'react';
import './Form.css';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "eb1599f0-e5b5-4bd3-9401-913dfc123925");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success! Your message has been sent." : "Uh oh, something went wrong! Please try again.");
  };

  return (
    <form onSubmit={onSubmit} className="form">
        <div className="name form-item">
            <label className="form-label">Name</label>
      <input type="text" name="name" required className="form-input" placeholder="Ex. Alyssa" />
        </div>
        <div className="email form-item">
            <label className="form-label">Email</label>
      <input type="email" name="email" required className="form-input" placeholder="Example@email.com" />
        </div>
        <div className="message form-item">
            <label className="form-label">Message</label>
      <textarea name="message" required className="form-input" placeholder="Ex. Hi, I was wanting to ask about..." ></textarea>
        </div>
      <button type="submit"className="submit-btn">Submit</button>
      <p>{result}</p>
    </form>
  );
}