import Form from "./Form";
import Image from "next/image";
import LinkShortenHero from "~/undraw_link_shortener.png";

export default function Landing() {
  return (
    <div className="flex flex-col md:flex-row w-full lg:gap-32 justify-center items-center md:relative lg:bottom-28">
      <Image
        src={LinkShortenHero}
        width={500}
        alt="Picture of the author"
        priority
      />
      <div className="flex flex-col px-8 md:w-1/2">
        <div className="mb-6">
          <h1 className="font-bold mb-3">Bid farewell to long and ugly URLs</h1>
          <h2 className="font-semibold mb-3">✂️ Shorten them now</h2>
          <p className="text-gray-500">
            One step closer to looking credible ⤵
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
}
