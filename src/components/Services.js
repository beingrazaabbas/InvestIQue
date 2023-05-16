import React, { useState, useEffect } from "react";
import { Slider, InputNumber, Button, Card, Row, Col, Spin } from "antd";
import Navbar from "./Navbar";
import styles from "./Services.module.scss";
import res from '../components/results.csv';

const Services = () => {
  const [riskFactor, setRiskFactor] = useState(50);
  const [investmentPeriod, setInvestmentPeriod] = useState(1);
  const [recommendedStocks, setRecommendedStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecommendations = () => {
    setLoading(true);
    // Simulate an asynchronous API call with setTimeout
    setTimeout(() => {
      generateRecommendations(riskFactor, investmentPeriod).then(result => {
        setRecommendedStocks(result);
      });
      setLoading(false);
    }, 1500);
  };

  const handleCalculate = () => {
    console.log(`Risk Factor: ${riskFactor}, Investment Period: ${investmentPeriod}`);
    fetchRecommendations();
  };

  const generateRecommendations = async (riskFactor, investmentPeriod) => {
    // Implement your recommendation logic here based on the riskFactor and investmentPeriod
    // Return an array of recommended stocks
    const response = await fetch(res);
    const text = await response.text();
    const stocks = text.split('\n');
    return stocks;
  };

  return (
    <div className={styles.container}>
      <Navbar />
      
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card title="Unlock the Power of Data-driven Investment Recommendations with Investique" className={styles.card}>
            <h3>Risk Factor</h3>
            <Slider
              min={0}
              max={100}
              defaultValue={riskFactor}
              onChange={(value) => setRiskFactor(value)}
            />
            <h3>Investment Period</h3>
            <InputNumber
              min={1}
              defaultValue={investmentPeriod}
              onChange={(value) => setInvestmentPeriod(value)}
            />
            <Button type="primary" onClick={handleCalculate} className={styles.button}>
              Calculate
            </Button>
          </Card>
          <Card title="Recommended Stocks" className={styles.card}>
            {loading ? (
              <Spin size="large" />
            ) : recommendedStocks.length > 0 ? (
              <div className={styles.recommendedStocks}>
                {recommendedStocks.map((stock, index) => (
                  <p key={index} className={styles.recommendedStock}>
                    {Math.random() < riskFactor / 10.0 ? <strong>{stock}</strong> : ""}
                  </p>
                ))}
              </div>
            ) : (
              <p>No recommendations found.</p>
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
