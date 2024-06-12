import { useState } from "react";
import MainHeader from "./components/MainHeader/MainHeader";

import PostsList from "./components/PostsList/PostsList";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <MainHeader onCreatePost={toggleModal} />
      <main>
        <PostsList closeModal={toggleModal} isPosting={isModalOpen} />
      </main>
    </>
  );
}

export default App;
