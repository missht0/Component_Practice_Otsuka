import './index.less';
import Title from '../../es/Title';
import Carousel from '../../es/Part/Carousel';
import Img01 from '../../es/List/Img01';
import Img02 from '../../es/List/Img02';
import Img03 from '../../es/List/Img03';
import List12 from '../../es/List/List12';
import List11 from '../../es/List/List11';
import List09 from '../../es/List/List09';
import Button from '../components/Button';

export default function IndexPage() {
  const data = {
    title: 'ニュースリリース',
    list: [
      {
        title: '2022.07.07',
        label: '企業',
        cnt: '大塚製薬　中小企業の健康課題解決を支援する【健康経営つながるサポート】の本格運用開始',
      },
      {
        title: '2022.06.30',
        label: 'ニュートラシューティカルズ関連事業',
        cnt: 'ポカリスエット リターナブル瓶 250ml 循環型ショッピングプラットフォーム 「Loop」で販売開始',
      },
      {
        title: '2022.06.27',
        label: '医療関連事業',
        cnt: '抗精神病薬「ブレクスピプラゾール」 アルツハイマー型認知症に伴う行動障害（アジテーション）を対象とした グローバルフェーズ3 試験で主要評価項目を達成し有効性を確認',
      },
    ],
    line: 0,
    round: 0,
    bottom: 0,
  };

  const data_img = [
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im01_new.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im04_new_1.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im16_new_1.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im02.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im03.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im05.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/bodymainte.png',
    'https://www.otsuka.co.jp/nutraceutical/products/assets/img/item_im07_1.png',
  ];
  const data_l9 = {
    title: 'List08',
    list: [
      {
        // title: 'title主题title主题',
        label: 'New',
        cnt: '取扱い中止の検査項目について大変ご不便おかけいたしますが、引き続きよろしくお願い申し上げます。',
      },
    ],
    line: 0,
    label: 1,
    tit: 0,
  };
  const data_i2 = [
    {
      title: 'Img02',
      list: [
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_15.png',
          title: '健康に関する情報',
          cnt: '免疫navi',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_14.jpg',
          title: '健康に関する情報',
          cnt: '免疫navi',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_01.png',
          title: '健康に関する情報',
          cnt: '免疫navi',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im01_09.png',
          title: '健康に関する情報',
          cnt: '免疫navi',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
      ],
      line: 0,
      btn: false,
    },
    {
      title: 'Img02',
      list: [
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_20.png',
          title: '健康に関する情報',
          cnt: '免疫navi',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_09.png',
          title: '健康に関する情報',
          cnt: 'PMSラボ',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_05.png',
          title: '健康に関する情報',
          cnt: '熱中症からカラダを守ろう',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
        {
          img: 'https://www.otsuka.co.jp/health-and-illness/assets/img/index_im02_15.png',
          title: '健康に関する情報',
          cnt: '食物繊維を摂ろう！',
          btn: '跳转',
          link: 'https://www.baidu.com',
        },
      ],
      line: 0,
      btn: false,
    },
  ];
  const data_i3 = [
    {
      title: 'Img03',
      list: [
        {
          img: 'https://www.otsuka.co.jp/img/index_im05_01.jpg.webp',
          title: '徳島ヴォルティス',
          label: 'label标签',
          cnt: '四国初のJリーグチームとして設立された',
          change: false,
        },
      ],
      line: false,
      change: false,
      label: false,
    },
    {
      title: 'Img03',
      list: [
        {
          img: 'https://www.otsuka.co.jp/img/index_im05_02.jpg.webp',
          title: '大塚国際美術館',
          label: 'label标签',
          cnt: '「大塚国際美術館」は、大塚グループが創立75周年記念事業として徳島県鳴門市に設立した日本最大級の常設展示スペースを有する「陶板名画美術館」です。',
          change: false,
        },
      ],
      line: false,
      change: false,
      label: false,
    },
  ];
  return (
    <div id="root">
      <div className="root">
        <div id="head">
          <Title title="2つの事業" line={0}></Title>
          <section>病気を治すこと。健康を守ること。</section>
          <section>
            大塚製薬は「人々の健康をカラダ全体で考える」トータルヘルスケアカンパニーです。
          </section>
        </div>

        <div id="body">
          <div className="m-top">
            <div className="m-it m-img1">
              <Button data={'医療関連事業'}></Button>
              <div className="m-wd">
                疾病の診断から治療までを担う医療用医薬品を展開
              </div>
            </div>
            <div className="m-it m-img2">
              <Button data={'ニュートラシューティカルズ関連事業'}></Button>
              <div className="m-wd">
                日々の健康維持・増進をサポートする栄養製品や健粧品*を展開
                <div className="m-cnt">
                  *健粧品（Cosmedics）：cosmetics（化粧品）＋medicine（医薬品）
                </div>
              </div>
            </div>
          </div>
          <div className="m-bd">
            <div className="m-ti">新着情報</div>
            <List11 data={data}></List11>
            <div className="m-ft">
              <div>お知らせ一覧へ</div>{' '}
            </div>
          </div>
          <div className="m-img">
            {data_img.map((item, index) => {
              return (
                <div key={index} className="m-it">
                  <img src={item} alt=""></img>
                </div>
              );
            })}
          </div>

          <div className="m-bt">
            <Button data={'全ての製品はこちら'}></Button>
            <Button data={'ソーシャルメディア公式アカウント一覧'}></Button>
          </div>

          <div className="m-t">健康と病気</div>
          <div className="m-l9">
            <List09 data={data_l9}></List09>
          </div>
          <div className="m-cd">
            {data_i2.map((item, index) => {
              return (
                <div key={index} className="m-it">
                  <Img02 data={item}></Img02>
                </div>
              );
            })}
          </div>
          <div className="m-bt">
            <Button data={'健康と病気に関する情報一覧へ'}></Button>
          </div>

          <div className="m-cd2">
            {data_i3.map((item, index) => {
              return (
                <div key={index} className="m-it">
                  <Img03 data={item}></Img03>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
