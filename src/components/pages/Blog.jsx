import React from "react";
// import * as React from 'react';
import CountUp from "react-countup";

import { Heading } from "../common/Heading";
import { blog } from "../data/dummydata";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export const Blog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading title="Blog" />
          <div className="content grid3">
            {blog.map((item) => (
              <div className="box" data-aos="flip-left">
                <div className="img" data-aos="fade-up">
                  <img src={item.cover} alt="" data-aos="fade-down" />
                </div>
                <div className="text">
                  <h3 data-aos="fade-right">{item.title}</h3>
                  <label data-aos="fade-left">
                    By {item.author} {item.date}
                  </label>
                  <p data-aos="fade-up-right">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
