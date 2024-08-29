import { Footer, Header, Main, Sidenav } from "./components";

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidenav />
      <div className="flex-1 flex flex-col transition-all duration-300 ease-in-out">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
