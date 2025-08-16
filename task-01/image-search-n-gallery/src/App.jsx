import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };

  return (
    <div>
      <Header />
      <div className="mt-4">
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div>
        <ImageList images={images} />
      </div>
    </div>
  );
}

export default App;
