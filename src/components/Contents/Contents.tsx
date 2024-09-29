import React from "react";
import styles from "./Contents.module.scss";

const Contents = () => {
  const facilities = [
    {
      name: "ピースⅠ",
      photo: "/assets/yao_1.jpg",
      message: "八尾市店の説明文がここに入ります。",
      address: "大阪府八尾市中田1-3 友田コーポ141",
    },
    {
      name: "ピースⅡ",
      photo: "/assets/yao_1.jpg",
      message: "大阪市店の説明文がここに入ります。",
      address: "大阪府八尾市美園3-78-1 ピアパーク美園401 402",
    },
  ];

  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Achievements</h1>
        <h2 className={styles.subTitle}>導入実績</h2>
        <h2 className={styles.subTitle}>
          株式会社E社 様<br />
          予約システムプロダクト
        </h2>
        <p className={styles.description}>
          株式会社E社様にて、飲食店向けの予約システムプロダクトの導入を担当しました。
          <br />
          システムはオンライン予約の受付から顧客情報の一元管理、テーブル配置の最適化、
          <br />
          自動リマインドメールの送信などを実現し、飲食店業務の大幅な効率化を図りました。
          <br />
          また、顧客の来店履歴を基にしたマーケティング支援機能も提供し、リピーター獲得を促進しました。
          <br />
          このシステムは他業種にも応用が可能で、あらゆる予約管理を効率化します。
          <br />
          導入費用は300万円から1,000万円で、ニーズに応じた柔軟なカスタマイズが可能です。
        </p>
      </div>
      <div className={styles.officeArea}>
        <div className={styles.officeContent}>
          <div className={styles.photoContainer}>
            <img src={"/assets/img1.png"} alt={""} className={styles.photo} />
          </div>
        </div>
      </div>

      <h2 className={styles.subTitle}>
        株式会社I社 様<br />
        決済システムプロダクト
      </h2>
      <p className={styles.description}>
        株式会社I社様にて、決済システムプロダクトの導入を担当しました。
        <br />
        本システムは、多様な決済手段に対応しており、クレジットカード、電子マネー、QRコード決済などをスムーズに処理します。{" "}
        <br />
        導入により、店舗の会計業務を迅速化し、顧客の待ち時間を短縮することが可能となりました。
        <br />
        さらに、売上データの自動集計や日報の自動生成機能により、店舗運営者の業務負担を軽減し、ビジネスの成長をサポートします。{" "}
        <br />
        費用は300万円から1,500万円で、ニーズに応じたカスタマイズが可能です。
      </p>
      <div className={styles.officeArea}>
        <div className={styles.officeContent}>
          <div className={styles.photoContainer}>
            <img src={"/assets/img2.png"} alt={""} className={styles.photo} />
          </div>
        </div>
      </div>

      <h2 className={styles.subTitle}>
        O有限会社 様<br />
        コーポレートサイト制作
      </h2>
      <p className={styles.description}>
        O有限会社様にて、コーポレートサイトの制作を担当しました。
        <br />
        サイトはシンプルかつ直感的なデザインを採用し、ユーザーが会社の情報やサービス内容にスムーズにアクセスできるよう最適化しました。
        <br />
        また、レスポンシブ対応を施し、スマートフォンやタブレットなど様々なデバイスで快適に閲覧できるようにしています。
        <br />
        さらに、SEO対策を重視し、検索エンジンでの上位表示を目指すことで、クライアントのブランド認知度向上に貢献しました。
        <br />
        費用は100万円から300万円で、クライアントのニーズに応じたカスタマイズが可能です。
      </p>
      <div className={styles.officeArea}>
        <div className={styles.officeContent}>
          <div className={styles.photoContainer}>
            <img src={"/assets/img3.png"} alt={""} className={styles.photo} />
          </div>
        </div>
      </div>

      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Contents;
