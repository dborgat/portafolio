import React from "react";
import S from "./footer.module.css";
import { GoGlobe, GoInbox, GoHeart } from "react-icons/go";
import { FaInstagram, FaFacebookSquare, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className={S.footer}>
      <FaInstagram />
      <FaFacebookSquare />
      <FaGithub />
      <GoHeart />
    </div>
  );
};

export default Footer;
