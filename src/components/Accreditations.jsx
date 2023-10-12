import cipla from "../assets/cipla.png";
import fdc from "../assets/fdc.png";
import lupin from "../assets/lupin.png";

export default function Accreditation() {
  const client = [
    {
      id: 1,
      imageSrc: lupin,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 2,
      imageSrc: cipla,
      imageAlt: "Front of men's Basic Tee in black.",
    },
    {
      id: 3,
      imageSrc: fdc,
      imageAlt: "Front of men's Basic Tee in black.",
    },
  ];

  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-8 uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
        Accreditation & Certifications
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {client.map((client) => (
            <div key={client.id} className="group relative">
              <div className="aspect-h-2 aspect-w-2 w-full overflow-hidden rounded-md bg-white/5 p-5 lg:aspect-none group-hover:opacity-75 lg:h-40 shadow-card">
                <img
                  src={client.imageSrc}
                  alt={client.imageAlt}
                  className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
