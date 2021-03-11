import React from 'react';
import './ankitsinha.styles.scss';
import { ShowprojectBy } from '../../redux/project/project.action';
import { connect } from 'react-redux';
import logo from '../../assets/ankits.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import QuestionAnswerTwoToneIcon from '@material-ui/icons/QuestionAnswerTwoTone';
const Ankit = ({ ShowprojectBy, show }) => {
    return (

        <div className='nav'>
            <div className='button' onClick={ShowprojectBy}>
                <QuestionAnswerTwoToneIcon className='me' />


            </div>
            <div className={`${show ? 'nav-links-open' : ''} nav-links`}>
                <div className='datatotal'>
                    <div className='pos'>
                        <img className='image' src={logo} />
                        <div className='datat'>
                            <div className='data1'>ANKIT SINHA</div>
                            <div className='data2'>JADAVPUR UNIVERSITY</div>
                            <div className='icons'>
                                <a className='github' href='https://github.com/unbeat01'><GitHubIcon className='icon' />
                                </a>
                                <a className='github' href='https://www.linkedin.com/in/ankit-sinha-5318721ba/'><LinkedInIcon className='icon' />
                                </a>
                            </div>


                        </div>
                    </div>


                </div>

            </div >
        </div >
    )
}
const mapDispatchToProps = dispatch => ({
    ShowprojectBy: () => dispatch(ShowprojectBy())
})
const mapStateToProps = (state) => {
    return { show: state.project.show }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ankit);