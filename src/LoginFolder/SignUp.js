import React from "react";
import styles from "./SignUp.module.css";

function SignUp({handleSwichPage}) {
  return (

    <div>
        <h1>Sign Up</h1>
        <form>
                    <div className={styles.input_container}>
                        <label for="name">Name</label>
                        <input placeholder="Enter your Email" name="name" />
                    </div>
                    <div className={styles.input_container}>
                        <label for="email">Email</label>
                        <input placeholder="Enter your Email" name="password" />
                    </div>
                    <div className={styles.input_container}>
                        <label for="password">Password</label>
                        <input placeholder="Enter your Email" name="password" />
                    </div>
                    <div class={styles.checkbox}>
                        <input type="checkbox" name="" id="terms"/>
                        <a href="#">I agree to terms and conditions</a>
                    </div>

                    <div class={styles.button}>
                        <a href="#" onClick={handleSwichPage}>I'm already a member</a>
                        <button>Sign In</button>
                    </div>
                </form>
    </div>
    
  );
}

export default SignUp;
