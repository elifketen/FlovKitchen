import RecipeCard from "../components/RecipeCard";
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
          <p>Recipes that support your body naturally</p>
          <button type="button">Explore</button>
        </div>
      </section>

      {/* FEATURED RECIPES */}
      <section>
        <header className="featured-recipes-header">
          <h2>Featured Recipes</h2>
          <button type="button">View All Recipes</button>
        </header>
        <div className="recipe-card-row">
          <RecipeCard
            slug="avocado-toast"
            title="Avocado Toast"
            meta="5 ingredients 10 min"
          />
          <RecipeCard
            slug="chia-pudding"
            title="Chia Pudding"
            meta="4 ingredients 5 min"
          />
          <RecipeCard
            slug="overnight-oats"
            title="Overnight Oats"
            meta="4 ingredients 3 min"
          />
          <RecipeCard
            slug="green-smoothie"
            title="Green Smoothie"
            meta="3 ingredients 3 min"
          />
        </div>
      </section>
      <Newsletter />
    </main>
  );
}
