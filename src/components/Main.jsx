function Main() {
    return (
        <main className="main">
            <div className="main__container container">
                <div className="main__left">
                    <h1 className="main__left_title">Зарабатывайте <br /> больше <br /> <span className="main__left_span">с WELBEX</span></h1>
                    <h2 className="main__left_subtitle">Развиваем и контролируем <br /> продажи за вас</h2>
                </div>
                <div className="main__right">
                    <h3 className="main__right_title">Вместе с <span className="main__right_span1">бесплатной </span><br />
                        <span className="main__right_span2"> консультацией </span>мы дарим:</h3>
                    <div className="main__right_offers">
                        <div className="main__right_offers_top">
                            <div className="main__right_offer">
                                <h4 className="main__right_subtitle">Виджеты</h4>
                                <p className="main__right_text">30 готовых <br /> решений</p>
                            </div>
                            <div className="main__right_offer">
                                <h4 className="main__right_subtitle">Dashboard</h4>
                                <p className="main__right_text">с показателями <br /> вашего бизнеса</p>
                            </div>
                        </div>
                        <div className="main__right_offers_bottom">
                            <div className="main__right_offer">
                                <h4 className="main__right_subtitle">Skype Аудит</h4>
                                <p className="main__right_text">отдела продаж <br /> и CRM системы</p>
                            </div>
                            <div className="main__right_offer">
                                <h4 className="main__right_subtitle">35 дней</h4>
                                <p className="main__right_text">использования <br /> CRM</p>
                            </div>
                            <div className="main__mobile-version_offers">
                                <h4 className="main__right_subtitle">Skype Аудит</h4>
                                <h4 className="main__right_subtitle">30 Виджетов</h4>
                                <h4 className="main__right_subtitle">Dashboard</h4>
                                <h4 className="main__right_subtitle">Месяц Amocrm</h4>
                            </div>
                        </div>
                    </div>
                    <button className="main__btn">Получить консультацию</button>
                </div>
            </div>
        </main>
    )
}

export default Main;