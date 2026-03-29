import Clients from './Clients'
import BgShapes from '@/app/ui/project/components/BgShapes'
import Spacer from '@/app/ui/project/components/Spacer'
import Profile from '@/app/ui/project/components/Profile'
import EmojiSwap from '@/app/ui/project/components/EmojiSwap'
import Link from 'next/link'
import styles from './HeroHomepage.module.scss'

function HeroHomepage() {
	return (
		<div className={styles.hero}>
			<div className={styles['hero__mainSection']}>
				<div className="container container--vertical-fill">
					<div className={styles['hero__mainSection__inner']}>
						<p className={styles['hero__mainSection__message']}>
							<span className={styles['hero__mainSection__message__sub']}>Introducing Debazzled</span>
							<span className={styles['hero__mainSection__message__main']}>
								My <span className={styles.messageHighlight}> Design System</span>
							</span>
							<span className={styles['hero__mainSection__message__sub']}>
								Accessible for everyone, with some{' '}
								<span className={styles['pop']}>
									POP <EmojiSwap initial="🎈" after="💥" delay={1000} />
								</span>
							</span>
						</p>
					</div>
				</div>
				<div className={styles['hero__profile']}>
					<Profile />
				</div>
				<BgShapes variant="1" />
			</div>
			<div className={styles['hero__footSection']}>
				<div className={styles['hero__footSection__inner']}>
					<div className="container">
						<div className={styles['hero__footSection__intro']}>
							<div className={styles['hero__footSection__intro__main']}>
								<p>
									<strong>Hello, I&apos;m just playing around</strong>
									<br />
									Read on to learn more
								</p>
							</div>
						</div>
						<Spacer mobile />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroHomepage
