function CategoryNav() {
  const categories = [
    "Photography",
    "Gaming",
    "Outdoor",
    "Entertainment",
  ];

  return (
    <nav className="sp-category-nav">

      <div className="sp-category-inner">

        {categories.map((category) => (
          <button
            key={category}
            className={`sp-category-item ${
              category === "Gaming"
                ? "active"
                : ""
            }`}
          >
            {category}
          </button>
        ))}

      </div>

    </nav>
  );
}

export default CategoryNav;