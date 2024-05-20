import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbotron from '../components/Jumbotron';

function Home() {
  return (
    <>
      <Helmet>
        <title>Portfolio Home</title>
      </Helmet>
      <Jumbotron />
      <br />
      <div className='content'>
        <div className='box'>
          <h4>The Website Development Process and Basic Languages Used</h4>
          <p>
            With half the world population online and using the internet, my
            goal is to help bring the world to your <strong>Website</strong>{' '}
            through interaction with your favorite <strong>Social Media</strong>{' '}
            platforms and
            <strong> SEO</strong> Search Engine Optimization to help market your
            internet business.
          </p>
          <br />

          <h4>Why Choose My Web Design and Hosting Services?</h4>
          <p>
            A striking and well-organized web page layout will greatly enhance
            your appeal to your target audience. At first glance, you need to
            capture your potential customer and communicate your products and
            services in seconds. Here’s how I can help:
            <ul>
              <li>
                Links to Social Media, favorite images, and video integration
              </li>
              <li>Responsive design using Bootstrap</li>
              <li>Hosting on AWS Amplify with code management on GitHub</li>
            </ul>
            Hiring me means you’ll have a professional, user-friendly website
            that’s optimized for both performance and aesthetics.
          </p>
          <br />

          <h4>Need Help Building or Updating Your Website?</h4>
          <p>
            Whether you’re building a new site or updating an existing one, I’m
            here to help.
            <br />
            <strong>Step 1:</strong> Identify what works well and what falls
            short on your current site.
            <br />
            <strong>Step 2:</strong> Share your goals and vision for the new
            site.
            <br />
            <strong>Step 3:</strong> Let’s collaborate to bring your vision to
            life with professional web development and agile methodologies.
          </p>
          <p>
            Building a site isn’t easy, but with my expertise, we can create a
            site that meets all your needs and exceeds your expectations.
          </p>
          <br />

          <h4>Ready to Get Started?</h4>
          <p>
            Let’s discuss your project and how we can work together to achieve
            your goals.
            <a href='#contact' className='my-button'>
              Contact Me Today
            </a>
          </p>
          <br />

          <h4>What My Clients Say</h4>
          <p>
            "Working with [Your Name] has been a game-changer for our business.
            The new website is not only beautiful but also incredibly
            functional. We’ve seen a significant increase in traffic and
            engagement." - <em>Happy Client</em>
          </p>
          <p>
            "The professional approach and expertise [Your Name] brought to the
            table made the entire development process smooth and efficient.
            Highly recommend!" - <em>Satisfied Customer</em>
          </p>
          <br />

          <h4>Explore My Portfolio</h4>
          <p>
            Take a look at some of the projects I’ve worked on to get a sense of
            my skills and style.{' '}
            <a href='#portfolio' className='my-button'>
              View Portfolio
            </a>
          </p>
        </div>
        <br />
      </div>
    </>
  );
}

export default Home;
