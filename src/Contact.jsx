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
    toast.success("Message sent successfully");
    form.reset();
  };

  return (
    <>
      <div className="bg-[url('/images/basketballtexture.png')]  min-h-screen bg-white/70 bg-blend-color-burn dark:bg-gray-950">
        <Navbar />
        <div className="flex flex-col gap-6 items-center mt-10 px-4 text-center">
          <div className="text-4xl md:text-6xl  text-black dark:text-white font-bold  font-serif">
            Get In Touch
          </div>
          <div className=" text-black dark:text-white font-semibold text-xl md:text-2xl font-serif">
            Leave your message
          </div>
        </div>

        <div className="flex justify-center mt-8 px-4">
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className=" bg-gray-200 flex flex-col gap-10 items-center justify-center border-2 border-black dark:border-white p-6 md:p-10 max-w-4xl mx-auto dark:bg-gray-900/50 w-full">
              {/* Name */}
              <div className="flex flex-col md:flex-row gap-5 w-full md:items-center">
                <span className=" text-black dark:text-white text-2xl md:text-3xl w-full md:w-32">
                  Name:
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <input
                    {...form.register("name")}
                    type="text"
                    placeholder="Your name"
                    className="dark:border-white bg-gray-400 dark:bg-gray-800 border-gray-600 border-2 p-2 rounded-xl text-base  text-black dark:text-white  w-full"
                  />
                  <label className="text-red-500 text-sm">
                    {form.formState.errors.name?.message}
                  </label>
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col md:flex-row gap-5 w-full md:items-center">
                <span className=" text-black dark:text-white text-2xl md:text-3xl w-full md:w-32">
                  E-mail:
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <input
                    {...form.register("email")}
                    type="email"
                    placeholder="Your E-mail"
                    className="dark:border-white bg-gray-400 dark:bg-gray-800 border-2 p-2 rounded-xl text-base  text-black dark:text-white w-full"
                  />
                  <label className="text-red-500 text-sm">
                    {form.formState.errors.email?.message}
                  </label>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col md:flex-row gap-5 w-full">
                <span className=" text-black dark:text-white text-2xl md:text-3xl w-full md:w-32">
                  Message:
                </span>
                <div className="flex flex-col gap-1 w-full">
                  <textarea
                    {...form.register("message")}
                    rows={4}
                    placeholder="Your Message"
                    className="dark:border-white bg-gray-400 dark:bg-gray-800 border-2 p-2 rounded-xl text-base  text-black dark:text-white  w-full"
                  ></textarea>
                  <label className="text-red-500 text-sm">
                    {form.formState.errors.message?.message}
                  </label>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col md:flex-row w-full justify-end gap-4">
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white w-full md:w-auto"
                >
                  Submit
                </button>
                <button
                  onClick={() => form.reset()}
                  type="reset"
                  className="text-white bg-gradient-to-r from-gray-600 to-gray-800 p-2 rounded-2xl font-bold border-2 border-transparent cursor-pointer hover:border-white w-full md:w-auto"
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
