import { motion } from "framer-motion";
import { useState } from "react";
import SideBar from "./components/SideBar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div
        className='admin-header'
        animate={{
          paddingLeft: isOpen ? "220px" : "70px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
      >
        header
      </motion.div>
      <main className='dashboard'>{children}</main>
    </div>
  );
};

export default Layout;
