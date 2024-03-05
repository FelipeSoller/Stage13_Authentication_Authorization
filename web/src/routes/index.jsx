import { BrowserRouter } from 'react-router-dom';

import { USER_ROLE } from '../utils/roles';
import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes } from './customer.routes';
import { SellerRoutes } from './seller.routes';

export function Routes() {
  const { user } = useAuth();

  const AccessRoute = () => {
    switch (user?.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      case USER_ROLE.SELLER:
        return <SellerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}