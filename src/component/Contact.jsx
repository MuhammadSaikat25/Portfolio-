import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const message = e.target.message.value;
    if (!message) {
      return toast("please provide message");
    }

    emailjs
      .sendForm(
        "service_yuteixv",
        "template_bq9rhce",
        form.current,
        "o7byLuzhJi2mqrUdV"
      )
      .then(
        (result) => {
          toast("Message successfully send");
        },
        (error) => {}
      );
  };
  return (
    <div id="contact" className="flex justify-center mx-auto items-center  py-10">
      <div className="lg:w-[70%] p-5">
        <h1 className="text-center text-blue-700 font-bold lg:text-3xl">
          Send me a Message!
        </h1>
        <ToastContainer />
        <form className="" ref={form} onSubmit={sendEmail}>
          <div className="flex items-center gap-5">
            <div className="w-full">
              <br />
              <input
                className="border-b w-full"
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full">
              <br />
              <input
                type="email"
                className="w-full border-b"
                name="user_email"
                placeholder="Enter your Email"
                required
              />
            </div>
          </div>
          <div className="w-full mt-5">
            <textarea
              name="message"
              className="w-full border-b"
              placeholder="Message"
            />
          </div>
          <div className="flex justify-center mt-3">
            <button
              className="bg-blue-600 text-white px-10 py-2 rounded w-fit mx-auto"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
