import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components';
import CartBOX from '../cart-box/cart-box.components';
import {connect} from 'react-redux';
import Ankit from '../Ankitsinha/ankitsinha.component'
import { setInside } from '../../redux/cart/cart.action';
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    onClick=(event)=>{
       auth.signOut()
       this.props.setInside(0)
    }
    render(){
        return (
            <div className='header'>
                <Link to="/" className='logo-container'>
                    <Logo className='logo' />
                </Link>
                <div className='options'>
                   
                    <Ankit/>
                    
                    <Link to='/shop' className='option'>
                        SHOP
                    </Link>
                    <Link to='/contact' className='option'>
                        CONTACT
    
                    </Link>
                    {
                        this.props.currUser ? (<div className='option ' onClick={this.onClick}> SIGN OUT</div>
    
                        )
                            :
                            (
                                <Link className='option' to='/signin'>SIGN IN</Link>
                            )
    
                    }
                    <CartIcon/>

                </div>
                {
this.props.hidden?null:<CartBOX/>
                }
                
              
               
            </div>
        )
    }
  

}
const mapStateToProps=state=>({
    currUser:state.user.currUser,
    hidden:state.cart.hidden,
    projectby:state.projectby
})

const mapDispatchToProps=dispatch=>({
 setInside: (item)=>dispatch(setInside(item))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);