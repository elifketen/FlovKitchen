import Newsletter from "../components/Newsletter";
export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <figure className="container hero-image">
          <img src="https://picsum.photos/1080" alt="Random placeholder" />
        </figure>
        <div className="container hero-text">
          <h1>Healthy Recipes</h1>
          <h2>Recipes that support your body naturally</h2>
          <button type="button">Explore</button>
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
