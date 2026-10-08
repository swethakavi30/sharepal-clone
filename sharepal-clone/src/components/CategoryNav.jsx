import {
  Camera,
  Gamepad2,
  TentTree,
  PartyPopper,
} from "lucide-react";

function CategoryNav() {
  const categories = [
    {
      name: "Photography",
      icon: Camera,
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      active: true,
    },
    {
      name: "Outdoor",
      icon: TentTree,
    },
    {
      name: "Entertainment",
      icon: PartyPopper,
    },
  ];

  return (
    <nav className="category-nav">
      <div className="category-nav-inner">

        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <button
              key={category.name}
              className={`category-nav-item ${
                category.active ? "active" : ""
              }`}
            >
              <Icon size={20} strokeWidth={1.8} />

              <span>{category.name}</span>
            </button>
          );
        })}

      </div>
    </nav>
  );
}

export default CategoryNav;