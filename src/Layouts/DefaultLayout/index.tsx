/* eslint-disable prettier/prettier */
import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { LayoutContainer } from './Styles'

export function DefaultLayout() {
  return (
    // Utilizado para colocar o Header em todas as rotas
    <LayoutContainer>
      <Header />
      {/* puxar o outlet para Funcionar a função de todas as rotas */}
      <Outlet />
    </LayoutContainer>
  )
}
