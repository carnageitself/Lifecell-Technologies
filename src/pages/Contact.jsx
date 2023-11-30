import { useRef, useState } from "react";
import { Switch } from "@headlessui/react";
import emailjs from "@emailjs/browser";
import logo from "../assets/contact.svg";
import location from "../assets/location.png";
import arrows from "../assets/arrows.png";
import arrows2 from "../assets/arrows2.png";

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
    <div className="w-full h-ful pb-20 bg-slate-50">
      <div className="bg-gradient-to-b from-gray-900 to-indigo-900 relative">
        <img
          src={arrows}
          alt=""
          className="absolute top-0 right-2 object-contain"
        />
        <img
          src={arrows2}
          alt=""
          className="absolute bottom-0 left-2 object-contain"
        />
        {/* <div
          className="absolute inset-x-0 top-[-20rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          {/* <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        /> 
        </div> */}
        <div className="flex items-center flex-col justify-center text-center py-20">
          <h2 className="text-3xl tracking-tight sm:text-4xl uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
            Contact Us
          </h2>
          <p className="mt-2 text-lg leading-8 text-blue-300">
            We'd love to talk about any concern you have.
          </p>
        </div>
      </div>
      <div className="container flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-blue-600">
        <div className="flex-[0.75] bg-transparent p-8 rounded-2xl mt-5">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-3 flex flex-col gap-8 p-5 rounded-xl"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-slate-200 py-3 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your web address?"
                className="bg-slate-200 py-3 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Subject</span>
              <textarea
                rows={1}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's your subject?"
                className="bg-slate-200 py-3 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium resize-none"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={3}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-slate-200 py-3 px-6 placeholder:text-black text-black rounded-lg outline-none border-none font-medium resize-none"
              />
            </label>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? "bg-[#021943]" : "bg-slate-200",
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
                <a href="#" className="font-semibold text-[#021943] underline">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
            <button
              type="submit"
              className="bg-[#021943] py-2 px-8 rounded-lg outline-none w-fit text-white hover:text-[#2f74eb]"
              disabled={!agreed}
            >
              {loading ? "SENDING..." : "SEND A MESSAGE"}
            </button>
          </form>
        </div>

        <div className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
          <img
            src={logo}
            alt=""
            className="w-full h-full p-10 object-contain"
          />
        </div>
      </div>

      <div className="containers flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-slate-50 pt-20">
        <div className="xl:flex-[0.75] xl:h-auto md:h-[550px] h-[350px] flex flex-col items-center justify-center p-10">
          <img src={location} alt="" className="w-full h-52 object-contain" />
          <div className="font-title">
            <h1 className="w-full p-2 text-xl font-semibold underline underline-offset-4">
             Mumbai Office Address
            </h1>
            <h1 className="w-72 p-2 text-base">
              Office No. 205 , 2nd Floor, ML Spaces, Dashrathlal Joshi Rd, Opp
              Old Jain Mandir, Vile Parle West, Mumbai - 400056
            </h1>
            <a href="tel:+918828825966" className="p-2 text-base">
              <span className="text-base font-semibold hover:underline">
                Contact:
              </span>{" "}
              +91 88288 25966
            </a>
          </div>
        </div>
        <div className="flex-[1.25] bg-transparent p-8 rounded-2xl mt-5">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20star%20midc,%20shendra,%20aurangabad+(Manufacturing%20and%20Distributing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div> <div className="containers flex xl:flex-row flex-col-reverse gap-10 overflow-hidden bg-slate-50 py-10">
        <div className="xl:flex-[0.75] xl:h-auto md:h-[550px] h-[350px] flex flex-col items-center justify-center p-10">
          <img src={location} alt="" className="w-full h-52 object-contain" />
          <div className="font-title">
            <h1 className="w-full p-2 text-xl font-semibold underline underline-offset-4">
             Aurangabad Office Address
            </h1>
            <h1 className="w-72 p-2 text-base">
              Office No. 205 , 2nd Floor, ML Spaces, Dashrathlal Joshi Rd, Opp
              Old Jain Mandir, Vile Parle West, Mumbai - 400056
            </h1>
            <a href="tel:+918828825966" className="p-2 text-base">
              <span className="text-base font-semibold hover:underline">
                Contact:
              </span>{" "}
              +91 88288 25966
            </a>
          </div>
        </div>
        <div className="flex-[1.25] bg-transparent p-8 rounded-2xl mt-5">
          <iframe
            width="100%"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5%20star%20midc,%20shendra,%20aurangabad+(Manufacturing%20and%20Distributing)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Population mapping</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
