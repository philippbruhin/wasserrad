import { useState } from "react";

export default function Contact() {
  const [isClocksOpen, setIsClocksOpen] = useState(false);
  const [isMunicipalInfoOpen, setIsMunicipalInfoOpen] = useState(false);
  const [isEthPicsOpen, setIsEthPicsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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
      </p>
      <p>
        <a href="mailto:info%40philippbruhin.ch">info@philippbruhin.ch</a>
      </p>
      <div className="w-full mx-auto">
        <button
          className="w-full py-2 px-4 text-left rounded-t-lg flex justify-between items-center bg-gray-200 hover:bg-gray-300"
          onClick={() => setIsClocksOpen(!isClocksOpen)}
        >
          Hinweis zu den Glocken
          <span>{isClocksOpen ? "-" : "+"}</span>
        </button>
        {isClocksOpen && (
          <div className="border px-4 rounded-b-lg">
            <p>
              Das Wasserrad ist mit zwei Glocken (Swissmade, gekauft bei{" "}
              <a href="https://www.glocken-emil.ch/" target="_blank">
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
                href="./contact/TZP_Aufhebung_Gewaesserraum_Muehlebachkanal_20200918.pdf"
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
              Baumwollspinnerei Honegger (Alte Fabrik), entdecken. Besuchen Sie den folgenden
              Link, um mehr zu erfahren:
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
