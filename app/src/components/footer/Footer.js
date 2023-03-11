import React from 'react'
import youtube from './youtube.png'
import facebook from './facebook.png'
import instagram from './insta.png'
import logotip from './GFIT.png'



import classes from './footer.module.css'
function Footer() {
  return (
    <div className={classes.page}>
      <div className={classes.footer}>
        <div className={classes.footer__title}>
            <span><a className={classes.footerA} href='app/src/components/footer/Footer#'>Попробовать бесплатно</a></span>
            <span><a className={classes.footerA} href='app/src/components/footer/Footer#'>Помощь</a></span>
            <span><a className={classes.footerA} href='app/src/components/footer/Footer#'>Конфиденциальность</a></span>
        </div>
        <div className={classes.footer__links}>
            <div>
                <a className={classes.footerA} href='https://youtube.com'><img src={youtube}/></a>
            </div>
            <div>
            <a className={classes.footerA} href='https://ru-ru.facebook.com'><img src={facebook}/></a>
            </div>
            <div>
            <a className={classes.footerA} href='https://www.instagram.com'><img src={instagram}/></a>
            </div>
        </div>
        <div className={classes.footer__icon}>
            <span>Будь лучшим!</span>
            <div>
                <img src={logotip} alt="logo"/>
            </div>
            <span>© 2023 G-Fit . Все права защищены.</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
