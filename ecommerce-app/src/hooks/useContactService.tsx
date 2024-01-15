import { useState, useCallback } from 'react';

interface DataProps {
  ok: boolean;
  status: number;
}
interface ErrorProps {
  message: string | undefined;
}

const initialData = {
  ok: false,
  status: 503,
};
const initialError = {
  message: '',
};
const formspree_url = 'https://formspree.io/f/xdovlonj';

export const useContactService = () => {
  const [data, setData] = useState<DataProps>(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorProps>(initialError);

  const fetchData = async (formdata: { email: string }) => {
    setLoading(true);
    try {
      const response: Response = await fetch(formspree_url, {
        cache: 'no-cache',
        method: 'POST',
        body: JSON.stringify(formdata),
        headers: {
          'content-type': 'application/json',
        },
      });

      if (!response.ok) throw new Error(response.statusText);

      const responseData = await response.json();

      setData({ ...data, ok: response.ok, status: response.status });
    } catch (err) {
      setError({ ...error, message: (err as Error).message });
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};
