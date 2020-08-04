import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matérias</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week-day">Matérias</label>
                        <input type="text" id="week-day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Matérias</label>
                        <input type="text" id="time" />
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="" alt="Anderson Souza"/>
                        <strong>Anderson Souza</strong>
                        <span>Química</span>                        
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de química avançada
                        <br /><br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
                    </p>

                    <footer>
                        <p>
                            Preçco/hora
                            <strong>R$ 20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt=""/>
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;