const Payment = () => {
  return (
    <div className="my-10 mx-auto bg-[#F1F3FF]">
      <h1 className="text-3xl font-bold text-center">SIMPLIFY TICKETING</h1>
      <p className="text-center text-[#7342F9]">
        First Ever Unique QR Ticketing Platform For Event Registration & Booking
      </p>
      <button className="btn flex justify-center my-2 btn-primary items-center mx-auto text-center bg-[#7342F9]">
        {" "}
        <img src="https://i.ibb.co/jLLR26q/fi-sr-shield-check.png" alt="" />
        Secure Payment with
      </button>
      <div className="flex justify-center">
        <div className="bg-[#8C3494] w-40 h-60 mt-36 rounded-tl-3xl">
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/H7DF7p4/Rectangle-27.png"
            alt=""
          />
          <img
            className="mx-auto my-4"
            src="https://i.ibb.co/12F5Y7j/dutch-bangla-rocket-logo-B4-D1-CC458-D-seeklogo-1.png"
            alt=""
          />
        </div>
        <div className="bg-[#ED0A80] w-64 h-96 rounded-t-3xl">
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/H7DF7p4/Rectangle-27.png"
            alt=""
          />
          <img
            className="mx-auto my-4 mt-20"
            src="https://i.ibb.co/XpLFMM8/image-9.png  "
            alt=""
          />
        </div>
        <div className="bg-[#F7941D] w-40 h-60 mt-36 rounded-tr-3xl">
          <img
            className="mx-auto mt-4"
            src="https://i.ibb.co/H7DF7p4/Rectangle-27.png"
            alt=""
          />
          <img
            className="mx-auto my-4"
            src="https://i.ibb.co/2vRdY0w/Group-40.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
