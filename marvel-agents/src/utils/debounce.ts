type DebounceFunction = (...args: unknown[]) => void;

export function debounce(func: DebounceFunction, delay: number): DebounceFunction {
  let timerId: ReturnType<typeof setTimeout> | null;

  return function (...args: unknown[]) {
    clearTimeout(timerId as ReturnType<typeof setTimeout>);
    timerId = setTimeout(() => func(...args), delay);
  };
}