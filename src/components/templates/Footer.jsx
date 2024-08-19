import { Link } from "react-router-dom/dist";
import { Zoom, Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  toast.success("success!", {
    position: "top-center",
    autoClose: 10000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  });

  const notifyError = () =>
    toast.error("🚫 Invalid email address!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
    });

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubscribe = () => {
    const email = document.getElementById("email").value;
    if (validateEmail(email)) {
      notifySuccess();
    } else {
      notifyError();
    }
  };

  return (
    <footer className="bg-gray-600 dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-white sm:text-3xl dark:text-white">
            Want us to email you with the latest R Drive And Discover news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                id="email"
                type="email"
                placeholder="Renfaa@gg.com"
              />

              <button
                className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                onClick={handleSubscribe}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
          <div className="mx-auto max-w-sm lg:max-w-none">
            <p className="mt-4 text-center text-white lg:text-left lg:text-lg dark:text-gray-400">
              Experience the Journey of a Lifetime with R Drive And Discover.
              Explore. Discover. Enjoy.
            </p>

            <div className="mt-6 flex justify-center gap-8 lg:justify-start">
              <a
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="https://www.facebook.com/RenFaa29"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Facebook </span>
                <img
                  src="/sosial/facebook.svg"
                  alt="Facebook Logo"
                  className="size-6"
                />
              </a>

              <a
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="https://www.instagram.com/renaldi.fauzi29_/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> Instagram </span>
                <img
                  src="/sosial/instagram.svg"
                  alt="Instagram Logo"
                  className="size-6"
                />
              </a>

              <a
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> X </span>
                <img
                  src="/sosial/twitter.svg"
                  alt="Twitter Logo"
                  className="size-6"
                />
              </a>

              <a
                className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                href="https://github.com/ren-fau29"
                target="_blank"
                rel="noreferrer"
              >
                <span className="sr-only"> GitHub </span>
                <img
                  src="/sosial/github.svg"
                  alt="GitHub Logo"
                  className="size-6"
                />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <strong className="font-medium text-white dark:text-white">
                {" "}
                Services{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Custom Road Trip Planning
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Personalized Travel Assistance
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Exclusive Accommodation Bookings
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Safety and Emergency Support
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white dark:text-white">
                {" "}
                About{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <strong className="font-medium text-white dark:text-white">
                {" "}
                Support{" "}
              </strong>

              <ul className="mt-6 space-y-1">
                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    FAQs
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 dark:border-gray-800">
          <p className="text-center text-xs/relaxed text-black dark:text-gray-400">
            © Company R Drive And Discover 2022. All rights reserved.
            <br />
            Created with{" "}
            <a
              href="#"
              className="text-blue-500 underline transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            >
              ReactJs{" "}
            </a>
            and{" "}
            <a
              href="#"
              className="text-blue-500 underline transition hover:text-white/75 dark:text-white dark:hover:text-white/75"
            >
              Tailwind{" "}
            </a>
            . By Renaldi Fauzi Adnan
          </p>
        </div>

        <ToastContainer
          position="top-center"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom}
        />
      </div>
    </footer>
  );
};

export default Footer;
