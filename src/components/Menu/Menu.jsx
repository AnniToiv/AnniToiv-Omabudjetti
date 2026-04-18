import { MdViewList } from 'react-icons/md'

import styles from './Menu.module.scss'

/**
 * Sovelluksen alareunassa oleva navigaatiovalikko.
 *
 * Menu sisältää ikonilinkit sovelluksen eri näkymiin ja
 * tarjoaa nopean tavan siirtyä näkymästä toiseen.
 *
 * @example
 * <Menu />
 *
 * @returns {JSX.Element}
 */
function Menu() {

  return (
    <div className={styles.menu}>
      <div><MdViewList /></div>
      <div>stats</div>
      <div>profile</div>
    </div>
  )

}

export default Menu