import React from "react";
import FilmeHeader from "./components/Filme/FilmeHeader";
import FilmeBanner from "./components/Filme/FilmeBanner";
import FilmeDetalhes from "./components/Filme/FilmeDetalhes";
import FilmeComentarios from "./components/Filme/FilmeComentarios";
import FilmePlaylists from "./components/Filme/FilmePlaylists";
import FilmesRelacionados from "./components/Filme/FilmesRelacionados";

const FilmePage = () => {
  return (
    <div>
      <FilmeHeader />
      <FilmeBanner />
      <FilmeDetalhes />
      <FilmeComentarios />
      <FilmePlaylists />
      <FilmesRelacionados />
    </div>
  );
};

export default FilmePage;
