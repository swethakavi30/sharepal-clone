import {
  Gamepad2,
  LayoutGrid,
  CircleDot,
  Monitor,
  Box,
  Glasses,
  Joystick,
  Disc3,
  Headphones,
} from "lucide-react";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  const categories = [
    {
      name: "All",
      icon: LayoutGrid,
    },
    {
      name: "GTA VI",
      icon: Gamepad2,
    },
    {
      name: "PS5 Console",
      icon: Monitor,
    },
    {
      name: "Xbox Console",
      icon: Box,
    },
    {
      name: "VR",
      icon: Glasses,
    },
    {
      name: "Gaming Controllers",
      icon: Joystick,
    },
    {
      name: "PS Games",
      icon: Disc3,
    },
    {
      name: "Gaming Accessories",
      icon: Headphones,
    },
    {
      name: "Other Gaming",
      icon: CircleDot,
    },
  ];

  return (
    <aside className="sidebar">

      {/* SIDEBAR TITLE */}
      <div className="sidebar-heading">
        <Gamepad2 size={20} />
        <span>Gaming</span>
      </div>

      {/* CATEGORY LIST */}
      <div className="sidebar-list">

        {categories.map((category) => {
          const Icon = category.icon;

          const isActive =
            selectedCategory === category.name;

          return (
            <button
              key={category.name}
              className={`sidebar-item ${
                isActive ? "active" : ""
              }`}
              onClick={() =>
                setSelectedCategory(category.name)
              }
            >
              <span className="sidebar-item-icon">
                <Icon size={18} strokeWidth={1.8} />
              </span>

              <span className="sidebar-item-name">
                {category.name}
              </span>

              {isActive && (
                <span className="sidebar-active-line"></span>
              )}
            </button>
          );
        })}

      </div>

    </aside>
  );
}

export default Sidebar;