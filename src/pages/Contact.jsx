import { useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import logo from "../assets/react.svg"

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_u96ktuk",
        "template_3dsy6sq",
        {
          from_name: form.name,
          to_name: "Cloudcore",
          from_email: form.email,
          to_email: "carnageitself@gmail.com",
          message: form.message,
        },
        "oiyK82ekyOKggogpg"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you, I will get back to you ASAP !");
        setForm({
          name: "",
          email: "",
          message: "",
        }),
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something went wrong !");
          };
      });
  };

  return (
    <div className="w-full h-full bg-gradient lg:px-6 py-28">
      <div className="bg-transparent">
        <div
          className="absolute inset-x-0 top-[-20rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          {/* <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        /> */}
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight sm:text-4xl uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-blue-300">
            We'd love to talk about any concern you have.
          </p>
        </div>
        <div className="container flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <div className="flex-[0.75] bg-transparent p-8 rounded-2xl">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col gap-8 border border-white/5 p-5 rounded-xl shadow-card"
            >
              <label className="flex flex-col">
                <span className="text-blue-300 font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-gradient py-4 px-6 placeholder:text-blue-100 text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-blue-300 font-medium mb-4">Your email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="bg-gradient py-4 px-6 placeholder:text-blue-100 text-white rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-blue-300 font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={3}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What you want to say?"
                  className="bg-gradient py-4 px-6 placeholder:text-blue-100 text-white rounded-lg outline-none border-none font-medium resize-none"
                />
              </label>
              <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-blue-500" : "bg-gray-200",
                    "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? "translate-x-3.5" : "translate-x-0",
                      "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-white">
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-blue-500 underline">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
              <button
                type="submit"
                className="bg-gradient py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                disabled={!agreed}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>

          <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
            <img src={logo} alt="" className="w-full h-full p-10 object-contain"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;