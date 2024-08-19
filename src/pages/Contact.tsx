import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Preloader from "../components/Preloader/Preloader";

export default function Contact() {
  const [isReferenceOpen, setIsReferenceOpen] = useState(false);
  const [isClocksOpen, setIsClocksOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const [isSiebnenWebcamOpen, setIsSiebnenWebcamOpen] = useState(false);
  const [isMunicipalInfoOpen, setIsMunicipalInfoOpen] = useState(false);
  const [isEthPicsOpen, setIsEthPicsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isImageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <h1>Kontakt und Impressum</h1>
      <hr />
      <p>
        Wenden Sie sich bei Fragen, Anmerkungen, Lob oder Kritik gerne an
        folgende Adresse.
      </p>
      <p>
        Philipp Bruhin
        <br />
        Falkenstrasse 1<br />
        8854 Siebnen
        <br />
        <a href="mailto:info%40philippbruhin.ch">info@philippbruhin.ch</a>
      </p>
      <p>
        Die Entwicklung und der Bau des Wasserrades ist auf{" "}
        <a
          href="https://github.com/philippbruhin/wasserrad"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        dokumentiert.
      </p>

      <div className="w-full mx-auto">
        <button
          className="w-full py-2 px-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsReferenceOpen(!isReferenceOpen)}
        >
          Quellenangaben zum Quiz
          <span>{isReferenceOpen ? "-" : "+"}</span>
        </button>
        {isReferenceOpen && (
          <div className="border px-4 rounded-b-lg">
            <ul>
              <li>
                Historisches Lexikon der Schweiz:
                <br />
                <a
                  href="./hls-007439-Siebnen.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siebnen
                </a>
              </li>
              <li>
                Historisches Lexikon der Schweiz:
                <br />
                <a
                  href="./hls-030410-Caspar_Honegger.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caspar Honegger
                </a>
              </li>
              <li>
                Mitteilungen des historischen Vereins des Kantons Schwyz:
                <br />
                <a
                  href="./mhv-001_2008_100__510_d.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Caspar Honegger und der Durchbruch der Textilindustrie in
                  Siebnen
                </a>
              </li>
              <li>
                Mitteilungen des historischen Vereins des Kantons Schwyz:
                <br />
                <a
                  href="./mhv-001_2008_100__546_d.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Siebnen: ein funktionierendes Kuriosum
                </a>
              </li>
            </ul>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsClocksOpen(!isClocksOpen)}
        >
          Hinweis zu den Glocken
          <span>{isClocksOpen ? "-" : "+"}</span>
        </button>
        {isClocksOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Das Wasserrad ist mit zwei Glocken (Swissmade, gekauft bei{" "}
              <a
                href="https://www.glocken-emil.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                glocken-emil.ch
              </a>
              ) ausgestattet, die dem Projekt einen besonderen Charme verleihen
              sollen.
            </p>
            <p>
              Wir möchten sicherstellen, dass das Wasserrad die Gemeinschaft
              nicht stört. Falls die Glocken für Sie oder andere Anwohner als
              störend empfunden werden, bitten wir Sie, sich bei uns zu melden.
              Wir sind offen für den Dialog und bereit, Anpassungen vorzunehmen,
              um sicherzustellen, dass das Projekt von niemandem als störend
              empfunden wird.
            </p>
            <p>Vielen Dank für Ihr Verständnis und Ihre Unterstützung.</p>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsCreditsOpen(!isCreditsOpen)}
        >
          Danksagung
          <span>{isCreditsOpen ? "-" : "+"}</span>
        </button>
        {isCreditsOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Wir möchten uns herzlich bei folgenden Unternehmen und Personen
              bedanken, die zum Bau unseres Wasserrads beigetragen haben:
            </p>
            <ul>
              <li>
                <a
                  href="https://schaettin-garten.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schättin Gartenbau GmbH
                </a>{" "}
                aus Wangen, vertreten durch Herrn Patrick Schättin, für das
                grosszügige Zurverfügungstellen der Werkstatt und von
                Materialien.
              </li>
              <li>
                Roman Egli aus Wangen, für die hervorragende Arbeit bei der
                Erstellung der 3D-Druckteile, die essentiell für die
                Funktionalität unseres Wasserrads sind.
              </li>
              <li>
                <a
                  href="https://elektro-spaeni.ch/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Späni Elektro-Mechanik AG
                </a>{" "}
                aus Altendorf, vertreten durch Herrn Ralph Kessler, hat den
                professionellen Druck des Stickers mit QR-Code übernommen, der
                zur Identifikation und Funktion unseres Projekts beiträgt.
              </li>
            </ul>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsMediaOpen(!isMediaOpen)}
        >
          Wasserrad im March-Anzeiger
          <span>{isMediaOpen ? "-" : "+"}</span>
        </button>
        {isMediaOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Ein Bericht über das Wasserrad wurde am Dienstag, 20. August 2024
              im March-Anzeiger veröffentlicht. Wenn Sie ein Abonnement
              besitzen, können Sie den Artikel jederzeit im E-Paper unter{" "}
              <a
                href="https://www.marchanzeiger.ch"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.marchanzeiger.ch
              </a>{" "}
              nachlesen.
            </p>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsSiebnenWebcamOpen(!isSiebnenWebcamOpen)}
        >
          Webcam Siebnen Mühlebachkanal
          <span>{isSiebnenWebcamOpen ? "-" : "+"}</span>
        </button>
        {isSiebnenWebcamOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Zusätzlich zum Sensor am Wasserrad, der anzeigt, ob der Bach
              Wasser führt (weitere Informationen hierzu finden Sie in der{" "}
              <HashLink to="/wasserrad/about#integrated-sensor">
                Projektbeschreibung
              </HashLink>
              ), gibt es auf dem Dach des Restaurants Krone in Siebnen eine
              Webcam. Diese zeigt das Wehr, das den Mühlebach mit Wasser speist.
              Ein Blick auf die Webseite{" "}
              <a
                href="https://www.siebnen-webcam.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.siebnen-webcam.ch
              </a>{" "}
              ermöglicht es, die aktuellen Wasserstände und die Steuerungen des
              Kanals live zu verfolgen.
            </p>
            {!isImageLoaded && <Preloader />}
            <figure>
              <img
                className="rounded-lg shadow w-full !mb-0"
                src="./2024-07-22_Siebnen_Webcam.jpg"
                onLoad={() => setImageLoaded(true)}
                style={{ display: isImageLoaded ? "block" : "none" }}
                alt="Webcam Siebnen mit Bild Abzweiger Mühlebachkanal"
              />
              <figcaption className="text-gray-400">
                Webcam Siebnen vom 22. Juli 2024 mit Abzweiger Mühlebachkanal
              </figcaption>
            </figure>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsMunicipalInfoOpen(!isMunicipalInfoOpen)}
        >
          Gemeinde Wangen Teilzonenplan Mühlebach
          <span>{isMunicipalInfoOpen ? "-" : "+"}</span>
        </button>
        {isMunicipalInfoOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Für politisch Interessierte bietet die Gemeinde Wangen
              Informationen zum Teilzonenplan Mühlebach, der die Zukunft des
              Mühlebachkanals betrifft.
            </p>
            <p>
              Derzeit prüft die Gemeinde zwei Optionen: die Sanierung zur
              Aufrechterhaltung des Kraftwerksbetriebs bis mindestens 2040 und
              die Möglichkeit der Kanalaufhebung. Ein endgültiger Beschluss
              steht noch aus. Ausserdem ist ein Strassenbauprojekt an der
              Mühlestrasse geplant, das mit dem Mühlebachkanal inhaltlich und
              räumlich verbunden ist und daher gemeinsam koordiniert werden
              muss.
            </p>
            <p>
              Quelle:{" "}
              <a
                href="./TZP_Aufhebung_Gewaesserraum_Muehlebachkanal_20200918.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teilzonenplan Aufhebung Gewässerraum Mühlebachkanal (PDF)
              </a>
            </p>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsEthPicsOpen(!isEthPicsOpen)}
        >
          Fotos ETH Archiv
          <span>{isEthPicsOpen ? "-" : "+"}</span>
        </button>
        {isEthPicsOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Nostalgiker können im Bildarchiv E-Pics der ETH Zürich historische
              Aufnahmen von Siebnen, einschliesslich des Kraftwerks und der
              Baumwollspinnerei Honegger (Alte Fabrik), entdecken. Besuchen Sie
              den folgenden Link, um mehr zu erfahren:
            </p>
            <p>
              <a
                href="https://ba.e-pics.ethz.ch/main/galleryview/qsr=Siebnen"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bildarchiv e-pics der ETH-Bibliothek
              </a>
            </p>
          </div>
        )}

        <button
          className="w-full py-2 px-4 mt-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsPrivacyOpen(!isPrivacyOpen)}
        >
          Datenschutz
          <span>{isPrivacyOpen ? "-" : "+"}</span>
        </button>
        {isPrivacyOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Um besser zu verstehen, wie viele Menschen unsere Webseite
              besuchen und Freude an unserem Projekt haben, verwenden wir Google
              Analytics, einen Webanalysedienst von Google. Zusätzlich nutzen
              wir Google Maps, um Ihnen den genauen Standort unseres
              Wasserradprojekts anzuzeigen.
            </p>
            <p>
              Bitte beachten Sie, dass Sie unsere Webseite auch nutzen können,
              wenn Sie die Verwendung von Google Analytics und Google Maps nicht
              wünschen. Sie haben die Möglichkeit, die Erfassung Ihrer Daten
              durch Google Analytics zu verhindern, indem Sie die entsprechenden
              Einstellungen in Ihrem Browser vornehmen. Wenn Sie die Übertragung
              von Standortdaten an Google Maps verhindern möchten, können Sie
              dies in den Einstellungen Ihres Geräts oder Browsers tun.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
