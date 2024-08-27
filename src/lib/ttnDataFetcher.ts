import axios from "axios";

export type SensorData = {
  entries: Entry[];
};

export type Entry = {
  result: Result;
};

export type Result = {
  end_device_ids: EndDeviceIDS;
  received_at: Date;
  uplink_message: UplinkMessage;
};

export type EndDeviceIDS = {
  device_id: string;
};

export type UplinkMessage = {
  decoded_payload: DecodedPayload;
  received_at: Date;
};

export type DecodedPayload = {
  ADC_CH0V: number;
  BatV: number;
  Count: number;
  Digital_IStatus: string;
  TempC1: string;
  Work_mode: string;
};

export async function ttnDataFetcher() {
  try {
    const type = "uplink_normalized";
    const response = await axios.get(
      `${import.meta.env.VITE_TTN_API_URL}/api/v3/as/applications/` +
        `${import.meta.env.VITE_TTN_APP_ID}/devices/` +
        `${import.meta.env.VITE_TTN_DEVICE_ID}/packages/storage/${type}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TTN_API_KEY}`,
          Accept: "text/event-stream",
        },
        params: {
          f_port: 2,
          order: "-received_at",
          field_mask: "up.uplink_message.decoded_payload",
          limit: 1000, // Should be 1008 for 7 days of data but TTN only allows 1000.
        },
      }
    );

    const jsonStringsArray: string[] = response.data
      .trim()
      .split("\n\n") // Assuming each JSON object is on a new line
      .reverse(); // Reverse the since fetch is -received_at

    const sensorData: SensorData = {
      entries: [],
    };

    jsonStringsArray.forEach((jsonString: string) => {
      try {
        const jsonObject: Result = JSON.parse(jsonString).result;
        const sensorDataEntry: Entry = {
          result: jsonObject,
        };
        sensorData.entries.push(sensorDataEntry);
      } catch (error) {
        throw new Error(`Error parsing JSON: ${error}`);
      }
    });

    return sensorData;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}
