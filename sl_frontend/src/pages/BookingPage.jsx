import { useEffect, useState } from "react";
import { fetchConditions, getMethods, createAppointment } from "../api";

export default function BookingPage() {
  const [conditions, setConditions] = useState([]);
  const [methods, setMethods] = useState([]);

  const [selectedCondition, setSelectedCondition] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const [slots, setSlots] = useState([]);

  // -------------------------
  // LOAD INITIAL DATA
  // -------------------------
  useEffect(() => {
    const load = async () => {
      try {
        const [cRes, mRes] = await Promise.all([
          fetchConditions(),
          getMethods(),
        ]);

        setConditions(cRes.data);
        setMethods(mRes.data);

        setSelectedCondition(cRes.data?.[0] || null);
        setSelectedMethod(mRes.data?.[0] || null);
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  // -------------------------
  // CALENDAR (CURRENT MONTH)
  // -------------------------
  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  const monthName = now.toLocaleString("default", {
    month: "long",
  });

  const formatDate = (day) => {
    const d = new Date(
      now.getFullYear(),
      now.getMonth(),
      day
    );
    return d.toISOString().split("T")[0];
  };

  // -------------------------
  // FETCH AVAILABLE SLOTS
  // -------------------------
  const fetchSlots = async (date) => {
    if (!date) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/schedules/available/?date=${date}`
      );
      const data = await res.json();
      setSlots(data);
    } catch (err) {
      console.log(err);
      setSlots([]);
    }
  };

  useEffect(() => {
    fetchSlots(selectedDate);
  }, [selectedDate]);

  // -------------------------
  // SUBMIT APPOINTMENT
  // -------------------------
  const handleSubmit = async () => {
    if (!name || !phone || !selectedDate || !selectedTime) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await createAppointment({
        name,
        phone,
        condition: selectedCondition?.id,
        method: selectedMethod?.id,
        date: selectedDate,
        time: selectedTime,
      });

      alert("Appointment request sent!");

      // reset
      setName("");
      setPhone("");
      setSelectedTime("");
      setShowModal(false);

      // 🔥 auto refresh slots
      fetchSlots(selectedDate);
    } catch (err) {
      console.log(err.response?.data);
      alert("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  // -------------------------
  // UI
  // -------------------------
  return (
    <main className="max-w-[1200px] mx-auto w-full px-6 py-8">

      {/* HEADER */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
          <span>Home</span>
          <span className="material-symbols-outlined text-xs">
            chevron_right
          </span>
          <span className="text-primary font-medium">
            Book a Consultation
          </span>
        </div>

        <h1 className="text-4xl font-black text-slate-900 dark:text-white">
          Book Your Natural Healing Session
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Drug-free and surgery-free wellness for a healthier you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-8">

          {/* STEP 1 */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border">
            <h2 className="text-xl font-bold mb-6">
              Select Condition
            </h2>

            <div className="flex flex-wrap gap-3">
              {conditions.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCondition(c)}
                  className={`px-4 py-2 rounded-xl border ${
                    selectedCondition?.id === c.id
                      ? "bg-primary/20 border-primary"
                      : "border-slate-200"
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </section>

          {/* STEP 2 */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border">
            <h2 className="text-xl font-bold mb-6">
              Select Method
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              {methods.map((m) => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMethod(m)}
                  className={`p-4 border rounded-xl cursor-pointer ${
                    selectedMethod?.id === m.id
                      ? "border-primary bg-primary/10"
                      : "border-slate-200"
                  }`}
                >
                  <p className="font-bold">{m.title}</p>
                  <p className="text-sm text-slate-500">
                    {m.description_en}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 3 */}
          <section className="bg-white dark:bg-slate-900 p-8 rounded-xl border">
            <h2 className="text-xl font-bold mb-6">
              Pick Date & Time
            </h2>

            <div className="flex gap-8">

              {/* CALENDAR */}
              <div className="flex-1">
                <h3 className="font-bold mb-4">
                  {monthName}
                </h3>

                <div className="grid grid-cols-7 gap-2 text-center">
                  {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                    (day) => {
                      const dateStr = formatDate(day);

                      return (
                        <div
                          key={day}
                          onClick={() => setSelectedDate(dateStr)}
                          className={`p-2 rounded cursor-pointer ${
                            selectedDate === dateStr
                              ? "bg-primary text-black"
                              : "hover:bg-primary/20"
                          }`}
                        >
                          {day}
                        </div>
                      );
                    }
                  )}
                </div>
              </div>

              {/* SLOTS */}
              <div className="w-48">
                <h3 className="font-bold mb-3">
                  Available Times
                </h3>

                {slots.length === 0 ? (
                  <p className="text-sm text-slate-400">
                    No slots
                  </p>
                ) : (
                  slots.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTime(s.time)}
                      className={`w-full mb-2 p-2 border rounded ${
                        selectedTime === s.time
                          ? "bg-primary/20 border-primary"
                          : "border-slate-200"
                      }`}
                    >
                      {s.time}
                    </button>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* CONFIRM BUTTON */}
          <button
            onClick={() => setShowModal(true)}
            className="w-full py-4 bg-primary text-slate-900 font-black text-xl rounded-xl"
          >
            Confirm Appointment
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">
          <div className="bg-slate-900 text-white p-6 rounded-xl">
            <h3 className="text-primary font-bold mb-3">
              What to expect
            </h3>
            <p className="text-sm">
              We will call you for confirmation after booking.
            </p>
          </div>
        </div>
      </div>

      {/* -------------------------
          POPUP MODAL
      ------------------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl w-full max-w-md space-y-4">

            <h2 className="text-xl font-bold">
              Enter Your Details
            </h2>

            <input
              className="w-full border p-2 rounded"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className="w-full border p-2 rounded"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <div className="flex gap-3">

              <button
                onClick={() => setShowModal(false)}
                className="w-1/2 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-1/2 py-2 bg-primary font-bold rounded"
              >
                {loading ? "Sending..." : "Submit"}
              </button>

            </div>

          </div>
        </div>
      )}
    </main>
  );
}