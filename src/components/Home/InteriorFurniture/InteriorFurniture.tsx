import Image from "next/image";
import {
  DrugType,
  FabricType,
  GreenType,
  InteriorRecommend,
  NightType,
  SilverType,
} from "../../../../public";
import "./interior-furniture.scss";
import Text from "@/components/Common/Text";

export default function InteriorFurniture() {
  return (
    <div className="recommend">
      <Image src={InteriorRecommend} alt="recommend furniture" />
      <div className="recommend__details">
        <Text
          message="Сет из 2 стульев Ginger с мягким сиденьем"
          color="#fff"
          weight={400}
          size={16}
        />
        <Text message="21 990" color="#fff" weight={500} size={20} />

        <div className="recommend__types">
          <GreenType />
          <DrugType />
          <SilverType />
          <NightType />
          <FabricType />
          <Text message="+800" color="#fff" weight={400} size={12} />
        </div>
      </div>
    </div>
  );
}
