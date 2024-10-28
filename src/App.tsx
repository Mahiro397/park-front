
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}

export default App
