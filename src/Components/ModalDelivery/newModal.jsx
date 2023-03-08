import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '../../Store/form/formSlice';
import { closeNewModal, openNewModal } from '../../Store/ModalDelivery/NewModalSlice';
import style from './ModalDelivery.module.css';
// import { response } from '../../store/form/formSlice';

export const NewModal = () => {
  const { isOpen } = useSelector(state => state.newmodal);
  const { response } = useSelector(state => state.form);
  const dispatch = useDispatch();

  return(
    isOpen && (
<div className={style.modal}
            onClick = { () => {
                dispatch(closeNewModal());}
            }
>
    <div className={style.mdelivery}>
        <div className={classNames(style.container, style.container_new)}>
                <h2 className={style.title}>Спасибо!</h2>
                <h3>Ваш заказ принят</h3>
                {/* <p>Номер заказа {`${response.id}`}</p> */}
                {/* <h4>Номер заказа {`${response.json()}`}</h4> */}
                {/* <h4>Номер заказа {`${rejectWithValue.id}`}</h4> */}
                {/* <h4>Номер заказа {`${submitForm.id}`}</h4> */}



        </div>
    </div>
</div>
  )
)
  }
