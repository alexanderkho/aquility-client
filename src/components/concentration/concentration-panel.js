import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

import { Panel } from "../panel";
import { ConcentrationToolbar } from "./concentration-toolbar";
import { ConcentrationChart } from "./concentration-chart";
import { ConcentrationMap } from "./concentration-map";
import styles from "./index.module.scss";

const socket = io("http://127.0.0.1:5000", { autoConnect: false });

export function ConcentrationPanel() {
  let initTime = useRef();
  const [listening, setListening] = useState(false);
  const [data, setData] = useState({ concentration: [], location: [] });

  const onPlayButtonPress = () => {
    if (!listening) {
      if (!initTime.current) {
        initTime.current = Date.now();
      }
      socket.open();
    } else {
      socket.close();
    }
    setListening(!listening);
  };

  useEffect(() => {
    socket.on("data", (payload) => {
      const { time, Benzene, Acetone, latitude, longitude } = payload;
      const newConcData = {
        time: (time - initTime.current) / 1000,
        Benzene,
        Acetone,
      };
      const newLocData = {
        lat: latitude,
        lng: longitude,
      };
      setData((prev) => {
        if (prev.location.length > 20) {
          prev.location.shift();
        }
        return {
          location: [...prev.location, newLocData],
          concentration: [...prev.concentration, newConcData],
        };
      });
    });
  }, []);
  return (
    <>
      <Panel title="CONCENTRATION TIME-SERIES" showFavorited={false}>
        <ConcentrationToolbar
          onPlayButtonPress={onPlayButtonPress}
          listening={listening}
        />
        <div className={styles["concentration-chart-container"]}>
          <ConcentrationChart data={data.concentration} />
        </div>
      </Panel>
      <Panel title="CONCENTRATION MAP" showFavorited={false}>
        <ConcentrationToolbar
          onPlayButtonPress={onPlayButtonPress}
          listening={listening}
        />
        <div className={styles["concentration-map-container"]}>
          <ConcentrationMap data={data.location} />
        </div>
      </Panel>
    </>
  );
}
