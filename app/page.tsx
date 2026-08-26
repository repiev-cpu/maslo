"use client";

import { useState } from "react";

const PHONE_DISPLAY = "+7 (831) 281-80-51";
const PHONE_LINK = "tel:+78312818051";

const serviceCards = [
  {
    number: "01",
    eyebrow: "Главная услуга",
    title: "Замена масла в двигателе",
    text: "Подберём масло и фильтр по автомобилю, заранее посчитаем материалы и работу.",
    meta: "Работа — от 550 ₽",
    href: "#calculator",
  },
  {
    number: "02",
    eyebrow: "Главная услуга",
    title: "Замена масла в АКПП",
    text: "Аппаратная или частичная замена для АКПП, CVT и DSG — способ определит мастер.",
    meta: "Работа — от 3 000 ₽",
    href: "#akpp",
  },
  {
    number: "03",
    eyebrow: "Магазин при сервисе",
    title: "Масла и фильтры в наличии",
    text: "Моторные и трансмиссионные масла, фильтры и технические жидкости в одном месте.",
    meta: "Подбор по автомобилю",
    href: "#store",
  },
];

const additionalServices = [
  ["МКПП и редукторы", "Замена масла в механической коробке, раздатке и дифференциалах", "от 800 ₽"],
  ["Haldex", "Замена рабочей жидкости и фильтра в муфте полного привода", "По расчёту"],
  ["Антифриз", "Аппаратная замена охлаждающей жидкости с промывкой системы", "от 3 000 ₽"],
  ["Тормозная жидкость", "Проверка состояния и полная замена жидкости", "от 1 800 ₽"],
  ["Автокондиционер", "Проверка системы и заправка хладагентом", "По расчёту"],
  ["Фильтры", "Замена воздушного, салонного и топливного фильтра", "По расчёту"],
];

const workExamples = [
  ["Mitsubishi ASX", "Вариатор JF011E", "Аппаратная замена масла"],
  ["Kia Sportage", "АКПП A6MF1", "Масло + фильтр АКПП"],
  ["Skoda Octavia A7", "АКПП AQ250", "Полная замена жидкости"],
  ["Toyota Land Cruiser 200", "АКПП AB60F", "Аппаратная замена масла"],
];

const faqs = [
  ["Сколько стоит замена масла в двигателе?", "Работа начинается от 550 ₽. Итоговая сумма зависит от выбранного масла, объёма системы и фильтра. Оставьте данные автомобиля — мы заранее рассчитаем полную стоимость."],
  ["Как понять, какое масло подходит моему автомобилю?", "Сообщите марку, модель, год, двигатель или VIN. Специалист проверит вязкость и допуски производителя, а затем предложит подходящие варианты из наличия."],
  ["Чем аппаратная замена в АКПП отличается от частичной?", "При частичной замене обновляется только часть жидкости. Аппаратная позволяет заменить основной объём. Способ выбирают с учётом типа коробки, пробега, состояния жидкости и рекомендаций производителя."],
  ["Нужно ли привозить своё масло и фильтры?", "Необязательно. При сервисе работает собственный магазин с моторными и трансмиссионными маслами, фильтрами и техническими жидкостями."],
  ["Можно приехать без записи?", "Можно, но при предварительной записи мы заранее подготовим материалы и зарезервируем время мастера — так вам не придётся ждать свободного поста."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <header className="site-header">
        <div className="container header-row">
          <a className="brand" href="#top" aria-label="Автомаслоф — на главную">
            <span className="brand-mark" aria-hidden="true">A</span>
            <span>
              <strong>Автомаслоф</strong>
              <small>экспертный центр замены масла</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Основная навигация">
            <a href="#services" onClick={() => setMenuOpen(false)}>Услуги</a>
            <a href="#store" onClick={() => setMenuOpen(false)}>Магазин</a>
            <a href="#works" onClick={() => setMenuOpen(false)}>Примеры работ</a>
            <a href="#reviews" onClick={() => setMenuOpen(false)}>Отзывы</a>
            <a href="#contacts" onClick={() => setMenuOpen(false)}>Контакты</a>
          </nav>

          <div className="header-contact">
            <span>Ежедневно 08:00–20:00</span>
            <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
          </div>
          <a className="button button-small" href="#calculator">Записаться</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="location-pill">
              <span className="pulse-dot" /> Кстово · Магистральная, 47
            </div>
            <p className="hero-kicker">Магазин + собственная мастерская</p>
            <h1>Замена масла в двигателе и <em>АКПП</em></h1>
            <p className="hero-lead">
              Подберём масло и фильтры для вашего автомобиля, рассчитаем стоимость и сразу заменим всё в собственной мастерской.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#calculator">
                Рассчитать стоимость <span aria-hidden="true">→</span>
              </a>
              <a className="button button-ghost" href={PHONE_LINK}>Позвонить</a>
            </div>
            <ul className="hero-checks" aria-label="Преимущества">
              <li><span>✓</span> Масла и фильтры в наличии</li>
              <li><span>✓</span> Опытные мастера</li>
              <li><span>✓</span> Работа по записи</li>
            </ul>
          </div>

          <div className="hero-visual" aria-label="Мастерская Автомаслоф">
            <div className="hero-photo-placeholder">
              <div className="photo-label">
                <span>Собственная мастерская</span>
                <strong>Подбор → замена → готово</strong>
              </div>
            </div>
            <div className="rating-card">
              <span className="rating-score">5,0</span>
              <span className="rating-stars" aria-label="5 звёзд">★★★★★</span>
              <small>297 оценок на Яндекс Картах</small>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="Ключевые факты">
        <div className="container proof-row">
          <div><strong>с 2020</strong><span>работаем в Кстово</span></div>
          <div><strong>2 в 1</strong><span>магазин и сервис</span></div>
          <div><strong>08–20</strong><span>ежедневно</span></div>
          <div><strong>5,0</strong><span>рейтинг на Яндексе</span></div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <p className="eyebrow">Главное — без лишних поездок</p>
              <h2>Всё для замены масла<br />в одном месте</h2>
            </div>
            <p>
              Не нужно искать расходники по разным магазинам. Сообщите данные автомобиля — мы проверим допуски, наличие и подготовим всё к вашему приезду.
            </p>
          </div>

          <div className="service-grid">
            {serviceCards.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-topline">
                  <span>{service.eyebrow}</span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="service-footer">
                  <strong>{service.meta}</strong>
                  <a href={service.href} aria-label={`${service.title}: подробнее`}>↗</a>
                </div>
              </article>
            ))}
          </div>
          <p className="price-note">Цены на работы взяты из действующей карточки организации и будут уточнены перед запуском.</p>
        </div>
      </section>

      <section className="store-section" id="store">
        <div className="container store-layout">
          <div className="store-photo">
            <img src="./images/store-assortment.png" alt="Подбор масла и фильтров в магазине при мастерской" />
            <div className="store-badge">
              <strong>В наличии</strong>
              <span>масла · фильтры · жидкости</span>
            </div>
          </div>
          <div className="store-copy">
            <p className="eyebrow">Свой магазин при мастерской</p>
            <h2>Расходники уже ждут вашего автомобиля</h2>
            <p className="store-lead">
              На складе — фасованные и разливные масла, фильтры и технические жидкости. Подбираем по допускам производителя, а не по принципу «должно подойти».
            </p>
            <div className="category-list">
              <span>Моторные масла</span><span>Масла АКПП / CVT / DSG</span>
              <span>Оригинальные масла</span><span>Масла на розлив</span>
              <span>Масляные фильтры</span><span>Фильтры АКПП</span>
              <span>Антифризы</span><span>Автохимия</span>
            </div>
            <a className="text-link" href="#calculator">Подобрать масло и фильтры <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="section akpp-section" id="akpp">
        <div className="container">
          <div className="akpp-panel">
            <div className="akpp-copy">
              <p className="eyebrow">Специализация сервиса</p>
              <h2>Замена масла<br />в АКПП, CVT и DSG</h2>
              <p>
                Не назначаем аппаратную замену всем подряд. Мастер учитывает тип коробки, пробег, состояние жидкости и рекомендации производителя — после этого предлагает подходящий способ обслуживания.
              </p>
              <div className="akpp-actions">
                <a className="button button-primary" href="#calculator">Рассчитать замену <span>→</span></a>
                <span className="akpp-price">Работа — от <strong>3 000 ₽</strong></span>
              </div>
            </div>
            <div className="akpp-methods">
              <article>
                <span>01</span>
                <h3>Аппаратная замена</h3>
                <p>Обновление основного объёма жидкости на профессиональном оборудовании.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Частичная замена</h3>
                <p>Бережное обновление части жидкости, когда этот способ подходит коробке лучше.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Масло + фильтр</h3>
                <p>Подбор жидкости по допуску, фильтра, прокладки и других расходников.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading centered-heading">
            <p className="eyebrow">Как всё происходит</p>
            <h2>От данных автомобиля<br />до готовой работы</h2>
          </div>
          <div className="process-grid">
            {[
              ["01", "Сообщаете автомобиль", "Марка, модель, год, двигатель или VIN."],
              ["02", "Получаете расчёт", "Проверяем допуски, наличие и стоимость."],
              ["03", "Выбираете время", "Резервируем материалы и пост мастера."],
              ["04", "Приезжаете на замену", "Без поездок по магазинам и лишнего ожидания."],
            ].map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="calculator-section" id="calculator">
        <div className="container calculator-layout">
          <div className="calculator-copy">
            <p className="eyebrow">Расчёт до приезда</p>
            <h2>Узнайте стоимость масла, фильтров и работы</h2>
            <p>Заполните несколько полей. Специалист проверит наличие материалов и подготовит расчёт для вашего автомобиля.</p>
            <div className="calculator-promise">
              <span>01</span><p><strong>Без обязательств</strong> — сначала получите расчёт</p>
              <span>02</span><p><strong>Без спама</strong> — только по вашей заявке</p>
              <span>03</span><p><strong>Без сюрпризов</strong> — согласуем материалы заранее</p>
            </div>
          </div>
          {submitted ? (
            <div className="success-card" role="status">
              <span>✓</span>
              <h3>Форма работает</h3>
              <p>Это интерактивный прототип, поэтому заявка никуда не отправлена. После подключения формы здесь будет подтверждение записи.</p>
              <button type="button" className="button button-primary" onClick={() => setSubmitted(false)}>Заполнить ещё раз</button>
            </div>
          ) : (
            <form className="calculator-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
              <div className="form-head">
                <strong>Данные автомобиля</strong>
                <span>1–2 минуты</span>
              </div>
              <div className="form-grid">
                <label><span>Марка автомобиля</span><input name="brand" placeholder="Например, Kia" required /></label>
                <label><span>Модель</span><input name="model" placeholder="Например, Sportage" required /></label>
                <label><span>Год выпуска</span><input name="year" inputMode="numeric" placeholder="2019" /></label>
                <label><span>Двигатель или VIN</span><input name="engine" placeholder="2.0 или VIN" /></label>
                <label className="wide"><span>Какая услуга нужна</span>
                  <select name="service" defaultValue="engine">
                    <option value="engine">Замена масла в двигателе</option>
                    <option value="akpp">Замена масла в АКПП</option>
                    <option value="cvt">Замена масла в вариаторе CVT</option>
                    <option value="dsg">Замена масла в DSG</option>
                    <option value="other">Нужна помощь специалиста</option>
                  </select>
                </label>
                <label className="wide"><span>Телефон</span><input name="phone" type="tel" placeholder="+7 ___ ___-__-__" required /></label>
              </div>
              <label className="consent"><input type="checkbox" required /> <span>Согласен на обработку данных для расчёта и обратного звонка</span></label>
              <button className="button button-primary form-submit" type="submit">Получить расчёт <span>→</span></button>
              <p className="prototype-note">Демо-форма: в прототипе данные не отправляются.</p>
            </form>
          )}
        </div>
      </section>

      <section className="section additional-section">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow">Другие услуги</p><h2>Технические жидкости<br />и обслуживание</h2></div>
            <p>Собрали основные операции, которые можно выполнить вместе с плановой заменой масла.</p>
          </div>
          <div className="additional-grid">
            {additionalServices.map(([title, text, price]) => (
              <article key={title}>
                <span className="plus">+</span>
                <h3>{title}</h3><p>{text}</p><strong>{price}</strong>
              </article>
            ))}
          </div>
          <p className="price-note">Указана ориентировочная стоимость работ. Материалы рассчитываются отдельно.</p>
        </div>
      </section>

      <section className="works-section" id="works">
        <div className="container">
          <div className="works-heading">
            <div><p className="eyebrow">Реальный опыт</p><h2>Работаем с разными коробками и автомобилями</h2></div>
            <a href="https://maslo-zamena.ru/primery-rabot/" target="_blank" rel="noreferrer">Все примеры работ ↗</a>
          </div>
          <div className="works-grid">
            {workExamples.map(([model, box, work], index) => (
              <article key={model}>
                <div className={`car-silhouette car-${index + 1}`} aria-hidden="true"><span>{model.charAt(0)}</span></div>
                <div className="work-copy"><span>{box}</span><h3>{model}</h3><p>{work}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="reviews">
        <div className="container">
          <div className="reviews-head">
            <div><p className="eyebrow">Репутация</p><h2>Нас рекомендуют<br />автовладельцы</h2></div>
            <div className="big-rating"><strong>5,0</strong><span>★★★★★</span><small>297 оценок · 247 отзывов</small></div>
          </div>
          <div className="reviews-grid">
            <blockquote><p>«Быстро подсказали, какое масло подходит, и помогли долить. Спасибо за отзывчивость и внимание».</p><footer><strong>Зоя С.</strong><span>Яндекс Карты</span></footer></blockquote>
            <blockquote><p>«Обслуживаюсь не первый раз. Мастера подробно объясняют, какие детали нужны, цены демократичные, услуги качественные».</p><footer><strong>Наталья Н.</strong><span>Яндекс Карты</span></footer></blockquote>
            <div className="review-cta"><span>Хорошее место 2026</span><h3>Читайте все отзывы и смотрите реальные фотографии</h3><a href="https://yandex.ru/maps/org/avtomaslof/189552853411/reviews/" target="_blank" rel="noreferrer">Открыть Яндекс Карты ↗</a></div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-title"><p className="eyebrow">Вопросы и ответы</p><h2>Что важно знать до приезда</h2><a className="text-link" href={PHONE_LINK}>Задать вопрос по телефону <span>→</span></a></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contacts-section" id="contacts">
        <div className="container contacts-layout">
          <div className="contacts-copy">
            <p className="eyebrow">Приезжайте по записи</p>
            <h2>Кстово,<br />Магистральная, 47</h2>
            <div className="contact-lines">
              <div><span>Телефон</span><a href={PHONE_LINK}>{PHONE_DISPLAY}</a></div>
              <div><span>Режим работы</span><strong>Ежедневно, 08:00–20:00</strong></div>
              <div><span>Ориентир</span><strong>238 м от автостанции Кстово</strong></div>
            </div>
            <div className="contact-actions">
              <a className="button button-primary" href="https://yandex.ru/maps/org/avtomaslof/189552853411/" target="_blank" rel="noreferrer">Построить маршрут <span>↗</span></a>
              <a className="button button-dark-ghost" href={PHONE_LINK}>Позвонить</a>
            </div>
          </div>
          <a className="map-card" href="https://yandex.ru/maps/org/avtomaslof/189552853411/" target="_blank" rel="noreferrer" aria-label="Открыть Автомаслоф на Яндекс Картах">
            <div className="map-roads" aria-hidden="true" />
            <div className="map-pin"><span>A</span></div>
            <div className="map-label"><strong>Автомаслоф</strong><span>Магазин и сервис</span></div>
            <div className="map-open">Открыть карту ↗</div>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand" href="#top"><span className="brand-mark">A</span><span><strong>Автомаслоф</strong><small>экспертный центр замены масла</small></span></a>
          <p>Магазин автомасел и собственная мастерская в Кстово.</p>
          <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
        </div>
        <div className="container footer-bottom"><span>© Автомаслоф, 2026</span><span>Прототип сайта · цены уточняются перед запуском</span><a href="#">Политика конфиденциальности</a></div>
      </footer>

      <div className="mobile-action-bar" aria-label="Быстрые действия">
        <a href={PHONE_LINK}>Позвонить</a>
        <a className="primary" href="#calculator">Рассчитать</a>
        <a href="https://yandex.ru/maps/org/avtomaslof/189552853411/" target="_blank" rel="noreferrer">Маршрут</a>
      </div>
    </main>
  );
}
