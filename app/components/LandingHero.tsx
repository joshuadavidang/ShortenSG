import LinkShortenHero from "~/undraw_link_shortener.png";
import Image from "next/image";

export default function LandingHero() {
  return (
    <div className="flex flex-col md:flex-row w-screen justify-center items-center gap-16">
      <Image
        src={LinkShortenHero}
        width={500}
        height={500}
        alt="Picture of the author"
      />
      <div className="flex flex-col gap-2 px-3">
        <h1 className="font-bold">No more long urls</h1>
        <h2 className="font-semibold">✂️ Shorten them now</h2>
        <p className="text-gray-500">
          {"It's "} now much more reliable to share any links!
        </p>
      </div>
    </div>
  );
}
