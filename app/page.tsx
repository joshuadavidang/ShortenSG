"use client";

import Landing from "./components/Landing";
import Result from "./components/Result";

const TopPattern = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fillOpacity="1"
        d="M0,192L48,192C96,192,192,192,288,170.7C384,149,480,107,576,106.7C672,107,768,149,864,160C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      ></path>
    </svg>
  );
};

const BottomPattern = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#0099ff"
        fillOpacity="1"
        d="M0,256L48,229.3C96,203,192,149,288,117.3C384,85,480,75,576,85.3C672,96,768,128,864,117.3C960,107,1056,53,1152,53.3C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
      ></path>
    </svg>
  );
};

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center min-h-screen">
      <TopPattern />
      <Landing />
      <Result id="result" />
      <BottomPattern />
    </main>
  );
}
