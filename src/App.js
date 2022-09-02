import { BrowserRouter, Routes, Route } from 'react-router-dom';
import New from './pages/new/New';
import List from './pages/list/List';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
import { userInputs, productInputs } from './data/formfieldData';
import CheckUserSession from './components/auth/checkUserSession';
// import RequireAuth from './components/auth/RequireAuth';

import './theme/dark.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="login" element={<Login />} />

          {/* Protected Routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route element={<CheckUserSession />}>
            <Route path="/" element={<Home />}>
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={userInputs} title="Add new User" />}
                />
              </Route>
              <Route path="products">
                <Route index element={<List />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={<New inputs={productInputs} title="Add new Product" />}
                />
              </Route>
            </Route>
          </Route>

          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
