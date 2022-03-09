import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark py-3">
      <div className="footer-poderano"></div>
      <div className="grid-4 container grid">
        <div className="footer-title">
          <h1>ENDURO DRIFT BOSNIEN</h1>
          <p>Copyright &copy; 2022</p>
        </div>
        <div className="address">
          <h4>ADDRESS : </h4>
          <p>Silvija Strahimira Kranjcevica,</p>
          <p>70280 - Gornji Vakuf-Uskoplje,</p>
          <p>Bosnia and Hercegovina</p>
        </div>
        <div className="social">
          <h4>CONTACT US: </h4>
          <p>
            <i className="fas fa-phone"></i> &nbsp; : &nbsp; +387 63 136 095
          </p>
          <p>
            <i className="fas fa-envelope"></i> &nbsp; : &nbsp;
            endurodriftbosnien@gmail.com
          </p>
          <br />
        </div>
        <div className="payment">
          <h4>PAYMENT INSTRUCTION: </h4>
          <p> Mladen Brnas</p>
          <p> Silvija Strahimira Kranjcevica</p>
          <p> Gornji Vakuf-Uskoplje</p>
          <p>IBAN: BA39 3382 8028 2483 3544</p>
          <p> BIC/SWIFT:UNCRBA22</p>
          <p> Bank name: UniCredit Bank d.d. Mostar</p>
          <p> Bank adress:Kardinala Stepinca b.b., 88000 Mostar, BiH</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
