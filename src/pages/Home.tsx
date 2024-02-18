import Logo from "../assets/logo";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <div className="max-w-20 lg:max-w-28 xl:max-w-32 pb-2 lg:pb-3 xl:pb-4 mx-auto">
        <Logo />
      </div>
      <h1 className="text-center">Mühlebach Wasserrad Quiz</h1>
      <hr />
      <p>Sie haben sich die Zeit genommen, das Wasserrad beim Spazierengehen zu entdecken und den QR-Code zu scannen. Das freut uns sehr. Herzlich willkommen auf unserer Webseite! Nutzen Sie diese Gelegenheit, die Schönheit der Region Siebnen, Wangen und Nuolen durch unser interaktives Quiz zu erkunden.</p>
      <h4>Wie funktioniert es?</h4>
      <ol>
        <li>Das Quiz besteht aus 10 Fragen zum Mühlebach und der Umgebung.</li>
        <li>Erzielen Sie 1 Punkt für jede richtige Antwort und sehen Sie, wie gut Sie die Region kennen.</li>
        <li>Nehmen Sie sich so viel Zeit, wie Sie möchten. Ihre Antworten werden nicht gespeichert oder getrackt.</li>
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
  )
}
