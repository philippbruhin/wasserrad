import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Preloader from "../Preloader/Preloader";

const mapContainerStyle = {
  height: "28rem",
};

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(
    () => ({
      lat: 47.181384774110185,
      lng: 8.89008758660158,
    }),
    []
  );

  const options = {
    mapTypeId: 'satellite'
  };

  if (loadError) {
    return (
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between p-4 rounded-md bg-red-50 border border-red-300">
          <div className="flex gap-3">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="self-center">
              <span className="text-red-600 font-medium">
                Fehler
              </span>
              <div className="text-red-600">
                <p className="mt-2 sm:text-sm">
                  Google Maps konnte nicht geladen werden. Bitte versuchen Sie es erneut indem Sie die Seite neu laden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <div className="shadow w-full">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={18}
        options={options}
        center={center}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};

export default Maps;
