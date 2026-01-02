import { useEffect } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import LiveData from "./components/LiveData/LiveData";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 pt-6 sm:pt-10 xl:max-w-5xl xl:px-0 flex flex-col h-screen justify-between">
      <section className="mb-auto pb-6 sm:pb-10">
        <Outlet />
      </section>
      <hr />
      <div className="md:flex md:flex-wrap justify-between items-center">
        <nav className="py-6 prose flex-1">
          <ul className="flex list-none !pl-0">
            <li className="mr-6">
              <NavLink
                to="/wasserrad/"
                end
                className={({ isActive }) =>
                  !isActive ? "text-blue-500" : "text-blue-800"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/wasserrad/quiz"
                end
                className={({ isActive }) =>
                  !isActive ? "text-blue-500" : "text-blue-800"
                }
              >
                Quiz
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/wasserrad/about"
                end
                className={({ isActive }) =>
                  !isActive ? "text-blue-500" : "text-blue-800"
                }
              >
                Projekt
              </NavLink>
            </li>
            <li className="mr-6">
              <NavLink
                to="/wasserrad/contact"
                end
                className={({ isActive }) =>
                  !isActive ? "text-blue-500" : "text-blue-800"
                }
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
        <LiveData />
      </div>
      <p className="pb-6 text-xs text-gray-500 text-left md:text-center">
        Wenn Ihnen das Wasserrad Freude bereitet hat, freuen wir uns über eine
        kurze{" "}
        <a
          href="https://g.page/r/CUQW8qQE5Q3LEAE/review"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-700"
        >
          Bewertung auf Google
        </a>
        .
      </p>
    </main>
  );
};

export default App;
