import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';

import { USER_ROLE } from '../../utils/roles';
import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { Feature } from '../../components/Feature';
import { Header } from '../../components/Header';

export function Home() {
  const { user } = useAuth();
  const isAdminOrSeller = [USER_ROLE.ADMIN, USER_ROLE.SELLER].includes(user.role);

  return (
    <Container>
      <Header />

      <main>
        <Feature title="Produto" icon={FiTag} to="/product" />
        {isAdminOrSeller && (
          <>
            {user.role === USER_ROLE.ADMIN && <Feature title="Fornecedores" icon={FiTruck} to="/suppliers" />}
            <Feature title="Relatório de vendas" icon={FiShoppingCart} to="/sales-report" />
          </>
        )}
      </main>
    </Container>
  )
}
