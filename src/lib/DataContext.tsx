import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { SensorData } from "../lib/ttnDataFetcher";
import { ttnDataFetcher } from "../lib/ttnDataFetcher";

// Define the shape of your data
type DataContextType ={
  data: SensorData;
  isTtnLoaded: boolean;
}

// Create the context with a default value
const DataContext = createContext<DataContextType | undefined>(undefined);

// Create a provider component
export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SensorData>({ entries: [] });
  const [isTtnLoaded, setisTtnLoaded] = useState<boolean>(false);

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
    <DataContext.Provider value={{ data, isTtnLoaded }}>
      {children}
    </DataContext.Provider>
  );
};

// Create a custom hook to use the DataContext
// eslint-disable-next-line react-refresh/only-export-components
export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};