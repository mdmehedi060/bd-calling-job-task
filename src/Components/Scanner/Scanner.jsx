const Scanner = () => {
  return (
    <div className="my-12">
      <h1 className="text-3xl font-bold text-center">Automated QR Scanner</h1>
      <p className="text-center text-[#7342F9]">
        Scan & Verify The Attendees Directly By Our QR Scanning Solution.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-6">
        <div className="  w-68 h-56 bg-[#F1F3FF] shadow-xl rounded-lg">
          <figure className="mt-6">
            <img
              className="h-16 w-16 p-2 ml-6 top-1 mt-6 my-8 bg-white rounded-full"
              src="https://i.ibb.co/6bYW6CP/click-1-1.png"
              alt=""
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-bold ml-6">One Click</h2>
            <p className="text-xl ml-6  mb-10">QR verification System</p>
          </div>
        </div>
        <div className="  w-68 h-56 bg-[#F1F3FF] shadow-xl rounded-lg">
          <figure className="mt-6">
            <img
              className="h-16 w-16 p-2 ml-6 top-1 mt-6 my-8 bg-white rounded-full"
              src="https://i.ibb.co/PzLxWCz/click.png"
              alt=""
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-bold ml-6">One time</h2>
            <p className="text-xl ml-6  mb-10">QR Code</p>
          </div>
        </div>
        <div className="  w-68 h-56 bg-[#F1F3FF] shadow-xl rounded-lg">
          <figure className="mt-6">
            <img
              className="h-16 w-16 p-2 ml-6 top-1 mt-6 my-8 bg-white rounded-full"
              src="https://i.ibb.co/M8SqXWn/check-1.png"
              alt=""
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-bold ml-6">Easy Access</h2>
            <p className="text-xl ml-6  mb-10">QR verification System</p>
          </div>
        </div>
        <div className="  w-68 h-56 bg-[#F1F3FF] shadow-xl rounded-lg">
          <figure>
            <img
              className="h-16 w-16 ml-6 top-1 mt-6 my-8 p-2 bg-white rounded-full"
              src="https://i.ibb.co/0mV4PD5/Vector-1.png"
              alt=""
            />
          </figure>
          <div className="">
            <h2 className="text-2xl font-bold ml-6">Mail</h2>
            <p className="text-xl ml-6  mb-10">
              Send bulk personalized mail with attachments
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scanner;
