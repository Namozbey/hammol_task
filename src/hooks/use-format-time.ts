import { useMemo } from "react";

export default function useFormatTime(runtime = 0) {
  const formattedData = useMemo(() => {
    const hour = Math.floor(runtime / 60);
    const min = runtime % 60;

    return `${hour}h ${min}min`;
  }, [runtime]);

  return formattedData;
}
