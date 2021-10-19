import { useEffect, useState } from "react";

const useServices = () => {
  // Services to be rendered on the UI
  const [services, SetServices] = useState([]);
  useEffect(() => {
    fetch("/fakedata.json")
      .then((res) => res.json())
      .then((data) => SetServices(data));
  }, []);
  return {
    services,
    SetServices,
  };
};

export default useServices;
