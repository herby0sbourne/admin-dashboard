import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import New from './pages/new/New';
import List from './pages/list/List';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';

// import './App.css';
import './theme/dark.scss';
import { userInputs, productInputs } from './data/formfieldData';

function App() {
  const currentUser = false;

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to={'/login'} replace={true} />;
  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          >
            <Route path="users">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":userId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={userInputs} title="Add new User" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <New inputs={productInputs} title="Add new Product" />
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
