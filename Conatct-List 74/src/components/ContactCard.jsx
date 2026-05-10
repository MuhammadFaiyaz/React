import React from "react";

const ContactCard = (props) => {
  const getInitials = (name = "") => {
    return name
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };
  return (
    <div className=" w-100 flex items-center gap-4 bg-slate-800 border border-slate-700 hover:border-amber-400/40 rounded-xl px-5 py-4 transition-all duration-300">
      {/* Avatar */}
      <div className="w-11 h-11 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900 font-black text-sm shrink-0">
        {getInitials(props.name)}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-bold text-sm truncate">{props.name}</p>
        <p className="text-slate-400 text-xs font-medium mt-0.5 truncate">
          {props.phone}
        </p>
        <p className="text-slate-500 text-xs truncate">{props.email}</p>
      </div>

      {/* Badge */}
      <span className="shrink-0 text-[10px] font-bold tracking-widest uppercase text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
        Saved
      </span>
    </div>
  );
};

export default ContactCard;
