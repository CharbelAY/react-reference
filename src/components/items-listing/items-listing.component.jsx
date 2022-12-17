import React from "react";

class ItemsListingComponent extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {

        const {items} = this.props;

        return (
            items && items.map(item => <h1 key={item.id}>{item.name}</h1>)
        );
    }
}

export default ItemsListingComponent;
