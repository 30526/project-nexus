import { useEffect, useState } from "react";
import axios from "axios";

const useCourseData = () => {
  const [courseData, setCourseData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("../courseData.json")
      .then((data) => setCourseData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return [courseData, error, loading];
};

export default useCourseData;
