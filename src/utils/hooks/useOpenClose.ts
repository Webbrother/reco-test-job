import { useCallback, useState } from 'react';

export const useOpenClose = () => {
  const [visible, setVisible] = useState(false);

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  return {
    visible,
    open,
    close,
  };
};
