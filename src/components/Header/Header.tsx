"use client";
import { useState } from "react";
import Link from "next/link";
import useModal from "@/hooks/useModal";
import useToggle from "@/hooks/useToggle";
import Text from "../Common/Text";
import * as IMG from "../../../public";
import "./header.scss";

interface NavLink {
  id: number;
  name: string;
  path: string;
}

export default function Header() {
  const [activeLink, setActiveLink] = useState<number | null>(null);
  const [isToggled, toggle] = useToggle();
  const { isOpen, openModal, closeModal } = useModal();

  const links: NavLink[] = [
    { id: 1, name: "Каталог", path: "/" },
    { id: 2, name: "Покупателям", path: "/" },
    { id: 3, name: "Дизайнерам", path: "/" },
    { id: 4, name: "О компании", path: "/" },
    { id: 5, name: "Контакты", path: "/" },
  ];

  const handleLinkClick = (id: number) => {
    setActiveLink(id);

    if (id === 1) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <div className="header">
      <div className="header__top container">
        <a href="tel:+8 800 551 01 60">
          <Text
            message="8 800 551 01 60"
            color="#3B3B3B"
            weight={700}
            size={14}
          />
        </a>

        <div className="header__info">
          <Text
            message="Заказать обратный звонок"
            color="#3B3B3B"
            weight={400}
            size={14}
          />

          <div className="header__location">
            <IMG.Location />
            <Text message="Салоны" color="#3B3B3B" weight={400} size={14} />
          </div>
        </div>

        <div className="header__social">
          <a href="http://www.vk.com" target="blank">
            <IMG.Vk />
          </a>
          <a href="http://www.pinterest.com" target="blank">
            <IMG.Pinterest />
          </a>
          <a href="http://web.telegramm.org" target="blank">
            <IMG.Telegram />
          </a>
        </div>
      </div>
      <div className="header__bottom container">
        <Link href="/" className="header__logo">
          <IMG.Logo />
        </Link>

        <nav className="header__nav">
          <ul
            className="header__list"
            style={
              isToggled == true ? { display: "none" } : { display: "flex" }
            }
          >
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  onClick={() => {
                    handleLinkClick(link.id);
                  }}
                  className={`header__link ${
                    activeLink === link.id ? "header__link--active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {isOpen && (
              <div className="header__modal modal">
                <nav className="modal__nav">
                  <ul className="modal__list">
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Стулья
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Барные стулья
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Кресла
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Диваны
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Столы
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Офисная мебель
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Пуфы
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Аксессуары
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        В наличии
                      </Link>
                    </li>
                    <li className="modal__item">
                      <Link href="/" className="modal__link">
                        Специальные предложения
                      </Link>
                      <IMG.Percentage />
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </ul>
          <div
            className="header__input"
            style={
              isToggled == true ? { display: "flex" } : { display: "none" }
            }
          >
            <button className="input__icon">
              <IMG.Search size={16} behaviour="#aaaaaa" />
            </button>

            <input placeholder="Поиск по каталогу" />
          </div>
        </nav>

        <div className="header__actions">
          <button className="header__btn" onClick={toggle}>
            <IMG.Search size={24} behaviour="#3b3b3b" />
          </button>

          <button className="header__btn">
            <IMG.Cart />
          </button>

          <div className="header__burgermenu">
            <IMG.Burgermenu />
          </div>
        </div>
      </div>
    </div>
  );
}
