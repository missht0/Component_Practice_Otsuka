import { React } from 'react';
import './index.less';
import Title from '../../../es/Title';
const Header = ({ data }) => {
  return (
    <header>
      <Title title={data.title} line={data.line}></Title>
    </header>
  );
};

export default Header;
