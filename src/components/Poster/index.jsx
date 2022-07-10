import { React } from 'react';
import './index.less';
import List12 from '../../../es/List/List12';
const Poster = ({ data }) => {
  return (
    <div className="Poster">
      <div className="m-lt">
        <img src={data.img} alt="" />
      </div>
      <div className="m-rt">
        <List12 data={data.data} />
      </div>
    </div>
  );
};

export default Poster;
