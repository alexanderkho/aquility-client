import React, { useEffect, useState, useRef } from "react";
import io from 'socket.io-client';
import { debounce } from 'lodash'

import { Panel } from "../panel";
import { ConcentrationToolbar } from "./concentration-toolbar";
import { ConcentrationChart } from "./concentration-chart";
import { ConcentrationMap } from "./concentration-map";
import styles from "./index.module.scss";

const socket = io('http://127.0.0.1:5000', {autoConnect: false});

export function ConcentrationPanel() {
  const [listening, setListening] = useState(false)
  const initTime = useRef(Date.now())
  const [concData, setConcData] = useState([]);
  const onPlayButtonPress = () => {
    if (!listening) {
      socket.open();
    } else {
      socket.close();
    }
    setListening(!listening)
  } 
  useEffect(() => {
    socket.on('data', payload => {
      const { time, Benzene, Acetone } = payload
      const newConcData = {
        time: (time - initTime.current)/1000,
        Benzene,
        Acetone
      }
      setConcData(prev => [...prev, newConcData])
      // setConcData(prev => {
      //   if (prev.length > 50) {
      //     prev.shift();
      //     return [...prev, newConcData];
      //   } else {
      //     return [...prev, newConcData];
      //   }
      // });
    })
  }, []);

  return (
    <>
      <Panel title="CONCENTRATION TIME-SERIES" showFavorited={false}>
        <ConcentrationToolbar onPlayButtonPress={onPlayButtonPress}/>
        <div className={styles["concentration-chart-container"]}>
          <ConcentrationChart data={concData}/>
        </div>
      </Panel>
      <Panel title="CONCENTRATION MAP" showFavorited={false}>
        <ConcentrationToolbar />
        <div className={styles["concentration-chart-container"]}>
          <ConcentrationMap />
        </div>
      </Panel>
    </>
  );
}
