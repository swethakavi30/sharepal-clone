import {
  Grid2X2,
  Gamepad2,
  Glasses,
  CircleDot,
  Joystick,
  Disc3,
  Headphones,
  MoreHorizontal,
} from "lucide-react";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    {
      name: "All",
      icon: <Grid2X2 size={25} />,
    },
    {
      name: "GTA VI",
      image: "/categories/gta.png",
    },
    {
      name: "PS5 Console",
      image: "/categories/ps5.png",
    },
    {
      name: "Xbox Console",
      icon: <Gamepad2 size={27} />,
    },
    {
      name: "VR",
      icon: <Glasses size={27} />,
    },
    {
      name: "Gaming Controllers",
      icon: <Joystick size={27} />,
    },
    {
      name: "PS Games",
      icon: <Disc3 size={27} />,
    },
    {
      name: "Gaming Accessories",
      icon: <Headphones size={27} />,
    },
    {
      name: "Other Gaming",
      icon: <MoreHorizontal size={27} />,
    },
  ];

  return (
    <aside className="sp-sidebar">

      {categories.map((category) => {
        const active =
          selectedCategory === category.name;

        return (
          <button
            key={category.name}
            className={`sp-sidebar-item ${
              active ? "active" : ""
            }`}
            onClick={() =>
              setSelectedCategory(category.name)
            }
          >

            <div className="sp-sidebar-icon">

              {category.image ? (
                <img
                  src={category.image}
                  alt={category.name}
                />
              ) : (
                category.icon
              )}

            </div>

            <span>{category.name}</span>

          </button>
        );
      })}

    </aside>
  );
}

export default Sidebar;