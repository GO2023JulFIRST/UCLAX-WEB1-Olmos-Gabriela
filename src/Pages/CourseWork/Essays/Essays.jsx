import styled from "styled-components";

/* Component ---------------------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                1. The web is made out of three programming languages: HTML,
                CSS, and JavaScript. HTML stands for HyperText Markup Language.
                HTML is a markup language for the web that defines the structure
                of web pages. CSS stands for Cascading Style Sheets and is a
                style sheet language responsible for the presentation of
                documents written in a markup language. JavaScript is a
                programming language that gives the ability to create powerful
                interactivity for web pages. In short, JavaScript brings HTML to
                life, CSS makes HTML more attractive for the visitor reading the
                web page, and HTML provides JavaScript and CSS their structure
                on a web page.
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                2. Git is an open-source tool that focuses on version control
                and code sharing. It’s like a time machine that can take
                software developers back to any point in the project’s history,
                so they can see what it looked like at that time. It also helps
                developers work on different parts of the project at the same
                time without getting in each other’s way. Git commands are
                self-evident in their purpose and thus easy to understand. Some
                examples of these commands are: commit, reset, push, pull,
                checkout, revert, fetch, merge, etc. GitHub provides cloud-based
                hosting environment for Git repositories. It allows developers
                to share, collaborate, and review code in various programming
                languages. GitHub also provides access control, bug tracking,
                feature requests, task management, continuous integration, and
                wikis for every project. Although Git and GitHub are clearly
                different in feature and purpose, they do complement each other.
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                3. JQuery is a utility library that enables developers to build
                web apps using JavaScript (js). React is a library that allows
                embedding HTML within JavaScript. This allows the manipulation
                of HTML upon a change in either state or data. Instead of
                developing web apps, developers can now build large-scale,
                single-page apps using React. In short, jQuery is primarily used
                for manipulating the DOM and building web applications using js
                and functionality, while React is focused on building complex
                user interfaces using reusable components and a virtual DOM.
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                4. This is my answer
            </Essay>
            <Essay question="Q5: What are the different ways we can link files/resources to our application?">
                5. This is my answer
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png, and svg images?">
                6. This is my answer
            </Essay>
            <Essay question="Q7: Define the following Agile roles: Product Owner, Product Manager, Business Analyst, Scrum Master, UX designer, Developer/Engineer, QA/SDET, and DevOps?">
                7. This is my answer
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
