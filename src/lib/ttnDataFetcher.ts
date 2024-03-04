import axios from 'axios';

export type SensorData = {
  result: Result[];
};

export type Result = {
  end_device_ids: EndDeviceIds;
  received_at: string;
  uplink_message: UplinkMessage;
}

export type EndDeviceIds = {
  device_id: string;
}

export type UplinkMessage = {
  decoded_payload: DecodedPayload;
  received_at: string;
}

export type DecodedPayload = {
  ADC_CH0V: number;
  BatV: number;
  Count: number;
  Digital_IStatus: string;
  TempC1: string;
  Work_mode: string;
}

export async function ttnDataFetcher() {
  try {
    const type = 'uplink_normalized';
    const response = await axios.get(
      `${import.meta.env.VITE_TTN_API_URL}/api/v3/as/applications/` +
      `${import.meta.env.VITE_TTN_APP_ID}/devices/` + 
      `${import.meta.env.VITE_TTN_DEVICE_ID}/packages/storage/${type}`, {
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_TTN_API_KEY}`,
          'Accept': 'text/event-stream',
        },
        params: {
          'f_port': 2,
          'field_mask': 'up.uplink_message.decoded_payload',
          'after': '2020-08-20T00:00:00Z'
        }
    });

    const jsonStringsArray: string[] = response.data.trim().split('\n\n'); // Assuming each JSON object is on a new line

    const sensorData: SensorData = {
      result: [],
    };
    
    jsonStringsArray.forEach((jsonString: string) => {
      try {
        const jsonObject: Result = JSON.parse(jsonString);
        sensorData.result.push(jsonObject);
      } catch (error) {
        throw new Error(`Error parsing JSON: ${error}`);
      }
    });

    return sensorData;
  } catch (error) {
    throw new Error(`Error fetching data: ${error}`);
  }
}