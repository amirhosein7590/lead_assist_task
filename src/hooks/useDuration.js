export default function useDuration(duration) {
  if (!duration || isNaN(duration)) {
    return { minutes: 0, seconds: 0 };
  }

  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);

  return { minutes, seconds };
}
