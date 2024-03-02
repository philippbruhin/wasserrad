import axios from 'axios';

type UplinkMessage = {
  decoded_payload: {
    ADC_CH0V: number;
    BatV: number;
    Count: number;
    Digital_IStatus: string;
    TempC1: string;
    Work_mode: string;
  };
  received_at: string;
}

export type Result = {
  end_device_ids: {
    device_id: string;
  };
  received_at: string;
  uplink_message: UplinkMessage;
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

    const results: Result[] = [];
    
    jsonStringsArray.forEach((jsonString: string) => {
      try {
        const jsonObject: Result = JSON.parse(jsonString);
        results.push(jsonObject);
      } catch (error) {
        console.error('Error parsing JSON:', error);
        console.log('JSON string causing the issue:', jsonString);
        return [];
      }
    });

    return results;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    return [];
  }
}