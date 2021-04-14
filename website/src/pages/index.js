import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Quick Setup',
    imageUrl: 'img/setup.svg',
    description: (
      <>
        Quickly get your bot online with a lightning fast setup and configuration process. Spend more time working  and less time setting up the core of your bot.
      </>
    ),
  },
  {
    title: 'Easy to Expand',
    imageUrl: 'img/expand.svg',
    description: (
      <>
	  	  Expand as your bot grows easily, adding your own commands, events, features and anything else you need for your project. 
      </>
    ),
  },
  {
    title: 'Translation Support',
    imageUrl: 'img/people.svg',
    description: (
      <>
        Add multiple translations for your project, allowing you to expand out to a global audience and let others contribute and translate for you.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className="text--center">{title}</h3>
      <p className="text--center">{description}</p>
    </div>
  );
}

  function Home() {
	const context = useDocusaurusContext();
	const {siteConfig = {}} = context;
	return (
	  <Layout
		title={`Home`}
		description="Expandable-DJS-Bot is a Discord.JS template allowing you to get your bot off the ground in no time <head />">
		<div className={styles.hero}>
		  <div className={styles.heroInner}>
			<h1 className={styles.heroProjectTagline}>
			  <img
				alt="Logo"
				className={styles.heroLogo}
				src={useBaseUrl('img/logo.png')}
			  />
			  Super {' '}
			  <span className={styles.heroProjectKeywords}>easy to setup</span>{' '} and{' '}
			  <span className={styles.heroProjectKeywords}>well structured</span> D.JS bot template{' '}
			</h1>
			<div className={styles.indexCtas}>
			  <Link
				className={styles.indexTryMeButton}
				to="docs/installation/getting-setup">
				Get Setup
			  </Link>
			  <Link
				className={clsx('margin-left--md', styles.indexCtasGetStartedButton)}
				to={useBaseUrl('docs/')}>
				GitHub
			  </Link>
			</div>
		  </div>
		</div>
		<div className={clsx(styles.announcement, styles.announcementDark)}>
		  <div className={styles.announcementInner}>
			We encourage contributions, {' '}
			<Link to='https://github.com/angelnull/expandable-djs-bot'>
			  come help improve EDB
			</Link>
			.
		  </div>
		</div>
		<main>
		  {features && features.length > 0 && (
			<section className={styles.features}>
			  <div className="container">
				<div className="row">
				  {features.map((props, idx) => (
					<Feature key={idx} {...props} />
				  ))}
				</div>
			  </div>
			</section>
		  )}
		</main>
	  </Layout>
	);
  }
  
  export default Home;
  
