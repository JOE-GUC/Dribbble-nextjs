"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import React from "react";
import style from "./page.module.css";

function page() {
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div className={style.container}>
        <div className={style.profileImage}>
          <Image
            src={session.user.image}
            alt="picture"
            className={style.Image}
            fill={true}
          />
        </div>
        Signed in as {session.user.email} <br />
        <button className={style.button} onClick={()=>signOut("google")}> Sign out</button>
      </div>
    );
  }
    return (
        <div className={style.container}>
            {" "}
            <div className={style.dribbbleCard}>
                Sign in to Dribbble<br />
                <button className={style.btn} onClick={() => signIn("google")}>
                    Sign in with Google
                    </button>
                    <p>or sign with email</p>

                    <form className={style.formCon}>
                      Username or Email <br />
                      <input className={style.fix} type="email" name="email" id="" />
                    </form>
                    <form className={style.formCon}>
                      Password <br />
                      <input className={style.fix} type="password" name="password" id="" />
                    </form>
                    <button className={style.button} onClick={() => signIn("google")}>
                    Sign in 
                    </button>
            </div>
        </div>
    );
};

export default page;