import { useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    updateProfile
} from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const auth = getAuth();

    // user registration
    const createUser = (name, email, password, history, location, Swal) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                const newUser = { email, displayName: name };
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    setUser(newUser);
                    saveUser(name, email);
                    const destination = location.state?.from || '/home';
                    history.push(destination);
                    setAuthError("");
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Sign Up',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }).catch((error) => {
                    setAuthError(error.message)
                })
            })
            .catch((error) => {
                if (error.message.includes('email-already-in-use')) {
                    setAuthError('The email already registered. Please login..')
                } else {
                    setAuthError(error.message)
                }
            })
            .finally(() =>setIsLoading(false));
    };

    // sign in user
    const logIn = (email, password, history, location, Swal) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                const destination = location.state?.from || '/home';
                history.push(destination);
                setAuthError("");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch((error) => {
                if (error.message.includes("user-not-found")) {
                    setAuthError("invalid email and Password");
                } else if (error.message.includes("wrong-password")) {
                    setAuthError('Your password is incorrect')
                }
                else {
                    setAuthError(error.message)
                }
            })
            .finally(() =>setIsLoading(false));
    };
    // current signin user
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])
    // check admin
    useEffect(() => {
        setIsLoading(true);
        const url = `https://fathomless-savannah-81203.herokuapp.com/checkadmin/${user?.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data.role === 'admin') {
                    setIsAdmin(true);
                }
                else {
                    setIsAdmin(false);
                }
            setIsLoading(false);
            })
    }, [user.email])
    // save user to database
    const saveUser = (name, email) => {
        const newUser = { name, email };
        fetch('https://fathomless-savannah-81203.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
    }

    // logout user
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() =>setIsLoading(false));
    };

    return {
        user,
        authError,
        isLoading,
        isAdmin,
        createUser,
        logIn,
        logOut,
    };
};

export default useFirebase;