import HeroSection from "./HeroSection";

import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();

  const handleAdminClick = () => {
    navigate("/form");
  };

  return (
    <div className="min-h-screen bg-[#111] text-white flex flex-col items-center">
      <header className="w-full flex justify-between items-center px-8 py-4">
        <h1 className="text-xl font-bold text-lime-400">LearnHub</h1>
        <button className="text-white border border-white rounded-md px-4 py-2 hover:bg-white hover:text-black"           onClick={handleAdminClick}
        >
            Admin
        </button>
      </header>

      <main className="flex flex-col items-center text-center mt-20">
        <h2 className="text-5xl font-bold mb-4">
          Learn from the best, be your best..
        </h2>
        <p className="text-gray-400 text-lg max-w-xl mb-8">
          Give yourself an upgrade with our inspiring online courses and join a
          global community of learners
        </p>
        <button className="bg-yellow-400 text-black text-lg px-6 py-3 rounded-md hover:bg-yellow-500">
          Get Started
        </button>
      </main>

      <div className="mt-10 text-center mt-28">
        <h1 className="text-2xl font-bold mb-6">Our Placement Partners</h1>
        <div className="grid grid-cols-4 gap-6">
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730647008/weboins/a4wahvpkymlakhzbrykm.png" alt="Airbnb" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/xropgpn1zda8ybnjlehr.png" alt="Grabyo" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/hhijz5j3taxbod0gpzh5.png" alt="LifeGroups" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646778/weboins/alwnec8bctbkpdy1dtpc.png" alt="MYOB" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646810/weboins/elmg8rf9c3ye8z5ozzbx.png" alt="Tailus" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646810/weboins/zw3hgya4ydw7xufqbato.png" alt="Microsoft" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646810/weboins/yph2shsuagtgfgxnevik.png" alt="Coty" className="max-w-[100px] mx-auto" />
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/tgdwdi0alr5vkxmd6bco.png" alt="Lilly" className="max-w-[100px] mx-auto" />
        </div>
        <button className="bg-lime-200 text-gray-800 text-sm px-4 py-3 mt-6 rounded-full shadow-lg hover:bg-lime-300">
          and, more companies
        </button>

        <h1 className=" text-blue-400 font-bold mt-32 ">OPEN SOURCE THEWE AND UI COMPONENT</h1>

        <h2 className=" text-3xl font-extrabold mt-7 ">Geaux Astro helps you <br />craft beautiful websites <br /> efficiently</h2>
      

        <div className="min-h-screen flex bg-black text-white">


      <div className="flex flex-col space-y-10 p-8 w-1/2">

        <div className="flex items-start space-x-4">
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/dhktdjva0jw03vfnoe8c.png" alt="Certificate Icon" className="h-10 w-10" />
          <div>
            <h3 className="text-xl font-bold">Certificate Distribution</h3>
            <p className="text-gray-400">
              We offer certificates to validate and recognize your achievement.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/veuqcgetoaygvbfaebum.png" alt="Knowledge Icon" className="h-10 w-10" />
          <div>
            <h3 className="text-xl font-bold">Knowledge</h3>
            <p className="text-gray-400">
              We deliver transformative knowledge that empowers and inspires.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <img src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646777/weboins/tqt4iuxbawynjbrazak2.png" alt="Hands-on Experience Icon" className="h-10 w-10" />
          <div>
            <h3 className="text-xl font-bold">Hands-on Experience</h3>
            <p className="text-gray-400">
              We provide hands-on experience for real-world learning.
              <br /> You learn best by doing.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2  flex justify-center items-center">
        <img
          src="https://res.cloudinary.com/dwux5pdmm/image/upload/v1730646811/weboins/larglhtagcjytpnaf9km.png"
          alt="Analytics Dashboard"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

<HeroSection/>
<footer className="flex flex-col items-center mt-16 text-gray-500 text-sm">
  <div className="font-bold text-lime-500 text-2xl mb-2">LearnHub</div>
  <p className="text-center">© 2022 Tailwind Labs Inc. All rights reserved.</p>
  <div className="flex space-x-4 mt-2">
    {/* You can add social media icons or links here */}
  </div>
</footer>


      </div>
      
      
      </div>

  );
};

export default Home;
