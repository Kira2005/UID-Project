// src/CourseDetail.js
import React from 'react';
import './CourseDetail.css';

const CourseDetail = () => {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#CourseDetail">Course Detail</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#CourseDetail"><i className="fa fa-book icon"></i> Course Detail</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Syllabus"><i className="fa fa-list"></i> Syllabus</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Resources"><i className="fa fa-desktop icon"></i> Resources</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ObjectivesOutcomes"><i className="fa fa-graduation-cap"></i> Objectives and Outcomes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="content">
        <h1 className="text-center head">Technical Communication</h1>
        <div className="box">
          <h1 id="CourseDetail">Course Detail</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>COURSE NAME</td>
                <td>Technical Communication</td>
              </tr>
              <tr>
                <td>CODE</td>
                <td>19ENG111</td>
              </tr>
              <tr>
                <td>PROGRAM</td>
                <td>B. Tech. in Computer Science and Engineering, B. Tech. in Electronics and Communication Engineering</td>
              </tr>
              <tr>
                <td>SEMESTER</td>
                <td>One and Two</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="box">
          <h1 id="Syllabus">Syllabus</h1>
          <h2>Unit 1</h2>
          <p>Mechanics of Writing: Grammar rules - articles, tenses, auxiliary verbs (primary & modal) prepositions, subject-verb agreement, pronoun-antecedent agreement, discourse markers and sentence linkers. General Reading and Listening comprehension – rearrangement & organization of sentences</p>
          <h2>Unit 2</h2>
          <p>Different kinds of written documents: Definitions- descriptions- instructions-recommendations- user manuals – reports – proposals. Formal Correspondence: Writing formal Letters. Mechanics of Writing: impersonal passive & punctuation. Scientific Reading & Listening Comprehension</p>
          <h2>Evaluation Pattern</h2>
          <p>Weightage: Internal Assessment (70%) and External Assessment (30%)</p>
          <p>Periodical 1: 10% of Total Weightage Periodical 2: 10% of the Total Weightage Continuous Assessment: 10% of Total Weightage Lab: 40% of Total Weightage</p>
          <p>End Semester Examination: 30% of Total Weightage</p>
        </div>
        <div className="box">
          <h1 id="Resources">Resources</h1>
          <ul>
            <li>Hirsh, Herbert. L “Essential Communication Strategies for Scientists, Engineers and Technology Professionals”. II Edition. New York: IEEE press, 2002</li>
            <li>Anderson, Paul. V. “Technical Communication: A Reader-Centred Approach”. V Edition. Harcourt Brace College Publication, 2003</li>
            <li>Strunk, William Jr. and White. EB. “The Elements of Style” New York. Alliyan & Bacon, 1999.</li>
          </ul>
        </div>
        <div className="box">
          <h1 id="ObjectivesOutcomes">Objectives and Outcomes</h1>
          <h3>Objectives</h3>
          <ul>
            <li>To introduce the students to the fundamentals of mechanics of writing</li>
            <li>To initiate in them the art of critical thinking and analysis</li>
            <li>To facilitate them with the style of documentation and specific formal written communication</li>
          </ul>
          <h3>Course Outcomes</h3>
          <table className="table">
            <tbody>
              <tr>
                <th>CO1</th>
                <td>To gain knowledge about the mechanics of writing and the elements of formal correspondence</td>
              </tr>
              <tr>
                <th>CO2</th>
                <td>To understand and summarise technical documents</td>
              </tr>
              <tr>
                <th>CO3</th>
                <td>To apply the basic elements of language in formal correspondence</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <footer className="text-center">
        &copy; University | Privacy Policy | Ragging | Feedback
      </footer>
    </div>
  );
};

export default CourseDetail;
