import React, { useState } from "react";

const GuestBook = () => {
  const [display, setDiplayForm] = useState(false);

  return (
    <section className="features-main grid-2 ">
      <div className="grid-1 container grid"></div>
      <div className="grid-1 container grid">
        <div className="card flex">GUEST BOOK</div>
        <div className="card flex">
          <button
            className="gusetbook-btn btn btn-outline"
            onClick={() => setDiplayForm(!display)}
          >
            SING GUESTBOOK
          </button>
        </div>
        <div className={!display ? ` card form-display ` : `card  `}>
          <form>
            <div className="form-date">
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="NAME AND SURNAME">NAME AND SURNAME</label>
                  <input type="text" name="name" required />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="ADDRESS">CITY</label>
                  <input type="text" name="city" required />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="email">EMAIL</label>
                  <input type="email" name="email" required />
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="email">GUESTBOOK ENTRY</label>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
              <div className="date-form">
                <div className="form-control flex">
                  <label htmlFor="email">SPAN CHECK 13-12</label>
                  <input
                    type="text"
                    name="spam"
                    className="spam-check"
                    required
                  />
                </div>
              </div>
              <div className="date-form">
                <button
                  type="submit"
                  value="SUBMIT"
                  className="btn btn-outline"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
        <div className="card flex">
          <h1>Dario Simic</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Ducimus recusandae perferendis
            culpa, reiciendis a itaque debitis qui vel dignissimos ipsum! Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            recusandae perferendis culpa, reiciendis a itaque debitis qui vel
            dignissimos ipsum! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus recusandae perferendis culpa, reiciendis a
            itaque debitis qui vel dignissimos ipsum!
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuestBook;
