import { motion } from "framer-motion";
import MainLayoutComponent from './components/MainLayout';
import './App.css';

function App() {
  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 10 }}
      transition={{ duration: 3, ease: "easeOut" }}
    >
      <MainLayoutComponent />
    </motion.div>
  );
}

export default App;
