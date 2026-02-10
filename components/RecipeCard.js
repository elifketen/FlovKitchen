import Link from "next/link";

export default function RecipeCard({ slug, title, meta }) {
  return (
    <Link href={`/recipes/${slug}`}>
      <div className="recipe-card">
        <figure className="recipe-card-image">
          <img src="https://picsum.photos/1080" alt={title} />
        </figure>

        <div className="recipe-card-text">
          <h3>{title}</h3>
          <p>{meta}</p>
        </div>
      </div>
    </Link>
  );
}
