import React from 'react';
import { Repositories } from '../data/github.js';
import './GitHubPortfolio.css';
import { Text } from '@fluentui/react';

export const GitHubPortfolio = () => {
  return (
  <div className="portfolio">
    {Repositories.map((data, key) => {
      return (
        <div className="box" key={key}>
          <Text className="text">{data.name}</Text>
          <a href={data.url} target="_blank">
            <div className="boxContent">
              <img className="icon" src={data.image} alt="text"/>
            </div>
          </a>
        </div>
      )
    })}
  </div>
  );
}

//             {data.name + ", " + data.url}
