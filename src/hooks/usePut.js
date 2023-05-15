import React,{useState} from "react";
function usePut(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const putData = async (data) => {
      setLoading(true);
      try {
        const res = await fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data),
          credentials:'include' // this line is to inclute de cookies in the back
        });
        if (!res.ok) {
          setError("Failed to update");
          return;
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    return {
      data,
      error,
      loading,
      putData
    };
  }
  export default usePut;
