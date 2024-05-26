"use client"
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
// import './CourseImage.css'; // Import the CSS file

const Hero = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className={styles.container}>
            <div>
            <h5>Over 3 million ready-to-work creatives!</h5>
            <h1>The world’s destination <br /> for design</h1>
            <p>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
            <button>Get Started</button>
            </div>
            {/* Display fetched data */}
            {data && data.map(course => (
                <div key={course.id} className={styles.display}>
                    <img src={course.media.image.small} alt="Course Image" />
                </div>
            ))}
        </div>
    );
};

export default Hero;