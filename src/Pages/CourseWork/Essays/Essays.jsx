import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                1. The web is made out of three programming languages: HTML,
                CSS, and JavaScript. <b>HTML</b> stands for HyperText Markup
                Language. HTML is a markup language for the web that defines the
                structure of web pages. <b>CSS</b>stands for Cascading Style
                Sheets and is a style sheet language responsible for the
                presentation of documents written in a markup language.{" "}
                <b>JavaScript</b> is a programming language that gives the
                ability to create powerful interactivity for web pages. In
                short, JavaScript brings HTML to life, CSS makes HTML more
                attractive for the users reading the web page, and HTML provides
                JavaScript and CSS their structure on a web page.
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                2. <b>Git</b> is an open-source tool that focuses on version
                control and code sharing. It’s like a time machine that can take
                software developers back to any point in the project’s history,
                so they can see what it looked like at that time. It also helps
                developers work on different parts of the project at the same
                time without getting in each other’s way. Some examples of Git
                commands are: commit, reset, push, pull, checkout, revert,
                fetch, merge, etc. <b>GitHub</b> provides cloud-based hosting
                environment for Git repositories. It allows developers to share,
                collaborate, and review code in various programming languages.
                Although Git and GitHub are clearly different in feature and
                purpose, they do complement each other.
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                3. <b>JQuery</b> is a utility library that enables developers to
                build web apps using JavaScript (js). <b>React</b> is a library
                that allows embedding HTML within JavaScript. This allows the
                manipulation of HTML upon a change in either state or data.
                Instead of developing web apps, developers can now build
                large-scale, single-page apps using React. In short, jQuery is
                primarily used for manipulating the DOM and building web
                applications using js and functionality, while React is focused
                on building complex user interfaces using reusable components
                and a virtual DOM.
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                4. <b>Front-End Developer</b> focuses on the visual aspects of a
                website such as layout, content organization, navigation, and
                graphics— the part that users see and interact with.{" "}
                <b>Back-End Developer</b> focuses on a site's structure, system,
                database management, security, and logic. They develop the side
                of the website that users can’t see.
            </Essay>
            <Essay question="Q5: What is the difference between Absolute, Root and Decument Relative Linking?">
                5. <b>Absolute Links</b> are complete addresses that contain all
                the elements of a URL. In other words, an absolute link is a
                global absolute address of a resource.{" "}
                <b>A Root Relative Link</b> comprises all the links relative to
                the root project. These links are not specific to a domain. They
                are used in place of relative ones in large sites in which there
                is a chance the files will be moved to a developmental server
                and then to a production server. Because they refer to the root
                of the site rather than the current location of the page they
                are placed in, they work regardless of where the file is placed
                as long as they remain under the right domain.{" "}
                <b>Relative links</b> are links relative to the document we are
                creating. The document relative files are self-contained files.
                A relative link starts with the forward slash and leads the
                browser to stay within the current site.
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png, and svg images?">
                6. <b>Scalable Vector Graphics or SVG</b> - SVGs are great for
                logos and line art because they are drawn from mathematically
                declared shapes and curves, not pixels. They can also be
                infinitely resized without losing quality. SVGs can be animated,
                support transparency, and any combinations of colors and
                gradients.
                <b>Joint Photographic Experts Group or JPGs</b> -- JPGs are
                lossy raster files which means that some quality will be lost or
                compromised when any file is converted to a JPG format. JPGs can
                support millions of colors, so this file type is great for
                photographs and is the default file format for uploading picture
                to the web. They also take up very little storage space and are
                quick to upload or download.
                <b>Graphics Interchange Format or GIFs</b>
                -- GIFs are “lossless” which means that they retain all the data
                contained in the file, but they are smaller than JPGs,
                specifically because they only accommodate up to 256 indexed
                colors. GIFs are not good for photographs, but they can be
                animated. <b>Portable Network Graphic or PNG</b> -- PNGs files
                are raster graphics and were made as an improvement to the GIF.
                PNGs work well with line art images and photographs for websites
                but can result in really large file sizes. Like the GIF, PNG is
                lossless, so data is retained during compression. They also
                offer alpha transparency allowing each individual pixels to have
                its own level of opacity.
            </Essay>
            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps?">
                7. The <b>Product Owner</b> is responsible for owning and
                defining the product roadmap in line with client demands.
                <b>Product Managers (PM)</b> have a good understanding of the
                project they are leading and what must be done to make them
                happen.
                <b>Business Analysts (BAs)</b> meet with clients to understand
                the kind of websites they want, analyze them, turn them into
                specifications, and present these ideas to the web developers in
                a structured format.
                <b>The Team Lead or Scrum Master</b> takes the instructions from
                the Product Owner and ensure that the tasks are performed
                accordingly
                <b>The UX designer</b> is in charge of mapping out the website
                in a raw sketch (a wireframe), so it’s clear for the visitors
                how they can use the website and navigate through it.
                <b>
                    The Quality Assurance (QA) Manager / Software Development
                    Engineer in Test (SDET)
                </b>{" "}
                are testers who ensure every part of the website is functioning
                properly.
                <b>Web Developers</b> design, create, and maintain websites or
                web apps. They are responsible for developing websites from
                start to finish.
                <b>DevOps (Development and Operations)</b> promotes a culture of
                continuous integration, delivery, and improvement. They are the
                architects of deployment.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
