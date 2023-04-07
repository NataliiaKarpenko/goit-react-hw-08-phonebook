// import { FormInput } from './Form/FormInput';
// import { ContactsList } from './ContactsList/ContactsList';
// import { Filter } from './Filter/Filter';

// export const App = () => {
//   return (
//     <>
//       <h1>Phonebook</h1>
//       <FormInput />
//       <Filter />
//       <ContactsList />
//     </>
//   );
// };

import { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
// import { getUserInfo } from 'redux/operations';
// import { useAuth } from '../hooks/useAuth';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));

export const App = () => {
  // return isRefreshing ? (
  //   <b>Refreshing user...</b>
  // ) : (
  //   <Routes>
  //     <Route path="/" element={<Layout />}>
  //       <Route index element={<HomePage />} />
  //       <Route
  //         path="/register"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
  //         }
  //       />
  //       <Route
  //         path="/login"
  //         element={
  //           <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
  //         }
  //       />
  //       <Route
  //         path="/tasks"
  //         element={
  //           <PrivateRoute redirectTo="/login" component={<TasksPage />} />
  //         }
  //       />
  //     </Route>
  //   </Routes>
  // );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
