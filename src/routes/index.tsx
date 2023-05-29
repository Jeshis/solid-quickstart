import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Jesis</Title>
      <h1>Hello Intruders!</h1>
      <Counter />
      <p>
        Click Here =>{" "}
        <a href="https://youtu.be/Yja4X8ldoOc" target="_blank">
          Music
        </a>{" "}
        to listen songs.
      </p>
    </main>
  );
}
