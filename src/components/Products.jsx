import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";
import CarCard from "./CarCard";

import ronaldo from "../assets/testimonials/cristianoronaldo.webp";
import blonde from "../assets/testimonials/blonde.jpg";

import upquote from "../assets/testimonials/upquote.png";
import downquote from "../assets/testimonials/downquote.png";

import carData from "../carData.json";
console.log(carData);
const Products = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <section>
        <h2 className="mt-20 text-center text-2xl xl:text-4xl  font-semibold">
          CARS
        </h2>
        <p className="text-center mt-7 leading-7 text-sm xl:text-base  max-w-3xl mx-auto">
          "Dari rencana perjalanan yang direncanakan dengan cermat hingga
          kendaraan mewah – setiap perjalanan dengan R Drive And Discover
          merupakan hasil sinergi yang sempurna: perencanaan perjalanan yang
          ahli, teknologi canggih, dan layanan yang dipersonalisasi bersatu
          untuk menciptakan pengalaman perjalanan darat yang benar-benar tak
          tertandingi di kelasnya."
        </p>
        <div className="mx-auto my-20 w-[90%] flex flex-row flex-wrap justify-center gap-10 ">
          {carData.map((item) => (
            <CarCard
              key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              description={item.description}
              price={item.price}
              powerTorque={item.power_torque}
              engine={item.engine}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-center xl:text-3xl text-xl">
          OUR SATISFIED CUSTOMER
        </h2>
        <div className="flex justify-center w-full flex-wrap py-10">
          <div className="w-[580px] mx-4 my-4 flex xl:flex-row flex-col items-center p-7 bg-gray-200">
            <img className="w-72 mr-5" src={ronaldo} alt="ronaldo" />
            <div className="w-64">
              <img className="w-6" src={upquote} alt="quote" />
              <h2 className="ml-5 text-lg font-semibold">Cristiano Ronaldo</h2>
              <p className="ml-5">
                "Embarking on a journey with{" "}
                <strong>R Drive And Discover</strong> is an experience like no
                other. The perfect blend of luxury and adventure transforms
                every drive into a memorable voyage. It's not just about
                reaching your destination; it's about the thrill of the journey,
                where comfort meets exploration in the most extraordinary way."
              </p>
              <img className="w-6 ml-auto" src={downquote} alt="quote" />
            </div>
          </div>
          <div className="w-[580px] mx-4 my-4 flex xl:flex-row flex-col items-center p-7 bg-gray-200">
            <img className="w-72 mr-5" src={blonde} alt="quote" />
            <div className="w-64">
              <img className="w-6" src={upquote} alt="blondie" />
              <h2 className="ml-5 text-lg font-semibold">Blondie</h2>
              <p className="ml-5">
                "Transforming road trips into extraordinary adventures,{" "}
                <strong>R Drive And Discover</strong> redefines the art of
                travel. From breathtaking routes to luxurious comfort, each
                journey is a meticulously crafted experience that goes beyond
                the ordinary."
              </p>
              <img className="w-6 ml-auto" src={downquote} alt="quote" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
