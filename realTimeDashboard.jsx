import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer,
} from 'recharts';
import './styles.css';

export default function RealTimeDashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((oldData) => {
        const now = new Date().toLocaleTimeString();
        const newPoint = { time: now, value: Math.floor(Math.random() * 100) };
        return [...oldData.slice(-9), newPoint]; // keep last 10 points
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <h1>Real-Time Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} aria-label="Real-time data chart" role="img">
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} />
        </LineChart>
      </ResponsiveContainer>
    </main>
  );
}
