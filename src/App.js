import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import './App.css'
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.components';
import SignInSignOut from './pages/sign-in-sign-out/sign-in-sign-out.components';
import { auth, createUserProfileDocument, signInWithGoogle } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import CheckoutPage from './pages/checkout/checkout';
import { setInside } from './redux/cart/cart.action';
class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);
        this.props.setInside(1);
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser({

            id: snapShot.id,
            ...snapShot.data()
          })
        })

      }
      else {
        this.props.setCurrentUser(user);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currUser ? (<Redirect to='/' />) : (<SignInSignOut />)} />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </div>
    );
  }

}
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
  setInside: (item) => dispatch(setInside(item))
});

const mapStateToProps = ({ user }) => ({
  currUser: user.currUser
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
