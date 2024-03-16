import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import '../styles/Section.css';
import GridWithPagination from './GridWithPagination'; // Importe o componente GridWithPagination

function Section() {
  const [produtos, setProdutos] = useState([]);

  async function fetchData(url) {
    try {
      const response = await axios.get(url, { Authorization: config.accessToken });
      if (response.status === 200) {
        return response.data;
      } else {
        console.error("Erro ao acessar a API:", response.status);
        return [];
      }
    } catch (error) {
      console.error("Erro:", error);
      return [];
    }
  }

  async function fetchThumbnail(thumbnail_id) {
    const url = `https://api.mercadolibre.com/pictures/${thumbnail_id}`;
    const data = await fetchData(url);
    return data.variations[0].url;
  }

  async function fetchThumbnails(produtos) {
    const promises = produtos.map(async produto => {
      const thumbnailUrl = await fetchThumbnail(produto.thumbnail_id);
      produto.thumbnail_url = thumbnailUrl;
      return produto;
    });
    return await Promise.all(promises);
  }

  useEffect(() => {
    const fetchItens = async () => {
      const url = `https://api.mercadolibre.com/sites/${config.siteId}/search?seller_id=${config.sellerId}`;
      const data = await fetchData(url);
      setProdutos(await fetchThumbnails(data.results));
    };
    fetchItens();
  }, []);

  return (
    <div>
      <GridWithPagination items={produtos} /> {/* Renderize o GridWithPagination e passe os produtos como prop */}
    </div>
  );
};

export default Section;
