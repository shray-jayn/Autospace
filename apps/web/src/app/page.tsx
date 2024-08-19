import { add } from "@autospace/sample-lib";

export default function Home() {
  return (
    <main>
      Hello {add({ a: 342, b: 12 })}
    </main>
  );
}
