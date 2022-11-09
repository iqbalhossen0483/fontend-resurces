import { AnimatePresence, motion } from "framer-motion";
import { FaBars, FaHome, FaLock, FaTag, FaUser } from "react-icons/fa";
import React from "react";
import SidebarMenu from "./SidebarMenu";
import { NavLink } from "react-router-dom";

const routes = [
  {
    path: "/",
    name: "home",
    icon: <FaHome />,
  },
  {
    path: "/login",
    name: "Login",
    icon: <FaUser />,
    subRoutes: [
      {
        path: "/login",
        name: "Login ",
        icon: <FaLock />,
      },
      {
        path: "/register",
        name: "Register ",
        icon: <FaLock />,
      },
    ],
  },
  {
    path: "/editor",
    name: "Editor",
    icon: <FaTag />,
  },
];

const SideBar = ({ isOpen, setIsOpen }) => {
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };
  const toggle = () => setIsOpen(!isOpen);

  return (
    <motion.div
      className='sidebar'
      animate={{
        width: isOpen ? "200px" : "57px",
        transition: {
          duration: 0.5,
          type: "spring",
          damping: 10,
        },
      }}
    >
      <div className='top_section'>
        {isOpen && (
          <AnimatePresence>
            <motion.h1 className='admin-logo'>MD IQBAL</motion.h1>
          </AnimatePresence>
        )}

        <div className='text-xl cursor-pointer'>
          <FaBars onClick={toggle} />
        </div>
      </div>
      <section className='menus-wrapper'>
        {routes.map((route, index) => {
          if (route.subRoutes) {
            return (
              <SidebarMenu
                key={index}
                setIsOpen={setIsOpen}
                route={route}
                showAnimation={showAnimation}
                isOpen={isOpen}
              />
            );
          }

          return (
            <NavLink to={route.path} key={index} className='link'>
              <div className='icon'>{route.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    className='link_text'
                  >
                    {route.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          );
        })}
      </section>
    </motion.div>
  );
};

export default SideBar;
