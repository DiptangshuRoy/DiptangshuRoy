import React from "react";

function ClientInfo({ name, role, avatarSrc }) {
  return (
    <header className="flex gap-10 items-center">
      <div className="flex gap-3 items-start self-stretch my-auto">
        <div className="flex shrink-0 w-12 h-12 bg-zinc-500 rounded-[50px]" aria-hidden="true" />
        <div>
          <h2 className="text-base leading-7">{name}</h2>
          <p className="mt-1 text-xs">{role}</p>
        </div>
      </div>
      <img
        loading="lazy"
        src={avatarSrc}
        alt=""
        className="object-contain shrink-0 self-stretch my-auto aspect-[1.39] fill-[linear-gradient(270deg,#7A87FB_0.72%,#FFD49C_99.22%)] stroke-[1px] stroke-white w-[43px]"
      />
    </header>
  );
}

export default ClientInfo;