import React, {Component} from "react";
import Logo from "./Logo";
import Form from "./Form";
import Wallpaper from "./Wallpaper";
import ButtonSubmit from "./ButtonSubmit";
import SignupSection from "./SignupSection";


export default class LoginScreen extends Component {

    constructor() {
        super();
        this.state = {
            dialogVisible: false
        }
    }

    render() {
        return (
            <Wallpaper>
                <Logo />
                <Form />
                <SignupSection />
                <ButtonSubmit />
            </Wallpaper>
        );
    }
}
