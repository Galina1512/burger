import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import style from './ModalDelivery.module.css';

export const openNewModal = () => {
  const { orderList } = useSelector(state => state.order);
  const dispatch = useDispatch();

  return(
    <div className={style.mdelivery}>
      <div className={style.container}>
        <h2 className={style.title}>Спасибо за заказ!</h2>
        <h3>Ваш заказ принят</h3>
        <h4>Номер заказа {`${state.respons.orderList.id}`}</h4>


    </div>
  </div>
)
  }