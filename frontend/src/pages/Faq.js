import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default function Faq() {
  return (
    <>
      <Container>
        <Helmet>
          <title>FAQ</title>
        </Helmet>
        <br />
        <h4 className='box'>Frequently Asked Questions</h4>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>What is a MERN stack?</Accordion.Header>
            <Accordion.Body>
              The MERN stack is a JavaScript stack used for developing
              full-stack web applications. It consists of MongoDB, Express.js,
              React.js, and Node.js. MongoDB is a NoSQL database, Express.js is
              a web application framework for Node.js, React.js is a front-end
              library, and Node.js is a JavaScript runtime.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header>What is a MEAN stack?</Accordion.Header>
            <Accordion.Body>
              The MEAN stack is similar to the MERN stack, but it uses Angular
              instead of React. It stands for MongoDB, Express.js, Angular, and
              Node.js. Angular is a front-end web application framework
              maintained by Google.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header>What is a LAMP stack?</Accordion.Header>
            <Accordion.Body>
              The LAMP stack is a popular web development stack that includes
              Linux, Apache, MySQL, and PHP. Linux is the operating system,
              Apache is the web server, MySQL is the database management system,
              and PHP is the server-side scripting language.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              How long does it take to develop a website?
            </Accordion.Header>
            <Accordion.Body>
              The time it takes to develop a website depends on the complexity
              and scope of the project. A simple landing page may take a few
              days, while a complex e-commerce site can take several months.
              It's important to discuss the timeline with your developer to get
              an accurate estimate.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='4'>
            <Accordion.Header>
              What if I just want a landing page?
            </Accordion.Header>
            <Accordion.Body>
              A landing page is a great way to provide information about your
              product or service with a call to action. Developing a landing
              page is typically faster and less expensive than a full website.
              We can work with you to design and develop a landing page that
              meets your needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='5'>
            <Accordion.Header>
              Do I host the website and manage it for you?
            </Accordion.Header>
            <Accordion.Body>
              We can offer hosting and website management services, or you can
              choose to host and manage your website independently. We'll
              provide the necessary support and guidance regardless of your
              choice.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='6'>
            <Accordion.Header>Why do I need a developer?</Accordion.Header>
            <Accordion.Body>
              A developer has the expertise to build a functional, secure, and
              optimized website. They can handle complex coding tasks, ensure
              your website is responsive and compatible across devices, and
              provide ongoing maintenance and updates.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='7'>
            <Accordion.Header>
              How are you different from your competitors?
            </Accordion.Header>
            <Accordion.Body>
              We pride ourselves on delivering personalized service, attention
              to detail, and a collaborative approach. Our team stays up-to-date
              with the latest technologies and best practices to ensure your
              website is modern and effective.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='8'>
            <Accordion.Header>Are your websites responsive?</Accordion.Header>
            <Accordion.Body>
              Yes, all of our websites are designed to be fully responsive,
              meaning they work seamlessly on desktops, tablets, and mobile
              devices. This ensures a consistent user experience across all
              platforms.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='9'>
            <Accordion.Header>
              What is your method of payment schedule?
            </Accordion.Header>
            <Accordion.Body>
              Our payment schedule typically includes an initial deposit to
              start the project, followed by milestone payments as the project
              progresses. The final payment is due upon project completion and
              your satisfaction.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='10'>
            <Accordion.Header>I only have a small budget?</Accordion.Header>
            <Accordion.Body>
              We offer flexible pricing options and can work with you to find a
              solution that fits your budget. We'll prioritize your requirements
              and suggest features that can be added later as your budget
              allows.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='11'>
            <Accordion.Header>
              Do I have to contact you to make changes?
            </Accordion.Header>
            <Accordion.Body>
              It depends on the setup of your website. For simple content
              updates, we can provide you with access to a content management
              system (CMS) like WordPress or custom admin panel. For more
              complex changes, you might need to contact us.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='12'>
            <Accordion.Header>
              What is the difference between front-end and back-end development?
            </Accordion.Header>
            <Accordion.Body>
              Front-end development involves creating the visual and interactive
              aspects of a website that users interact with, using HTML, CSS,
              and JavaScript. Back-end development involves server-side logic,
              database management, and API integration, using languages like
              Node.js, Python, or PHP.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='13'>
            <Accordion.Header>
              How do I ensure my website is secure?
            </Accordion.Header>
            <Accordion.Body>
              Ensuring website security involves several practices, including
              using HTTPS, regularly updating software, implementing strong
              password policies, and protecting against common vulnerabilities
              like SQL injection and cross-site scripting (XSS). Regular
              security audits and using security plugins can also help.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='14'>
            <Accordion.Header>
              Can you help with SEO for my website?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer SEO services to help improve your website's
              visibility in search engine results. Our SEO strategies include
              keyword research, on-page optimization, technical SEO, and link
              building to drive organic traffic to your site.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <br />
    </>
  );
}
