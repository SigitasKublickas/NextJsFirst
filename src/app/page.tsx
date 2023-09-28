import Feed from "@components/feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">Discover and share</h1>
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center">Ai-Powered Prompts</span>
      <p className="desc text-center">
        Protopia is an open-source AIprompting Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Fuga, iure quia. Eum ullam quae veritatis
        adipisci, accusantium suscipit! Accusamus, animi est illo obcaecati
        laudantium quasi cupiditate fugiat pariatur nulla iusto assumenda
        molestiae numquam quibusdam unde dolorem! Consequuntur rerum, rem
        doloremque illo tempora officiis facere sapiente autem nulla?
      </p>
      <Feed />
    </section>
  );
}
