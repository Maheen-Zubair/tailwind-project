import Image from "next/image";
import image from "../public/female__employee__staff__user__avatar-512.png";
import Header from "../app/components/header";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="bg-gray-200 h-screen flex flex-col md:flex-row md:items-center items-end  justify-center p-5 md:p-20 ">
        <div className="flex flex-col">
          <div className="text-5xl sm:text-6xl font-bold text-gray-800">
            I&apos;m <span className="text-yellow-500 stroke-[1px] stroke-yellow-700">Maheen </span>
          </div>
          <p className="text-sm sm:text-lg text-gray-700 ">
            &quot;I am a front-end developer skilled in HTML, CSS, JavaScript, and TypeScript. I focus on creating responsive, user-friendly web interfaces and am keen on learning new technologies.&quot;
          </p>
        </div>
        <Image
          className="rounded-full border-2  border-yellow-900 h-52 w-52  "
          src={image}
          alt="profile-image"
        />
      </div>
      <Footer />
    </div>
  );
}
