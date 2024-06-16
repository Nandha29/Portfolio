import "./App.css";

function App() {
  const toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center theme">
      <h1 className="font-bold text-mainHeading">
        Welcome to My Portfolio Website 🚀
      </h1>
      <p className="text-subHeading mt-4">
        Here you can find all the information about me and my projects.
      </p>
      <button onClick={toggleTheme} className="mt-4 px-4 py-2 rounded-md theme">
        Toggle Theme
      </button>
    </div>
  );
}

export default App;
