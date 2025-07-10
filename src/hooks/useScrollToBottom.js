
import { useEffect } from 'react';

export const useScrollToBottom = (ref, deps=[]) => {
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, deps); // eslint-disable-line
};
