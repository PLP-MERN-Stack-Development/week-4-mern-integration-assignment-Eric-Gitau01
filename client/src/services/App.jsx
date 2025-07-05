import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PostForm from './pages/PostForm';
import SinglePost from './pages/SinglePost';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<SinglePost />} />
        <Route path="/create" element={<PostForm />} />
      </Routes>
    </Router>
  );
}
