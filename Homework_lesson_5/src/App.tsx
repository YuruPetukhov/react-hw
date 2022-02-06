import {Routes, Route, Link} from 'react-router-dom';
import {Homepage} from "./Homepage";
import {Aboutpage} from "./Aboutpage";
import {Blogpage} from "./Blogpage";
import {Notfoundpage} from "./Notfoundpage";
import './index.css';

 function App() {
    return (
        <>
        <main>
        <header>
         <Link to='/'>Home</Link>
         <Link to= '/posts'>Blog</Link>
         <Link to= '/about'>About</Link>
        </header>
         <Routes>
             <Route path='/' element={<Homepage />} />
             <Route path='/about' element={<Aboutpage />} />
             <Route path='/posts' element={<Blogpage />} />
             <Route path='*' element={<Notfoundpage />} />
         </Routes>
         <footer>This is footer</footer>
         </main>
        </>
           
    );
}

export default App;