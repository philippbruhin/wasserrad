import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

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
      <nav className="py-6 prose">
        <ul className="flex list-none !pl-0">
          <li className="mr-6">
            <Link to="/wasserrad/">Home</Link>
          </li>
          <li className="mr-6">
            <Link to="/wasserrad/quiz">Quiz</Link>
          </li>
          <li className="mr-6">
            <Link to="/wasserrad/about">Projekt</Link>
          </li>
          <li className="mr-6">
            <Link to="/wasserrad/contact">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default App;
