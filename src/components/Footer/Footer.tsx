import Link from "next/link";
import Text from "../Common/Text";
import { Pinterest, Telegram, Vk } from "../../../public";
import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <nav className="footer__nav">
            <ul className="footer__list">
              <li className="footer__link footer__link--title">Каталог</li>
              <Link href="/" className="footer__link">
                В наличии
              </Link>
              <Link href="/" className="footer__link">
                Акции{" "}
              </Link>
              <Link href="/" className="footer__link">
                Стулья
              </Link>
              <Link href="/" className="footer__link">
                Барные стулья
              </Link>
              <Link href="/" className="footer__link">
                Кресла
              </Link>
              <Link href="/" className="footer__link">
                Диваны
              </Link>
            </ul>
            <ul className="footer__list">
              <Link href="/" className="footer__link">
                Столы
              </Link>
              <Link href="/" className="footer__link">
                Офисная мебель
              </Link>
              <Link href="/" className="footer__link">
                Пуфы
              </Link>
              <Link href="/" className="footer__link">
                Вешалки
              </Link>
              <Link href="/" className="footer__link">
                Столовые группы
              </Link>
            </ul>
            <ul className="footer__list">
              <li className="footer__link footer__link--title">Покупателям</li>
              <Link href="/" className="footer__link">
                Доставка
              </Link>
              <Link href="/" className="footer__link">
                Оплата
              </Link>
              <Link href="/" className="footer__link">
                Правила торговли
              </Link>
              <Link href="/" className="footer__link">
                Оплата
              </Link>
              <Link href="/" className="footer__link">
                Идеи для интерьера
              </Link>
            </ul>
            <ul className="footer__list">
              <li className="footer__link footer__link--title">О компании</li>
              <Link href="/" className="footer__link">
                О нас
              </Link>
              <Link href="/" className="footer__link">
                Бренды
              </Link>
            </ul>
            <ul className="footer__list">
              <li className="footer__link footer__link--title">Контакты</li>
              <a href="tel:+88005510160">
                <Text
                  message="8 800 551 01 60"
                  size={24}
                  weight={400}
                  color="#3b3b3b"
                />
              </a>
              <Text
                message="Сюда время работы, в которое можно звонить в магазин"
                size={14}
                weight={400}
                color="#3b3b3b"
              />
              <a href="mailto:info@annihaus.ru" target="blank">
                <Text
                  message="info@annihaus.ru"
                  size={14}
                  weight={400}
                  color="#3b3b3b"
                />
              </a>
              <Text message="Шоурумы" size={14} weight={400} color="#3b3b3b" />
              <li className="footer__socialmedia">
                <Telegram />
                <Vk />
                <Pinterest />
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer__bottom">
          <Text
            message="© Anni Haus, 2000-2022"
            size={14}
            weight={400}
            color="#3b3b3b"
          />
          <Text
            message="design by omr.design"
            size={14}
            weight={400}
            color="#3b3b3b"
          />
        </div>
      </div>
    </footer>
  );
}
