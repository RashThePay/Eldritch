import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: ' الدریچ، دروازه‌ی دنیای فانتزی',
    img: require('@site/static/img/wizard.jpg').default,
    description: (
      <>
الدریچ، دروازه‌ای به دنیای شگفت‌انگیز و فانتزی بازی D&D است. اینجا، ماجراجویی‌های هیجان‌انگیزی در انتظار شماست. با ما قدم به جهانی پر از موجودات افسانه‌ای، جادو و گنجینه‌های پنهان بگذارید.
</>
    ),
  },
  {
    title: 'کشف اسرار و گنجینه‌های پنهان',
    img: require('@site/static/img/castle.jpg').default,
    description: (
      <>
در اعماق دخمه‌ها، گنجینه‌ها و اسراری منتظر کشف شدن هستند. الدریچ، با محتوای غنی خود، شما را در این سفر همراهی می‌کند تا با قوانین بازی آشنا شوید و به یک ماجراجوی خبره تبدیل شوید.</>
    ),
  },
  {
    title: 'خلق خاطرات فراموش‌نشدنی',
    img: require('@site/static/img/combat.jpg').default,
    description: (
      <>
الدریچ، جامعه‌ای از علاقه‌مندان به بازی D&D است. ما با برگزاری رویدادهای متنوع، فضایی برای به اشتراک‌گذاری تجربه‌ها و دوستی‌های جدید فراهم می‌کنیم. با ما همراه شوید و خاطرات فراموش‌نشدنی خلق کنید!      </>
    ),
  },
];

function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding--md border-radius--md">
        <img className={styles.featureimg+" features-img"} alt={title} src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
