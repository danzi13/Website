import React from 'react'
import './Proficiency.css';
import {FaJava, FaPython, FaHtml5} from 'react-icons/fa';
import {DiCss3} from 'react-icons/di';
import {SiMysql, SiJavascript} from 'react-icons/si';
import {BsFillTerminalFill, BsStack, BsFillHexagonFill} from 'react-icons/bs';
import {TbApi, TbMath} from 'react-icons/tb';
import {GiBrain} from 'react-icons/gi';


const Proficiency = () => {
    return (
        <div>
            <div className = "Border"></div>
            <div className = "Header" id = "CS">
                <h1>
                    <h2>CS Languages</h2>
                    <h6> &amp; Proficiency</h6>
                </h1>
            </div>
            <div className = "Prof-Containers">
            
            <div className ="Proficiency-List-Lang">
                <li><div className = "java-sec">
                    <FaJava></FaJava>
                    <h3>
                        <h5>Java</h5>
                        <h4>Near-Mastery</h4>
                    </h3>
                    <p>The first coding language learned 
                        around 4 years ago. Totaled four classes 
                        (two high school/two college) based in Java 
                        including @data structures, proved mastery 
                        in high school through scoring 5 on AP 
                        computer science A exam. Created a poker 
                        project, and aided fellow students through
                         various projects with my vast knowledge. 
                    </p>
                </div></li>
                <li><div className = "python-sec">
                    <FaPython></FaPython>
                    <h3>
                        <h5>Python</h5>
                        <h4>Advanced</h4>
                    </h3>
                    <p>Utilization during @computational linear algebra; 
                        learning NumPy and matplot lib inside the google 
                        collaboratory environment. Further use during manipulation of 
                        various data sets collected by @API functionality 
                        and manipulation with @machine learning for some of my @personal 
                        projects. Some assignments in this language consisted of 
                        principle component analysis of stocks and image 
                        data through matrix manipulation. 

                    </p>
                </div></li>
                
                <li><div className = "C-sec">
                    <BsFillHexagonFill></BsFillHexagonFill>
                    <h3>
                        <h5>C</h5>
                        <h4>Near-Advanced</h4>
                    </h3>
                    <p>Usage during the inside of @unix system. Familiarized 
                        during the infamous Advanced Programming columbia 
                        course, learning how to work adeptly with Valgrind, 
                        netcat, VIM and internet protocols. Projects included 
                        HTTP 1.0 get requests, file piping / redirecting, and 
                        using socket API
 
                    </p>
                </div></li>
                <h1>
                    <h2>Personal Web-Development</h2>
                <h6>Front-End</h6>
                </h1>
                

                <li><div className = "css-sec">
                    <DiCss3> Css </DiCss3>
                    <h3>
                        <h5>CSS</h5>
                        <h4>Intermediate</h4>
                    </h3>
                    <p>
                        Usage of selectors, declarations, properties, @fonts, 
                        boxes (padding, borders, margins), text-shadows, backgrounds
                        gradients, hover elements inside of Node.js and React in 
                        this very website!
                    </p>
                </div></li>

                <li><div className = "html-sec">
                    <FaHtml5></FaHtml5>
                    <h3>
                        <h5>HTML</h5>
                        <h4>Intermediate</h4>
                    </h3>
                    <p>
                        Facilitated importing icons, nesting elements, html anatomy, images
                        headings, paragraphs, lists, anchor-links, hyperlinks inside of the 
                        Node.js and React to form the very structre of this web page and 
                        the content!
                    </p>
                </div></li>

                <li><div className = "JavaScript-sec">
                    <SiJavascript></SiJavascript>
                    <h3>
                        <h5>JavaScript</h5>
                        <h4>Intermediate</h4>
                    </h3>
                    <p>Through ______ formed the @projects carousel inside
                        React and Node.js environment to display __
                        in this very website!
                    </p>
                </div></li>

                <h1><h2>Currently Learning</h2></h1>

                <li><div className = "SQL-sec">
                    <SiMysql> SQL </SiMysql>
                    <h3>
                        <h5>SQL</h5>
                        <h4>Elementary</h4>
                    </h3>
                    <p>
                        Currently learning SQL, projects to come.
                    </p>
                </div></li>
                       

            </div>

            <div className = "Border2"></div>

            <div className = "Header" id="Skills">
                <h1>
                    <h2>Computer Science Skills</h2>
                    <h6>Fundamentals</h6>
                </h1>
                
            </div>

            <div className ="Proficiency-List-Skills">
                <li><div className = "Linux-sec">
                <BsFillTerminalFill></BsFillTerminalFill>
                    <h3>Unix Systems</h3>
                    <p>In the @C programming language and Unix systems programming. 
                        Includes CLI basics, linking, makefiles, git, standard I/O, 
                        file I/O, creating processes with fork and exec, sockets 
                        API, and HTTP 1.0
                    </p>
                </div></li>
                <li><div className = "ML-sec">
                <GiBrain></GiBrain>
                    <h3>Machine Learning</h3>
                    <p>Various personal python projects with the utilization of various ML algorithms. 
                        Including; Linear Regression for Twitter Sentiment Analysis on the 
                        most recent 100 tweets of a specific word. Multi-Linear Regression: 
                        Mileage Weekly breakdown to plan how many miles I should run a week 
                        based on my previous year of activities. KNN cluster: Merging two playlists, 
                        using various music features to find recommended songs that fit the “middle 
                        vibe” of each playlist. Decision-making Trees: to predict if a stock will 
                        increase based on all previous stock data, data gathered from APIs.

                    </p>
                </div></li>
                <li><div className = "Api-sec">
                <TbApi></TbApi>
                    <h3>API development</h3>
                    <p>Utilization in my personal python projects use of Twitter Api specifically
                        query requests. Spotify Api "spotipy" using oauth2 verification, auth_manager and 
                        scopes to handle requests, Strava Api with grant type: authorization code.
                        To recieve data to be put into @ML algorithms all using API keys, API key secret, 
                        access tokens, callback uri and various requests for specific data within the 
                        application.

                    </p>
                </div></li>
                <li><div className = "Ds-sec">
                <BsStack></BsStack>
                    <h3>Data Structures</h3>
                    <p>Data types and structures: arrays, stacks, singly and doubly linked 
                        lists, queues, trees, sets, and graphs. Programming techniques for 
                        processing such structures: sorting and searching, hashing, and garbage 
                        collection. Storage management. Rudiments of the analysis of algorithms. 
                        Taught in Java.
                    </p>
                </div></li>
                
                <li><div className = "Math-sec">
                <TbMath></TbMath>
                    <h3>Mathematics</h3>
                    <p>Various Columbia class including; discrete mathematics, data structures, 
                        computational linear algebra, calculus I, calculus II, calculus III. Well versed 
                        in proofs, graph theory (including isomorphism, traversability, planarity, and 
                        colorings), equivalence relations, partial orderings, vectors, matrices, singular value decomposition, 
                        3D transformations, eigenvalues, eigenvectors, Markov chains, principle component analysis, 
                        optimization, and much more
                    </p>
                </div></li>
                
            
            </div>

            </div>

        </div>
    )
}

export default Proficiency
