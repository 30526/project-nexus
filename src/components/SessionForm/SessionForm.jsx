import React from "react";
import toast from "react-hot-toast";

const SessionForm = () => {
  const handleSessionBtn = (e) => {
    e.preventDefault();
    toast.success("Session Booked Successfully");
    e.target.reset();
  };

  return (
    <div>
      <h2 className="my-10 text-center font-semibold text-3xl">
        Book a Session
      </h2>

      <div className="flex justify-center py-20 bg-blue-50">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 border border-gray-100">
          <div className="card-body">
            <form onSubmit={handleSessionBtn}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  required
                  type="Email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">About Yourself</label>
                <textarea
                  className="textarea"
                  placeholder="Write here..."
                ></textarea>

                <button type="submit" className="btn btn-neutral mt-4">
                  Book Session
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionForm;
