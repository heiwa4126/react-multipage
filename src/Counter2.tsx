import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const counter = atomWithStorage("Counter2", 0);

export function Counter2() {
	const [count, setCount] = useAtom(counter);
	return (
		<button type="button" onClick={() => setCount((count) => count + 1)}>
			count is {count}
		</button>
	);
}
