import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ScrollToTop from './Pages/ScrollToTop';

const Home = React.lazy(() => import('./Pages/Home'));
const Projects = React.lazy(() => import('./Pages/Projects'));
const Publications = React.lazy(() => import('./Pages/Publications'));
const Education = React.lazy(() => import('./Pages/Education'));
const People = React.lazy(() => import('./Pages/People'));
const Construction = React.lazy(() => import('./components/Construction/Construction'));
const Joinus = React.lazy(() => import('./Pages/Joinus'));
const Noexist = React.lazy(() => import('./Pages/Noexist'));

const App = () => {
  const detectKeyDownAction = (e) => {
    if (e.key === '1') {
      document.body.setAttribute('data-theme', 'theme-one');
    } else if (e.key === '2') {
      document.body.setAttribute('data-theme', 'theme-two');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', detectKeyDownAction, true);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Construction />
              </React.Suspense>
            }
          />
          <Route
            path="/home"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Home />
              </React.Suspense>
            }
          />
          <Route
            path="/projects"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Projects />
              </React.Suspense>
            }
          />
          <Route
            path="/education"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Education />
              </React.Suspense>
            }
          />
          <Route
            path="/publications"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Publications />
              </React.Suspense>
            }
          />
          <Route
            path="/people"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <People />
              </React.Suspense>
            }
          />
          <Route
            path="/joinus"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Joinus />
              </React.Suspense>
            }
          />
          <Route
            path="*"
            element={
              <React.Suspense
                fallback={
                  <div className="joinusbg">
                    <div className="noexitText joinusbg">
                      <h1>Loading... </h1>
                    </div>
                  </div>
                }>
                <Noexist />
              </React.Suspense>
            }
          />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
