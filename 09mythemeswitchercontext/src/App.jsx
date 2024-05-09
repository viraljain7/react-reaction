import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import ThemeProvider from "./context/ThemeContextProvider";

const App = () => {



  return (
    <ThemeProvider >
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-contain p-4 bg-slate-400 m-auto border rounded-md ">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
