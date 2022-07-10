import Footer from '../components/Footer';
import Header from '../components/Header';
import './index.less';
const data = {
  utility: [
    '個人情報・特定個人情報保護宣言',
    'サイトのご利用について',
    'サイトマップ',
  ],
  group__list: [
    '大塚ホールディングス',
    '大塚製薬工場',
    '大鵬薬品工業',
    '大塚倉庫',
    '大塚化学',
    '大塚食品',
    '大塚メディカルデバイス',
  ],
  inner: {
    logo__image: 'https://www.otsuka.co.jp/app-files/img/cmn_logo01_02.svg',
    logo__text:
      'Otsuka-people creating new products for better health worldwide',
    label: 'Copyright © Otsuka Pharmaceutical Co., Ltd.',
  },
};

export default function IndexPage(props) {
  return (
    <>
      {props.children}
      <Footer data={data} />
    </>
  );
}
