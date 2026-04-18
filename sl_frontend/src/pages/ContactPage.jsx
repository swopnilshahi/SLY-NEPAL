import { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};
    if (!formData.full_name) err.full_name = "Full name is required";
    if (!formData.email.includes("@")) err.email = "Valid email required";
    if (formData.message.length < 10)
      err.message = "Message must be at least 10 characters";
    if (!captchaToken) err.captcha = "Please verify captcha";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);
    setSuccess("");

    try {
      await axios.post("http://127.0.0.1:8000/api/contact/", {
        ...formData,
        captcha: captchaToken,
      });

      setSuccess("Message sent successfully!");

      setFormData({
        full_name: "",
        phone: "",
        email: "",
        message: "",
      });
      setCaptchaToken(null);
    } catch (err) {
      setErrors({ api: "Something went wrong. Try again." });
    }

    setLoading(false);
  };

  return (
    <main className="flex-1">
      <div className="px-6 lg:px-20 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">

          {/* SUCCESS / ERROR */}
          {success && <p className="text-green-600 mb-4">{success}</p>}
          {errors.api && <p className="text-red-600 mb-4">{errors.api}</p>}

          <div className="flex flex-col gap-4 mb-12">
            <span className="text-primary font-bold tracking-widest uppercase text-xs">
              Get in Touch
            </span>
            <h1 className="text-slate-900 dark:text-white text-4xl lg:text-5xl font-black leading-tight tracking-tight">
              Contact Us
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl">
              Start your journey towards a drug-free and surgery-free holistic healing experience. We're here to support your wellness path.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* FORM */}
            <div className="bg-white dark:bg-background-dark p-6 lg:p-10 rounded-xl border border-primary/5 shadow-xl shadow-primary/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* FULL NAME */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                      Full Name
                    </label>
                    <input
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Enter your name"
                      type="text"
                    />
                    {errors.full_name && (
                      <p className="text-red-500 text-sm">{errors.full_name}</p>
                    )}
                  </div>

                  {/* PHONE */}
                  <div className="flex flex-col gap-2">
                    <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                      Phone Number
                    </label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="+977-98XXXXXXXX"
                      type="tel"
                    />
                  </div>

                </div>

                {/* EMAIL */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="yourname@example.com"
                    type="email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* MESSAGE */}
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-3 text-slate-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="How can we help you on your wellness journey?"
                    rows="5"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* CAPTCHA */}
                <ReCAPTCHA
                  sitekey="6LcCubosAAAAANBej7vwrBVXhQ6riSQd48b4aoE5"
                  onChange={(token) => setCaptchaToken(token)}
                />
                {errors.captcha && (
                  <p className="text-red-500 text-sm">{errors.captcha}</p>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined">send</span>
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </form>
            </div>

            {/* RIGHT SIDE (UNCHANGED) */}
            <div className="flex flex-col gap-10">

              <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Our Office
                </h3>

                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-bold">Phone Numbers</p>
                    <p>+977-9861720149</p>
                    <p>+977-9851085458</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-bold">Clinic Address</p>
                    <p>Solo Laughter Yoga Nepal Center, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-bold">Email Us</p>
                    <p>info@sololaughteryoganepal.com</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* MAP (UNCHANGED) */}
      <div className="w-full px-6 lg:px-20 pb-20">
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl h-[450px] relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC_EDToe1lFQ4w8n8jXi8HlQrSKcr__RbyXFO7Dt_Zj9V_T0axx3nfOIyXFYHgkHAvMTytIHgZBsHerhOaGnKIoxN9t2gViYD9Q_ufKZXiwQrIf1XSPBypK7wOSy81AQKPRvysHeVzIStgVszJuPuHcPLzzBVhYqajpXFE2LKEOprul8AhpnVXaTtrwALUd-P-UF6O0stm2XJQpOdyTDgnZqs59hnR-CAP6979EjgzHvvwi4S6GQD6tkELoP0GDlt_UhOTyiQJ-I6g')",
            }}
          />
        </div>
      </div>
    </main>
  );
}