import Image from "next/image";
import Text from "../Common/Text";
import {
  DrugType,
  FabricType,
  GreenType,
  NewLable,
  NightType,
  ProductImg,
  SilverType,
} from "../../../public";
import "./product.scss";

export default function Product() {
  return (
    <div className="product">
      <div className="product__image">
        <Image src={ProductImg} alt="product" />
        
        <div className="product__lable">
          <NewLable />
        </div>
      </div>

      <div className="product__details">
        <p className="product__info">Сет из 2 стульев Ginger с мягким сиденьем</p>
        <p className="product__price">21 990₽</p>

        <div className="product__types">
          <GreenType />
          <DrugType />
          <NightType />
          <SilverType />
          <FabricType />
          <Text message="+800" color="#3b3b3b" weight={400} size={12} />
        </div>
      </div>
    </div>
  );
}
