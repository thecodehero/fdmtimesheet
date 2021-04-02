import React from 'react'
import './Dashboard.css';
import {Link} from 'react-router-dom';

export default function dashboard() {
    return (
        <div className="dashboard">
            <header>
                <div>
                    <div class="container" id="removeMargin"> 
                        <div class="row">
                            <div class="col-md-11">
                                <h1>Personal Details</h1>
                            </div>
                            <div class="col-md-1">
                                <Link id="viewAccount">
                                    <p><i class="far fa-user-circle"></i></p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="dashContent">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            test test test tes
                        </div>
                        <div class="col-md-6">
                            testwetrwer
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}