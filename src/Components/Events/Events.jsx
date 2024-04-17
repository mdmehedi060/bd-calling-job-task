const Events = () => {
  return (
    <div className="my-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Events</h1>
        <div className="flex gap-4 justify-center font-semibold">
          <button>All</button>
          <button>For you</button>
          <button>This Day</button>
          <button>This Week</button>
          <button className="btn btn-primary bg-[#7342F9] rounded-lg">
            Music
          </button>
          <button>Union</button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6">
        <div>
          <div className=" w-92 h-[450px] bg-[#F1F3FF] shadow-xl rounded-lg">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/4R0r1nV/Rectangle-16.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>

            <div className="flex justify-evenly">
              <div>
                <button className="btn my-2 bg-[#7342F9] btn-primary">
                  Music
                </button>
                <p className="flex gap-2 my-2">
                  {" "}
                  <img src="https://i.ibb.co/88s32XB/Vector.png" alt="" />
                  Celebrity Convention Hall
                </p>
                <h2 className="font-bold my-2">ROUFIAN’S HSC-24 RAG DAy</h2>
              </div>
              <div className="bg-white text-center my-6">
                <p>Apr</p>
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>10:00 pm</p>
              </div>
            </div>
            <div className="flex justify-evenly  mb-2">
              <button className="btn btn-primary bg-[#7342F9]">
                {" "}
                <img src="/src/assets/icon/Vector.png" alt="" />
                See Ticket
              </button>
              <div className="bg-white flex gap-2 items-center text-center p-2">
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>Seat left</p>
              </div>
              <p className="text-[#591BFF]">
                See <br /> more
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" w-92 h-[450px] bg-[#F1F3FF] shadow-xl rounded-lg">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/sgB8Mfk/Rectangle-16-1.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>

            <div className="flex justify-evenly">
              <div>
                <button className="btn my-2 bg-[#7342F9] btn-primary">
                  Music
                </button>
                <p className="flex gap-2 my-2">
                  {" "}
                  <img src="https://i.ibb.co/88s32XB/Vector.png" alt="" />
                  Celebrity Convention Hall
                </p>
                <h2 className="font-bold my-2">ROUFIAN’S HSC-24 RAG DAy</h2>
              </div>
              <div className="bg-white text-center my-6">
                <p>Apr</p>
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>10:00 pm</p>
              </div>
            </div>
            <div className="flex justify-evenly  mb-2">
              <button className="btn btn-primary bg-[#7342F9]">
                {" "}
                <img src="/src/assets/icon/Vector.png" alt="" />
                See Ticket
              </button>
              <div className="bg-white flex gap-2 items-center text-center p-2">
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>Seat left</p>
              </div>
              <p className="text-[#591BFF]">
                See <br /> more
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className=" w-92 h-[450px] bg-[#F1F3FF] shadow-xl rounded-lg">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/f27nY05/Rectangle-16-2.png"
                alt="Shoes"
                className="rounded-xl"
              />
            </figure>

            <div className="flex justify-evenly">
              <div>
                <button className="btn my-2 bg-[#7342F9] btn-primary">
                  Music
                </button>
                <p className="flex gap-2 my-2">
                  {" "}
                  <img src="https://i.ibb.co/88s32XB/Vector.png" alt="" />
                  Celebrity Convention Hall
                </p>
                <h2 className="font-bold my-2">ROUFIAN’S HSC-24 RAG DAy</h2>
              </div>
              <div className="bg-white text-center my-6">
                <p>Apr</p>
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>10:00 pm</p>
              </div>
            </div>
            <div className="flex justify-evenly  mb-2">
              <button className="btn btn-primary bg-[#7342F9]">
                {" "}
                <img src="/src/assets/icon/Vector.png" alt="" />
                See Ticket
              </button>
              <div className="bg-white flex gap-2 items-center text-center p-2">
                <p className="text-[#591BFF] text-2xl font-bold">20</p>
                <p>Seat left</p>
              </div>
              <p className="text-[#591BFF]">
                See <br /> more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
