const Sidenav: React.FC = () => {
  return (
    <nav className="w-64 bg-gray-200 p-4">
      <h2 className="text-xl font-semibold mb-4">Sidenav</h2>
      <ul>
        <li><a href="#home" className="block py-2 px-4 hover:bg-gray-300">Home</a></li>
        <li><a href="#about" className="block py-2 px-4 hover:bg-gray-300">About</a></li>
        <li><a href="#services" className="block py-2 px-4 hover:bg-gray-300">Services</a></li>
        <li><a href="#contact" className="block py-2 px-4 hover:bg-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export { Sidenav };
