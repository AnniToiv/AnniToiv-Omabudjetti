import styles from './ItemForm.module.scss'

function ItemForm(props) {
      return (
      <form>
        <div className={styles.itemform}>
                 <div className={styles.itemform_row}>
            <div>
              <label htmlFor='type'>Kulutyyppi</label>
              <select id='type' name='type'>
                <option>Puhelin</option>
                <option>Sähkö</option>
                <option>Vesi</option>
                <option>Vero</option>
              </select>
            </div>
          </div>
                    <div className={styles.itemform_row}>
            <div>
              <label htmlFor='amount'>Summa</label>
              <input id='amount' type='number' name='amount' step='0.01' />
            </div>
            <div>
              <label htmlFor='paymentDate'>Maksupäivä</label>
              <input id='paymentDate' type='date' name='paymentDate' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='periodStart'>Laskutuskauden alku</label>
              <input id='periodStart' type='date' name='periodStart' step='0.01' />
              <label htmlFor='periodEnd'>Laskutuskauden loppu</label>
              <input id='periodEnd' type='date' name='periodEnd' step='0.01' />
            </div>
            <div>
              <label htmlFor='recceiver'>Saaja</label>
              <input id='receiver' type='text' name='receiver' />
            </div>
          </div>
        </div>
      </form>
    )
}

export default ItemForm