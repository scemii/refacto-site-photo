import React from "react";
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function contact() {
  return (
    <Layout>
    <SEO title="Contact" />
    <section className="contact py-5">
    <h1>Contact Me</h1>
    <p></p>
      <div className="row">
          <div className="col-10 col-sm-8 col-md-6 mx-auto">
              <form action="https://formspree.io/pierre_raffalli@msn.com" method="POST">
                  <div className="form-group">
                      <label htmlFor="name">
                          Name
                      </label>
                      <input type="text" className="form-control" name="name" id="name" placeholder="John Smith">   
                      </input>
                  </div>
                  <div className="form-group">
                      <label htmlFor="email">
                          Email
                      </label>
                      <input type="text" className="form-control" name="email" id="email" placeholder="johndoe@gmail.com">
                      </input>
                  </div>
                  <div className="form-group">
                      <label htmlFor="your message">Your message</label>
                      <textarea name="your message" id="your message" className="form-control" rows="5" placeholder="Your message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-dark btn-block text-capitalize mt-5">Submit</button> 
              </form>
          </div>
      </div>
    </section>
    </Layout>
  );
}
