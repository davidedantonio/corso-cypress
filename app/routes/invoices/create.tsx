import { useState } from "react";
import type { FormEvent } from "react";

const clients = [
  { id: 1, name: "xadrg", email: "xadrg@acme.io" },
  { id: 2, name: "olcmf", email: "olcmf@zyx.dev" },
];

const Create = () => {
  const [sendMail, setSendMail] = useState(true);

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    const data = Object.fromEntries(new FormData(ev.currentTarget));

    await fetch("/api/billing/invoices/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setSendMail(false);
  };

  return (
    <div className="container">
      <h2>Create a new invoice</h2>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div className="form__aside">
            <div className="form__field">
              <label htmlFor="user">Select a client</label>
              <select id="user" name="user" required>
                <option value="--">--</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name} - {client.email}
                  </option>
                ))}
              </select>
            </div>
            <div className="form__field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" required />
            </div>
            <div className="form__field">
              <label htmlFor="due_date">Due date</label>
              <input id="due_date" name="due_date" type="date" required />
            </div>
          </div>
          <div className="form__main">
            <div className="form__field">
              <label htmlFor="quantity">Qty</label>
              <input
                id="quantity"
                name="quantity"
                type="number"
                min="0"
                max="10"
                required
              />
            </div>
            <div className="form__field">
              <label htmlFor="description">Description</label>
              <input id="description" name="description" type="text" required />
            </div>
            <div className="form__field">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                min="0"
                step="0.01"
                required
              />
            </div>
            <div className="form__field">
              <label htmlFor="taxed">Taxed</label>
              <input id="taxed" name="taxed" type="checkbox" />
            </div>
          </div>
        </div>
        <div className="form__buttons">
          <button type="submit">Create invoice</button>
          <button data-test="send-mail" disabled={sendMail}>Send email</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
