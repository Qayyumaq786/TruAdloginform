import React from 'react';
import styles from "./SignIn.module.css";

export default function SignIn({handleSwichPage}) {
  return (
    <div>
    <h1>Sign In</h1>
    <form>
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
                    <a href="#" onClick={handleSwichPage}>I do not have an account</a>
                    <button>Sign In</button>
                </div>
            </form>
</div>
  )
}
