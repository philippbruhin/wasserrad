import Maps from "../components/Maps/Maps";

export default function Location() {
  return (
    <div className="prose max-w-none sm:prose-sm  md:prose-md lg:prose-lg xl:prose-xl">
      <h1>Standort des Wasserrades</h1>
      <hr />
      <p>
        Falls Sie das Wasserrad nicht vor Ort erkundet haben, laden wir Sie
        herzlich ein, dies bei Ihrem nächsten Spaziergang zu tun. Das Wasserrad
        findet man an der{" "}
        <a href="https://maps.app.goo.gl/KiN5u6c2z8u8aiGi8" target="_blank">
          Mühlestrasse 27 in Siebnen
        </a>
        , direkt gegenüber dem Restaurant Falken.
      </p>
      <div className="not-prose">
        <Maps />
      </div>
    </div>
  );
}
