import Navbar from "./templates/Navbar";
import Sidebar from "./templates/Sidebar";
import Footer from "./templates/Footer";

import culture from "../assets/aboutus/culture.jpg";

import CEO from "../assets/teams/ceo.png";
import marketing from "../assets/teams/marketing.png";
import engineer from "../assets/teams/engineer.png";
import production from "../assets/teams/production.png";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="">
        <div className="max-w-3xl mx-auto mb-24">
          <h1 className="mt-20 text-center xl:text-4xl text-2xl font-semibold">
            WE CREATE COMFORT AND LUXURY IN YOUR TOUR
          </h1>
          <p className="xl:text-lg text-sm text-center mt-7 px-5 leading-7">
            Dengan keahlian yang tak tertandingi, kendaraan premium, dan
            komitmen mendalam terhadap kepuasan pelanggan, kami menciptakan
            pengalaman perjalanan yang disesuaikan dengan kebutuhan yang
            mengubah setiap perjalanan menjadi petualangan yang tak terlupakan.
            Armada kami yang dirawat dengan cermat dan layanan yang
            dipersonalisasi dirancang untuk memenuhi kebutuhan unik setiap
            pelancong, memastikan kenyamanan, keamanan, dan sentuhan kemewahan
            selama perjalanan.
            <br />
            Terletak di Kota Jakarta, Bandung, Yogyakarta, Surabaya, Bali kami
            telah menjadi mitra tepercaya bagi para penjelajah dan petualang
            sejak 2022. Dari sini, kami melayani klien kami di seluruh dunia,
            menawarkan perpaduan yang mulus antara wawasan lokal dan standar
            internasional.
          </p>
        </div>
        <section id="meetTeam">
          <h2 className="mb-10 text-center xl:text-4xl text-2xl font-medium mt-20">
            Meet the Driving Force: The R Drive And Discover Team
          </h2>
          <div className="flex flex-wrap gap-10 max-w-4xl justify-center mx-auto ">
            <div className="w-64 pb-5">
              <div className="bg-gradient-to-r from-indigo-700 to-gray-900 w-64 h-64 relative mt-10">
                <img
                  className="absolute bottom-0"
                  src={CEO}
                  alt="ceo picture"
                />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">
                Cameron Deatsch
              </h3>
              <h4 className="text-center text-sm mb-3">
                CHIEF EXECUTION OFFICER
              </h4>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic
                ducimus, rerum minus dignissimos consequatur molestias aut
                adipisci ex aspernatur voluptatem quasi incidunt, inventore
                totam obcaecati architecto praesentium, reprehenderit mollitia
                esse.
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-slate-800 to-red-950 w-64 h-64 relative mt-10">
                <img
                  className="absolute bottom-0"
                  src={marketing}
                  alt="marketing chief picture"
                />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">
                Zeynep Ozdemir
              </h3>
              <h4 className="text-center text-sm mb-3">
                CHIEF MARKETING OFFICER
              </h4>
              <p className="text-justify">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quibusdam possimus culpa dolor quasi commodi aliquam quae
                numquam! Saepe, nobis eaque, voluptatibus nesciunt harum a
                dolorem distinctio voluptatem impedit doloribus neque!
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-rose-950 to-lime-900 w-64 h-64 relative mt-10">
                <img
                  className="absolute bottom-0"
                  src={production}
                  alt="production manager picture"
                />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">
                Cameron Deatsch
              </h3>
              <h4 className="text-center text-sm mb-3">PRODUCTION MANAGER</h4>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, aliquam deserunt voluptatem corrupti beatae
                obcaecati rerum quidem quos consequuntur sed quas veniam.
                Dignissimos, sint velit porro nostrum perspiciatis quisquam
                repellat!
              </p>
            </div>
            <div className="w-64">
              <div className="bg-gradient-to-r from-purple-950 to-rose-950 w-64 h-64 relative mt-10">
                <img
                  className="absolute bottom-0"
                  src={engineer}
                  alt="engineer picture"
                />
              </div>
              <h3 className="text-center font-medium text-gray-700 text-2xl mt-5 mb-1">
                Mike Cannon-Brookes
              </h3>
              <h4 className="text-center text-sm mb-3">CARS ENGINEER</h4>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus nam eum minus nihil non, eaque explicabo ut provident
                nobis officia illum ipsa nesciunt, debitis eos suscipit! Dolores
                sint dolore asperiores?
              </p>
            </div>
          </div>
        </section>
        <section id="culture" className="mt-20 xl:mb-24 mb-16">
          <h2 className="mb-5 text-center xl:text-4xl text-2xl font-medium mt-20">
            R Drive And Discover CULTURE
          </h2>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">
              Customer-Centric Excellence
            </h3>
            <p className="xl:text-lg text-sm">
              Di R Drive And Discover, pelanggan adalah inti dari semua yang
              kami lakukan. Kami berkomitmen untuk memberikan pengalaman
              perjalanan yang tak terlupakan dengan menempatkan kebutuhan,
              preferensi, dan harapan pelanggan di atas segalanya. Kami
              mendengarkan, memahami, dan menyesuaikan setiap detail untuk
              memastikan kepuasan maksimal dan hubungan jangka panjang dengan
              setiap pelanggan. <br />
              <br />
            </p>
          </div>
          <div className="culture-background max-w-4xl mx-auto">
            <img className="w-[80%] mx-auto py-5" src={culture} alt="culture" />
          </div>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">
              Innovation and Adaptability
            </h3>
            <p className="xl:text-lg text-sm">
              Kami percaya pada kekuatan inovasi untuk menciptakan pengalaman
              perjalanan yang nyaman dan luar biasa. Di R Drive And Discover,
              kami selalu mencari cara baru untuk meningkatkan layanan kami,
              baik melalui teknologi, desain perjalanan yang kreatif, atau
              pendekatan baru terhadap kenyamanan dan keselamatan. Kami juga
              fleksibel dan cepat beradaptasi dengan perubahan, memastikan bahwa
              layanan kami selalu relevan dan responsif terhadap kebutuhan pasar
              yang dinamis.
            </p>
          </div>
          <div className="max-w-4xl mx-auto mb-7 px-5">
            <h3 className="py-2 xl:text-xl text-base font-semibold mb-2">
              Sustainability and Responsibility
            </h3>
            <p className="xl:text-lg text-sm">
              Kami berkomitmen untuk menjalankan bisnis kami dengan cara yang
              ramah lingkungan dan bertanggung jawab terhadap komunitas. R Drive
              And Discover berupaya mengurangi jejak karbon melalui penggunaan
              kendaraan ramah lingkungan, memilih rute yang lebih hijau, dan
              bermitra dengan akomodasi yang mendukung keberlanjutan. Kami juga
              mendukung inisiatif lokal di destinasi kami, memastikan bahwa
              setiap perjalanan tidak hanya menyenangkan bagi pelanggan, tetapi
              juga memberi manfaat bagi masyarakat dan lingkungan setempat.
            </p>
            <div className="max-w-4xl mb-7 px-5">
              <h3 className="py-5 xl:text-xl text-base font-semibold mb-2">
                We Are Location
              </h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45931.525486162514!2d106.81758973137698!3d-6.193725267294358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sMonas!5e1!3m2!1sen!2sid!4v1724676877867!5m2!1sen!2sid"
                allowfullscreen=""
                className="mx-auto"
                width="800"
                height="300"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
