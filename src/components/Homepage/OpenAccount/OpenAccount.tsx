import React from 'react'
import classes from "./OpenAccount.module.scss"
import AppleStoreImage from "@/assets/images/AppleStoreImage.png"
import GooglePlayImage from "@/assets/images/GooglePlayImage.png"
import Image from 'next/image'

const OpenAccount = () => {
  return (


    <div className={classes['open-account-container']} style={{ color: "white" }}>

      <div className={classes['left-container']}>
        <p>Open Account Now.</p>
        <p> <span style={{ color: "#15d46b" }} >Instant</span>  No <span style={{ color: "#15d46b" }} >Hassle</span>. </p>
      </div>
      <div className={classes['right-container']}>
        <div className={classes['heading']}>

          <p> Sign Up and get started in minutes . Easy</p>
          <p >instant and formless verification.</p>
        </div>
        <div className={classes['image-conatiner']}  >
          <Image src={AppleStoreImage} alt='' width={150} height={150} />
          <Image src={GooglePlayImage} alt='' width={150} height={45} style={{ marginLeft: "10px" }} />
        </div>
      </div>

    </div>

  )
}

export default OpenAccount