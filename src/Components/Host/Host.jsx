const Host = () => {
  return (
    <div>
      <div className="card card-side relative bg-[#7079FF] shadow-xl">
        <figure>
          <img
            className="p-4"
            src="https://i.ibb.co/PtrfgP8/Group-29.png"
            alt="Movie"
          />
        </figure>
        <div className="card-body text-white">
          <h2 className=" text-3xl font-bold">
            Host Your Event Easily & Automatedly With Us
          </h2>
          <h3 className="font-bold">
            We Provide The Best Event Ticketing & Management Solutions
          </h3>
          <p className="flex gap-2">
            {" "}
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/VL7WHMS/check-1.png"
              alt=""
            />
            Host your event with easy steps!
          </p>
          <p className="flex gap-2">
            {" "}
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/VL7WHMS/check-1.png"
              alt=""
            />
            Automated payment System & ticket will be sent to mail.
          </p>
          <p className="flex gap-2">
            {" "}
            <img
              className="h-5 w-5"
              src="https://i.ibb.co/VL7WHMS/check-1.png"
              alt=""
            />
            Access to registration and transaction reports
          </p>
          <p className="flex p-0 my-0 gap-2">
            {" "}
            <img
              className="h-5 w-5 "
              src="https://i.ibb.co/VL7WHMS/check-1.png"
              alt=""
            />
            personalized
          </p>

          <div className="card-actions justify-end absolute">
            <img
              className=" ml-[490px] mt-24"
              src="https://i.ibb.co/3CvtzFb/Group.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
