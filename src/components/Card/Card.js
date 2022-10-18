/*import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

import { useLazyQuery } from '@apollo/client';
import {GET_CHARACTERS} from './queries'

function Card(){
  const [btnVisible,setBtnIsVisible] = useState(true);
  const [getCharacters,{loading,data,error}] = useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
  if(!loading && data){
    setBtnIsVisible(false);
  }
  }, [loading,data])

  return (
    <div>
      
    </div>
  )
  
}
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './Card.module.css';
import { useLazyQuery } from '@apollo/client';
import { GET_CHARACTERS } from './queries';

function Card() {
  const [btnVisible, setBtnIsVisible] = useState(true);
  const [getCharacters, { loading, data, error }] =
    useLazyQuery(GET_CHARACTERS);

  useEffect(() => {
    if (!loading && data) {
      setBtnIsVisible(false);
    }
  }, [loading, data]);

  return (
    <div>
      {btnVisible && (
        <button className="btn btn-primary" onClick={() => getCharacters()}>
          Show Characters
        </button>
      )}
      {data &&
        data.characters.results.map(x => (
          <div
            className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark d-inline-block"
            key={x.id}
          >
            <div
              className={`${styles.card} d-flex flex-column justify-content-center`}
            >
              <img className={`${styles.img} img-fluid`} src={x.image} />
              {x.status === 'Dead' && (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {x.status}
                </div>
              )}
              {x.status === 'Alive' && (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {x.status}
                </div>
              )}
              {x.status === 'unknown' && (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {x.status}
                </div>
              )}
              <div className={`${styles.content}`}>
                <div className="fs-5 fw-bold mb-4">{x.name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{x.location.name}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Card;



