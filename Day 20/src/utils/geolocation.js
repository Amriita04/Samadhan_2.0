export const getUserLocation = (onSuccess, onError) => {
  if (!navigator.geolocation) {
    onError("Geolocation not supported.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;
      onSuccess(latitude, longitude);
    },
    () => onError("Location access denied.")
  );
};
