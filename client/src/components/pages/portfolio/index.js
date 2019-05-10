import React, { Component } from "react";
import styles from './portfolio.module.css';


class Portfolio extends Component {

  render() {
    return (
      <div className="row mt-5 mb-5 text-center justify-content-md-center">
        <div className="col-md-8 border p-3">

         {/* Row */}
          <div id="workRow" className="row justify-content-md-center">
            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>
          </div>

          {/* Row */}
          <div id="workRow" className="row justify-content-md-center">
            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>
          </div>

          {/* Row */}
          <div id="workRow" className="row justify-content-md-center">
            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>

            <div id={styles.myWork} className={`col-md-3 ${styles.margin} mb-3`}>

            </div>
          </div>

        </div>
      </div>
    )
  }
};

export default Portfolio;