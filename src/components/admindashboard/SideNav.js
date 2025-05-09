import { useState, useEffect } from "react";
import logo from "./oga4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSidebar } from "./SidebarProvider";
import "./side.css";
import {
  FiHome,
  FiCreditCard,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiBookOpen,
  FiChevronDown,
} from "react-icons/fi";
import { MdPermMedia } from "react-icons/md";
import { useLocation } from "react-router-dom"; // Import useLocation

const SideNav = () => {
  const [openSubmenus, setOpenSubmenus] = useState(new Set());
  const { isSidebarOpen } = useSidebar();
  const toggleSubmenu = (index) => {
    const updatedSubmenus = new Set(openSubmenus);
    if (updatedSubmenus.has(index)) {
      updatedSubmenus.delete(index);
    } else {
      updatedSubmenus.add(index);
    }
    setOpenSubmenus(updatedSubmenus);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const [categories, setCategories] = useState([]);
  const [parentCategories, setParentCategories] = useState([]);

  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/categories`);
        const allCategories = res.data;
        setCategories(allCategories);
        const parents = allCategories.filter(
          (cat) => !cat.parent || cat.parent === null
        );
        setParentCategories(parents);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <div className="main-wrapper">
      <div
        className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}
        id="sidebar"
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul>
              <li className="submenu-open">
                <ul>
                  <li className="submenu">
                    <a
                      href="/home"
                      className={`${
                        openSubmenus.has(0) ? "subdrop active" : ""
                      } ${isActive("/home") ? "active-menu" : ""}`.trim()}
                      style={{
                        backgroundColor: isActive("/home")
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiHome
                        size={20}
                        color={isActive("/home") ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: isActive("/home") ? "white" : "black",
                        }}
                      >
                        Dashboard
                      </span>
                    </a>
                  </li>

                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(1);
                      }}
                      className={`${
                        openSubmenus.has(1) ? "subdrop active" : ""
                      }`.trim()}
                      style={{
                        backgroundColor: openSubmenus.has(1)
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiBookOpen
                        size={20}
                        color={openSubmenus.has(1) ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: openSubmenus.has(1) ? "white" : "black",
                        }}
                      >
                        Bible
                      </span>
                      <FiChevronDown
                        style={{
                          marginLeft: "auto",
                          transform: openSubmenus.has(1)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </a>
                    {openSubmenus.has(1) && (
                      <ul className="submenu-list">
                        <li>
                          <a href="/bible/kjv">KJV (King James Version)</a>
                        </li>
                        <li>
                          <a href="/bible/nkjv">NKJV</a>
                        </li>
                        <li>
                          <a href="/bible/nlt">NLT</a>
                        </li>
                        <li>
                          <a href="/bible/revised-standard">Revised Standard</a>
                        </li>
                        <li>
                          <a href="/bible/all-translations">All Translations</a>
                        </li>
                        <li>
                          <a href="/books/devotional">Devotional Bible</a>
                        </li>
                        <li>
                          <a href="/bible/storybook">Story Book Bible</a>
                        </li>
                        <li>
                          <a href="/bible/journal">Journal</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(2);
                      }}
                      className={`${
                        openSubmenus.has(2) ? "subdrop active" : ""
                      }`.trim()}
                      style={{
                        backgroundColor: openSubmenus.has(2)
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiBookOpen
                        size={20}
                        color={openSubmenus.has(2) ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: openSubmenus.has(2) ? "white" : "black",
                        }}
                      >
                        Books
                      </span>
                      <FiChevronDown
                        style={{
                          marginLeft: "auto",
                          transform: openSubmenus.has(2)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </a>
                    {openSubmenus.has(2) && (
                      <ul className="submenu-list">
                        <li>
                          <a href="/books/fiction">Transformation books</a>
                        </li>
                        <li>
                          <a href="/books/devotional">Devotional</a>
                        </li>
                        <li>
                          <a href="/books/biography">Journals</a>
                        </li>
                        <li>
                          <a href="/books/science">E-books</a>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="submenu">
                    <a href="/digital">
                      <MdPermMedia
                        size={20}
                        color={isActive("/digital") ? "black" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: isActive("/digital") ? "black" : "black",
                        }}
                      >
                        Digital Media
                      </span>
                    </a>
                  </li>

                  {/*} <li className="submenu">
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(3);
                      }}
                      className={`${
                        openSubmenus.has(3) ? "subdrop active" : ""
                      }`.trim()}
                      style={{
                        backgroundColor: openSubmenus.has(3)
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiBookOpen
                        size={20}
                        color={openSubmenus.has(3) ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: openSubmenus.has(3) ? "white" : "black",
                        }}
                      >
                        Digital Media
                      </span>
                      <FiChevronDown
                        style={{
                          marginLeft: "auto",
                          transform: openSubmenus.has(3)
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        }}
                      />
                    </a>
                    {openSubmenus.has(3) && (
                      <ul className="submenu-list">
                        <li>
                          <a href="/bible/kjv">KJV (King James Version)</a>
                        </li>
                        <li>
                          <a href="/bible/nkjv">NKJV</a>
                        </li>
                        <li>
                          <a href="/bible/nlt">NLT</a>
                        </li>
                        <li>
                          <a href="/bible/revised-standard">Revised Standard</a>
                        </li>
                        <li>
                          <a href="/bible/all-translations">All Translations</a>
                        </li>
                        <li>
                          <a href="/books/devotional">Devotional Bible</a>
                        </li>
                        <li>
                          <a href="/bible/storybook">Story Book Bible</a>
                        </li>
                        <li>
                          <a href="/bible/journal">Journal</a>
                        </li>
                      </ul>
                    )}
                  </li>*/}

                  <li className="submenu">
                    <a
                      href="/community"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(5);
                      }}
                      className={`${
                        openSubmenus.has(5) ? "subdrop active" : ""
                      } ${isActive("/community") ? "active-menu" : ""}`.trim()}
                      style={{
                        backgroundColor: isActive("/community")
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiUsers
                        size={20}
                        color={isActive("/community") ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: isActive("/community") ? "white" : "black",
                        }}
                      >
                        Community
                      </span>
                    </a>
                  </li>

                  {/* Settings */}
                  <li className="submenu">
                    <a
                      href="/settings"
                      onClick={(e) => {
                        e.preventDefault();
                        toggleSubmenu(3);
                      }}
                      className={`${
                        openSubmenus.has(3) ? "subdrop active" : ""
                      } ${isActive("/settings") ? "active-menu" : ""}`.trim()}
                      style={{
                        backgroundColor: isActive("/settings")
                          ? "#800080"
                          : "transparent",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <FiSettings
                        size={20}
                        color={isActive("/settings") ? "white" : "black"}
                      />
                      <span
                        style={{
                          fontSize: "18px",
                          color: isActive("/settings") ? "white" : "black",
                        }}
                      >
                        Settings
                      </span>
                    </a>
                  </li>
                  <li className="submenu">
                    <a href="#">
                      <FiLogOut size={20} color="black" />
                      <span style={{ fontSize: "18px", color: "black" }}>
                        Logout
                      </span>
                    </a>
                  </li>

                  {parentCategories.map((cat, index) => {
                    const isOpen = openSubmenus.has(100 + index);
                    return (
                      <li className="submenu" key={cat._id}>
                        <div
                          className={`${isOpen ? "subdrop active" : ""}`}
                          style={{
                            backgroundColor: isOpen ? "#800080" : "transparent",
                            borderRadius: "5px",
                            padding: "10px",
                            display: "flex",
                            alignItems: "center",
                            cursor: "pointer",
                          }}
                        >
                          <FiBookOpen
                            size={20}
                            color={isOpen ? "white" : "black"}
                          />

                          {/* This is now a real Link that goes to the category page */}
                          <Link
                            to={`/category/${cat._id}`}
                            style={{
                              fontSize: "18px",
                              color: isOpen ? "white" : "black",
                              marginLeft: "10px",
                              textDecoration: "none",
                              flexGrow: 1,
                            }}
                          >
                            {cat.name}
                          </Link>

                          {/* Toggle submenu only when there's a child category */}
                          {categories.some((sub) => sub.parent === cat._id) && (
                            <FiChevronDown
                              style={{
                                marginLeft: "auto",
                                transform: isOpen
                                  ? "rotate(180deg)"
                                  : "rotate(0deg)",
                                transition: "transform 0.2s",
                              }}
                              onClick={() => toggleSubmenu(100 + index)}
                            />
                          )}
                        </div>

                        {isOpen && (
                          <ul className="submenu-list">
                            {categories
                              .filter((sub) => sub.parent === cat._id)
                              .map((sub) => (
                                <li key={sub._id}>
                                  <Link to={`/category/${sub._id}`}>
                                    {sub.name}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="sidebar-overlay" data-reff="#sidebar"></div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="bottom-nav mobile-only">
        <ul className="nav">
          <li className="nav-item">
            <a href="/home">
              <FiHome size={20} />
              <span>Home</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="/bible">
              <FiBookOpen size={20} />
              <span>Bible</span>
            </a>
          </li>
          {/*} <li className="nav-item">
            <a href="/booklist">
              <FiBookOpen size={20} />
              <span>Books</span>
            </a>
          </li>*/}

          {parentCategories.map((cat, index) => {
            const isOpen = openSubmenus.has(100 + index);
            return (
              <li className="nav-item" key={cat._id}>
                <div
                  className={`nav-link ${isOpen ? "subdrop active" : ""}`}
                  style={{
                    backgroundColor: isOpen ? "#800080" : "transparent",
                    borderRadius: "5px",
                    padding: "10px",
                    display: "flex",
                    flexDirection: "column", // 👈 vertical layout
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <FiBookOpen size={24} color={isOpen ? "white" : "black"} />

                  <Link
                    to={`/category/${cat._id}`}
                    style={{
                      fontSize: "14px",
                      color: isOpen ? "white" : "black",
                      marginTop: "6px", // 👈 spacing below icon
                      textDecoration: "none",
                    }}
                  >
                    {cat.name}
                  </Link>

                  {categories.some((sub) => sub.parent === cat._id) && (
                    <FiChevronDown
                      style={{
                        marginTop: "4px",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.2s",
                        color: isOpen ? "white" : "black",
                      }}
                      onClick={() => toggleSubmenu(100 + index)}
                    />
                  )}
                </div>

                {isOpen && (
                  <ul className="submenu-list text-center">
                    {categories
                      .filter((sub) => sub.parent === cat._id)
                      .map((sub) => (
                        <li key={sub._id}>
                          <Link
                            to={`/category/${sub._id}`}
                            className="text-sm text-gray-700 hover:text-purple-700 block py-1"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Add any additional scripts or components here */}
    </div>
  );
};

export default SideNav;
