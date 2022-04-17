import React from "react";
import Header from "../header";
import Footer from "../footer";

import './index.less';

function Layout(WrappedComponent: React.FunctionComponent) {

    return function (props: any) {
        // 将 input 组件包装在容器中，而不对其进行修改。Good!
        return <div className="bc-layout-container">
            <div className="bc-layount-header">
                <Header />
            </div>
            <div className="bc-layout-content">
                <WrappedComponent {...props} />
            </div>
            <div className="bc-layount-footer">
                <Footer />
            </div>
        </div>
    }

}

export default Layout;