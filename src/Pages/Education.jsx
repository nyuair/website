import React, { useEffect } from 'react';

import { IoMdDownload } from "react-icons/io";
import { TfiNewWindow } from "react-icons/tfi";

const Education = () => {
  useEffect(() => {
    // apply the css element here
    const style = document.createElement('style');
    style.innerHTML = `
      nav {
        padding: 4px 0;
        border-bottom: 1px solid #dedee3;
        backdrop-filter: blur(8px);
        background-color: rgba(26, 27, 25, .29);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  });

  const courses = [
    {
      coursenum: 'ENGR-UH 3332',
      title: 'Applied Machine Learning',
      desc: 'Machine Learning is the basis for the most exciting careers in data analysis today. This course introduces students to the concepts of machine learning and deep learning. This course covers a broad introduction to machine learning techniques, which include both supervised learning and unsupervised learning techniques such as classification, support vector machines, decision trees, ensemble learning and random forests, dimensionality reduction, and neural networks and deep learning. In addition to learning about the most effective machine learning techniques, you will gain the practical implementation of applying these techniques to real engineering problems.',
      prereq: 'ENGR-UH 1000 (or CS-UH 1001) & ENGR-UH 3510 (or CS-UH 1050 & CS-UH 1052) & MATH-UH 1022 & ENGR-UH 2010Q (or MATH-UH 2011Q)',
      img: 'course1.png'
    },
    {
      coursenum: 'ENGR-UH 4143',
      title: 'Computer Vision and Pattern Recognition',
      desc: 'This advanced course in Computer Vision and Pattern Recognition is a focused offering within the expansive field of Artificial Intelligence (AI). The course aims to provide a comprehensive understanding of both foundational and advanced topics in computer vision. Foundational topics include image representation, image pre-processing, edge detection, and image segmentation. The course also covers a range of advanced topics such as image registration, object detection, object tracking, and 3D scene understanding with semantic interpretation. A significant emphasis is placed on the integration of machine learning methods, particularly neural networks and deep learning, to solve complex visual interpretation tasks. Students will engage in hands-on projects that apply these cutting-edge algorithms to real-world engineering challenges. By the end of the course, students will not only be proficient in the most effective machine learning techniques but will also have gained invaluable practical experience in applying these techniques to solve engineering problems.',
      prereq: 'ENGR-UH 3510 (or CS-UH 1050 and CS-UH 1052) and MATH-UH 1022 AND ENGR-UH 2010Q (or MATH-UH 2011Q)',
      img: 'course2.png'
    }
  ];

  return (
    <div className="pub-body-all">
      <div className="container joinusbg height1vh">
        <div className="row">
          <div className="pubHeader">
            <h4>RESOURCES</h4>
            <p className="headtextpub">Education</p>
            <p className="smallertexts">
              Browse through our collection of educational resources, <br /> and enhance your knowledge with our comprehensive materials and tools.
            </p>
          </div>
        </div>
      </div>

      {/* courses  */}
      <div className="container displayrelup">
        <div className="row">
          <h2>Courses at NYUAD</h2>

          {courses.map((course, index) => (
            <div
              key={index}
              className="pub-single-item coursesx">
              <div className="pub-holderflex">
                <div className="leftpubflex">
                  <img src={import.meta.env.BASE_URL+ '/images/' + course.img} alt="Course" />
                </div>
                <div className="rightpubflex">
                  <p className="pub-title">
                    {course.coursenum}: {course.title}
                  </p>
                  <p className="pub-authors">{course.desc}</p>
                  <p className="pub-venue"><i> <b>Prerequisites:</b> {course.prereq}</i></p>
                  <div>
                  <a href={course.download} className='downloadPdf'> <div> <span>Download Syllabus</span><IoMdDownload/> </div></a>
                  <a href={course.link} target="_blank" className='downloadPdf'> <span>Learn More</span> <TfiNewWindow /></a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* other resources  */}
    </div>
  );
};

export default Education;
