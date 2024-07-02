import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header';
import Index from './component/index';
import Comic from './component/comic';
import It from './component/it';
import Contact from './component/contact';
import Blog from './component/blog'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/it" element={<It />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
