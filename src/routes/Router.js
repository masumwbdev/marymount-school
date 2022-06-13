import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Introduction from '../pages/Introduction/Introduction';
import Teachers from '../pages/Teachers/Teachers';
import Students from '../pages/Students/Students';
import Results from '../pages/Results/Results';
import Gallery from '../pages/Gallery/Gallery';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

const Router = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='introduction' element={<Introduction />} />
                <Route path='teachers' element={<Teachers />} />
                <Route path='students' element={<Students />} />
                <Route path='results' element={<Results />} />
                <Route path='gallery' element={<Gallery />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
};

export default Router;