import { useState, useEffect } from "react";
import type { Result } from "../lib/ttnDataFetcher";
import { ttnDataFetcher } from "../lib/ttnDataFetcher";
import Logo from "../assets/logo";
import { Link } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";

export default function Home() {
  const [data, setData] = useState<Result[]>([]);
  const [isTtnLoaded, setisTtnLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchTtnData = async () => {
      try {
        const result = await ttnDataFetcher();
        setData(result);
      } catch (error) {
        console.error('Error fetching TTN data:', error);
      } finally {
        setisTtnLoaded(true);
      }
    };

    fetchTtnData();

  }, []);

  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <div className="max-w-20 lg:max-w-28 xl:max-w-32 pb-2 lg:pb-3 xl:pb-4 mx-auto">
        <Logo />
      </div>
      <h1 className="text-center">Mühlebach Wasserrad Quiz</h1>
      <hr />
      {!isTtnLoaded ? (
        <Preloader />
      ) : (
        <>
          {data.length}
          <pre className="whitespace-pre overflow-x-auto bg-gray-800 text-white p-4 rounded-md">
            {JSON.stringify(data, null, 2)}
          </pre>
        </>
      )}
      <p>
        Sie haben sich die Zeit genommen, das Wasserrad während Ihres
        Spaziergangs zu entdecken und den QR-Code zu scannen – das freut uns
        sehr! Herzlich willkommen auf unserer Webseite. Wir laden Sie ein, die
        Schönheit des Mühlebachs, der alten Fabrik mit der ehemaligen
        Baumwollspinnerei und dem Kraftwerk Wägital durch unser interaktives
        Quiz zu erkunden.
      </p>
      <h4>Wie funktioniert es?</h4>
      <ol>
        <li>
          Das Quiz besteht aus 10 Fragen, die sich vorwiegend um den Mühlebach,
          die alte Fabrik und das Kraftwerk Wägital drehen.
        </li>
        <li>
          Jede richtige Antwort bringt Ihnen 1 Punkt ein – testen Sie Ihr Wissen
          über die Geschichte und Struktur dieser faszinierenden
          Wasserlandschaft.
        </li>
        <li>
          Nehmen Sie sich so viel Zeit, wie Sie möchten. Ihre Antworten werden
          nicht gespeichert oder nachverfolgt.
        </li>
      </ol>
      <p>Viel Spass!</p>
      <p className="py-4 text-center">
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
