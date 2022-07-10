import './index.less';
import Title from '../../es/Title';
import Carousel from '../../es/Part/Carousel';
import Img01 from '../../es/List/Img01';
import Img02 from '../../es/List/Img02';
import List12 from '../../es/List/List12';
import List09 from '../../es/List/List09';
import Article from '../../es/Part/Article';

export default function IndexPage() {
  const data = {
    title: 'サイトカイン点滴',
    list: [
      '加齢に伴い私たちの身体は、しみ・しわ・たるみの増加、視力・聴力の低下、筋力や抵抗力の減少など、さまざまな老化サインを見せ始めます。そんな身体の衰えに対し、体質改善や全身の若返りを行う究極のエイジングケアのことです。',
      '最新医療技術を駆使した幹細胞培養培養治療をおこなうことで、肌の悩みや身体の悩みを細胞レベルで改善していきます。当クリニックでは「脂肪由来 幹細胞培養液」「歯髄 幹細胞培養液」の2種類を導入・ご提供しております。',
    ],
    img: 'https://mqcai.top/cdn/hpcom_article.jpg',
    line: 1,
    btn: {
      name: '詳細はこちら',
      url: '#',
    },
    showImg: 1,
    showBtn: 1,
  };

  return <Article data={data}></Article>;
}
