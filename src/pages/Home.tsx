import Logo from "../assets/logo";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="prose max-w-none sm:prose-sm md:prose-md lg:prose-lg xl:prose-xl">
      <div className="max-w-20 lg:max-w-28 xl:max-w-32 pb-2 lg:pb-3 xl:pb-4 mx-auto">
        <Logo />
      </div>
      <h1 className="text-center">Mühlebach Wasserrad Quiz</h1>
      <hr />
      <p>
        Herzlich willkommen auf unserer Webseite! Wir freuen uns, dass Sie sich
        die Zeit genommen haben, das Wasserrad während Ihres Spaziergangs zu
        entdecken und den QR-Code zu scannen.
      </p>

      <p>
        Entdecken Sie den Mühlebach (auch Nuolenbach genannt), ein wichtiger
        Teil unserer regionalen Identität. Erfahren Sie mehr über die alte
        Fabrik mit der ehemaligen Baumwollspinnerei und dem Kraftwerk Wägital
        durch unser interaktives Quiz.
      </p>
      <h4>Wie funktioniert es?</h4>
      <ol>
        <li>
          Das Quiz besteht aus 10 Fragen, die sich vorwiegend um den Mühlebach,
          die alte Fabrik und das Kraftwerk Wägital drehen.
        </li>
        <li>
          Jede richtige Antwort bringt Ihnen 1 Punkt ein – testen Sie Ihr Wissen
          über die faszinierende Geschichte und Struktur dieser
          Wasserlandschaft.
        </li>
        <li>
          Nehmen Sie sich so viel Zeit, wie Sie möchten. Am Ende winkt ein
          Zertifikat, welches heruntergeladen und geteilt werden kann.
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
