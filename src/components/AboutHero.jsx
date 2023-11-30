import logo from "../assets/company4.jpeg";
import {AiOutlineCheckCircle} from "react-icons/ai"

const features = [
  {
    description:
      "Pioneering India's first Pyrogen free production plant. Notably, it boasts the distinction of being the site of India's pioneering Pyrogen-free production plant. This achievement underscores a commitment to producing goods of exceptional quality, particularly in industries where the absence of pyrogens is crucial.",
    icon: AiOutlineCheckCircle,
  },
  {
    description:
      "Well connected through Highways, Airport, Railway station. What sets this location apart is its exceptional connectivity. It is seamlessly integrated into the region's transportation network, with well-developed highways providing smooth access. Furthermore, an airport and a railway station are conveniently located, facilitating both national and international logistics. This accessibility is a key factor for businesses operating in this area.",
    icon: AiOutlineCheckCircle,
  },
  {
    description:
      "Surrounded by the Big Pharma Companies. This proximity to industry leaders fosters an environment of innovation and collaboration, with opportunities for knowledge exchange and potential partnerships. This close-knit ecosystem of pharmaceutical companies creates a dynamic and competitive environment, further driving excellence and progress.",
    icon: AiOutlineCheckCircle,
  },
];

export default function AboutHero() {
  return (
    <div className="overflow-hidden bg-blue-600 py-24 sm:pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-10 lg:mt-0">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="text-start text-3xl font-medium text-white underline underline-offset-8">
                Welcome to Lifecell Technologies
              </p>
              {/* <p className="mt-6 text-base leading-8 text-blue-300">
                Lifecell technologies in Maharashtra, stands as a beacon of
                innovation and efficiency in production. Its unique attributes,
                from the groundbreaking pyrogen-free plant to its strategic
                connectivity and proximity to industry leaders, position it as a
                compelling choice for businesses looking to thrive in this
                dynamic economic landscape.
              </p> */}
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-white lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-white "
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={logo}
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 object-cover mt-10 slide"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
