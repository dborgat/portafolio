import React from "react";
import S from "./content.module.css";

const Content = () => {
  return (
    <div className={S.container}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iKJ6qEfbvBfLD_yIv1Rs2_lVykUmPjgcVg&usqp=CAU"
        alt="code tag"
      />
      <h3 className={S.title}>David Borgat | <span className={S.subtitle}>FullStack Dev</span></h3>
      <p className={S.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita eum, ex pariatur deserunt quibusdam quam ipsa cupiditate iure quod necessitatibus qui reiciendis dolorum quasi. Labore ab molestias quisquam sit debitis? Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptate reprehenderit a voluptatem adipisci ut, aperiam ratione minus recusandae numquam earum dolor quibusdam quod velit? Maiores illum delectus soluta dolor? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio non dolore, iusto natus et fugiat quia. Soluta sed modi ipsa, harum recusandae nemo sint enim accusamus doloremque quibusdam numquam sequi.
      </p>
    </div>
  );
};

export default Content;
