import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
      display: flex;  
    > li {
      width: 33.3333%;
      text-align: center;
      padding: 4px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .icon {
        width: 24px;
        height: 24px;
      }
    }
    
  }
`;

function Nav() {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="tag" />
          <Link to="/tag">Tag</Link>
        </li>
        <li>
          <Icon name="money" />
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Icon name="chart" />
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
}

export default Nav;
