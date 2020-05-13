import React, { Component } from "react";
import { SyncLoader } from "react-spinners";

export default class Loader extends Component {
    render() {
        return (
            <>
                <SyncLoader
                    size={10}
                    margin={2}
                    color={"rgb(148, 187, 233)"}
                    loading={this.props.loading}
                />
            </>
        )
    }

}