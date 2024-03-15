const tg = window.Telegram.WebApp;

export function useTelegram() {
  const handleClose = () => {
    tg.close();
  };

  const handleToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  };

  return {
    handleClose,
    handleToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  };
}
