import PartnerSLider from "./PartnerSlider";

export default function Partners() {
 

  return (
    <div className="bg-slate-50 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl leading-8 uppercase bg-gradient-to-r from-cyan-300 to-blue-600  text-transparent bg-clip-text font-black">
          Current Client Base
        </h2>
        <div className="mt-10">
       <PartnerSLider/>
       </div>
      </div>
    </div>
  );
}
