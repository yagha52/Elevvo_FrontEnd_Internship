// Router Hook
import { useState } from "react";
const useRouter = () => {
  const [currentPage, setCurrentPage] = useState('overview');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  return { currentPage, navigate };
};

export default useRouter;