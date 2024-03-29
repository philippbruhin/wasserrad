import { useState, useEffect } from "react";
import type { SensorData } from "../lib/ttnDataFetcher";
import { ttnDataFetcher } from "../lib/ttnDataFetcher";
import Maps from "../components/Maps/Maps";
import Preloader from "../components/Preloader/Preloader";
import RevolutionChart from "../components/BarChart/RevolutionChart";

export default function About() {
  const [data, setData] = useState<SensorData>({ entries: [] });
  const [isTtnLoaded, setisTtnLoaded] = useState<boolean>(false);
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchTtnData = async () => {
      try {
        const sensorData = await ttnDataFetcher();
        setData(sensorData);
      } catch (error) {
        console.error(error);
      } finally {
        setisTtnLoaded(true);
      }
    };

    fetchTtnData();
  }, []);

  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <h1>Über dieses Projekt</h1>
      <hr />
      <p>
        Vielen Dank für Ihr Interesse am Wasserradprojekt im Mühlebach, einem
        besonderen Gemeinschaftsprojekt zwischen technisch interessierten Eltern
        und ihren Kindern. Ziel dieses Projektes ist es, handwerkliche
        Fähigkeiten zu fördern und gemeinsam verschiedene Bereiche wie
        Konstruktion, Physik, Holz- und Metallbau, 3D-Druck, Programmierung und
        Elektrotechnik zu erkunden und zu erlernen.
      </p>
      <p>
        Die folgende Grafik zeigt die Drehgeschwindigkeit des Wasserrads der
        letzten 7 Tage. Der integrierte Sensor speichert die Daten und sendet
        sie alle 10 Minuten, sodass die Umdrehungen auf dieser Webseite
        angezeigt werden können.
      </p>
      {!isTtnLoaded ? (
        <Preloader />
      ) : (
        <>
          <RevolutionChart {...data} />
        </>
      )}
      <p>
        Die Daten des Sensors ermöglichen es, zu überprüfen, zu welchen Zeiten
        und an welchen Tagen der Mühlebach mit Wasser beschickt wird. Denn das
        Wasserrad dreht sich nur, wenn der Bach Wasser führt und der Wasserstand
        bis ganz nach oben reicht.
      </p>
      <h3>Baupläne und weiterführende technische Details</h3>
      <p>
        Für technische Details und Baupläne zu diesem Projekt, empfehlen wir,
        unsere{" "}
        <a
          href="https://github.com/philippbruhin/wasserrad/"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Seite
        </a>{" "}
        zu besuchen. GitHub ist eine Plattform für kollaborative
        Softwareentwicklung, auf welcher wir das Wasserradprojekt dokumentieren
        und den Entwicklungsprozess teilen.
      </p>
      {!isImageLoaded && <Preloader />}
      <figure>
        <img
          className="rounded-lg shadow w-full !mb-0"
          src="./about/wasserrad_fusion_360.png"
          onLoad={() => setImageLoaded(true)}
          style={{ display: isImageLoaded ? "block" : "none" }}
          alt="Trophäenbild"
        />
        <figcaption className="text-gray-400">
          Alle Zeichnungen zum Nachbauen des Wasserrades gibt es auf GitHub.
        </figcaption>
      </figure>
      <p>
        Alle Zeichnungen und der Programmcode sind{" "}
        <a
          href="https://de.wikipedia.org/wiki/Open_Source"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source
        </a>{" "}
        und können frei verwendet werden, solange keine kommerziellen Ziele
        verfolgt werden.
      </p>
      <h3>Standort des Rades</h3>
      <p>
        Falls Sie das Wasserrad nicht vor Ort erkundet haben, laden wir Sie
        herzlich ein, dies bei Ihrem nächsten Spaziergang zu tun. Das Wasserrad
        findet man an der{" "}
        <a href="https://maps.app.goo.gl/KiN5u6c2z8u8aiGi8" target="_blank">
          Mühlestrasse 27 in Siebnen
        </a>
        , gegenüber dem Restaurant Falken.
      </p>
      <div className="not-prose">
        <Maps />
      </div>
    </div>
  );
}
