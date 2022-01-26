import React, { PureComponent } from "react";

import { StoreContext } from "./context";

export default function connect(mapStateToProps, mapDispatchToProps) {
    return function handleMapCpn(WrappedComponent) {
        class EnhanceComponent extends PureComponent {
            constructor(props, context) {
                super(props, context);

                this.state = {
                    storeState: mapStateToProps(this.context.getState())
                }
            }

            componentDidMount() {
                this.unsubscribe = this.context.subscribe(() => {
                    this.setState({
                        storeState: mapStateToProps(this.context.getState())
                    })
                })
            }

            componentWillUnmount() {
                this.unsubscribe();
            }

            render() {
                return <WrappedComponent {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispatchToProps(this.context.dispatch)} />
            }
        }
        EnhanceComponent.contextType = StoreContext;
        return EnhanceComponent;
    }
}