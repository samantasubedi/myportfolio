import { useState } from "react";
import Navbar from "./Navbar";
function Contact() {
  const [form, setform] = useState({
    name: "",
    email: "",
    message: "",
  });
  function handleinputchange(event) {
    const { name, value } = event.target;
    setform((prevdata) => ({ ...prevdata, [name]: value }));
  }
  function clearform() {
    setform({ name: "", email: "", message: "" });
  }
  return (
    <>
      <div className="bg-[url('./images/basketball.png')] h-screen bg-gray-950">
        <Navbar />
        <div className="flex flex-col gap-10 items-center mt-10">
          <div className="text-6xl text-white font-bold">Get In Touch</div>
          <div className="text-white font-semibold text-2xl">
            Leave your message
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col gap-10 items-center justify-center border-2 border-white p-10 w-fit m-5 bg-gray-900/50 ">
            <div className="flex gap-20">
              <div className="flex gap-5">
                <span className="text-white text-3xl">Name : </span>
                <input
                  onChange={handleinputchange}
                  type="text"
                  name="name"
                  value={form.name}
                  placeholder="Your name"
                  className="border-white border-2 p-2 rounded-xl text-lg text-white"
                ></input>
              </div>
              <div className="flex gap-5">
                <span className="text-white text-3xl">E-mail : </span>
                <input
                  name="email"
                  onChange={handleinputchange}
                  type="email"
                  value={form.email}
                  placeholder="Your E-mail"
                  className="border-white border-2 p-2 rounded-xl text-lg text-white"
                ></input>
              </div>
            </div>

            <div className="flex gap-5 w-full">
              <span className="text-white text-3xl  flex-shrink-0 flex items-center">
                Message :{" "}
              </span>
              <textarea
                name="message"
                type="text"
                value={form.message}
                onChange={handleinputchange}
                rows={3}
                placeholder="Your Message"
                className="border-white border-2 p-2 rounded-xl text-lg text-white w-full"
              ></textarea>
            </div>
            <div className="flex  w-full justify-end-safe gap-7">
              <button
                onClick={clearform}
                type="submit"
                className="text-white bg-gradient-to-r from-gray-600 to-gray-800  p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white"
              >
                Submit
              </button>
              <button
                onClick={clearform}
                type="reset"
                className="text-white bg-gradient-to-r from-gray-600 to-gray-800  p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
