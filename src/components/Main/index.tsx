import React from 'react';

import { 
    Container,
    Header,
    BackIcon,
    ProfileInfo
} from './styles';

const Main: React.FC = () => {
  return (
      <Container>
          
          <Header>
              <button>
                  <BackIcon />
              </button>

              <ProfileInfo>
                  <strong>Maicon Crhistian</strong>
                  <span>256 Tweets</span>
              </ProfileInfo>
          </Header>
          

          {/* </ProfilePage> */}
          {/* <BottomMenu>
              <HomeIcon />
              <SearchIcon />
              <BellIcon />
              <EmailIcon />
          </BottomMenu> */}

      </Container>
  );
}

export default Main;