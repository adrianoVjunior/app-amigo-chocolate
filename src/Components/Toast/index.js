import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Toast extends Component {
    componentDidMount = async () => {
        switch (this.props.type) {
            case "warn":
                await toast.warn(this.props.message)
                break;
            case "success":
                await toast.success(this.props.message)
                break;
            case "error":
                await toast.error(this.props.message)
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <ToastContainer />
        )
    }

}