import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import Navbar from "./Navbar";
import { sendMessage } from "./utils/utils";
function Contact() {
  const schema = z.object({
    name: z
      .string()
      .min(2, "Please provide a valid name")
      .max(50, "Name too long"),
    email: z.string().email({ message: "Please provide a valid email" }),
    message: z
      .string()
      .min(1, "Message too short")
      .max(500, "Message too long"),
  });

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const onSubmit = () => {
    sendMessage(
      form.getValues("name"),
      form.getValues("email"),
      form.getValues("message")
    );

    toast.success("Message sent succesfully");
    form.reset();
  };

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
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-10 items-center justify-center border-2 border-white p-10 w-fit m-5 bg-gray-900/50 ">
              <div className="flex gap-20">
                <div className="flex gap-5">
                  <span className="text-white text-3xl">Name : </span>
                  <div className="flex flex-col gap-2">
                    <input
                      // onChange={handleinputchange}
                      {...form.register("name")}
                      type="text"
                      name="name"
                      value={form.name}
                      placeholder="Your name"
                      className="border-white border-2 p-2 rounded-xl text-lg text-white"
                    ></input>
                    <label className="text-red-500">
                      {form.formState.errors.name?.message}{" "}
                    </label>
                  </div>
                </div>
                <div className="flex gap-5">
                  <span className="text-white text-3xl">E-mail : </span>
                  <div className="flex flex-col">
                    <input
                      name="email"
                      {...form.register("email")}
                      type="email"
                      value={form.email}
                      placeholder="Your E-mail"
                      className="border-white border-2 p-2 rounded-xl text-lg text-white"
                    ></input>
                    <label className="text-red-500">
                      {form.formState.errors.email?.message}{" "}
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex gap-5 w-full">
                <span className="text-white text-3xl  flex-shrink-0 flex items-center">
                  Message :{" "}
                </span>
                <div className="flex flex-col w-full">
                  <textarea
                    name="message"
                    type="text"
                    value={form.message}
                    {...form.register("message")}
                    rows={3}
                    placeholder="Your Message"
                    className="border-white border-2 p-2 rounded-xl text-lg text-white w-full"
                  ></textarea>
                  <label className="text-red-500">
                    {form.formState.errors.message?.message}{" "}
                  </label>
                </div>
              </div>
              <div className="flex  w-full justify-end-safe gap-7">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-gray-600 to-gray-800  p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white"
                >
                  Submit
                </button>
                <button
                  onClick={() => {
                    form.reset();
                  }}
                  type="reset"
                  className="text-white bg-gradient-to-r from-gray-600 to-gray-800  p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white"
                >
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
