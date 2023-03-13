import React, { useState } from "react";

import Title from "./Title";

export default function UserProfile() {
  return (
    <>
      <Title />
      <div className="flex flex-col border-opacity-50 justify-center items-center">
        <div className="grid card bg-green-200 m-10 p-10 w-3/5 rounded-box place-items-center  shadow-xl ">
          <div>
            <h2 className="text-lg tracking-widest mb-5">My profile</h2>
            <div>
              <h3>Name:{}</h3>
              <h3>Lastname:{}</h3>
              <h3>Email address:{}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
