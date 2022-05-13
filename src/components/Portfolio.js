import React from "react";
import PortfolioCard from "../Layout/PortfolioCard";

const Portfolio = () => {
  return (
    <section className="container  padding">
      <div>
        <h2 className="text-center color-primary">Portfolio</h2>
        <div className="marginn  row">
          <div className="col-md-4 col-xs-12">
            <PortfolioCard
              heading="ProShop E-commerce"
              tech="MERN Stack, Redux, Resonsive"
              github="https://github.com/harshit2106/mernecommerce"
              demo="https://ecommerce823.herokuapp.com/"
              img="/images/ecom2.png"
            />
          </div>
          <div className="col-md-4 col-xs-12">
            <PortfolioCard
              heading="Starbucks UI"
              tech="ReactJs, Responsive"
              github="https://github.com/harshit2106/starbucks_ui"
              demo="https://brilliant-praline-8d144c.netlify.app/"
              img="/images/star2.png"
            />
          </div>
          <div className="col-md-4 col-xs-12">
            <PortfolioCard
              heading="Random Messenger"
              tech="MERN Stack, Context Api, Socket.io"
              github="https://github.com/harshit2106/chat_app"
              demo="https://random-chhaatt.herokuapp.com/"
              img="/images/msg2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
