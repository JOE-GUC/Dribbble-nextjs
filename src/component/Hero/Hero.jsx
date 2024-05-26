"use client"
import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';
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

            <div className={styles.con}>
                <div className={styles.cords}>
                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.text}>bless</p>
                            <span className={styles.links}>
                                <p className={styles.joe + " " + styles.link}> Link</p>
                                <p className={styles.joecolor}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>

                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.joe}>joseph</p>
                            <span className={styles.links}>
                                <p className={styles.joe + " " + styles.link}> Link</p>
                                <p className={styles.joecolor}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.text}>edward</p>
                            <span className={styles.links}>
                                <p className={styles.text + " " + styles.link}> Link</p>
                                <p className={styles.git}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image
                            className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350}
                        //      layout="fill"
                        // objectFit="cover"
                        />
                        <span className={styles.info}>
                            <p className={styles.text}>martin</p>
                            <span className={styles.links}>
                                <p className={styles.text + " " + styles.link}> Link</p>
                                <p className={styles.git}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.text}>edward</p>
                            <span className={styles.links}>
                                <p className={styles.text + " " + styles.link}> Link</p>
                                <p className={styles.git}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.joe}>joseph</p>
                            <span className={styles.links}>
                                <p className={styles.joe + " " + styles.link}> Link</p>
                                <p className={styles.joecolor}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350} />
                        <span className={styles.info}>
                            <p className={styles.text}>bless</p>
                            <span className={styles.links}>
                                <p className={styles.joe + " " + styles.link}> Link</p>
                                <p className={styles.joecolor}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                    <Link href="" className={styles.card}>
                        <Image
                            className={styles.img}
                            src="/image.png"
                            width={280}
                            height={350}
                            //      layout="fill"
                            objectFit="cover"
                        />
                        <span className={styles.info}>
                            <p className={styles.text}>martin</p>
                            <span className={styles.links}>
                                <p className={styles.text + " " + styles.link}> Link</p>
                                <p className={styles.git}>
                                    Git Hub
                                </p>
                            </span>
                        </span>
                    </Link>
                </div>
            </div>

            <h2>Explore inspiring designs</h2>
            {/* Display fetched data */}
            {data && data.map(course => (
                <div key={course.id} className={styles.display}>
                    {course.media && course.media.image && course.media.image.small ? (
                        <img src={course.media.image.small} alt="Course Image" />
                    ) : (
                        <p>Error: Image URL not found</p>
                    )}
                </div>
            ))}
        </div >


    );
};


export default Hero;