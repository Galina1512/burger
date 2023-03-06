import { Order } from "../Order/Order";
import { Container } from "../Container/Container";
import style from './Catalog.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productRequestAsync } from "../../Store/product/productSlice";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";

export const Catalog = () =>{
  const { products, flag } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const { category, activeCategory} = useSelector(state => state.category);

  useEffect(() => {
    if (category.length){
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory])

    return(
        <section className={style.catalog}>
        <Container className={style.container}>
  <Order/>
          <div className={style.wrapper}>
            <h2 className={style.title}>{category[activeCategory]?.rus} </h2>
  
            <div className={style.wrap_list}>
              {products.length ? (               
              <ul className={style.list}>
                {products.map(item => (
                    <li key={item.id} className={style.item}>
                       <CatalogProduct item ={item}/>
                    </li>
                      ))}
              </ul>
              ) : ( flag &&
  <h3> К сожалению, товар данной категории закончился.</h3>
)}
            </div>
          </div>
        </Container>
      </section>
        )
}