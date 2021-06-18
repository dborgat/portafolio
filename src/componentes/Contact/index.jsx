import React from "react";
import S from "./contact.module.css";

const Contact = () => {
  return (
    <div className={S.content}>
      <div className={S.card}>
        <div className={`${S.card__side} ${S.card__side__front}`}>
          {/* <!-- Front Content --> */}
          <div className={S.card__cont}>
            <span className={S.blue}>{`setTimeout(()=>`}</span>
            <span>
              (<span className={S.green}>'besos'</span>)
            </span>, 1000)
          </div>
        </div>
        <div className={`${S.card__side} ${S.card__side__back}`}>
          {/* <!-- Back Content --> */}
          <div className={S.card__cta}>
            <p>
              <span className={S.purple}>const</span> Developer{" "}
              <span className={S.cyan}>=</span>{" "}
              {`{`}
                   <br />
                  <span className={`${S.space} ${S.red}`}>name</span>
                  <span className={S.cyan}>:</span>{" "}
                  <span className={S.green}>'David'</span>,
                  <br />
                  <span className={`${S.space} ${S.red}`}>crush</span>
                  <span className={S.cyan}>:</span>{" "}
                  <span className={S.green}>Feli</span>',
                  <br />
                  <span className={`${S.space} ${S.red}`}>deseos</span>
                  <span className={S.cyan}>:</span>
                  <span className={S.green}>abrazar a feli y comerla a besos</span>,
                  <br />
                  <span className={`${S.space} ${S.red}`}>cariño</span>
                  <span className={S.cyan}>:</span>{" "}
                  <span className={S.green}>'infinito'</span>
                  <br /> 
                {`}`}
              ;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
