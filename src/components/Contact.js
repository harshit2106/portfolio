import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_ixi8ph1",
        "template_vjtt6mr",
        form.current,
        "Y15fGbGbi338Fdnes"
      )
      .then(
        (result) => {
          toast.success("Email Sent Successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
          form.current.name.value = "";
          form.current.email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          toast.error(error.text, {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsLoading(false);
        }
      );
  };

  return (
    <section className="container  padding">
      <div>
        <h2 className="text-center color-primary">Contact</h2>
        <div className="marginn">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group ">
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="form-control bg-transparent text-white form-border"
                required
              />
            </div>
            <div className="form-group ">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-control bg-transparent text-white form-border"
                required
              />
            </div>
            <div className="form-group ">
              <textarea
                rows={7}
                name="message"
                placeholder="Your Message"
                className="form-control bg-transparent text-white form-border"
                required
              />
            </div>
            {!isLoading && (
              <button type="submit" className="btnn">
                Submit
              </button>
            )}
            {isLoading && (
              <button type="submit" className="btnn">
                <div className="spinner-border text-light" role="status">
                  <span className="sr-only"></span>
                </div>
              </button>
            )}
          </form>
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Contact;
