const Banner = () => {
  return (
    <div
      className="hero text-start h-[500px] rounded-lg"
      style={{
        backgroundImage: "url(https://i.ibb.co/QMXyBDq/Rectangle-8.png)",
      }}
    >
      <div className="hero-overlay text-start bg-opacity-60"></div>
      <div className="hero-content text-start text-neutral-content">
        <div className="max-w-md text-start">
          <h1 className="mb-5 text-5xl font-bold ">CMA Fest</h1>
          <p className="mb-5">
            Make memories that will last a lifetime. See your favorite artists
            live at CMA Fest!
          </p>
          <div className="flex gap-3">
            <button className="btn btn-primary bg-[#7342F9]">
              {" "}
              <img src="/src/assets/icon/Vector.png" alt="" />
              Get Ticket
            </button>
            <button className="btn btn-outline text-white">
              Explore All Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
