import React, { useContext, useEffect } from 'react'
import noteContext from './context/notes/noteContext'
export const About = (props) => {
  useEffect(() => {
    props.setProgress(10)
    props.setProgress(100)

  }, [])

  return (
    <div>
      <section class="container mt-5">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="display-4">About Us</h2>
                <p class="lead">
                    Welcome to Cloud Notebook, where the power of organization meets the convenience of digital note-taking. Our platform is designed to streamline your note-taking experience, making it accessible from any device with an internet connection. Say goodbye to the hassles of traditional notebooks and embrace the freedom of organizing your thoughts effortlessly. We prioritize security, collaboration, and efficiency, ensuring that your ideas are safe, and your creativity knows no bounds. Experience the future of note-taking with Cloud Notebook.
                </p>
            </div>
        </div>
    </section>

    </div>
  )
}
