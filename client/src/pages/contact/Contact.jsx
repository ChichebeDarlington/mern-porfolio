import "./contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import Rotate from "react-awesome-reveal";
import LightSpeed from "react-awesome-reveal";
import { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleOnchange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSent = () => {
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        import.meta.env.MODE == "development"
          ? import.meta.env.VITE_LOCAL_URL
          : import.meta.env.VITE_HOST_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json();
      if (data.success) {
        setValues({ name: "", email: "", message: "" });
        handleSent();
      }
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <LightSpeed>
                    <img
                      src="contact us.jpg"
                      alt="contact-image"
                      className="image"
                    />
                  </LightSpeed>
                </div>
              </div>
            </div>
            <div className=" col-lg-6 col-md-6 col-xl-6 col-sm-12">
              <Rotate>
                <div className="card2 d-flex card border-0 px-4 py-5">
                  <div className="row">
                    <div className="row">
                      <h6 className="text-center">
                        <BsLinkedin color="blue" className="ms-2" size={30} />
                        <BsGithub color="black" className="ms-2" size={30} />
                        <BsFacebook color="blue" className="ms-2" size={30} />
                      </h6>
                    </div>

                    <div className="row px-3 mb-4">
                      <div className="line" />
                      <small className="or text-center">OR</small>
                      <div className="line" />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="name"
                        placeholder="Input your name"
                        className="mb-3"
                        value={values.name}
                        onChange={handleOnchange}
                      />
                    </div>
                    <div className="row px-3">
                      <input
                        type="text"
                        name="email"
                        placeholder="Input your email address"
                        className="mb-3"
                        value={values.email}
                        onChange={handleOnchange}
                      />
                    </div>
                    <div className="row px-3">
                      <textarea
                        type="text"
                        name="message"
                        placeholder="Write your message, I will get the response and reply as fast as possible"
                        className="mb-3"
                        value={values.message}
                        onChange={handleOnchange}
                      />
                    </div>
                    <div
                      className={
                        sent ? "sent_container_block" : "sent_container"
                      }
                    >
                      <p className="message">Message sent successfully</p>
                    </div>
                    <div className="row px-3">
                      <button
                        className="button"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Send A Message
                      </button>
                    </div>
                  </div>
                </div>
              </Rotate>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
