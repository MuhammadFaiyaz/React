import React, { useState } from "react";

const ContactForm = ({ contacts, setContacts }) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;

    if (name === "name") setName(value);
    else if (name === "email") setEmail(value);
    else if (name === "phone") setPhone(value);

    console.log(name, value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newContact = { id: Date.now(), name, email, phone };
    setContacts([...contacts, newContact]);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-xl">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-3xl font-black text-white mb-1">
          Contact <span className="text-amber-400">Form</span>
        </h1>
        <div className="w-16 h-1 bg-amber-400 rounded-full mb-8" />

        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={changeHandler}
              required
              placeholder="e.g. Muhammad"
              className="bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
              required
              placeholder="e.g. muhammad@email.com"
              className="bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold tracking-widest text-slate-400 uppercase">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={changeHandler}
              required
              placeholder="e.g. +880 1700 000000"
              className="bg-slate-700/60 border border-slate-600 text-white placeholder-slate-500 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400/30 transition-all"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black text-sm tracking-widest uppercase py-3.5 rounded-lg transition-all hover:shadow-lg hover:shadow-amber-400/20 active:scale-95 cursor-pointer"
          >
            Add Contact →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
