import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descrição, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Thomas Silva</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        ThomasSilvadevloop
      </Paragrafo>
      <Descrição tipo="principal" fontSize={12}>
        Engenheiro front-end
      </Descrição>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
