import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ProductionSwiper from "@/components/Home/ProductionSwiper/ProductionSwiper";
import InteriorFurniture from "@/components/Home/InteriorFurniture/InteriorFurniture";
import ProjectsSwiper from "@/components/Home/ProjectsSwiper/ProjectsSwiper";
import Banner from "@/components/Banner/Banner";
import Header from "@/components/Header/Header";
import Text from "@/components/Common/Text";
import BlogSwiper from "@/components/Home/BlogSwiper/BlogSwiper";
import Product from "@/components/Product/Product";
import Footer from "@/components/Footer/Footer";
import * as IMG from "../../public";
import "@/styles/pages/home.scss";

interface BlockTypes {
  id: number;
  img: StaticImageData;
  text: string;
}

export default function Home() {
  const blockDetails: BlockTypes[] = [
    { id: 1, img: IMG.FirstImage, text: "Стулья" },
    { id: 2, img: IMG.SecondImage, text: "Барные стулья" },
    { id: 3, img: IMG.ThirdImage, text: "Кресла" },
    { id: 4, img: IMG.FourthImage, text: "Диваны" },
    { id: 5, img: IMG.FivthImage, text: "Столы" },
    { id: 6, img: IMG.SixthImage, text: "Офисная мебель" },
    { id: 7, img: IMG.SeventhImage, text: "Вешалки" },
    { id: 8, img: IMG.EighthImage, text: "Пуфы" },
    { id: 9, img: IMG.NinthImage, text: "Аксессуары" },
    { id: 10, img: IMG.TenthImage, text: "В наличии" },
  ];

  return (
    <>
      <Header />
      <Banner />
      {/* <section className="category container">
        <div className="category__wrapper">
          {blockDetails.map((el) => {
            return (
              <div key={el.id} className="category__block">
                <Image src={el.img} alt={el.text} className="category__img" />
                <p className="category__text">{el.text}</p>
              </div>
            );
          })}
          <div className="category__add">
            <Text
              message="Покупайте выгодно!"
              size={40}
              weight={400}
              color="#ffffff"
            />
            <Text
              message="Наши специальные предложения"
              size={16}
              weight={300}
              color="#ffffff"
            />
          </div>
        </div>
      </section>
      <section className="newest container">
        <div className="newest__content">
          <Text message="Новинки" size={40} weight={600} color="#3b3b3b" />
          <Link href="/" className="product__link">
            Все новинки <IMG.LongArrow />
          </Link>
        </div>
        <div className="newest__content">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
      <section className="production container">
        <Text message="Производство" size={40} weight={600} color="#3b3b3b" />
        <div className="production__row">
          <p className="production__letter">
            ANNI HAUS входит в состав холдинга Premier Group – группу торговых и
            производственных компаний с уникальным конструкторским бюро.
            Мебельная фабрика полного цикла находится в Санкт-Петербурге.
          </p>

          <button className="production__video">
            видео о производстве
            <IMG.PlayVideo />
          </button>
        </div>
        <ProductionSwiper />
      </section>
      <section className="interior container">
        <div className="newest__content">
          <Text
            message="Ваши интерьеры"
            size={40}
            weight={600}
            color="#3b3b3b"
          />
          <Link href="/" className="product__link">
            Все новинки <IMG.LongArrow />
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                padding: 24,
                width: 485,
                height: 260,
                backgroundImage: "url(/images/interior-first.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
                backgroundColor: "#4A5656",
              }}
            >
              <Text
                message="Присылайте фотографии мебели в вашем интерьере, и мы разместим их на сайте."
                color="#fff"
                weight={400}
                size={20}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                padding: 8,
                width: 485,
                height: 676,
                backgroundImage: "url(/images/interior-second.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <InteriorFurniture />
            </div>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 8,
                  width: 417,
                  height: 501,
                  backgroundImage: "url(/images/interior-fourth.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <InteriorFurniture />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  padding: 8,
                  width: 417,
                  height: 501,
                  backgroundImage: "url(/images/interior-fivth.jpg)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <InteriorFurniture />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                padding: 8,
                width: "auto",
                height: 435,
                backgroundImage: "url(/images/interior-third.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "bottom",
              }}
            >
              <InteriorFurniture />
            </div>
          </div>
        </div>
      </section>
      <section className="projects container">
        <div className="projects__title">
          <Text
            message="Дизайнерские проекты с мебелью Anni Haus"
            size={40}
            weight={600}
            color="#3b3b3b"
          />
        </div>

        <ProjectsSwiper />
      </section>
      <section className="blog container">
        <Text message="Блог" size={40} weight={600} color="#3b3b3b" />
        <BlogSwiper />
      </section>
      <section className="designer container">
        <Text
          message="Дизайнерская мебель Anni Haus"
          size={40}
          weight={500}
          color="#3b3b3b"
        />
        <p className="designer__info">
          Вы ищете крупный мебельный салон, где можно приобрести стильную,
          удобную и надежную мебель разных стилей по наиболее выгодным ценам?
          <span className="designer__divider"></span>
          Мебельный салон Anni Haus предлагает широкий выбор столов и стульев
          для дома по самым конкурентоспособным ценам. Приглашаем Вас в шоу-румы
          расположенные разных районах Москвы и Санкт-Петербурга.
        </p>

        <Link href="/" className="designer__link">
          Узнать больше
          <IMG.LongArrow />
        </Link>
        <Image src={IMG.InteriorImg} alt="" className="designer__img" />
      </section>
      <Footer /> */}
    </>
  );
}
