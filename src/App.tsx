import { useState, useEffect, FormEvent } from "react";
import { supabase } from "./supeBaseClient";

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: "",
  });

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    await supabase.auth.signInWithOtp(form);
    setLoading(false);
  }

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <form className="form-widget" onSubmit={handleLogin}>
        <div>
          <input
            className="inputField"
            type="email"
            placeholder="Your email"
            value={form.email}
            required={true}
            onChange={(e) => setForm({ email: e.target.value })}
          />
        </div>
        <div>
          <button className={"button block"} disabled={loading}>
            {loading ? <span>Loading</span> : <span>Send magic link</span>}
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
