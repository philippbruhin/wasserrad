import Maps from '../components/Maps/Maps';
import { Link } from 'react-router-dom';

export default function Location() {
  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <h1>Standort des Wasserrades</h1>
      <hr />
      <p>
        Das Wasserrad findet man an der{" "}
        <a href="https://maps.app.goo.gl/KiN5u6c2z8u8aiGi8" target="_blank">
          Mühlestrasse 27 in Siebnen
        </a>
        , direkt gegenüber dem Restaurant Falken.
      </p>
      <div className="not-prose">
        <Maps />
      </div>
      <p className="py-4 text-center pt-10">
        <Link
          className="rounded-md bg-blue-600 px-10 py-4 text-white hover:text-white no-underline shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          to="/wasserrad/quiz"
        >
          Quiz starten
        </Link>
      </p>
    </div>
  );
}
