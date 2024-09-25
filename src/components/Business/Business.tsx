import React from "react";
import styles from "./Business.module.scss";

const Business = () => {
  return (
    <section className={styles.introduction}>
      <div className={styles.topBlur}></div>
      <div className={styles.missionArea}>
        <h1 className={styles.title}>Business</h1>

        <h2 className={styles.subTitle}>web制作事業</h2>
        <p className={styles.description}>
          Web制作事業では、企業や個人のオンラインプレゼンスを最大限に引き出すための、
          <br />
          高品質で効果的なウェブサイトの構築を行っています。
          <br />
          最新のデザイントレンドと技術を駆使し、クライアントのブランド価値を
          <br />
          高めるカスタマイズされたソリューションを提供します。
          <br />
          <br />
          <strong>主なサービス内容</strong>
          <br />
          ・コーポレートサイトやランディングページの制作
          <br />
          ・Eコマースサイトやオンラインストアの構築
          <br />
          ・レスポンシブデザインによるモバイル最適化
          <br />
          ・SEO対策やWebマーケティングのコンサルティング
          <br />
          ・コンテンツ管理システム（CMS）の導入・運用支援
          <br />
          <br />
          私たちの目標は、クライアントのビジネス目標を達成するために、
          <br />
          Webを活用した価値あるソリューションを提供することです。
          <br />
          単なるサイト制作ではなく、成長を支援するパートナーとして、
          <br />
          長期的な成功を目指します。
        </p>
        <p className={styles.description}>
          <strong>目標</strong>
          <br />
          私たちの目標は、クライアントのビジネス目標を達成するために、
          <br />
          Webを活用した価値あるソリューションを提供することです。
          <br />
          単なるサイト制作ではなく、成長を支援するパートナーとして、
          <br />
          長期的な成功を目指します。
        </p>
        <div className={styles.separator}></div>
        <div className={styles.subsidy}>
          <h2 className={styles.subTitle}>Webシステムプロダクト事業</h2>
          <p className={styles.description}>
            Webシステムプロダクト事業では、クライアントのビジネスニーズに応じた、
            <br />
            専用のWebシステムやアプリケーションの開発を提供しています。
            <br />
            高い技術力を駆使し、業務効率化やビジネス拡大を支援する
            <br />
            カスタマイズされたシステムを構築します。
            <br />
            <br />
            <strong>主なサービス内容</strong>
            <br />
            ・業務プロセスを最適化するWebアプリケーションの開発
            <br />
            ・EコマースやCRMシステムの設計・導入
            <br />
            ・サーバーレスアーキテクチャやクラウドサービスの構築
            <br />
            ・予約システムサービスの構築
            <br />
            ・オンライン注文サービスの構築
            <br />
            ・決済サービスの構築
            <br />
            ・API開発および外部システムとの連携
            <br />
            ・保守・運用サービスとシステムのカスタマイズ支援
            <br />
            <br />
          </p>
          <p className={styles.description}>
            <strong>目標</strong>
            <br />
            クライアントの事業成長を促進する
            <br />
            Webシステムを提供し、日々の業務における課題を解決することです。
            <br />
            先進技術を取り入れ、長期的な成功を支えるプロダクトを開発します。
          </p>
        </div>
      </div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Business;
