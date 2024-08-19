import React, { useState } from "react";
import MultipleItems from "./Carousel";
import { Link } from "react-router-dom";
import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";

import Planning from "../assets/features/1.png";
import Partnerships from "../assets/features/2.png";
import Road from "../assets/features/3.png";
import Experiences from "../assets/features/4.png";
import Focus from "../assets/features/5.png";
import Technology from "../assets/features/6.png";
import topGear from "../assets/testimonials/topGear.svg";
import carNDriver from "../assets/testimonials/CarandDriver.png";
import motorTrend from "../assets/testimonials/motorTrend.png";

const HomePage = () => {
  const [currentVideo, setCurrentVideo] = useState({
    number: 1,
    caption: "Electrify Your Legacy.",
    linkCaption: "Hyundai IONIQ 5",
    link: "./products",
  });

  const handleButtonClick = (videoNumber, caption, linkCaption, link) => {
    setCurrentVideo({
      number: videoNumber,
      caption: caption,
      linkCaption: linkCaption,
      link: link,
    });
  };

  return (
    <div className="">
      <Navbar />
      <Sidebar />
      <div id="videotron" className="w-full relative">
        <video
          loop
          autoPlay
          muted
          className="w-full h-[92vh] object-cover"
          key={currentVideo.number}
        >
          <source
            src={`video-hero${currentVideo.number}.mp4`}
            type="video/mp4"
          />
        </video>
        <figcaption className="absolute top-[60%] left-1/2 transform -translate-x-1/2 flex ">
          <h2 className="text-white xl:text-3xl text-lg font-light">
            {currentVideo.caption}
          </h2>
        </figcaption>
        <div
          id="link-profile"
          className="w-40 hover:bg-orange-600 absolute top-[69%] bg-black left-1/2 transform -translate-x-1/2 flex items-center justify-center"
        >
          <a
            className="px-4 py-2 text-white  inline-block"
            href={currentVideo.link}
          >
            {currentVideo.linkCaption}
          </a>
        </div>
        <div className="absolute top-[83%] left-1/2 transform -translate-x-1/2  flex justify-center mt-4 mx-auto">
          <button
            onClick={() =>
              handleButtonClick(
                1,
                "Electrify Your Legacy.",
                "Hyundai IONIQ 5",
                "./products"
              )
            }
            className="mx-2 px-4 py-2"
          >
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                2,
                "#ExploreWithCar",
                "FULL SHOW",
                "https://www.youtube.com/watch?v=jhBM2shbDB8"
              )
            }
            className="mx-2 px-4 py-2 "
          >
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
          <button
            onClick={() =>
              handleButtonClick(
                3,
                "THE INDONESIA WONDERFUL",
                "FULL VIDEO",
                "https://www.youtube.com/watch?v=ruKqXQ2KtH4"
              )
            }
            className="mx-2 px-4 py-2 "
          >
            <span className="block h-[5px] w-8 bg-slate-300 hover:bg-orange-700"></span>
          </button>
        </div>
        <div className="border-b-2">
          <div className="h-auto w-[80%] mx-auto flex justify-center flex-wrap items-center xl:gap-20">
            <a
              className="xl:py-3 py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200"
              href="#company-overview"
            >
              OVERVIEW
            </a>
            <a
              className="xl:py-3 py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200"
              href="#signature"
            >
              FACILITY
            </a>
            <a
              className="xl:py-3 py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200"
              href="#media-review"
            >
              MEDIA REVIEW
            </a>
            <a
              className="xl:py-3 py-2 xl:px-4 px-5 block font-medium xl:text-lg text-sm hover:bg-slate-200"
              href="#products"
            >
              RETAIL CAR
            </a>
          </div>
        </div>
      </div>

      <section id="company-overview" className="mx-auto">
        <h2 className="font-medium text-center mt-16 pt-5 mb-12 xl:text-3xl text-lg">
          Unlimited Travel <span className="mx-2 ">|</span> DRIVE AND DISCOVER
          OVERVIEW
        </h2>
        <div id="overview-grid" className="mx-auto">
          <div id="welcome" className="max-w-4xl mx-auto">
            <h2 className="xl:text-2xl text-lg mb-2 text-center ">
              Welcome to R Drive And Discover
            </h2>
            <p className="xl:text-lg text-base text-justify px-3">
              Di mana setiap perjalanan dirancang untuk menginspirasi. Baik Anda
              menjelajahi permata tersembunyi atau memulai petualangan besar,
              kendaraan premium dan layanan personal kami memastikan pengalaman
              yang mulus dan tak terlupakan. Temukan kebebasan di jalan terbuka
              bersama kami, di mana kisah hebat Anda berikutnya dimulai dengan
              setiap perjalanan.
            </p>
          </div>
          <div id="history" className="max-w-4xl mx-auto mt-6 mb-10">
            <h2 className="xl:text-2xl text-lg mb-2 text-center">
              Our Brief History
            </h2>
            <p className="xl:text-lg text-base text-justify px-3">
              Nama <strong>R Drive And Discover</strong> terinspirasi dari
              inisial pendirinya yang visioner,{" "}
              <strong>Renaldi Fauzi Adnan.</strong> Dengan hasrat yang mendalam
              untuk menjelajah dan keinginan untuk menawarkan pengalaman
              perjalanan yang tak tertandingi, Renaldi melihat celah di pasar
              untuk perjalanan darat yang benar-benar personal dan mewah.
              Didorong oleh komitmennya terhadap kualitas dan kepuasan
              pelanggan, ia mendirikan <strong>R Drive And Discover</strong>{" "}
              untuk memberikan kebebasan dan kenyamanan yang layak bagi para
              pelancong. Perusahaan ini resmi didirikan pada 2022 untuk
              mewujudkan visi Renaldi tentang perjalanan yang sesuai dengan
              kebutuhan, menawarkan perjalanan unik bagi para petualang di
              seluruh dunia.
            </p>
          </div>
          <div id="signature" className="bg-black text-gray-200 py-12">
            <div id="principles" className="">
              <h2 className="xl:text-2xl text-xl mb-10 text-center font-semibold pt-8">
                THE R DRIVE AND DISCOVER DIFFERENCE
              </h2>
              <div className="xl:text-lg text-xs grid xl:grid-cols-3 grid-cols-2 justify-items-center px-4 max-w-5xl mx-auto">
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Planning} alt="brabus-signature" />
                  <figcaption className="mt-5">
                    Personalized Journey Planning.
                  </figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Partnerships} alt="brabus-signature" />
                  <figcaption className="mt-5">
                    Exclusive Partnerships.
                  </figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Road} alt="brabus-signature" />
                  <figcaption className="mt-5">Luxury on the Road.</figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Experiences} alt="brabus-signature" />
                  <figcaption className="mt-5">
                    Immersive Local Experiences.
                  </figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Focus} alt="brabus-signature" />
                  <figcaption className="mt-5">
                    Sustainability Focus.
                  </figcaption>
                </figure>
                <figure className="xl:w-52 w-28 h-auto mb-10">
                  <img src={Technology} alt="brabus-signature" />
                  <figcaption className="mt-5">
                    Seamless Technology Integration.
                  </figcaption>
                </figure>
              </div>
            </div>
            <div id="services" className="mt-16 max-w-4xl px-4 mx-auto pb-10">
              <h2 className="text-2xl mb-1 text-center font-semibold">
                Our Services
              </h2>
              <table className="min-w-full a">
                <tbody className="xl:text-xl text-sm ">
                  <tr className="">
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">
                      Luxury Vehicle Rental:
                    </td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">
                      Pilih dari armada kendaraan premium kami, yang dirawat
                      dengan cermat dan dilengkapi dengan fasilitas terbaru.
                      Apakah Anda lebih memilih SUV untuk petualangan tangguh
                      atau sedan elegan untuk perjalanan yang nyaman, kami
                      memiliki kendaraan yang sempurna untuk perjalanan Anda.
                    </td>
                  </tr>

                  <tr>
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">
                      Personalized Travel Assistance:
                    </td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">
                      Asisten perjalanan pribadi kami tersedia 24/7 untuk
                      memberikan dukungan selama perjalanan Anda. Mulai dari
                      perubahan menit terakhir pada itinerary hingga rekomendasi
                      restoran terbaik di daerah setempat, kami di sini untuk
                      memastikan perjalanan Anda berjalan lancar dan
                      menyenangkan.
                    </td>
                  </tr>

                  <tr>
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">
                      Exclusive Accommodation Bookings:
                    </td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">
                      Kami bermitra dengan jaringan hotel mewah, penginapan
                      butik, dan akomodasi unik untuk memberikan Anda pilihan
                      tempat menginap terbaik sepanjang rute Anda. Nikmati harga
                      khusus dan fasilitas eksklusif sebagai bagian dari paket
                      perjalanan Anda.
                    </td>
                  </tr>

                  <tr>
                    <td className="xl:px-6 px-3 py-2 align-text-top text-orange-800">
                      Safety and Emergency Support:
                    </td>
                    <td className="xl:px-6 px-3 py-2 align-text-top">
                      Keselamatan Anda adalah prioritas kami. Kami menyediakan
                      pengarahan keselamatan yang komprehensif, pelacakan GPS,
                      dan dukungan darurat 24/7 selama perjalanan Anda,
                      memastikan ketenangan pikiran saat Anda menjelajah.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section id="media-review" className="bg-testimonials-background">
        <h2 className="text-center xl:pt-24 pt-10 font-semibold text-gray-700 text-2xl xl:text-4xl">
          MEDIA REVIEW
        </h2>
        <h6 className="text-center text-xs">(Testimonials)</h6>
        <div
          id="cards"
          className="flex flex-row flex-wrap xl:mt-36 mt-10 justify-center gap-5 px-5 pb-24"
        >
          <div
            id="card"
            className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75"
          >
            <img
              className="w-32 mx-auto py-4"
              src={carNDriver}
              alt="car & driver logo"
            />
            <p className="px-6 pb-6 ">
              "R Drive And Discover melampaui semua ekspektasi saya! Sejak saya
              memesan, tim mereka sangat penuh perhatian, menyusun rencana
              perjalanan yang sangat sesuai dengan minat saya. Kendaraan mewah
              yang disediakan sangat bersih dan dilengkapi dengan semua yang
              saya butuhkan untuk perjalanan yang nyaman. Bantuan perjalanan
              yang dipersonalisasi sangat membantu, membuat seluruh perjalanan
              lancar dan bebas stres. Saya tidak sabar untuk merencanakan
              petualangan saya berikutnya bersama mereka!"
            </p>
          </div>
          <div
            id="card"
            className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75"
          >
            <img
              className="w-32 mx-auto py-4"
              src={topGear}
              alt="top gear logo"
            />
            <p className="px-6 pb-6 ">
              "Perjalanan darat keluarga kami melalui pedesaan sungguh
              spektakuler, berkat R Drive And Discover. Tur berpemandu dengan
              pakar lokal sangat bermanfaat bagi pengalaman kami, dan akomodasi
              eksklusifnya melampaui ekspektasi kami. Setiap detail direncanakan
              dengan saksama, dan penyewaan perlengkapan petualangan
              memungkinkan kami menjelajahi alam seperti yang belum pernah kami
              lakukan sebelumnya. Perusahaan ini benar-benar tahu cara mengubah
              perjalanan menjadi petualangan yang tak terlupakan."
            </p>
          </div>
          <div
            id="card"
            className="w-[350px]  text-center bg-[#e9ecef] bg-opacity-75"
          >
            <img
              className="w-32 mx-auto py-4"
              src={motorTrend}
              alt="motor trend logo"
            />
            <p className="px-6 pb-6 ">
              "Saya baru-baru ini menggunakan R Drive And Discover untuk
              perjalanan bisnis yang berubah menjadi liburan singkat. Layanan
              pramutamu mengurus semuanya, mulai dari reservasi restoran hingga
              pemesanan hotel, sehingga saya dapat fokus pada pekerjaan dan
              relaksasi. Dukungan keselamatan dan darurat memberikan ketenangan
              pikiran selama perjalanan saya. Saya sangat merekomendasikan
              layanan mereka kepada siapa pun yang mencari pengalaman perjalanan
              yang lancar dan mewah."
            </p>
          </div>
        </div>
      </section>
      <section id="products" className="mb-20">
        <MultipleItems />
        <div
          id="link-profile"
          className="w-40 top-[69%] bg-black flex items-center justify-center mx-auto mt-16 hover:bg-orange-600"
        >
          <Link to="/products" className="px-3 py-2 text-white inline-block">
            See More
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
