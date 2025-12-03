import React from "react";
import Image from "next/image";
import "./Registrace.css";

const Registrace = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Registrace</div>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <Image src="/person.png" alt="User Icon" width={20} height={20} />
          <input type="text" placeholder="Jméno" />
        </div>

        <div className="input">
          <Image src="/email.png" alt="Email Icon" width={20} height={20} />
          <input type="email" placeholder="Email" />
        </div>

        <div className="input">
          <Image
            src="/password.png"
            alt="Password Icon"
            width={20}
            height={20}
          />
          <input type="password" placeholder="Heslo" />
        </div>
      </div>

      <div className="forgot-password">
        Zapomněli jste heslo? <span>Klikněte zde!</span>
      </div>

      <div className="submit-container">
        <div className="submit">Registrovat</div>
        <div className="submit gray">Přihlásit</div>
      </div>
    </div>
  );
};

export default Registrace;
