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
        Vielen Dank für Ihr Interesse am Wasserradprojekt im Mühlebach. Dieses
        Projekt war nicht nur eine Gelegenheit, technische Fähigkeiten wie
        Konstruktion, Holzbearbeitung, 3D-Druck, Elektrotechnik und
        Programmierung zu erlernen, sondern auch eine wertvolle Zeit, in welcher
        man gemeinsam experimentieren, entdecken und lachen konnte.
      </p>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/QoVuPHz8Htk?si=XQSZwJuiz6IdkMNc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        Wir möchten betonen, dass neben dem technischen Aspekt dieses Projekts
        auch die Freude und der Stolz, etwas mit unseren eigenen Händen zu
        erschaffen, von unschätzbarem Wert waren. In einer Zeit, in der oft
        wenig Beachtung auf das Handwerk gelegt wird, war es für uns eine
        Bereicherung, diese Fähigkeiten zu nutzen und ein funktionierendes
        Wasserrad zu bauen.
      </p>
      <h3>Integrierter Sensor zur Drehzahlmessung</h3>
      <p>
        Die folgende Grafik zeigt die Drehgeschwindigkeit des Wasserrads der
        letzten Tage. Der integrierte Sensor speichert die Daten und sendet sie
        alle 10 Minuten, sodass die Umdrehungen auf dieser Webseite angezeigt
        werden können. Dabei werden die Linien im Balkendiagramm nur{" "}
        <span className="bg-blue-600 text-white px-1">blau dargestellt</span>,
        wenn die Drehzahl zwischen 5 und 11 Umdrehungen pro Minute liegt. Alle
        anderen Umdrehungen (mehr oder weniger) werden in{" "}
        <span className="bg-red-600 text-white px-1">rot dargestellt</span>, da
        sie nicht durch den Bach verursacht wurden, sondern beispielsweise durch
        manuelles Drehen eines Besuchers oder durch Windbewegungen (An- und
        Ausfahren ausgenommen).
      </p>
      {!isTtnLoaded ? (
        <Preloader />
      ) : (
        <>
          <RevolutionChart {...data} />
        </>
      )}
      <p>
        Die Daten des Sensors ermöglichen es, zu ermitteln, zu welchen Zeiten
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
