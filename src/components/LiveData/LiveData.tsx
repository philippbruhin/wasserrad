import { HashLink } from "react-router-hash-link";
import { useData } from "../../lib/DataContext";

function LiveData() {
  const { data } = useData();
  let isCountIncreasingByMoreThanSix = false;
  
  // Check if data has at least two entries
  if (data.entries.length >= 2) {
    const lastEntry = data.entries[data.entries.length - 1];
    const secondLastEntry = data.entries[data.entries.length - 2];

    const lastCount = lastEntry.result.uplink_message.decoded_payload.Count;
    const secondLastCount =
      secondLastEntry.result.uplink_message.decoded_payload.Count;

    const lastTime = new Date(lastEntry.result.uplink_message.received_at);
    const secondLastTime = new Date(
      secondLastEntry.result.uplink_message.received_at
    );

    const timeDifference =
      (lastTime.getTime() - secondLastTime.getTime()) / 60000; // in minutes
    const countDifferencePerMinute =
      (lastCount - secondLastCount) / timeDifference;

    isCountIncreasingByMoreThanSix = countDifferencePerMinute > 6;
  }

  return (
    <HashLink
      to="/wasserrad/about#integrated-sensor"
      className={`text-xs font-medium pl-1.5 pr-2.5 py-1 mb-8 md:mb-0 rounded-full inline-flex items-center justify-center ${
        isCountIncreasingByMoreThanSix ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
      }`}
    >
      <span className="relative flex h-3 w-3 mr-2">
        {isCountIncreasingByMoreThanSix && (
          <span
            className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-800 opacity-75"
          ></span>
        )}
        <span className={`relative inline-flex rounded-full h-3 w-3 ${
          isCountIncreasingByMoreThanSix ? 'bg-green-800' : 'bg-yellow-800'
        }`}></span>
      </span>
      {isCountIncreasingByMoreThanSix ? 'Wasserrad läuft. Mehr erfahren...' : 'Wasserrad läuft derzeit nicht. Mehr erfahren...'}
    </HashLink>
  );
}

export default LiveData;
