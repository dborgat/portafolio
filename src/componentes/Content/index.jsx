import React from "react";
import S from "./content.module.css";

const Content = () => {
  return (
    <>
      <div className={S.container}>
        <h1 className={S.tag}>
          {" "}
          {`</`}
          <span className={S.tagSpan}>{`>`}</span>{" "}
        </h1>
        <h3 className={S.title}>
          David Borgat | <span className={S.subtitle}>FullStack Dev</span>
        </h3>
        {/* <p className={S.paragraph}>
        amante de la <span className={S.tagSpan}>teconolgía</span> encontre en la programación un lugar a <span className={S.tagSpan}>dónde aprender</span> y seguir creciendo son moneda corriente. 
        Soy <span className={S.tagSpan}>egresado de P5</span> a donde <span className={S.tagSpan}>conocí</span> a <span className={S.tagSpan}>FELI</span> que si por favor la conoces, le decís que la quiero muchisimo y que no paro <span className={S.tagSpan}>de pensar en ella?</span>
      </p> */}
        <div className={S.content}>
          <div className={S.card}>
            <div className={`${S.card__side} ${S.card__side__front}`}>
              {/* <!-- Front Content --> */}
              <div className={S.card__cont}>
                <span className={S.red}>{`personalInfo && card`}</span>
                <span>
                  <span className={S.green}></span>
                </span>
              </div>
            </div>
            <div className={`${S.card__side} ${S.card__side__back}`}>
              {/* <!-- Back Content --> */}
              <div className={S.card__cta}>
                <p>
                  <span className={S.purple}>const</span> Developer{" "}
                  <span className={S.cyan}>=</span> {`{`}
                  <br />
                  <span className={`${S.space} ${S.red}`}>name</span>
                  <span className={S.cyan}>:</span>{" "}
                  <span className={S.green}>'David'</span>,
                  <br />
                  <span className={`${S.space} ${S.red}`}>age</span>
                  <span className={S.cyan}>:</span>{" "}
                  <span className={S.green}>29</span>',
                  <br />
                  <span className={`${S.space} ${S.red}`}>email</span>
                  <span className={S.cyan}>:</span>
                  <span className={S.green}>'dborgat@gmail.com'</span>
                  ,
                  <br />
                  <span className={`${S.space} ${S.red}`}>gitHub</span>
                  <span className={S.cyan}>:</span>{" "}
                  <a
                    href={"https://github.com/dborgat"}
                    target="_blank"
                    rel="noreferrer"
                    className={S.ancor}
                  >
                    <span className={S.green}>'/dborgat'</span>
                  </a>
                  <br />
                  {`}`};
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
